# Deploy to Netlify

## Quick deploy

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In [Netlify](https://app.netlify.com): **Add new site → Import an existing project** and connect the repo.
3. Netlify will use the repo’s `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. **Set environment variable** (required for API):
   - **Site settings → Environment variables → Add variable**
   - **Key:** `VITE_API_URL`
   - **Value:** your backend URL (e.g. `https://portfolio-server-sswz.onrender.com`)
5. Trigger a **Deploy** (or push to the connected branch).

## Local .env

- Copy `.env.example` to `.env` and set `VITE_API_URL` for local development.
- Do not commit `.env`; it is in `.gitignore`.

## After deploy

- Direct URLs (e.g. `/projects`, `/blogs`) work because of the SPA redirect in `netlify.toml` and `public/_redirects`.
- If you change the backend URL, update `VITE_API_URL` in Netlify and redeploy.
