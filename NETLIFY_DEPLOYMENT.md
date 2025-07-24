# Netlify Deployment Configuration

This branch is configured for optimal deployment on Netlify.

## Configuration Files Added

### 1. `netlify.toml`
- Build settings and commands
- Redirect rules for client-side routing
- Security headers
- Static asset caching
- Form handling configuration

### 2. `next.config.ts` (Updated)
- Netlify-optimized Next.js configuration
- Image optimization settings
- Production optimizations
- Client-side routing support

### 3. `.env.example`
- Template for environment variables
- Copy to `.env.local` and fill in your values

## Deployment Steps

### 1. Connect to Netlify
1. Push this branch to your GitHub repository
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub account and select this repository
5. Choose the `netlify` branch

### 2. Build Settings
Netlify should automatically detect these settings from `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Branch to deploy**: `netlify`

### 3. Environment Variables (Optional)
In Netlify dashboard:
1. Go to Site settings > Environment variables
2. Add any environment variables your app needs
3. Use the `.env.example` as reference

### 4. Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Add your custom domain
3. Follow Netlify's DNS configuration instructions

## Forms Configuration

Your contact form is already configured with `data-netlify="true"` attribute. Netlify will automatically handle form submissions.

To access form submissions:
1. Go to your Netlify dashboard
2. Navigate to Forms section
3. View submissions and set up notifications

## Performance Optimizations

The configuration includes:
- ✅ Static asset caching (1 year)
- ✅ Image optimization
- ✅ Security headers
- ✅ Compression enabled
- ✅ Client-side routing support

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Pages Not Loading
- Check redirect rules in `netlify.toml`
- Verify client-side routing configuration
- Check browser console for errors

### Forms Not Working
- Ensure forms have `data-netlify="true"` attribute
- Check Netlify Forms section in dashboard
- Verify form field names

## Local Development

To test locally:
```bash
npm install
npm run dev
```

## Build Testing

To test the build locally:
```bash
npm run build
npm start
```

## Support

For Netlify-specific issues, check:
- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
