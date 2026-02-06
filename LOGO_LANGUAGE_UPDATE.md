# GreenGuard AI - Logo Watermark & Language Switcher Implementation

## Overview
This document outlines the enhancements made to the GreenGuard AI prototype, including:
1. **Logo Watermark Background** - Agricultural seal watermark on all pages
2. **Language Switcher** - English/Hindi language toggle functionality

## Changes Made

### 1. CSS Updates (style.css)

#### Logo Watermark Background
- **Location**: Body `::before` pseudo-element
- **SVG Design**: Green agricultural seal (circle with leaf, crop symbols)
- **Opacity**: 0.08 (subtle background, doesn't interfere with content)
- **Positioning**: Fixed center of viewport
- **Z-index**: 0 (behind all content)

```css
body::before {
    content: '';
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: url('data:image/svg+xml,...') no-repeat center;
    background-size: contain;
    opacity: 0.08;
    pointer-events: none;
    z-index: 0;
}
```

#### Language Switcher Styles
- **Container**: `.language-switcher` - Flex layout with green border
- **Buttons**: `.lang-btn` - EN/HI toggle buttons
- **Active State**: Green gradient background (#10B981 to #059669)
- **Hover Effect**: Color change with smooth transition

```css
.language-switcher {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--color-surface-elevated);
    border-radius: var(--radius-lg);
    padding: 0.5rem;
    border: 2px solid var(--color-primary-light);
}

.lang-btn.active {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-md);
}
```

### 2. HTML Updates

#### Landing Page (landing.html)
- Added language switcher to navbar (EN/HI buttons)
- Added `data-en` and `data-hi` attributes to all navigation links
- Language switcher positioned between nav-links and Get Started button

```html
<div class="language-switcher">
    <button class="lang-btn active" data-lang="en" onclick="switchLanguage('en')">EN</button>
    <button class="lang-btn" data-lang="hi" onclick="switchLanguage('hi')">HI</button>
</div>
```

#### Dashboard Page (dashboard.html)
- Same language switcher implementation
- All navigation elements updated with bilingual data attributes

#### Calculator Page (calculator.html)
- Language switcher integrated
- Bilingual support for form labels and content

### 3. JavaScript Implementation (script.js)

#### Language Switching System

**Language Dictionary**:
```javascript
const languages = {
    en: { home: 'Home', simulator: 'Simulator', ... },
    hi: { home: 'होम', simulator: 'सिमुलेटर', ... }
};
```

**Core Function** - `switchLanguage(lang)`:
1. Saves language preference to localStorage
2. Updates all elements with `data-en` and `data-hi` attributes
3. Toggles active state on language buttons
4. Persists across page reloads

**Initialization**:
- Reads saved language from localStorage on page load
- Defaults to English if no preference saved
- Applies language on DOMContentLoaded event

```javascript
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);
});

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('greenguard-language', lang);
    
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
        element.textContent = lang === 'en' 
            ? element.getAttribute('data-en')
            : element.getAttribute('data-hi');
    });
    
    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}
```

## Features

### Logo Watermark
- ✅ Subtle green background seal
- ✅ Agriculture-themed design
- ✅ Non-intrusive (low opacity)
- ✅ Responsive and fixed positioning
- ✅ Doesn't interfere with user interactions (pointer-events: none)

### Language Switcher
- ✅ Easy EN/HI toggle in navbar
- ✅ Persistent language preference (localStorage)
- ✅ Smooth transitions and hover effects
- ✅ Green theme matching GreenGuard branding
- ✅ Responsive design (full-width on mobile)

### Bilingual Content

**Navigation Menu** (English ↔ Hindi):
- Home ↔ होम
- Simulator ↔ सिमुलेटर
- Dashboard ↔ डैशबोर्ड
- Crop Info ↔ फसल जानकारी
- Calculator ↔ कैलकुलेटर
- Get Started ↔ शुरू करें

## Files Modified

1. **style.css** (1365 lines)
   - Added logo watermark SVG background
   - Added language switcher styling
   - Maintained all existing GreenGuard theme

2. **landing.html** (212 lines)
   - Integrated language switcher component
   - Added bilingual data attributes

3. **dashboard.html** (322 lines)
   - Integrated language switcher component
   - Added bilingual data attributes

4. **calculator.html** (318 lines)
   - Integrated language switcher component
   - Added bilingual data attributes

5. **script.js** (updated)
   - Added language switching functionality
   - Added localStorage persistence
   - Added auto-initialization on page load

## Usage

### For Users
1. Click **EN** or **HI** button in navbar to toggle language
2. Selection is automatically saved
3. Language persists across page reloads
4. All navigation items change language instantly

### For Developers
To add new bilingual content:
```html
<!-- Add data-en and data-hi attributes -->
<button data-en="Save" data-hi="सहेजें">Save</button>

<!-- Language switching is automatic -->
```

Then update the languages dictionary if needed in script.js.

## Browser Support
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Notes
- Logo watermark uses SVG data URI (no external image required)
- Language preference stored in localStorage (persists across sessions)
- All styles use CSS variables for easy theming
- Fully responsive on all screen sizes

## Future Enhancements
- [ ] Add more languages (Spanish, French, Marathi, etc.)
- [ ] Translate all form labels and content
- [ ] Add language-specific currency and units
- [ ] Implement RTL support for Hindi
- [ ] Add translation API for dynamic content

---

**Version**: 1.0  
**Last Updated**: 2024  
**Status**: Implemented & Tested
