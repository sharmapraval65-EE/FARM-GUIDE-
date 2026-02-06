/* ========================================
   GreenGuard AI - JavaScript Functionality
   ======================================== */

// ========== LANGUAGE SWITCHING ==========

const languages = {
    en: {
        home: 'Home',
        simulator: 'Simulator',
        dashboard: 'Dashboard',
        cropInfo: 'Crop Info',
        calculator: 'Calculator',
        getStarted: 'Get Started'
    },
    hi: {
        home: 'होम',
        simulator: 'सिमुलेटर',
        dashboard: 'डैशबोर्ड',
        cropInfo: 'फसल जानकारी',
        calculator: 'कैलकुलेटर',
        getStarted: 'शुरू करें'
    }
};

let currentLanguage = localStorage.getItem('greenguard-language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);
});

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('greenguard-language', lang);
    
    // Update all elements with data-en and data-hi attributes
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (lang === 'hi') {
            element.textContent = element.getAttribute('data-hi');
        }
    });
    
    // Update language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ========== NAVIGATION & PAGE HANDLING ==========

function goToDashboard() {
    window.location.href = 'dashboard.html';
}

function viewCropDetails(crop) {
    alert(`Viewing details for: ${crop}\n\nFull crop management coming soon!`);
}

function viewAnalytics() {
    window.location.href = 'MANVENDRA..html';
}

function startIrrigation() {
    alert('✅ Irrigation started!\n\nWater flow initiated for selected field.');
    showNotification('Irrigation started', 'success');
}

function stopIrrigation() {
    alert('⛔ Irrigation stopped!\n\nWater flow has been halted.');
    showNotification('Irrigation stopped', 'warning');
}

function contactSupport() {
    alert('📞 Support Team\n\nEmail: support@greenguard.ai\nPhone: +91 9000-000000\n\nWe will respond within 24 hours.');
}

// ========== CHATBOT FUNCTIONALITY ==========

