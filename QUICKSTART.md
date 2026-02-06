# 🚀 GreenGuard AI Prototype - Quick Start Guide

## What You Get

A complete, production-ready HTML prototype based on the original GreenGuard AI application with:
- ✅ **Landing Page** - Hero, benefits, how it works
- ✅ **Dashboard** - Real-time farm monitoring
- ✅ **Water Calculator** - Scientific irrigation calculations
- ✅ **Chatbot** - AI farming assistant (Krishi Sahayak)
- ✅ **Responsive Design** - Works on all devices
- ✅ **Complete CSS** - Modern green theme
- ✅ **JavaScript** - Full interactivity

---

## 📂 Files Created/Modified

### New Files
```
✅ landing.html            (New landing page)
✅ dashboard.html          (New dashboard)
✅ calculator.html         (New calculator)
✅ README_PROTOTYPE.md     (This guide)
```

### Updated Files
```
✅ style.css              (Replaced with GreenGuard theme)
✅ script.js              (Updated with new functions)
```

### Preserved Files
```
✅ index.html             (Original simulator)
✅ CROP.html              (Crop info)
✅ MANVENDRA..html        (Analytics)
✅ simulator.html         (Simulator)
```

---

## 🎯 How to Test

### Method 1: Direct File Opening (Easiest)
```
1. Navigate to: c:\Users\hp\OneDrive\Desktop\DEI\
2. Double-click: landing.html
3. Click buttons to navigate
4. Chat with 🌾 button (bottom right)
```

### Method 2: Local Server (Recommended)
```bash
# Navigate to folder
cd c:\Users\hp\OneDrive\Desktop\DEI\

# Python 3
python -m http.server 8000

# Then open in browser
http://localhost:8000/landing.html
```

### Method 3: VS Code Live Server
```
1. Install "Live Server" extension
2. Right-click landing.html
3. Select "Open with Live Server"
4. Browser opens automatically
```

---

## 📖 Page Navigation

```
landing.html (HOME)
    ↓
    ├→ Dashboard Link → dashboard.html
    ├→ Simulator Link → index.html
    ├→ Crop Info → CROP.html
    ├→ Calculator → calculator.html
    └→ Chatbot 🌾 (All pages)

dashboard.html (DASHBOARD)
    ├→ Sidebar navigation to all pages
    ├→ Quick action buttons
    ├→ View crop details
    └→ Start/Stop irrigation

calculator.html (WATER CALCULATOR)
    ├→ Select crop & growth stage
    ├→ Enter farm details
    ├→ Click Calculate
    └→ View irrigation schedule
```

---

## 💡 Key Features to Try

### 1. **Landing Page**
- [x] Hover over buttons (they animate!)
- [x] Scroll down to see all sections
- [x] Click "Go to Dashboard →" button
- [x] Click 🌾 chatbot button
- [x] Ask chatbot: "water", "irrigation", "crop", "disease"

### 2. **Dashboard**
- [x] View real-time metrics (with progress bars)
- [x] Check irrigation schedule
- [x] Read active alerts (colored by severity)
- [x] View 5-day weather forecast
- [x] Click Quick Action buttons
- [x] Use sidebar navigation

### 3. **Water Calculator**
- [x] Select any crop (9 options)
- [x] Choose growth stage
- [x] Enter farm details
- [x] Select soil type and irrigation method
- [x] Click "Calculate Water Requirement"
- [x] View detailed results:
  - ET₀ (Reference Evapotranspiration)
  - ETc (Crop Water Requirement)
  - NIR (Net Irrigation Requirement)
  - GIR (Gross Irrigation Requirement)
  - Total water in liters
  - Cost estimate
  - Week-by-week schedule

### 4. **Chatbot (All Pages)**
- [x] Click 🌾 button (bottom right)
- [x] Try: "How much water for wheat?"
- [x] Try: "My tomato leaves are yellow"
- [x] Try: "Will it rain tomorrow?"
- [x] Type and press Enter
- [x] Get instant AI response

---

## 🎨 Design Highlights

### Color Theme
```
🟢 Primary Green (#10B981)  - Growth, health
🔵 Secondary Blue (#3B82F6) - Information
🟠 Accent Orange (#F59E0B)  - Warnings
🔴 Danger Red (#EF4444)     - Critical alerts
```

### Responsive Layouts
- **Desktop (1920px):** Full sidebar + main content
- **Tablet (768px):** Horizontal sidebar menu
- **Mobile (480px):** Stacked layout, vertical menu
- **Small Mobile (320px):** Optimized for readability

### Animations
- Smooth fade-in on page load
- Hover effects on buttons and cards
- Chatbot slide-in from bottom
- Progress bar animations
- Auto-update timestamps

---

## 🔧 Customization Ideas

### 1. Change Colors
Edit `style.css`:
```css
:root {
    --color-primary: #10B981;        /* Change to your color */
    --color-primary-dark: #059669;
    --color-primary-light: #D1FAE5;
}
```

