# 🌿 GreenGuard AI - Smart Irrigation & Crop Wellness System
## HTML Prototype v1.0

### Overview
This is a fully-functional HTML prototype of **GreenGuard AI**, an intelligent irrigation scheduling and crop management system based on the original Next.js application. The prototype demonstrates a complete farmer-friendly interface with real-time monitoring, AI-powered water calculations, and a helpful farming assistant chatbot.

**Original Repository:** https://github.com/Arjunpal-webdev/IrrigationSheduling  
**Live Demo:** https://irrigation-sheduling.vercel.app/

---

## ✨ Features Implemented

### 1. **Landing Page** (`landing.html`)
- Hero section with call-to-action
- Live farm status preview with 4 key metrics
- Benefits section highlighting water savings, alerts, and data-driven decisions
- "How It Works" section with 3-step process
- Call-to-action section
- Floating chatbot assistant (Krishi Sahayak)
- Responsive footer with links and contact info

### 2. **Dashboard** (`dashboard.html`)
- Left sidebar navigation menu
- Dashboard header with quick actions
- Real-time statistics cards:
  - Soil Moisture (with visual progress bar)
  - Crop Health Score
  - Temperature monitoring
  - Water Saved this month
- 6 main sections:
  - **Current Crops:** Grid of active crops with details
  - **Irrigation Schedule:** Upcoming watering times with AI recommendations
  - **Active Alerts:** Critical notifications with severity indicators
  - **Weather Forecast:** 5-day weather outlook
  - **Quick Actions:** Buttons to control irrigation
  - **Footer:** Last updated timestamp

### 3. **Water Calculator** (`calculator.html`)
- Comprehensive irrigation calculator with:
  - Crop selection (9 major crops)
  - Growth stage selection
  - Farm area input
  - Soil type selection
  - Monthly rainfall
  - Temperature
  - Irrigation method efficiency
- **Calculation Results:**
  - Reference ET₀ (evapotranspiration)
  - Crop Water Requirement (ETc)
  - Net Irrigation Requirement (NIR)
  - Gross Irrigation Requirement (GIR)
  - Total water required in liters
  - Estimated water cost
- **Irrigation Schedule Table:** Week-by-week irrigation plan
- **Info Section:** Educational content on water balance
- Download report functionality

### 4. **Floating Chatbot** (All Pages)
- **Krishi Sahayak** - AI Farming Assistant
- Interactive chat interface
- Toggle button (bottom right)
- Smart responses for common farming queries:
  - Water management
  - Irrigation timing
  - Crop information
  - Disease diagnosis
  - Weather impact
  - Fertilizer recommendations
- Message history with timestamps
- Smooth animations

### 5. **Navigation System**
- Sticky navigation bar across all pages
- Active page highlighting
- Links to all sections: Home, Simulator, Dashboard, Crop Info, Calculator
- "Get Started" button on navigation

---

## 📁 File Structure

```
DEI/
├── landing.html          # Main landing page
├── dashboard.html        # Farm monitoring dashboard
├── calculator.html       # Water requirement calculator
├── index.html           # Original simulator (preserved)
├── CROP.html            # Crop information (preserved)
├── MANVENDRA..html      # Analytics (preserved)
├── simulator.html       # Simulator page (preserved)
├── style.css            # Complete CSS styling (GreenGuard AI theme)
├── script.js            # JavaScript functionality
└── README.md            # This file
```

---

## 🎨 Design System

### Color Palette (Based on GreenGuard AI)
```
Primary Green:     #10B981 (Growth, Health, Sustainability)
Primary Dark:      #059669
Primary Light:     #D1FAE5
Secondary Blue:    #3B82F6
Accent Orange:     #F59E0B
Danger Red:        #EF4444
Success Green:     #10B981
```

### Typography
- **Font Family:** Poppins (Google Fonts)
- **Font Sizes:** Responsive (clamp function for fluid typography)
- **Font Weights:** 300, 400, 500, 600, 700, 800, 900

### Responsive Breakpoints
- **Desktop:** 1280px and above
- **Tablet:** 768px to 1279px
- **Mobile:** Below 768px
- **Small Mobile:** 480px and below

---

## 🚀 Features & Functionality

### Real-Time Monitoring
- Live soil moisture percentage
- Crop health scores (0-100)
- Temperature monitoring
- Water savings tracker

### Smart Irrigation Scheduling
- AI-powered recommendations
- Automatic schedule adjustments
- Multi-field management
- Irrigation on/off controls

### Scientific Water Calculation
Uses FAO-based irrigation methodology:
- **ET₀ Calculation:** Based on temperature (Thornthwaite method)
- **ETc Calculation:** ET₀ × Crop Coefficient (Kc)
- **NIR Calculation:** ETc minus rainfall
- **GIR Calculation:** NIR divided by irrigation efficiency
- **Total Water:** Converted from mm to liters per hectare

### Chatbot Integration
- Context-aware responses
- Multilingual support ready
- Disease diagnosis capability
- Weather-aware recommendations
- Best practice suggestions

### Alerts & Notifications
- High temperature warnings
- Low moisture alerts
- Rainfall notifications
- Completion confirmations
- System status updates

---

## 📱 Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Touch-friendly buttons (min 44px)
- Collapsible navigation on mobile
- Grid layouts that adapt to screen size
- Optimized images and icons (emoji-based)

**Tested on:**
- Desktop (1920px, 1366px, 1024px)
- Tablet (768px, 810px)
- Mobile (480px, 375px, 320px)

