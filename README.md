# PostRoc Landing Page

Marketing landing page for PostRoc - Composable API Data & Request Orchestration.

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS 4
- shadcn/ui
- next-themes

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Dark Mode

This project supports dark mode via `next-themes`. The theme can be toggled using the moon/sun icon in the navigation bar. The application will also respect your system's theme preference.

## Build

```bash
npm run build
```

Outputs static files to `out/` directory (ready for static hosting).

## GitHub Pages & Custom Domain

This project is configured to be deployed to GitHub Pages and served from the custom subdomain `postroc.scalestash.com`.

### Repository Setup

- **`next.config.ts`**: The `output: "export"` option is set, which generates a static site in the `out/` directory.
- **`public/CNAME`**: This file is set to `postroc.scalestash.com` to tell GitHub Pages which domain to use.

### GitHub Pages Configuration

1.  Go to your repository settings on GitHub.
2.  Navigate to the **Pages** section.
3.  For the "Source", select **Deploy from a branch**.
4.  For the "Branch", select your main branch (e.g., `main` or `master`) and the `/root` directory.
5.  In the "Custom domain" section, enter `postroc.scalestash.com` and click **Save**.
6.  Wait for the DNS check to complete.

### DNS Configuration

In your DNS provider's settings (e.g., Namecheap, Cloudflare, GoDaddy), add the following `CNAME` record:

| Type    | Name     | Value                  | TTL  |
| :------ | :------- | :--------------------- | :--- |
| `CNAME` | `postroc`  | `<your-github-username>.github.io.` | Auto |

**Note:** Replace `<your-github-username>` with your actual GitHub username.

## Deploy

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting

## Links

- **App**: https://app.postroc.scalestash.com
- **Landing**: https://postroc.scalestash.com
- **Contact**: contact@scalestash.com
