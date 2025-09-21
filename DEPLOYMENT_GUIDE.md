# Portfolio Deployment Guide

## File Download Issue Fix

### Problem
After hosting, resume and certificate downloads show "files not available" error.

### Solution

1. **Add your files to the public/documents folder:**
   ```
   public/
   └── documents/
       ├── Abhay_M_Latest_8421822204_resume.pdf
       ├── CADD Java.pdf
       ├── Satguru Institude web.pdf
       ├── soft tech java.pdf
       ├── code infosystem web.pdf
       ├── bit aptitude.pdf
       ├── Inspire Engineering (1).pdf
       └── TheKiranAcademy_Abhay_Mallick (1).pdf
   ```

2. **File naming is critical** - make sure the file names match exactly what's in the code.

3. **For hosting platforms:**

   **Vercel/Netlify:**
   - Files in `public/` folder are automatically served
   - Make sure to include the documents folder in your deployment

   **GitHub Pages:**
   - Ensure the `public/documents/` folder is committed to your repository
   - Check that files are actually uploaded

   **Other platforms:**
   - Verify static file serving is enabled
   - Check file permissions and paths

### Updated Features

✅ **Error Handling**: Now shows user-friendly messages if files are missing
✅ **File Validation**: Checks if file exists before attempting download
✅ **Better UX**: Proper error messages instead of broken downloads

### Testing

1. Place your resume file in `public/documents/`
2. Run locally: `npm run dev`
3. Test download buttons
4. Deploy and test on live site

### Common Issues

- **File not found**: Check file name spelling and case sensitivity
- **403 Forbidden**: Check file permissions on hosting platform  
- **CORS errors**: Ensure hosting platform serves static files correctly

### Quick Fix for Missing Files

If you don't have the files ready, the buttons will now show helpful error messages instead of broken downloads.