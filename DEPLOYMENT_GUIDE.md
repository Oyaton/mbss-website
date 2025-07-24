# 🚀 MBSS Website Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ **Files to Include:**
```
📁 Your Website Folder/
├── 📄 index.html (main homepage)
├── 📄 about.html
├── 📄 academics.html
├── 📄 admissions.html
├── 📄 student-life.html
├── 📄 alumni.html
├── 📄 gallery.html
├── 📄 contact.html
├── 📄 news.html
├── 📄 teachers.html
├── 📁 css/
│   └── 📄 style.css
├── 📁 js/
│   └── 📄 script.js
├── 📁 gallery/ (all 130+ images)
├── 📄 netlify.toml (configuration)
├── 📄 _redirects (URL redirects)
└── 📄 README.md (documentation)
```

## 🌐 **Method 1: Netlify Drag & Drop (Easiest)**

### **Step 1: Prepare Files**
1. Create a new folder called `mbss-website`
2. Copy ALL website files into this folder
3. Ensure `index.html` is in the root (not in a subfolder)

### **Step 2: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up" (use GitHub, GitLab, or email)
3. Once logged in, look for the deployment area
4. **Drag your entire `mbss-website` folder** into the deployment zone
5. Wait for deployment (usually 1-2 minutes)
6. You'll get a URL like: `https://wonderful-site-123456.netlify.app`

### **Step 3: Customize (Optional)**
1. Click "Site settings"
2. Go to "Change site name"
3. Choose a custom name like: `mbss-adjumani` or `monsignor-bala-school`
4. Your URL becomes: `https://mbss-adjumani.netlify.app`

## 🌐 **Method 2: GitHub Pages**

### **Step 1: Create GitHub Repository**
1. Go to [github.com](https://github.com) and sign up
2. Click "New repository"
3. Name it: `mbss-website`
4. Make it **Public**
5. Check "Add a README file"
6. Click "Create repository"

### **Step 2: Upload Files**
1. Click "uploading an existing file"
2. Drag all your website files
3. Write commit message: "Initial website upload"
4. Click "Commit changes"

### **Step 3: Enable GitHub Pages**
1. Go to repository "Settings"
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Click "Save"
7. Your site will be at: `https://yourusername.github.io/mbss-website`

## 🌐 **Method 3: Vercel**

### **Step 1: Deploy**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository OR drag & drop files
5. Click "Deploy"
6. Get URL like: `https://mbss-website.vercel.app`

## 🔧 **Post-Deployment Tasks**

### **1. Test Your Website**
- [ ] Check all pages load correctly
- [ ] Test navigation links
- [ ] Verify images display properly
- [ ] Test contact form (mailto functionality)
- [ ] Check mobile responsiveness

### **2. Custom Domain (Optional)**
If you have a domain like `mbss.edu.ug`:
1. In Netlify: Site settings → Domain management → Add custom domain
2. Update your domain's DNS settings
3. Netlify provides free SSL certificates

### **3. Performance Optimization**
- [ ] Images are compressed
- [ ] CSS/JS files are minified (Netlify does this automatically)
- [ ] CDN enabled (automatic with Netlify)

## 📞 **Need Help?**

### **Common Issues:**
1. **Images not loading:** Check file paths are correct (case-sensitive)
2. **404 errors:** Ensure all HTML files are in root directory
3. **Slow loading:** Compress large images

### **Support:**
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)
- Vercel: [vercel.com/docs](https://vercel.com/docs)

## 🎉 **You're Live!**

Once deployed, your MBSS website will be accessible worldwide with:
- ✅ HTTPS security
- ✅ Fast loading times
- ✅ Mobile optimization
- ✅ Professional appearance

**Share your website URL with students, parents, and the community!** 🌟