---

## 🔧 How to Use

### 1. Landing Page
```
Open: landing.html
- View system overview
- Learn key benefits
- Chat with Krishi Sahayak
- Click "Go to Dashboard →" to proceed
```

### 2. Dashboard
```
Open: dashboard.html
- Monitor real-time farm metrics
- Check irrigation schedule
- View weather forecast
- Read active alerts
- Quick irrigation controls
- Access other tools from sidebar
```

### 3. Water Calculator
```
Open: calculator.html
- Select crop type and growth stage
- Enter farm details (area, soil, temperature, rainfall)
- Choose irrigation method
- Click "Calculate Water Requirement"
- View detailed results and irrigation schedule
```

### 4. Chatbot (On Any Page)
```
- Click green 🌾 button (bottom right)
- Type farming questions
- Get instant AI-powered advice
- Press Enter or click Send
```

---

## 💡 JavaScript Functionality

### Core Functions
```javascript
goToDashboard()           // Navigate to dashboard
viewCropDetails(crop)     // View specific crop info
startIrrigation()         // Start water flow
stopIrrigation()          // Stop water flow
toggleChatbot()           // Open/close chatbot
sendChatMessage()         // Send chat message
generateChatResponse()    // AI response generation
saveFarmData(data)        // Local storage management
```

### Auto-updating Features
- Dashboard time updates every 10 seconds
- Smooth scroll animations
- Lazy-load animations on page scroll
- Form validation on submit
- Theme persistence

---

## 🔐 Data Management

### Local Storage
- Farm data persistence
- Theme preference saving
- Session management
- User preferences

### Demo Data Included
```javascript
sampleFarmData = {
  fields: [
    { Wheat, Tomato, Corn, Potato fields }
  ],
  weather: {
    current: { 28°C, Sunny, 60% humidity },
    forecast: [ 5-day outlook ]
  }
}
```

---

## 🌐 API Integration Points

Ready for backend integration:
```javascript
// Chatbot: /api/chat
POST /api/chat with message

// Weather: /api/weather
GET /api/weather for forecast

// Irrigation: /api/irrigation
GET/POST irrigation schedules

// Alerts: /api/alerts
GET/POST alerts management
```

---

## 📊 Water Calculation Example

**Input:**
- Crop: Wheat
- Growth Stage: Mid-Season (Kc = 1.05)
- Area: 5 hectares
- Rainfall: 50mm/month
- Soil: Loam
- Temperature: 28°C
- Irrigation: Drip (92% efficiency)

**Calculation:**
- ET₀ = 28 × 0.51 = 14.28 mm/month
- ETc = 14.28 × 1.05 = 14.99 mm/month
- NIR = 14.99 - 50 = -35.01 (No irrigation needed this month)
- GIR = -35.01 / 0.92 = Not needed
- **Result:** Sufficient rainfall; irrigation not recommended

---

## 🎯 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| IE      | 11      | ⚠️ Limited |

---

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)
```bash
# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# GitHub Pages
git push origin main
```

### Option 2: Local Server
```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

---

## 📈 Future Enhancements

### Phase 2: Backend Integration
- [ ] Connect to real weather API (OpenWeatherMap)
- [ ] Google Gemini API for smart chatbot
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Email/SMS notifications

### Phase 3: Advanced Features
- [ ] Mobile app (React Native)
- [ ] IoT sensor integration
- [ ] Satellite imagery integration
- [ ] ML-based crop disease detection
- [ ] Advanced analytics dashboard
- [ ] Multi-field management
- [ ] Marketplace integration

### Phase 4: AI & ML
- [ ] Real machine learning models (TensorFlow.js)
- [ ] Predictive soil moisture forecasting
- [ ] Automated anomaly detection
- [ ] Crop recommendation engine
- [ ] Fertilizer optimization

---

## 🤝 Contributing

To customize this prototype:

1. **Edit HTML:** Modify landing.html, dashboard.html, calculator.html
2. **Update Styles:** Edit style.css variables and components
3. **Add Functions:** Update script.js with new functionality
4. **Integrate APIs:** Replace demo data with real API calls

### Quick Customization Tips
```css
/* Change primary color */
--color-primary: #10B981; /* Edit this */

/* Adjust spacing */
--spacing-lg: 2rem; /* Edit spacing */

/* Modify fonts */
font-family: 'Poppins', sans-serif; /* Change font */
```

---

## 📝 Original Project Credit

**GreenGuard AI** - Smart Irrigation & Crop Wellness System
- **Developer:** Arjunpal-webdev
- **Repository:** https://github.com/Arjunpal-webdev/IrrigationSheduling
- **Live Demo:** https://irrigation-sheduling.vercel.app/
- **Tech Stack:** Next.js 14, React 18, TypeScript, Recharts
- **Features:** AI models, Weather API, Chatbot, Analytics

This HTML prototype is a simplified, static version for demonstration and educational purposes.

---

## 📞 Support & Contact

- **Email:** support@greenguard.ai
- **Phone:** +91 9760-434089
- **Location:** Uttar Pradesh, India
- **Chat:** Use floating Krishi Sahayak chatbot

---

## 📄 License

This prototype is created for educational and demonstration purposes based on the original GreenGuard AI project. Please refer to the original repository for licensing information.

---

## 🌾 Built with 💚 for Sustainable Agriculture

**GreenGuard AI** - Nurturing fields with intelligence, cultivating a sustainable future.

*"Saving water, increasing yields, protecting our planet."*
