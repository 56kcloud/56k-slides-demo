# Infrastructure Pulumi - 56k Slides Demo

## Prérequis
- [Pulumi](https://www.pulumi.com/docs/get-started/install/)
- Node.js >= 22
- AWS CLI configuré ou OIDC GitHub Actions

## Installation
```bash
cd infrastructure
npm install
```

## Déploiement
```bash
pulumi stack init <stage>    # une fois
pulumi config set aws:region <region>
pulumi config set bucketName 56k-slides-demo-<stage>
pulumi up
```

## Outputs
- `s3Bucket` → bucket S3 privé
- `distributionId` → ID CloudFront
- `distributionDomain` → domaine CloudFront