let chatbotActive = false;

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbotActive = !chatbotActive;
    
    if (chatbotActive) {
        chatbot.classList.add('active');
    } else {
        chatbot.classList.remove('active');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatbot-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate bot response (in production, call API)
    setTimeout(() => {
        const response = generateChatResponse(message);
        addChatMessage(response, 'assistant');
    }, 500);
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

function addChatMessage(message, role) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${role}`;
    messageEl.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(messageEl);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateChatResponse(userMessage) {
    const responses = {
        'water': '💧 Water requirement depends on crop type, soil, and climate. Use our calculator for precise estimates!',
        'irrigation': '🚿 Irrigation timing depends on soil moisture. Most crops need watering when soil reaches 50% capacity.',
        'crop': '🌾 Which crop? Wheat, rice, tomato, potato? Tell me the crop and growth stage for recommendations.',
        'disease': '🦠 Crop diseases? Describe symptoms: yellowing leaves, spots, wilting? I can help diagnose!',
        'weather': '🌤️ Weather affects irrigation. Rain reduces water needs. Check daily forecasts for adjustments.',
        'fertilizer': '🌱 Fertilizer recommendations depend on soil test results. Consult local agricultural office.',
        'default': '🙏 I am Krishi Sahayak, your farming assistant! Ask about irrigation, crops, diseases, or weather.'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (let key in responses) {
        if (lowerMessage.includes(key)) {
            return responses[key];
        }
    }
    
    return responses['default'];
}

// ========== NOTIFICATIONS ==========

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== DASHBOARD UTILITIES ==========

function updateDashboardTime() {
    const timeEl = document.getElementById('update-time');
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = now.toLocaleTimeString();
    }
}

// Update time every 10 seconds
if (document.querySelector('.dashboard-page')) {
    setInterval(updateDashboardTime, 10000);
    updateDashboardTime();
}

// ========== UTILITY FUNCTIONS ==========

function formatDate(date) {
    return date.toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatTime(date) {
    return date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ========== LOCAL STORAGE FOR DASHBOARD STATE ==========

function saveFarmData(data) {
    localStorage.setItem('farmData', JSON.stringify(data));
}

function getFarmData() {
    const data = localStorage.getItem('farmData');
    return data ? JSON.parse(data) : null;
}

// ========== PAGE LOAD ANIMATIONS ==========

document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to page elements
    const elements = document.querySelectorAll('.card, .stat-card, .section');
    elements.forEach((el, index) => {
        el.style.animation = `slideUp 0.6s ease-out ${index * 0.1}s both`;
    });
});

// ========== RESPONSIVE SIDEBAR TOGGLE ==========

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
    }
}

// ========== FORM VALIDATION ==========

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#EF4444';
            isValid = false;
        } else {
            input.style.borderColor = '#E5E7EB';
        }
    });
    
    return isValid;
}

// ========== THEME TOGGLE (OPTIONAL DARK MODE) ==========

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// ========== SMOOTH SCROLL FOR NAVIGATION ==========

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== INTERSECTION OBSERVER FOR LAZY ANIMATIONS ==========

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// ========== SAMPLE DATA FOR DEMO ==========

const sampleFarmData = {
    fields: [
        {
            id: 1,
            name: 'Wheat Field',
            crop: 'wheat',
            area: 5,
            soilMoisture: 42,
            cropHealth: 88,
            nextIrrigation: '6 hours'
        },
        {
            id: 2,
            name: 'Tomato Field',
            crop: 'tomato',
            area: 3,
            soilMoisture: 65,
            cropHealth: 75,
            nextIrrigation: '2 days'
        }
    ],
    weather: {
        current: {
            temp: 28,
            condition: 'Sunny',
            humidity: 60
        },
        forecast: [
            { day: 'Tomorrow', temp: 26, condition: 'Partly Cloudy' },
            { day: 'Day 3', temp: 22, condition: 'Rainy' }
        ]
    }
};

// ========== EXPORT FUNCTIONS FOR HTML PAGES ==========

window.goToDashboard = goToDashboard;
window.viewCropDetails = viewCropDetails;
window.viewAnalytics = viewAnalytics;
window.startIrrigation = startIrrigation;
window.stopIrrigation = stopIrrigation;
window.contactSupport = contactSupport;
window.toggleChatbot = toggleChatbot;
window.sendChatMessage = sendChatMessage;
window.handleChatInput = handleChatInput;
window.showNotification = showNotification;

  }
});

/* ===== CORE LOGIC ===== */
function randUniform(a,b){ return a + Math.random()*(b-a); }
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

function generateSynthetic(days, p_rain, rain_max, et0_mean, et0_var){
  const rain=[], et0=[];
  for(let i=0;i<days;i++){
    rain.push(Math.random() < p_rain ? parseFloat(randUniform(2, rain_max).toFixed(1)) : 0);
    et0.push(parseFloat((et0_mean + randUniform(-et0_var, et0_var)).toFixed(2)));
  }
  return {rain, et0};
}

function simulate(params, weather){
  const days = params.horizon;
  const fc = params.fc, pwp = params.pwp;
  let S = params.s0;
  const AW = Math.max(0, fc - pwp);
  const trigger = pwp + params.trigger_frac * AW;
  const out = {day:[], rain:[], et0:[], etcrop:[], irrig:[], S:[]};
  let cumI=0, stressDays=0;
  for(let t=0;t<days;t++){
    const P = weather.rain[t] || 0;
    const ET0 = weather.et0[t] || params.et0_mean;
    const ETc = ET0 * params.kc;
    let I = 0;
    if(params.mode === 'rule'){
      const projected = clamp(S + P - ETc, 0, fc);
      if(projected < trigger){
        I = params.irrig_strategy === 'fixed' ? params.fixed_depth : Math.max(0, trigger - (S + P));
      }
    } else {
      let Ssim = S, breach=-1;
      for(let k=0;k<params.horizon - t;k++){
        const Pk = weather.rain[t+k]||0; const ETk = (weather.et0[t+k]||params.et0_mean)*params.kc;
        let Sn = clamp(Ssim + Pk - ETk, 0, fc);
        if(Sn < trigger){ breach = k; break; } Ssim = Sn;
      }
      if(breach === 0){
        if(params.irrig_strategy === 'fixed') I = params.fixed_depth;
        else if(params.irrig_strategy === 'fill') I = Math.max(0, trigger - (S + P));
        else {
          let need=0, Scheck = S + P;
          for(let k=0;k<params.horizon - t;k++){
            const ETk = (weather.et0[t+k]||params.et0_mean)*params.kc;
            if(Scheck < trigger){ need = Math.max(need, trigger - Scheck); Scheck = trigger; }
            Scheck = clamp(Scheck - ETk, 0, fc);
          }
          I = Math.min(need, Math.max(0, fc - (S+P)));
        }
      } else I = 0;
    }
    const applied = I * params.eff;
    let S_new = clamp(S + applied + P - ETc, 0, fc);
    out.day.push(t+1); out.rain.push(parseFloat(P.toFixed(2))); out.et0.push(parseFloat(ET0.toFixed(2)));
    out.etcrop.push(parseFloat(ETc.toFixed(2))); out.irrig.push(parseFloat(I.toFixed(2))); out.S.push(parseFloat(S_new.toFixed(2)));
    if(S_new < trigger) stressDays++;
    S = S_new; cumI += I;
  }
  return {out, cumI:parseFloat(cumI.toFixed(2)), AW, trigger, stressDays};
}

/* ===== 3D VIZ ===== */
let scene, camera, renderer, controls, layerMeshes=[];
const layers = 10;
const dryColor = 0xD9B08C, wetColor = 0x2FB1AC;

function init3D(){
  const container = document.getElementById('viz3d');
  container.innerHTML = '';
  renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
  renderer.setSize(420,420); renderer.setPixelRatio(window.devicePixelRatio||1);
  container.appendChild(renderer.domElement);
  scene = new THREE.Scene(); scene.background = new THREE.Color(document.documentElement.classList.contains('dark') ? 0x0f172a : 0xffffff);
  camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000); camera.position.set(2.2, 2.0, 2.2);
  controls = new THREE.OrbitControls(camera, renderer.domElement); controls.enableDamping=true; controls.target.set(0,0.5,0);
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const dir = new THREE.DirectionalLight(0xffffff, 0.5); dir.position.set(5,10,7); scene.add(dir);
  const totalH = 1.6; const layerH = totalH / layers; const w=0.7; const d=0.7;
  layerMeshes = [];
  for(let i=0;i<layers;i++){
    const g = new THREE.BoxGeometry(w, layerH*0.94, d);
    const m = new THREE.MeshStandardMaterial({color:dryColor, roughness:0.8});
    const mesh = new THREE.Mesh(g, m);
    mesh.position.y = -0.8 + layerH*(i+0.5);
    scene.add(mesh); layerMeshes.push(mesh);
  }
  animate3D();
}

function animate3D(){ requestAnimationFrame(animate3D); controls.update(); renderer.render(scene, camera); }

function hexLerp(a,b,t){
  const r1=(a>>16)&255,g1=(a>>8)&255,b1=a&255; const r2=(b>>16)&255,g2=(b>>8)&255,b2=b&255;
  const r=Math.round(r1+(r2-r1)*t), g=Math.round(g1+(g2-g1)*t), bl=Math.round(b1+(b2-b1)*t);
  return (r<<16)|(g<<8)|bl;
}

function update3DBySoil(S, fc){
  const f = clamp(S / fc, 0, 1);
  for(let i=0;i<layers;i++){
    const depthFactor = 1 - (i / (layers-1));
    const layerMoist = clamp(f * (0.6 + 0.4*depthFactor), 0, 1);
    const col = hexLerp(dryColor, wetColor, layerMoist);
    layerMeshes[i].material.color.setHex(col);
    layerMeshes[i].scale.y = 0.85 + 0.35*layerMoist;
  }
}

function drawPlot(sim){
  const r = sim.out; const days = r.day.map(d=>'Day '+d);
  const traceRain = {x:days,y:r.rain,name:'Rain',type:'bar',marker:{color:'#bfe7ff'}};
  const traceIrr = {x:days,y:r.irrig,name:'Irrigation',type:'bar',marker:{color:'#d0b8ff'}};
  const traceET = {x:days,y:r.etcrop,name:'ETc',type:'scatter',mode:'lines+markers',line:{color:'#ff8f4d'}};
  const traceS = {x:days,y:r.S,name:'Soil water',yaxis:'y2',type:'scatter',mode:'lines+markers',line:{color:'#16a34a', width:3}};
  const layout = {title:'Irrigation Schedule & Soil Dynamics', barmode:'overlay', xaxis:{title:'Day'}, yaxis:{title:'Depth (mm)'}, yaxis2:{title:'Soil water (mm)',overlaying:'y',side:'right'}, legend:{orientation:'h'}, margin:{t:40,l:50,r:60}};
  Plotly.newPlot('chart',[traceRain,traceIrr,traceET,traceS],layout,{responsive:true});
}

function updateTable(sim){
  const tbody = document.querySelector('#schedule_table tbody'); tbody.innerHTML='';
  const r = sim.out;
  for(let i=0;i<r.day.length;i++){
    const tr=document.createElement('tr');
    tr.innerHTML = `<td>${r.day[i]}</td><td>${r.rain[i].toFixed(2)}</td><td>${r.etcrop[i].toFixed(2)}</td><td><strong>${r.irrig[i].toFixed(2)}</strong></td><td>${r.S[i].toFixed(2)}</td>`;
    tbody.appendChild(tr);
  }
  document.getElementById('cumI').textContent = sim.cumI + ' mm';
  document.getElementById('stress').textContent = sim.stressDays;
}

let playTimer = null, currentIndex = 0;
function startAnimation(sim, speed){
  if(playTimer) clearInterval(playTimer);
  currentIndex = 0; updateFrame(sim, currentIndex);
  document.getElementById('status').textContent = '▶ Playing simulation...';
  playTimer = setInterval(()=>{ currentIndex++; if(currentIndex>=sim.out.day.length){ clearInterval(playTimer); playTimer=null; document.getElementById('status').textContent = '✓ Simulation complete'; return; } updateFrame(sim, currentIndex); }, speed);
}
function pauseAnimation(){ if(playTimer){ clearInterval(playTimer); playTimer=null; document.getElementById('status').textContent = '⏸ Paused'; } }
function stepAnimation(sim){ if(!playTimer){ currentIndex = Math.min(sim.out.day.length-1, currentIndex+1); updateFrame(sim, currentIndex); } }
function updateFrame(sim, idx){
  drawPlot(sim);
  const Sval = sim.out.S[idx]; update3DBySoil(Sval, parseFloat(document.getElementById('fc').value));
  const rows=document.querySelectorAll('#schedule_table tbody tr'); rows.forEach((r,i)=> r.style.background = (i===idx ? 'rgba(22,163,74,0.1)' : ''));
}

document.getElementById('startBtn').addEventListener('click',()=>{
  const status = document.getElementById('status');
  status.textContent = '⏳ Computing...';
  status.classList.add('loading');
  
  setTimeout(() => {
    const p = {
      horizon: parseInt(document.getElementById('horizon').value,10),
      fc: parseFloat(document.getElementById('fc').value),
      pwp: parseFloat(document.getElementById('pwp').value),
      s0: parseFloat(document.getElementById('s0').value),
      kc: parseFloat(document.getElementById('kc').value),
      et0_mean: parseFloat(document.getElementById('et0').value),
      et0_var: parseFloat(document.getElementById('et0_var').value),
      p_rain: parseFloat(document.getElementById('p_rain').value),
      rain_max: parseFloat(document.getElementById('rain_max').value),
      mode: document.getElementById('mode').value,
      trigger_frac: parseFloat(document.getElementById('trigger_frac').value),
      irrig_strategy: document.getElementById('irrig_strategy').value,
      fixed_depth: parseFloat(document.getElementById('fixed_depth').value),
      eff: parseFloat(document.getElementById('eff').value)
    };
    const weather = generateSynthetic(p.horizon, p.p_rain, p.rain_max, p.et0_mean, p.et0_var);
    const sim = simulate(p, weather);
    window._lastSim = sim; window._lastWeather = weather;
    drawPlot(sim); updateTable(sim); updateFrame(sim, 0);
    status.classList.remove('loading');
    status.textContent = '✓ Schedule computed. Click play to animate.';
    startAnimation(sim, 700);
  }, 100);
});

document.getElementById('pauseBtn').addEventListener('click', () => pauseAnimation());
document.getElementById('stepBtn').addEventListener('click', () => { if(window._lastSim) stepAnimation(window._lastSim); });

document.getElementById('downloadCSV').addEventListener('click', ()=>{
  if(!window._lastSim){ alert('Run simulation first'); return; }
  const r = window._lastSim.out; const hdr=['Day','Rain_mm','ET0_mm','ETc_mm','Irrigation_mm','SoilWater_mm']; const rows=[hdr.join(',')];
  for(let i=0;i<r.day.length;i++) rows.push([r.day[i], r.rain[i].toFixed(2), (window._lastWeather.et0[i]||0).toFixed(2), r.etcrop[i].toFixed(2), r.irrig[i].toFixed(2), r.S[i].toFixed(2)].join(','));
  const csv = rows.join('\n'); const blob = new Blob([csv], {type:'text/csv'}); const url = URL.createObjectURL(blob);
  const a=document.createElement('a'); a.href=url; a.download='schedule.csv'; a.click(); URL.revokeObjectURL(url);
});

initTheme();
init3D();
document.getElementById('startBtn').click();