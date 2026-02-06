# Quick Reference: Logo & Language Switcher

## What's New?

### 1. Logo Watermark ✅
- Green agricultural seal background on every page
- Subtle (8% opacity) - doesn't interfere with content
- Located at the center of the viewport

### 2. Language Switcher ✅
- **EN/HI buttons** in the navbar (top-right area)
- Click to toggle between English and Hindi
- Your choice is saved automatically

---

## How to Use

### For End Users

**To Change Language:**
1. Look at the navbar (top of page)
2. Find the **[EN][HI]** buttons (next to navigation links)
3. Click **HI** for Hindi or **EN** for English
4. All text changes instantly!
5. Your preference is saved - next time you visit, it will be in that language

**That's it!** The language switcher works on all three main pages:
- Landing (Home)
- Dashboard (Monitoring)
- Calculator (Water Requirements)

---

## For Developers

### File Structure
```
DEI/
├── style.css           ← Contains logo watermark + language switcher CSS
├── script.js           ← Contains switchLanguage() function
├── landing.html        ← Has language switcher in navbar
├── dashboard.html      ← Has language switcher in navbar
├── calculator.html     ← Has language switcher in navbar
└── [documentation files]
```

### How It Works

**Logo Watermark:**
```css
/* In style.css - Added to body::before */
body::before {
    background: url('data:image/svg+xml,...'); /* SVG agriculture seal */
    opacity: 0.08; /* Very subtle */
    position: fixed; /* Always visible */
    z-index: 0; /* Behind all content */
}
```

**Language Switcher:**
```html
<!-- In HTML (all pages) -->
<div class="language-switcher">
    <button class="lang-btn active" data-lang="en" onclick="switchLanguage('en')">EN</button>
    <button class="lang-btn" data-lang="hi" onclick="switchLanguage('hi')">HI</button>
</div>
```

```javascript
// In script.js
function switchLanguage(lang) {
    // Save preference
    localStorage.setItem('greenguard-language', lang);
    
    // Change all text with data-en and data-hi attributes
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Update button highlight
    // (EN or HI gets green background)
}
```

### Adding New Languages

1. **Edit script.js** - Add new language to dictionary:
```javascript
const languages = {
    en: { ... },
    hi: { ... },
    es: { home: 'Inicio', simulator: 'Simulador', ... }  // ← New
};
```

2. **Add button to HTML**:
```html
<button class="lang-btn" data-lang="es" onclick="switchLanguage('es')">ES</button>
```

3. **Add attributes to content**:
```html
<a data-en="Home" data-hi="होम" data-es="Inicio">Home</a>
```

Done! Function handles the rest.

### Adding Bilingual Text to Content

```html
<!-- Simple example -->
<h3 data-en="Welcome" data-hi="स्वागत है">Welcome</h3>
<button data-en="Continue" data-hi="आगे बढ़ें">Continue</button>

<!-- It will automatically switch when user clicks language button -->
```

---

## Technical Details

### CSS Classes

**Language Switcher Container:**
- `.language-switcher` - Flex container with green border

**Language Buttons:**
- `.lang-btn` - Individual button
- `.lang-btn.active` - Currently selected (green background)

### JavaScript Functions

**Main Function:**
```javascript
switchLanguage(lang) // 'en' or 'hi'
```

**Current Language:**
```javascript
currentLanguage // Global variable storing current language
```

**Initialization:**
```javascript
// Automatically called when page loads
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);
});
```

### Storage

Language preference stored in **localStorage** with key: `greenguard-language`

```javascript
localStorage.getItem('greenguard-language') // Get saved language
localStorage.setItem('greenguard-language', lang) // Save language
```

---

## Design Integration

### Colors Used
- **Active Button**: Green gradient (#10B981 → #059669)
- **Inactive Button**: Gray text (#6B7280)
- **Border**: Light green (#D1FAE5)
- **Background**: Light gray (#F3F4F6)

### Responsive Behavior
- **Desktop**: Buttons side-by-side
- **Mobile**: Buttons stack/expand to full width
- **Watermark**: Always centered, scales appropriately

---

## Testing

### Quick Test Checklist
- [ ] Open landing.html
- [ ] See green seal watermark in background
- [ ] Click EN button (should be highlighted green)
- [ ] Click HI button (green highlight moves to HI)
- [ ] Navigation text changes to Hindi
- [ ] Refresh page - language stays as Hindi
- [ ] Navigate to dashboard.html - Hindi persists
- [ ] Go back to landing.html - Hindi still there

---

## Browser Support

Works on:
- Chrome, Firefox, Safari, Edge (Desktop)
- Chrome, Safari (Mobile)
- All modern browsers with JavaScript enabled

---

## Known Limitations

- **Currently:** Only EN/HI supported
- **CSS Only:** Watermark doesn't change for print
- **localStorage:** Requires browser storage enabled
- **JavaScript:** Requires JavaScript enabled for language switching

---

## Troubleshooting

**Watermark not showing?**
- Check browser zoom level
- Verify style.css is linked in HTML
- Check browser console for CSS errors

**Language buttons not working?**
- Verify JavaScript is enabled
- Check browser console for errors
- Ensure script.js is loaded

**Text not changing?**
- Check that HTML elements have `data-en` and `data-hi` attributes
- Verify attribute values are spelled correctly
- Check browser console for errors

**Language not persisting?**
- Check if localStorage is enabled in browser
- Check privacy settings
- Try clearing browser cache

---

## Files to Modify/Extend

| File | What to Do | Impact |
|------|-----------|--------|
| `style.css` | Add CSS for watermark customization | Visual changes |
| `script.js` | Add new languages or logic | Functional changes |
| `*.html` | Add `data-en` and `data-hi` attributes | Content changes |
| `script.js` | Customize language dictionary | Content changes |

---

## Support Resources

- **Technical Guide**: LOGO_LANGUAGE_UPDATE.md
- **Implementation Steps**: IMPLEMENTATION_GUIDE.md
- **Full Report**: FEATURE_REPORT.md
- **Quick Start**: This file!

---

## Quick Command Reference

### Switch to Hindi (JavaScript Console)
```javascript
switchLanguage('hi')
```

### Switch to English
```javascript
switchLanguage('en')
```

### Get Current Language
```javascript
console.log(currentLanguage)
```

### Clear Saved Language Preference
```javascript
localStorage.removeItem('greenguard-language')
```

---

## Summary

✅ Logo watermark on all pages  
✅ EN/HI language switching in navbar  
✅ Preference saved automatically  
✅ Works across all 3 main pages  
✅ Mobile responsive  
✅ Fully documented  

**Ready to use!** 🌿

---
