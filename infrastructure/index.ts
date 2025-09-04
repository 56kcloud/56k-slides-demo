import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const bucketName = config.get("bucketName") || "56k-slides-demo-prod";

// S3 bucket privé
const siteBucket = new aws.s3.Bucket(bucketName, {
    bucket: bucketName,
});

new aws.s3.BucketPublicAccessBlock("publicAccessBlock", {
    bucket: siteBucket.id,
    blockPublicAcls: true,
    blockPublicPolicy: true,
    ignorePublicAcls: true,
    restrictPublicBuckets: true,
});

// CloudFront OAC
const oac = new aws.cloudfront.OriginAccessControl("oac", {
    description: "OAC for Slidev demo",
    originAccessControlOriginType: "s3",
    signingBehavior: "always",
    signingProtocol: "sigv4",
});

// Distribution CloudFront
const cdn = new aws.cloudfront.Distribution("cdn", {
    enabled: true,
    origins: [{
        originId: siteBucket.arn,
        domainName: siteBucket.bucketRegionalDomainName,
        originAccessControlId: oac.id,
    }],
    defaultRootObject: "index.html",
    defaultCacheBehavior: {
        targetOriginId: siteBucket.arn,
        viewerProtocolPolicy: "redirect-to-https",
        allowedMethods: ["GET", "HEAD"],
        cachedMethods: ["GET", "HEAD"],
        forwardedValues: {
            queryString: false,
            cookies: { forward: "none" },
        },
    },
    priceClass: "PriceClass_100",
    restrictions: {
        geoRestriction: { restrictionType: "none" },
    },
    viewerCertificate: { cloudfrontDefaultCertificate: true },
});

// Bucket policy pour CloudFront
new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: siteBucket.bucket,
    policy: pulumi.all([siteBucket.bucket, cdn.arn]).apply(([bucketName, distArn]) =>
        JSON.stringify({
            Version: "2012-10-17",
            Statement: [
                {
                    Effect: "Allow",
                    Principal: { Service: "cloudfront.amazonaws.com" },
                    Action: "s3:GetObject",
                    Resource: `arn:aws:s3:::${bucketName}/*`,
                    Condition: { StringEquals: { "AWS:SourceArn": distArn } },
                },
            ],
        })
    ),
});

export const s3Bucket = siteBucket.bucket;
export const distributionId = cdn.id;
export const distributionDomain = cdn.domainName;
