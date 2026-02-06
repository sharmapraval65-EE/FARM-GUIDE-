# 🎯 WHERE TO FIND THE NEW FEATURES

## Feature 1: Logo Watermark 🎨

### Visual Location
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    📍 WATERMARK LOCATION: CENTER OF PAGE (Fixed Background) │
│                                                             │
│    ┌─────────────────────────────────────────────────────┐ │
│    │                                                   │ │
│    │  • Green agricultural seal (circle with leaf)      │ │
│    │  • Text: "AGRICULTURE"                             │ │
│    │  • 8% opacity (very subtle)                        │ │
│    │  • Always visible (fixed positioning)              │ │
│    │                                                   │ │
│    └─────────────────────────────────────────────────────┘ │
│                                                             │
│    Page content here (fully visible and readable)          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### How It Appears
- Behind all page content (z-index: 0)
- Centered horizontally and vertically
- Stays in same position when scrolling
- Does not interfere with clicks or interactions
- Green color (#10B981) matching GreenGuard theme

### Files to Check
- **style.css** (Lines 72-84): Logo watermark CSS code
  ```css
  body::before {
      background: url('data:image/svg+xml,...agricultural-seal...');
      opacity: 0.08;
      position: fixed;
      z-index: 0;
  }
  ```

---

## Feature 2: Language Switcher 🌐

### Visual Location

#### Desktop View
```
NAVIGATION BAR (Top of Page)
┌─────────────────────────────────────────────────────────────┐
│ 🌿 GreenGuard │ Home │ Simulator │ Dashboard │ │ [EN][HI] Get Started │
│                                          └─────────────┘                   
│                                     Language Switcher Here
└─────────────────────────────────────────────────────────────┘
```

#### Mobile View
```
┌─────────────────────────────────┐
│ 🌿 GreenGuard                  │
├─────────────────────────────────┤
│ Nav Links (stacked)             │
├─────────────────────────────────┤
│   [EN]  [HI]                    │
│  Language Switcher              │
├─────────────────────────────────┤
│   [Get Started]                 │
└─────────────────────────────────┘
```

### How It Works

1. **EN Button (Active by default)**
   - Green background gradient
   - White text
   - Shows when English is selected

2. **HI Button (Inactive by default)**
   - Gray text
   - Light background
   - Highlight moves here when clicked

3. **Click EN** → English content
4. **Click HI** → Hindi content

### Exact Positions in Code

#### landing.html
- **Lines 23-26**: Language switcher component
  ```html
  <div class="language-switcher">
      <button class="lang-btn active" data-lang="en" onclick="switchLanguage('en')">EN</button>
      <button class="lang-btn" data-lang="hi" onclick="switchLanguage('hi')">HI</button>
  </div>
  ```

#### dashboard.html
- **Lines 16-19**: Language switcher component

#### calculator.html
- **Lines 16-19**: Language switcher component

### CSS for Styling

#### style.css
- **Lines 196-220**: Language switcher CSS
  ```css
  .language-switcher { /* Container */ }
  .lang-btn { /* Button styling */ }
  .lang-btn.active { /* Active state */ }
  ```

---

## What Switches When You Click HI

### Navigation Items
| Element | When EN | When HI |
|---------|--------|--------|
| Home Link | "Home" | "होम" |
| Simulator Link | "Simulator" | "सिमुलेटर" |
| Dashboard Link | "Dashboard" | "डैशबोर्ड" |
| Crop Info Link | "Crop Info" | "फसल जानकारी" |
| Calculator Link | "Calculator" | "कैलकुलेटर" |
| Main Button | "Get Started" | "शुरू करें" |

### How Text Changes
```
User clicks [HI] button
        ↓
JavaScript function triggered: switchLanguage('hi')
        ↓
Finds all elements with data-en and data-hi attributes
        ↓
Replaces text with data-hi values
        ↓
Updates button states (HI gets green highlight)
        ↓
Saves preference to browser storage
        ↓
Content now shows in Hindi
```

---

## File Locations Summary

### Core Implementation Files

1. **style.css** (27,812 bytes)
   - Logo Watermark CSS: Lines 72-84
   - Language Switcher CSS: Lines 196-220

2. **script.js** (20,583 bytes)
   - Language Dictionary: Lines 7-21
   - switchLanguage() Function: Lines 32-50
   - Auto-Initialization: Lines 28-30

3. **landing.html** (8,837 bytes)
   - Language Switcher: Lines 23-26
   - Bilingual Nav Links: Lines 18-27
   - Bilingual Button: Line 28

4. **dashboard.html** (14,930 bytes)
   - Language Switcher: Lines 16-19
   - Bilingual Nav Links: Lines 14-21

5. **calculator.html** (17,753 bytes)
   - Language Switcher: Lines 16-19
   - Bilingual Nav Links: Lines 14-21

---

## Testing the Features

### Testing Logo Watermark

**Step 1**: Open any HTML file
- landing.html
- dashboard.html
- calculator.html

**Step 2**: Look at the page background
- You should see a subtle green seal
- Located at center of page
- Very light (doesn't block content)
- Stays in place when scrolling

**Step 3**: Verify it's not blocking anything
- Click buttons - they work
- Click links - they work
- Scroll page - watermark stays centered
- Zoom in/out - watermark scales

### Testing Language Switcher

**Step 1**: Open any HTML file

**Step 2**: Find the EN/HI buttons
- Located in navbar at top right
- EN button should be highlighted green
- HI button should be gray

**Step 3**: Click HI button
- All navigation text changes to Hindi
- HI button becomes highlighted green
- EN button becomes gray

**Step 4**: Click EN button
- All text changes back to English
- EN button becomes highlighted green

**Step 5**: Refresh the page
- Language should be remembered
- If you selected HI, page loads in Hindi

**Step 6**: Navigate to another page
- Open dashboard.html or calculator.html
- Language preference should persist
- Whatever you selected before still selected

---

## Quick Reference Coordinates

### Logo Watermark
- **Fixed Position**: 50% from top, 50% from left
- **Size**: 600px × 600px
- **Opacity**: 8% (0.08)
- **SVG**: Green agricultural seal design
- **Z-Index**: 0 (behind all content)

### Language Switcher Container
- **Position**: Navbar, between nav-links and Get Started button
- **Display**: Flex row
- **Width**: Auto (content-based)
- **Height**: 44px (approximately)
- **Border**: 2px solid green (#D1FAE5)
- **Background**: Light gray (#F3F4F6)

### Language Buttons
- **Size**: Each button ~50px wide
- **Height**: 32px
- **Gap Between**: 4px
- **Active Color**: Green gradient (#10B981 → #059669)
- **Inactive Color**: Gray text (#6B7280)
- **Font**: 0.9rem, weight 600

---

## Browser Developer Tools Check

### To Inspect Logo Watermark
1. Right-click on page → Inspect
2. Find `<body>` element
3. Look for `::before` pseudo-element in DevTools
4. Should show SVG background URL
5. opacity: 0.08
6. z-index: 0

### To Inspect Language Switcher
1. Right-click on EN/HI buttons → Inspect
2. Find `<div class="language-switcher">`
3. Inside should be two `<button class="lang-btn">` elements
4. One should have `active` class
5. Check computed styles for green color (#10B981)

### To Check JavaScript
1. Open Console (F12 → Console tab)
2. Type: `currentLanguage` → should show 'en' or 'hi'
3. Type: `switchLanguage('hi')` → text should change to Hindi
4. Type: `localStorage.getItem('greenguard-language')` → shows saved language

---

## Performance Verification

### What to Check

1. **Page Load Time**
   - Should be same as before
   - No additional delays
   - SVG loads from data URI (no extra request)

2. **Memory Usage**
   - No memory leaks
   - Consistent memory after switching languages
   - localStorage ~50 bytes

3. **CPU Usage**
   - No high CPU when switching
   - Language switching is instant
   - Smooth animations (no stuttering)

---

## Mobile Experience

### What You'll See on Phone

#### Navbar Layout
```
┌──────────────────────────┐
│  🌿 GreenGuard AI        │
├──────────────────────────┤
│  [Home] [Simulator] ...  │  (stacked)
├──────────────────────────┤
│  [EN]  [HI]             │  (centered, full width)
├──────────────────────────┤
│  [Get Started Button]   │
└──────────────────────────┘
```

#### Logo Watermark
- Same appearance as desktop
- Scales with viewport
- Always centered
- Never intrusive

---

## Accessibility Considerations

### What's Included
- ✅ Language buttons have clear text labels
- ✅ Color contrast meets standards (green on light background)
- ✅ Buttons are keyboard accessible (onclick handlers)
- ✅ Watermark is semantic (doesn't affect screen readers)
- ✅ Text changes preserve HTML structure

### What Works
- ✅ Tab key navigation to buttons
- ✅ Enter/Space to click buttons
- ✅ Screen readers can access text
- ✅ Color contrast adequate

---

## Summary: Where Everything Is

| Feature | Location | Details |
|---------|----------|---------|
| Logo Watermark | `style.css` Lines 72-84 | body::before SVG background |
| Language Switcher HTML | `*.html` Navbar | div.language-switcher |
| Language Switcher CSS | `style.css` Lines 196-220 | .language-switcher classes |
| Language Logic | `script.js` Lines 5-50 | switchLanguage() function |
| Bilingual Data | `*.html` Nav elements | data-en and data-hi attributes |
| Storage | Browser localStorage | Key: 'greenguard-language' |

---

## Testing Checklist

- [ ] Open landing.html
- [ ] See green watermark in background
- [ ] See EN/HI buttons in navbar
- [ ] Click HI button
- [ ] Navigation text changes to Hindi
- [ ] HI button becomes highlighted green
- [ ] Refresh page
- [ ] Language remains Hindi
- [ ] Navigate to dashboard.html
- [ ] Language still Hindi
- [ ] Click EN button
- [ ] Everything switches to English
- [ ] Test on mobile device
- [ ] Buttons accessible and responsive
- [ ] Watermark visible on mobile

---

**All features implemented and ready to use!** ✅

---
