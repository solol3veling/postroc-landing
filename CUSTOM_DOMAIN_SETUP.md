# Custom Domain & Subdomain Setup Guide

This guide explains how to set up a custom domain or subdomain for your Prefiller landing page.

## 📋 Table of Contents

- [Option 1: Use a Custom Domain (e.g., `prefiller.com`)](#option-1-custom-domain)
- [Option 2: Use a Subdomain (e.g., `landing.prefiller.com`)](#option-2-subdomain)
- [Option 3: GitHub Pages with Custom Domain](#option-3-github-pages-custom-domain)
- [URLs for Chrome Web Store](#urls-for-chrome-web-store)

---

## Option 1: Custom Domain

### Example: `prefiller.com`

#### Step 1: Configure GitHub Pages

1. Go to your repository: `https://github.com/elitekaycy/seamless-form-filler`
2. Navigate to **Settings** → **Pages**
3. Under "Custom domain", enter: `prefiller.com`
4. Click **Save**
5. Wait for DNS check to complete

#### Step 2: Update DNS Records

Go to your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.) and add these DNS records:

```
Type    Name    Value                       TTL
----    ----    -----                       ---
A       @       185.199.108.153             Auto
A       @       185.199.109.153             Auto
A       @       185.199.110.153             Auto
A       @       185.199.111.153             Auto
CNAME   www     elitekaycy.github.io.       Auto
```

#### Step 3: Update Vite Config

Edit `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/', // Change from '/seamless-form-filler/' to '/'
  // ... rest of config
}));
```

#### Step 4: Update React Router

Edit `src/App.tsx`:

```typescript
<BrowserRouter basename="/"> {/* Remove basename */}
  <Routes>
    {/* ... routes */}
  </Routes>
</BrowserRouter>
```

#### Step 5: Add CNAME File

Create `public/CNAME`:

```
prefiller.com
```

#### Step 6: Rebuild and Deploy

```bash
npm run build
git add .
git commit -m "Configure custom domain"
git push origin main
```

**Result:**
- Main site: `https://prefiller.com`
- Privacy Policy: `https://prefiller.com/privacy-policy`
- Terms: `https://prefiller.com/terms-of-service`

---

## Option 2: Subdomain

### Example: `landing.prefiller.com` or `www.prefiller.com`

#### Step 1: Configure DNS

Add a CNAME record to your domain's DNS:

```
Type    Name        Value                       TTL
----    ----        -----                       ---
CNAME   landing     elitekaycy.github.io.       Auto
```

Or for www subdomain:

```
Type    Name        Value                       TTL
----    ----        -----                       ---
CNAME   www         elitekaycy.github.io.       Auto
```

#### Step 2: Update GitHub Pages

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter: `landing.prefiller.com`
3. Click **Save**
4. Enable "Enforce HTTPS" (after DNS propagates)

#### Step 3: Update Vite Config

Edit `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: '/', // Change to root path
  // ... rest of config
}));
```

#### Step 4: Update React Router

Edit `src/App.tsx`:

```typescript
<BrowserRouter basename="/"> {/* Remove /seamless-form-filler */}
  <Routes>
    {/* ... routes */}
  </Routes>
</BrowserRouter>
```

#### Step 5: Add CNAME File

Create `public/CNAME`:

```
landing.prefiller.com
```

#### Step 6: Rebuild and Deploy

```bash
npm run build
git add .
git commit -m "Configure subdomain: landing.prefiller.com"
git push origin main
```

**Result:**
- Main site: `https://landing.prefiller.com`
- Privacy Policy: `https://landing.prefiller.com/privacy-policy`
- Terms: `https://landing.prefiller.com/terms-of-service`

---

## Option 3: GitHub Pages with Custom Domain (Recommended)

### Advantages

✅ **Free HTTPS** - GitHub provides SSL certificate automatically
✅ **Easy Setup** - No server configuration needed
✅ **Fast CDN** - GitHub Pages uses global CDN
✅ **Auto-Deploy** - Push to main = instant deployment

### Full Setup Example: `prefiller.com`

#### 1. Domain Registrar (Namecheap, GoDaddy, etc.)

**DNS Records:**
```
# Apex domain (prefiller.com)
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153

# www subdomain
CNAME   www     elitekaycy.github.io.
```

#### 2. GitHub Repository

**File: `public/CNAME`**
```
prefiller.com
```

**File: `vite.config.ts`**
```typescript
export default defineConfig(({ mode }) => ({
  base: '/',
  // ... rest unchanged
}));
```

**File: `src/App.tsx`**
```typescript
<BrowserRouter>  {/* No basename needed */}
```

#### 3. Rebuild and Commit

```bash
# Update base path and router
npm run build

# Commit changes
git add vite.config.ts src/App.tsx public/CNAME
git commit -m "Add custom domain: prefiller.com"
git push origin main
```

#### 4. GitHub Pages Settings

1. Go to repository **Settings** → **Pages**
2. Set custom domain: `prefiller.com`
3. Wait for DNS check ✅
4. Enable "Enforce HTTPS"

#### 5. Verify DNS Propagation

```bash
# Check if DNS has propagated
nslookup prefiller.com

# Should return GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

DNS propagation can take **24-48 hours**. Check status at:
- https://www.whatsmydns.net

---

## URLs for Chrome Web Store

After setting up your custom domain, use these URLs in Chrome Web Store submission:

### With Custom Domain (`prefiller.com`)

```
Privacy Policy URL:
https://prefiller.com/privacy-policy

Homepage URL:
https://prefiller.com

Support URL:
https://github.com/elitekaycy/seamless-form-filler/issues
```

### With Subdomain (`landing.prefiller.com`)

```
Privacy Policy URL:
https://landing.prefiller.com/privacy-policy

Homepage URL:
https://landing.prefiller.com

Support URL:
https://github.com/elitekaycy/seamless-form-filler/issues
```

### Without Custom Domain (Current)

```
Privacy Policy URL:
https://elitekaycy.github.io/seamless-form-filler/privacy-policy

Homepage URL:
https://elitekaycy.github.io/seamless-form-filler/

Support URL:
https://github.com/elitekaycy/seamless-form-filler/issues
```

---

## Troubleshooting

### DNS Not Propagating

**Problem:** Domain not pointing to GitHub Pages after 24 hours

**Solution:**
```bash
# Flush DNS cache (varies by OS)
# macOS
sudo dscacheutil -flushcache

# Windows
ipconfig /flushdns

# Linux
sudo systemd-resolve --flush-caches
```

### Certificate Errors

**Problem:** "Not Secure" warning in browser

**Solution:**
1. Wait for DNS to fully propagate (24-48 hours)
2. Go to **Settings** → **Pages**
3. Uncheck and re-check "Enforce HTTPS"
4. Wait 10-15 minutes for certificate provisioning

### 404 Errors on Refresh

**Problem:** Refreshing `/privacy-policy` returns 404

**Solution:**
- Ensure `public/404.html` exists ✅ (already done)
- Ensure index.html has SPA redirect script ✅ (already done)

### Base Path Issues

**Problem:** Assets not loading (404 for CSS/JS)

**Solution:**
- For custom domain: `base: '/'` in vite.config.ts
- For GitHub Pages default: `base: '/seamless-form-filler/'`
- Rebuild after changes: `npm run build`

---

## Recommended Approach

For **Chrome Web Store submission**, I recommend:

### Option A: Use Subdomain (landing.prefiller.com)

**Pros:**
- Professional look
- Shorter URLs
- Can use main domain for something else

**Cons:**
- Requires owning a domain

### Option B: Keep GitHub Pages URL

**Pros:**
- Free, no domain needed
- Already working
- Acceptable for Chrome Web Store

**Cons:**
- Longer URLs
- Less professional

---

## Quick Reference

| Setup Type | Main URL | Privacy URL | Changes Needed |
|------------|----------|-------------|----------------|
| **Current** | `elitekaycy.github.io/seamless-form-filler/` | `...seamless-form-filler/privacy-policy` | None ✅ |
| **Custom Domain** | `prefiller.com` | `prefiller.com/privacy-policy` | Vite config, Router, CNAME |
| **Subdomain** | `landing.prefiller.com` | `landing.prefiller.com/privacy-policy` | Vite config, Router, CNAME, DNS |

---

## Next Steps

1. **Decide on domain strategy** - Custom domain, subdomain, or keep current?
2. **If using custom domain:**
   - Purchase domain (Namecheap, Google Domains, etc.)
   - Follow "Option 3" above
   - Update Chrome Web Store URLs
3. **If keeping current:**
   - No changes needed!
   - Use current URLs for Chrome Web Store

---

## Contact

If you need help setting this up:
- **GitHub Issues:** https://github.com/elitekaycy/seamless-form-filler/issues
- **Email:** dicksonanyaele1234@gmail.com

---

**Pro Tip:** You can submit to Chrome Web Store with the current GitHub Pages URLs, then update to a custom domain later. Chrome Web Store allows URL changes in your listing settings!
