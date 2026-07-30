# Deploy Dog Bar Character Bible to Vercel

## Quick deploy (GitHub → Vercel)

1. Create a new GitHub repo (private is fine).
2. From this project folder:
   ```bash
   git init
   git add .
   git commit -m "Dog Bar character bible — Rose, Betty, Luna"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/dog-bar-bible.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new) → **Import** that repo.
4. Leave defaults (build: `npm run build`).
5. Deploy. You get a URL like `https://dog-bar-bible.vercel.app`.

### Routes after deploy
| Path | Page |
|------|------|
| `/` | Rose |
| `/betty` | Thick Betty |
| `/luna` | Luna |

## CLI deploy (if you have a Vercel token)

```bash
# Create token: https://vercel.com/account/tokens
export VERCEL_TOKEN=your_token_here
npx vercel --token "$VERCEL_TOKEN" --yes --prod
```

## Notes
- No database required for the character bible (PGLite fallback skips migrate without `DATABASE_URL`).
- Portrait images live in `/public` and ship with the deploy.
- Keep the repo private if portraits are for personal use only.