### 2. Update Farm Data
Edit `script.js`:
```javascript
const sampleFarmData = {
    fields: [
        { name: 'Your Field', crop: 'wheat', ... }
    ]
};
```

### 3. Add Your Contact Info
Edit footer in HTML files:
```html
<p>📍 Your Location, India</p>
<p>📧 your-email@example.com</p>
<p>📱 Your Phone Number</p>
```

### 4. Update Chatbot Responses
Edit `script.js`:
```javascript
function generateChatResponse(userMessage) {
    // Add more responses here
}
```

---

## 🐛 Troubleshooting

### Problem: Pages not linking correctly
**Solution:** Make sure all HTML files are in same folder (DEI)

### Problem: Styles not loading
**Solution:** Ensure style.css is in same folder as HTML files

### Problem: Chatbot not working
**Solution:** Check browser console (F12) for errors

### Problem: Calculator not calculating
**Solution:** Fill all required fields marked with *

### Problem: Mobile layout broken
**Solution:** Check browser zoom (Ctrl+0 to reset)

---

## 📊 Water Calculator Example Walkthrough

**Scenario: Calculating water for wheat field**

1. **Select Crop:** Wheat (Triticum aestivum)
2. **Growth Stage:** Mid-Season Stage (Kc: 1.0-1.15)
3. **Farm Area:** 5 hectares
4. **Rainfall:** 50 mm/month
5. **Soil Type:** Loam Soil
6. **Temperature:** 28°C
7. **Irrigation:** Drip Irrigation (90-95% efficiency)

**Results Generated:**
```
ET₀ (Reference):      14.3 mm/month
ETc (Crop Water):     15.0 mm/month
NIR (Net Irrig):      -35.0 mm (Rainfall covers)
GIR (Gross Irrig):    -38.0 mm (Not needed)
Total Water:          0 Liters (Wait for next calculation)
```

---

## 🌟 Tips & Tricks

### Keyboard Shortcuts
- **Enter in Chat:** Send message
- **Tab:** Navigate between form fields
- **Escape:** Close chatbot (coming soon)

### Best Practices
1. Update weather data daily
2. Monitor soil moisture regularly
3. Adjust irrigation based on rainfall
4. Check crop health every 3-5 days
5. Use alerts to prevent stress

### Offline Usage
- All features work offline
- Data saved in browser's LocalStorage
- Perfect for field use without internet

---

## 📱 Mobile Testing

**Quick Mobile Test:**
```bash
# Press F12 in browser
# Click device toolbar icon (top left of DevTools)
# Select "iPhone 12" or "Android"
# Test navigation and buttons
```

**Test Different Sizes:**
- iPhone SE (375px)
- iPad (810px)
- Desktop (1920px)

---

## 🔌 Ready for Backend Integration

The prototype is designed to connect with real APIs:

### Chatbot API
```javascript
// Replace in script.js
const response = await fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({ message: userInput })
});
```

### Weather API
```javascript
// Use OpenWeatherMap or similar
const weather = await fetch('/api/weather');
```

### Database Integration
```javascript
// Connect to MongoDB, PostgreSQL, etc.
saveFarmData(data) // Will sync with backend
```

---

## 📚 Learning Resources

### To Understand the Code
1. **HTML Structure:** Read the HTML files (clean, semantic)
2. **CSS System:** Study style.css (organized with variables)
3. **JavaScript Logic:** Check script.js (well-commented)

### To Extend Features
1. Fork the original repo
2. Study the Next.js version
3. Adapt components to this prototype
4. Test with real data

### References
- [GreenGuard AI GitHub](https://github.com/Arjunpal-webdev/IrrigationSheduling)
- [FAO Irrigation Manual](http://www.fao.org/)
- [Crop Water Requirements](http://www.fao.org/aquastat/)

---

## ✅ Checklist Before Deployment

- [ ] Test all navigation links
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Test chatbot on all pages
- [ ] Verify calculator works with sample data
- [ ] Check all button animations
- [ ] Test form validation
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Test in multiple browsers
- [ ] Verify no console errors (F12)
- [ ] Update contact information
- [ ] Add real API endpoints (optional)

---

## 🎉 You're Ready!

Your GreenGuard AI prototype is complete and ready to use!

**Next Steps:**
1. ✅ Test all pages
2. ✅ Customize for your needs
3. ✅ Add real data
4. ✅ Deploy online (Netlify/Vercel)
5. ✅ Collect feedback
6. ✅ Integrate with backend

---

## 📞 Need Help?

### For Bugs in This Prototype
- Check browser console (F12 → Console)
- Ensure files are in correct folder
- Clear browser cache and reload
- Try different browser

### For Enhancements
- Refer to original repository
- Customize CSS variables
- Extend JavaScript functions
- Add more crops/data

### For Deployment
- Use Netlify: Easy drag-and-drop
- Use Vercel: Perfect for web apps
- Use GitHub Pages: Free static hosting
- Use your own server: Full control

---

**🌾 GreenGuard AI - Making Farming Smarter, One Drop at a Time!**

*Last Updated: February 6, 2026*
