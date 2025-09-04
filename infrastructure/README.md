# Infrastructure Pulumi - 56k Slides Demo

## Prérequis
- [Pulumi](https://www.pulumi.com/docs/get-started/install/)
- Node.js >= 16
- AWS CLI configuré ou OIDC GitHub Actions

## Installation
```bash
cd infrastructure
npm install
```

## Déploiement
```bash
pulumi stack init dev    # une fois
pulumi config set aws:region eu-central-1
pulumi config set bucketName 56k-slides-demo-prod
pulumi up
```

## Outputs
- `s3Bucket` → bucket S3 privé
- `distributionId` → ID CloudFront
- `distributionDomain` → domaine CloudFront
