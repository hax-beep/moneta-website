# How to Add Your MONETA Logo

## Quick Steps:

1. **Prepare Your Logo:**
   - Save your logo file as `logo.png` (or `logo.jpg`, `logo.svg`)
   - Recommended dimensions: 200-400px width, transparent background preferred
   - Keep file size under 200KB for fast loading

2. **Add to Website:**
   - Place your logo file in the main project folder:
     `c:\Users\VEDANT\CascadeProjects\techfest-website\logo.png`

3. **Different Format?**
   If your logo is not PNG, update the file reference in all HTML files:
   - Change `logo.png` to your file name (e.g., `logo.jpg` or `logo.svg`)
   - Files to update: index.html, about.html, events.html, speakers.html, sponsors.html, team.html, blogs.html, testimonials.html

4. **Current Behavior:**
   - If logo image is found: Only image displays
   - If logo image is missing: Text "MONETA 2025" displays as fallback
   - Logo is automatically sized to 45px height (40px on mobile)

## Example Logo Files:
- ✅ `logo.png` - Recommended (supports transparency)
- ✅ `logo.svg` - Great for scaling
- ✅ `logo.jpg` - Works but no transparency

## Advanced Customization:

To change logo size, edit `styles.css` line 179-184:

```css
.logo-img {
    height: 45px;        /* Change this value */
    width: auto;
    object-fit: contain;
    display: block;
}
```

## Logo appears on:
✅ All 8 pages throughout the website
✅ Clickable - returns to home page
✅ Responsive - adjusts for mobile devices
