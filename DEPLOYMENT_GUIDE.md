# PRECODES - Vercel Deployment Guide

## Pre-Deployment Checklist ✅

### 1. Environment Variables Setup
Before deploying to Vercel, make sure to set up these environment variables in your Vercel dashboard:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Supabase Storage Setup
Run the migration file in your Supabase SQL editor:
```sql
-- Execute: supabase/migrations/20250119000000_create_project_images_storage_bucket.sql
```

### 3. Domain Configuration
Update your domain settings in Vercel to point to `precodes.com` (or your preferred domain).

## Deployment Steps

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel --prod
```

### Option 2: Deploy via GitHub Integration
1. Connect your GitHub repository to Vercel
2. Set up automatic deployments
3. Configure environment variables in Vercel dashboard
4. Deploy!

## Post-Deployment Configuration

### 1. Custom Domain (Optional)
- Add your custom domain in Vercel dashboard
- Update DNS records as instructed by Vercel

### 2. Environment Variables
Ensure these are set in Vercel:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 3. Storage Bucket
Make sure the `project-images` storage bucket is created in Supabase with proper RLS policies.

## Features Ready for Production

✅ **Image Upload**: Projects can upload images to Supabase storage  
✅ **Admin Panel**: Secure admin access at `/admin`  
✅ **Project Management**: Full CRUD operations for projects  
✅ **Responsive Design**: Mobile-optimized interface  
✅ **SEO Optimized**: Meta tags and structured data  
✅ **Performance**: Optimized caching and assets  

## Troubleshooting

### Common Issues:

1. **Image Upload Not Working**
   - Check if storage bucket exists in Supabase
   - Verify RLS policies are set correctly
   - Check environment variables

2. **Admin Access Issues**
   - Ensure user has admin role in Supabase
   - Check authentication flow

3. **Build Errors**
   - Verify all dependencies are installed
   - Check for TypeScript errors
   - Ensure environment variables are set

## Support

For deployment issues, check:
- Vercel deployment logs
- Supabase dashboard for database/storage issues
- Browser console for client-side errors

---

**Ready for deployment! 🚀**
