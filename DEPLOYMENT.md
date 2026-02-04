# Deployment Guide: The Great Compression

## Live URLs

| URL | Status |
|-----|--------|
| https://thegreatcompression.org | Production (apex) |
| https://www.thegreatcompression.org | Production (www) |
| https://thegreatcompression-org-production.up.railway.app | Railway default |

## Stack

- **Framework:** React + Vite + TypeScript
- **Hosting:** Railway
- **DNS:** AWS Route 53
- **Domain:** thegreatcompression.org (registered via Route 53)

## Deploy

### Auto-Deploy (Recommended)

Push to main branch triggers automatic deployment:

```bash
git push origin main
```

Monitor deployment:
```bash
railway service status
# QUEUED → BUILDING → DEPLOYING → SUCCESS (~50 seconds)
```

### Manual Deploy

```bash
railway up --detach
```

## GitHub Integration

- **Repo:** rhea-impact/thegreatcompression-org
- **Branch:** main
- **Auto-deploy:** Enabled
- **Railway GitHub App:** Installed on rhea-impact org

## Initial Setup (Already Done)

### 1. Railway Project Link

```bash
railway link --project 29c2ab2e-7bc6-4a4a-8401-c705d5ce0843
railway add -s thegreatcompression-org
railway service link thegreatcompression-org
```

### 2. Custom Domains

```bash
# Add domains to Railway
railway domain thegreatcompression.org
railway domain www.thegreatcompression.org
```

Railway returns unique CNAME targets for each:
- `thegreatcompression.org` → `njg3lydk.up.railway.app`
- `www.thegreatcompression.org` → `e3d68jcl.up.railway.app`

### 3. Route 53 DNS Records

**Hosted Zone ID:** `Z00053043RO8BMG3TM5EJ`

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ (apex) | 66.33.22.247 | 300 |
| CNAME | www | e3d68jcl.up.railway.app | 300 |

**Why A record for apex?** Route 53 doesn't support CNAME at the root domain. We resolve Railway's CNAME target to an IP and use that.

```bash
# Get Railway IP
dig njg3lydk.up.railway.app A +short
# 66.33.22.247
```

### 4. SSL Certificates

Railway automatically provisions SSL via Let's Encrypt after DNS is configured. Takes 2-10 minutes.

## Verify Deployment

```bash
# Check DNS
dig thegreatcompression.org A +short
dig www.thegreatcompression.org CNAME +short

# Check SSL cert
echo | openssl s_client -connect thegreatcompression.org:443 -servername thegreatcompression.org 2>/dev/null | openssl x509 -noout -subject

# Check HTTP response
curl -sI https://thegreatcompression.org | head -5
```

## Troubleshooting

### SSL Certificate Shows `*.up.railway.app`

The custom domain cert is still provisioning. Wait 5-10 minutes.

### 403 Forbidden

Using `vite preview` instead of `serve` for production. Check `package.json`:

```json
{
  "scripts": {
    "start": "serve dist -l ${PORT:-4173} -s"
  }
}
```

### Railway IP Changed

If apex domain stops working, Railway's IP may have changed:

```bash
# Get new IP
dig njg3lydk.up.railway.app A +short

# Update Route 53 A record
aws route53 change-resource-record-sets --hosted-zone-id Z00053043RO8BMG3TM5EJ --change-batch file:///tmp/dns.json
```

## Key Files

- `package.json` — Build and start scripts
- `vite.config.ts` — Vite configuration
- `DEPLOYMENT.md` — This file

## Related Docs

- [Railway Deploy Guide](https://github.com/rhea-impact/infra/blob/main/guides/railway-deploy.md)
- [Platforms README](https://github.com/rhea-impact/infra/blob/main/platforms/README.md)
