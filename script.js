// ================================
// FitPulse - Tu Rutina Diaria
// ================================

// Datos de rutinas optimizados para Ectomorfos (Foco: Hipertrofia + Planche + Postura)
// Equipo: Banda, Mancuernas 1kg, Tabla de flexiones, Pared.
const WORKOUTS = {
  0: { // Domingo
    type: 'rest',
    name: 'Movilidad Postural + Técnica Handstand',
    emoji: '🧘',
    exercises: [
      { name: 'Movilidad de muñecas', detail: '5 min', emoji: '🖐️' },
      { name: 'Práctica de Handstand en pared', detail: '10 min técnico', emoji: '🤸' },
      { name: 'Estiramiento torácico', detail: '3×30 s', emoji: '🐈' }
    ]
  },

  1: { // Lunes
    type: 'workout',
    name: 'Empuje A: Fuerza & Planche Lean',
    emoji: '💪',
    exercises: [
      { name: 'Planche Lean (Protracción máx)', detail: '4×20 s', emoji: '📐' },
      { name: 'Pseudo Planche Push-ups', detail: '3×8–10 (Tempo 3-1-1-0)', emoji: '🚀' },
      { name: 'Pike Push-ups (Pies en suelo)', detail: '3×10', emoji: '🔻' },
      { name: 'Flexiones en tabla (Agarre ancho)', detail: '3×AMRAP', emoji: '🫸' },
      { name: 'Hollow Body Hold', detail: '4×30 s', emoji: '🧱' }
    ]
  },

  2: { // Martes
    type: 'workout',
    name: 'Piernas Explosivas + Core',
    emoji: '🦵',
    exercises: [
      { name: 'Bulgarian Split Squat', detail: '4×10/pierna', emoji: '🪜' },
      { name: 'Zancadas explosivas', detail: '3×12/pierna', emoji: '💥' },
      { name: 'Puente de glúteo unipodal', detail: '3×15/pierna', emoji: '🌉' },
      { name: 'Elevación de talones', detail: '4×20', emoji: '🩰' },
      { name: 'Compresión abdominal (sentado)', detail: '3×10 pulsos', emoji: '📉' }
    ]
  },

  3: { // Miércoles
    type: 'workout',
    name: 'Empuje B: Hombros & Postura',
    emoji: '⚙️',
    exercises: [
      { name: 'Wall Handstand Hold', detail: '4×30–45 s', emoji: '🧱' },
      { name: 'Scapular Push-ups con banda', detail: '3×15', emoji: '📎' },
      { name: 'Flexiones Diamante (en tabla)', detail: '3×10–12', emoji: '💎' },
      { name: 'Vuelos laterales (Manc. 1kg)', detail: '3×20 (lento)', emoji: '🦅' },
      { name: 'Y-W-T Extensions (Postura)', detail: '3×12', emoji: '👐' }
    ]
  },

  4: { // Jueves
    type: 'workout',
    name: 'Full Body Híbrido + Hipertrofia',
    emoji: '🔥',
    exercises: [
      { name: 'Planche Lean con banda', detail: '4×20 s', emoji: '📐' },
      { name: 'Flexiones Arqueras', detail: '3×8/lado', emoji: '🏹' },
      { name: 'Sentadilla Cosaca', detail: '3×12', emoji: '🦀' },
      { name: 'Superman Holds (Espalda baja)', detail: '3×30 s', emoji: '🦸' },
      { name: 'Hollow Rocks', detail: '3×20', emoji: '🔄' }
    ]
  },

  5: { // Viernes
    type: 'rest',
    name: 'Descanso Total / Recuperación',
    emoji: '😴',
    detail: 'Prioriza sueño (9h) y superávit calórico.'
  },

  6: { // Sábado
    type: 'workout',
    name: 'Día Clave: Planche & Volumen Upper',
    emoji: '🚀',
    exercises: [
      { name: 'Planche Lean (Máxima inclinación)', detail: '5×15 s', emoji: '📐' },
      { name: 'Pseudo Planche Push-ups', detail: '4×8', emoji: '🏗️' },
      { name: 'Pike Push-ups (Pies elevados)', detail: '3×8', emoji: '🔻' },
      { name: 'Flexiones en tabla (Codos pegados)', detail: '3×Max', emoji: '🦾' },
      { name: 'Band Pull-aparts (Hombro post.)', detail: '4×20', emoji: '🪢' }
    ]
  }
};

// Desayunos por día
// Plan de alimentación de alta densidad calórica para Ectomorfos
// Objetivo: Ganar masa muscular rápida (Superávit Calórico)
const MEALS = {
  0: { // Domingo: Recuperación
    breakfast: { name: 'Tostada Francesa Pro', desc: '2 rebanadas pan molde + 2 huevos + chorro leche entera + canela + miel + nueces.', protein: 25, carbs: 65, fat: 22, kcal: 558 },
    lunch: { name: 'Yogur Griego con Granola', desc: '1 yogur griego + puñado grande de granola + 1 cda de mantequilla de cacahuete.', protein: 18, carbs: 40, fat: 25, kcal: 457 },
    dinner: { name: 'Pizza Casera de Pollo (Sartén)', desc: 'Tortilla de trigo grande + tomate + queso mozzarella + pollo desmenuzado + orégano.', protein: 35, carbs: 30, fat: 20, kcal: 440 }
  },

  1: { // Lunes: Empuje A (Fuerza)
    breakfast: { name: 'Tortitas de Avena y Plátano', desc: '60g avena + 1 plátano + 2 huevos + miel. Batir y a la sartén.', protein: 26, carbs: 75, fat: 18, kcal: 566 },
    lunch: { name: 'Batido Gainer Casero', desc: '400ml leche entera + 1 plátano + 2 cdas mantequilla cacahuete + cacao.', protein: 30, carbs: 55, fat: 35, kcal: 655 },
    dinner: { name: 'Quesadillas de Pollo Airfryer', desc: '2 tortillas trigo + 150g pollo + mucho queso + especias. 8 min a 200°C.', protein: 45, carbs: 42, fat: 28, kcal: 600 }
  },

  2: { // Martes: Piernas
    breakfast: { name: 'Sándwich Club Proteico', desc: '3 pisos de pan + 2 huevos fritos + 1 loncha queso + tomate + aguacate.', protein: 28, carbs: 50, fat: 30, kcal: 582 },
    lunch: { name: 'Bowl de Frutos Secos y Fruta', desc: 'Puñado grande de nueces + 1 manzana + 1 yogur natural con miel.', protein: 15, carbs: 45, fat: 32, kcal: 528 },
    dinner: { name: 'Fajitas de Ternera Rápidas', desc: '150g ternera tiras + cebolla + pimiento + guacamole. Saltear todo.', protein: 38, carbs: 35, fat: 25, kcal: 517 }
  },

  3: { // Miércoles: Empuje B (Hombros)
    breakfast: { name: 'Bowl de Yogur y Chía', desc: '2 yogures griegos + 30g chía + avena seca + frutos rojos + miel.', protein: 22, carbs: 55, fat: 24, kcal: 524 },
    lunch: { name: 'Sándwich de Crema de Cacahuete', desc: '2 rebanadas pan integral + 2 cdas generosas de crema + 1 plátano laminado.', protein: 18, carbs: 60, fat: 28, kcal: 564 },
    dinner: { name: 'Nuggets de Pollo "Fit" Airfryer', desc: 'Pechuga troceada rebozada en copos de maíz machacados. 12 min a 200°C.', protein: 42, carbs: 30, fat: 12, kcal: 396 }
  },

  4: { // Jueves: Full Body
    breakfast: { name: 'Huevos Revueltos Potentes', desc: '3 huevos + chorro leche + 50g queso + 2 tostadas con aceite de oliva.', protein: 32, carbs: 40, fat: 35, kcal: 603 },
    lunch: { name: 'Batido de Chocolate y Avena', desc: '300ml leche + 40g avena + cacao + puñado de almendras trituradas.', protein: 22, carbs: 48, fat: 26, kcal: 514 },
    dinner: { name: 'Patatas con Queso y Bacon', desc: 'Patata cocida en cubos (Airfryer) + tiras pollo + queso fundido.', protein: 35, carbs: 50, fat: 22, kcal: 538 }
  },

  5: { // Viernes: DESCANSO TOTAL
    breakfast: { name: 'Porridge de Avena y Nutella', desc: 'Avena cocida con leche + 1 cda cacao/avellana + nueces + semillas.', protein: 16, carbs: 65, fat: 20, kcal: 504 },
    lunch: { name: 'Bocadillo de Atún y Huevo', desc: 'Pan de barra + 2 latas atún + 1 huevo cocido + mayonesa.', protein: 35, carbs: 50, fat: 22, kcal: 538 },
    dinner: { name: 'Hamburguesa de Pollo Casera', desc: 'Pan burger + 150g pollo + queso + aguacate + tomate.', protein: 40, carbs: 40, fat: 25, kcal: 545 }
  },

  6: { // Sábado: Día Clave Planche
    breakfast: { name: 'Tostadas de Aguacate y Salmón', desc: '2 tostadas grandes + 1 aguacate entero + salmón ahumado o 2 huevos.', protein: 24, carbs: 45, fat: 32, kcal: 564 },
    lunch: { name: 'Bowl Gainer Express', desc: '1 plátano troceado + 1 yogur griego + puñado de cereales + miel.', protein: 14, carbs: 60, fat: 12, kcal: 404 },
    dinner: { name: 'Burrito de Arroz y Pollo', desc: 'Tortilla grande + arroz sobrado comida + pollo + queso. Tostar en sartén.', protein: 38, carbs: 55, fat: 18, kcal: 534 }
  }
};

// Frases motivacionales
const QUOTES = [
  "El único mal entrenamiento es el que no hiciste.",
  "Tu cuerpo puede aguantar casi todo. Es tu mente la que tienes que convencer.",
  "No cuentes los días, haz que los días cuenten.",
  "El dolor que sientes hoy será la fuerza que sentirás mañana.",
  "Suda ahora, brilla después. ✨",
  "Cada repetición te acerca a tu mejor versión.",
  "No se trata de ser el mejor, se trata de ser mejor que ayer.",
  "El éxito empieza con la decisión de intentarlo.",
  "Tu único límite eres tú mismo.",
  "Entrena como una bestia, luce como una bella. 🔥",
  "Los campeones siguen cuando ya no pueden más.",
  "Hoy duele, mañana lo agradecerás.",
  "La disciplina es el puente entre metas y logros.",
  "No pares cuando estés cansado, para cuando hayas terminado.",
  "El gimnasio es mi terapia. 💪"
];

// ================================
// Estado de la App
// ================================

let state = {
  selectedDate: new Date(),
  weekOffset: 0,
  currentSection: 'workout',
  completedDays: {}, // { 'YYYY-MM-DD': { exercises: [true, false, ...], allDone: bool } }
  streak: 0
};

// ================================
// Utilidades
// ================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatDateKey(date) {
  return date.toISOString().split('T')[0];
}

function getDayName(dayIndex) {
  return ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'][dayIndex];
}

function getMonthName(monthIndex) {
  return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][monthIndex];
}

function isSameDay(d1, d2) {
  return d1.getDate() === d2.getDate() && 
         d1.getMonth() === d2.getMonth() && 
         d1.getFullYear() === d2.getFullYear();
}

function getWeekDays(offset = 0) {
  const today = new Date();
  const startOfWeek = new Date(today);
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Empezar en Lunes
  startOfWeek.setDate(today.getDate() - diff + (offset * 7));
  
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    days.push(day);
  }
  return days;
}

// ================================
// LocalStorage
// ================================

function saveState() {
  const data = {
    completedDays: state.completedDays,
    streak: state.streak,
    lastVisit: formatDateKey(new Date())
  };
  localStorage.setItem('fitpulse_data', JSON.stringify(data));
}

function loadState() {
  try {
    const raw = localStorage.getItem('fitpulse_data');
    if (!raw) return;
    const data = JSON.parse(raw);
    state.completedDays = data.completedDays || {};
    state.streak = data.streak || 0;
    
    // Calcular racha real
    calculateStreak();
  } catch (e) {
    console.log('No saved data found');
  }
}

function calculateStreak() {
  let streak = 0;
  const today = new Date();
  let checkDate = new Date(today);
  
  // Si hoy no está completado, empezar desde ayer
  const todayKey = formatDateKey(today);
  if (!state.completedDays[todayKey]?.allDone) {
    checkDate.setDate(checkDate.getDate() - 1);
  }
  
  // Contar días consecutivos hacia atrás
  while (true) {
    const key = formatDateKey(checkDate);
    const dayOfWeek = checkDate.getDay();
    
    // Si es día de descanso (domingo), no rompe la racha
    if (dayOfWeek === 0) {
      checkDate.setDate(checkDate.getDate() - 1);
      continue;
    }
    
    if (state.completedDays[key]?.allDone) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
    
    // Límite de seguridad
    if (streak > 365) break;
  }
  
  state.streak = streak;
}

// ================================
// Toast
// ================================

function toast(icon, msg) {
  const el = $('#toast');
  $('#toastIcon').textContent = icon;
  $('#toastMsg').textContent = msg;
  el.classList.remove('hidden');
  
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.add('hidden'), 2000);
}

// ================================
// Confetti
// ================================

function launchConfetti() {
  const container = $('#confetti');
  const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7', '#ff9f43'];
  
  for (let i = 0; i < 50; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 0.5 + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(piece);
    
    setTimeout(() => piece.remove(), 3500);
  }
}

// ================================
// Renderizado
// ================================

function renderWeek() {
  const days = getWeekDays(state.weekOffset);
  const today = new Date();
  const container = $('#weekDays');
  
  // Actualizar título
  const firstDay = days[0];
  const lastDay = days[6];
  let title = '';
  if (state.weekOffset === 0) {
    title = 'Esta semana';
  } else if (state.weekOffset === -1) {
    title = 'Semana pasada';
  } else if (state.weekOffset === 1) {
    title = 'Próxima semana';
  } else {
    title = `${firstDay.getDate()} - ${lastDay.getDate()} ${getMonthName(lastDay.getMonth())}`;
  }
  $('#weekTitle').textContent = title;
  
  container.innerHTML = days.map(day => {
    const key = formatDateKey(day);
    const isToday = isSameDay(day, today);
    const isSelected = isSameDay(day, state.selectedDate);
    const isCompleted = state.completedDays[key]?.allDone;
    
    let classes = 'day-btn';
    if (isToday) classes += ' today';
    if (isSelected) classes += ' selected';
    if (isCompleted) classes += ' completed';
    
    return `
      <button class="${classes}" data-date="${key}">
        <span class="day-name">${getDayName(day.getDay())}</span>
        <span class="day-num">${day.getDate()}</span>
        <span class="day-dot"></span>
      </button>
    `;
  }).join('');
  
  // Event listeners
  container.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dateStr = btn.dataset.date;
      state.selectedDate = new Date(dateStr + 'T12:00:00');
      renderWeek();
      renderDayContent();
    });
  });
}

function renderDayContent() {
  const dayOfWeek = state.selectedDate.getDay();
  const workout = WORKOUTS[dayOfWeek];
  const meals = MEALS[dayOfWeek];
  const dateKey = formatDateKey(state.selectedDate);
  
  // Inicializar estado del día si no existe
  if (!state.completedDays[dateKey] && workout.type === 'workout') {
    state.completedDays[dateKey] = {
      exercises: new Array(workout.exercises.length).fill(false),
      allDone: false
    };
  }
  
  const dayData = state.completedDays[dateKey] || { exercises: [], allDone: false };
  const doneCount = dayData.exercises.filter(Boolean).length;
  const totalCount = workout.exercises?.length || 0;
  
  const container = $('#dayContent');
  
  // Sección Workout
  let workoutHTML = '';
  if (workout.type === 'rest') {
    workoutHTML = `
      <div class="section-card">
        <div class="rest-day">
          <span class="rest-emoji">${workout.emoji}</span>
          <h3 class="rest-title">${workout.name}</h3>
          <p class="rest-subtitle">Tu cuerpo necesita recuperarse. ¡Disfruta el día!</p>
        </div>
      </div>
    `;
  } else {
    workoutHTML = `
      <div class="section-card">
        <div class="section-header">
          <h3 class="section-title">
            <span class="section-icon">${workout.emoji}</span>
            ${workout.name}
          </h3>
          <span class="section-badge ${dayData.allDone ? 'completed' : ''}">${doneCount}/${totalCount}</span>
        </div>
        <div class="exercise-list">
          ${workout.exercises.map((ex, i) => `
            <div class="exercise-item ${dayData.exercises[i] ? 'done' : ''}" data-index="${i}">
              <div class="exercise-check">${dayData.exercises[i] ? '✓' : ''}</div>
              <div class="exercise-info">
                <p class="exercise-name">${ex.name}</p>
                <p class="exercise-detail">${ex.detail}</p>
              </div>
              <span class="exercise-emoji">${ex.emoji}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Sección Food
  const foodHTML = `
    <div class="section-card">
      <div class="section-header">
        <h3 class="section-title">
          <span class="section-icon">🍽️</span>
          Comidas del día
        </h3>
      </div>
      
      <div class="meal-card">
        <div class="meal-header">
          <span class="meal-icon">🌅</span>
          <span class="meal-type">Desayuno</span>
        </div>
        <p class="meal-name">${meals.breakfast.name}</p>
        <p class="meal-desc">${meals.breakfast.desc}</p>
        ${meals.breakfast.protein > 0 ? `
          <div class="meal-macros">
            <span class="macro protein">🥩 ${meals.breakfast.protein}g prot</span>
            <span class="macro carbs">🍞 ${meals.breakfast.carbs}g carbs</span>
            <span class="macro fat">🥑 ${meals.breakfast.fat}g grasa</span>
            <span class="macro calories">🔥 ${meals.breakfast.kcal} kcal</span>
          </div>
        ` : ''}
      </div>
      
      <div class="meal-card">
        <div class="meal-header">
          <span class="meal-icon">☀️</span>
          <span class="meal-type">Almuerzo</span>
        </div>
        <p class="meal-name">${meals.lunch.name}</p>
        <p class="meal-desc">${meals.lunch.desc}</p>
        ${meals.lunch.protein > 0 ? `
          <div class="meal-macros">
            <span class="macro protein">🥩 ${meals.lunch.protein}g prot</span>
            <span class="macro carbs">🍞 ${meals.lunch.carbs}g carbs</span>
            <span class="macro fat">🥑 ${meals.lunch.fat}g grasa</span>
            <span class="macro calories">🔥 ${meals.lunch.kcal} kcal</span>
          </div>
        ` : ''}
      </div>
          
      <div class="meal-card">
        <div class="meal-header">
          <span class="meal-icon">🌙</span>
          <span class="meal-type">Cena</span>
        </div>
        <p class="meal-name">${meals.dinner.name}</p>
        <p class="meal-desc">${meals.dinner.desc}</p>
        ${meals.dinner.protein > 0 ? `
          <div class="meal-macros">
            <span class="macro protein">🥩 ${meals.dinner.protein}g prot</span>
            <span class="macro carbs">🍞 ${meals.dinner.carbs}g carbs</span>
            <span class="macro fat">🥑 ${meals.dinner.fat}g grasa</span>
            <span class="macro calories">🔥 ${meals.dinner.kcal} kcal</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
  
  // Sección Progress
  const totalDaysCompleted = Object.values(state.completedDays).filter(d => d.allDone).length;
  const totalExercises = Object.values(state.completedDays).reduce((acc, d) => acc + d.exercises.filter(Boolean).length, 0);
  
  // Generar mini calendario del mes
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const startPadding = (firstDayOfMonth.getDay() + 6) % 7; // Ajustar para empezar en Lunes
  
  let monthCalendar = '';
  for (let i = 0; i < startPadding; i++) {
    monthCalendar += '<div class="month-day"></div>';
  }
  for (let d = 1; d <= lastDayOfMonth.getDate(); d++) {
    const date = new Date(today.getFullYear(), today.getMonth(), d);
    const key = formatDateKey(date);
    const isCompleted = state.completedDays[key]?.allDone;
    const isToday = d === today.getDate();
    let classes = 'month-day';
    if (isCompleted) classes += ' completed';
    if (isToday) classes += ' today';
    monthCalendar += `<div class="${classes}">${d}</div>`;
  }
  
  const progressHTML = `
    <div class="section-card">
      <div class="section-header">
        <h3 class="section-title">
          <span class="section-icon">📈</span>
          ${getMonthName(today.getMonth())} ${today.getFullYear()}
        </h3>
      </div>
      
      <div class="progress-grid">
        <div class="stat-card">
          <div class="stat-value">${state.streak}</div>
          <div class="stat-label">🔥 Racha actual</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalDaysCompleted}</div>
          <div class="stat-label">📅 Días completados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalExercises}</div>
          <div class="stat-label">💪 Ejercicios hechos</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${Math.round((totalDaysCompleted / today.getDate()) * 100)}%</div>
          <div class="stat-label">🎯 Consistencia</div>
        </div>
      </div>
      
      <div class="month-calendar">
        ${monthCalendar}
      </div>
    </div>
  `;
  
  container.innerHTML = `
    <div id="sectionWorkout" class="content-section ${state.currentSection === 'workout' ? 'active' : ''}">
      ${workoutHTML}
    </div>
    <div id="sectionFood" class="content-section ${state.currentSection === 'food' ? 'active' : ''}">
      ${foodHTML}
    </div>
    <div id="sectionProgress" class="content-section ${state.currentSection === 'progress' ? 'active' : ''}">
      ${progressHTML}
    </div>
  `;
  
  // Event listeners para ejercicios
  if (workout.type === 'workout') {
    container.querySelectorAll('.exercise-item').forEach(item => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        toggleExercise(dateKey, index);
      });
    });
  }
}

function toggleExercise(dateKey, index) {
  if (!state.completedDays[dateKey]) return;
  
  const dayData = state.completedDays[dateKey];
  dayData.exercises[index] = !dayData.exercises[index];
  
  const allDone = dayData.exercises.every(Boolean);
  const wasAllDone = dayData.allDone;
  dayData.allDone = allDone;
  
  // Celebración si completa todo
  if (allDone && !wasAllDone) {
    launchConfetti();
    toast('🎉', '¡Entrenamiento completado!');
    calculateStreak();
    updateStreakDisplay();
  } else if (dayData.exercises[index]) {
    toast('💪', '¡Sigue así!');
  }
  
  saveState();
  renderWeek();
  renderDayContent();
}

function updateStreakDisplay() {
  $('#streakCount').textContent = state.streak;
}

function updateQuote() {
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  $('#motivationText').textContent = `"${randomQuote}"`;
}

function renderStatsModal() {
  const body = $('#statsBody');
  const today = new Date();
  const totalDaysCompleted = Object.values(state.completedDays).filter(d => d.allDone).length;
  const totalExercises = Object.values(state.completedDays).reduce((acc, d) => acc + d.exercises.filter(Boolean).length, 0);
  
  body.innerHTML = `
    <div class="progress-grid">
      <div class="stat-card">
        <div class="stat-value">${state.streak}</div>
        <div class="stat-label">🔥 Racha actual</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalDaysCompleted}</div>
        <div class="stat-label">📅 Días completados</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalExercises}</div>
        <div class="stat-label">💪 Ejercicios hechos</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${Math.round((totalDaysCompleted / Math.max(today.getDate(), 1)) * 100)}%</div>
        <div class="stat-label">🎯 Consistencia mensual</div>
      </div>
    </div>
    <p style="text-align: center; color: var(--text-muted); margin-top: 20px; font-size: 0.9rem;">
      ¡Cada día cuenta! Sigue así 💪
    </p>
  `;
}

// ================================
// Event Listeners
// ================================

function init() {
  loadState();
  
  // Render inicial
  renderWeek();
  renderDayContent();
  updateStreakDisplay();
  updateQuote();
  
  // Navegación semanal
  $('#prevWeek').addEventListener('click', () => {
    state.weekOffset--;
    renderWeek();
  });
  
  $('#nextWeek').addEventListener('click', () => {
    state.weekOffset++;
    renderWeek();
  });
  
  // Navegación inferior
  $$('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      state.currentSection = section;
      
      // Actualizar botones activos
      $$('.nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Mostrar sección
      $$('.content-section').forEach(s => s.classList.remove('active'));
      $(`#section${section.charAt(0).toUpperCase() + section.slice(1)}`).classList.add('active');
    });
  });
  
  // Nueva frase
  $('#newQuoteBtn').addEventListener('click', () => {
    updateQuote();
    $('#newQuoteBtn').style.transform = 'scale(0.9) rotate(180deg)';
    setTimeout(() => {
      $('#newQuoteBtn').style.transform = '';
    }, 300);
  });
  
  // Modal de estadísticas
  $('#statsBtn').addEventListener('click', () => {
    renderStatsModal();
    $('#statsModal').classList.remove('hidden');
  });
  
  $('#closeStats').addEventListener('click', () => {
    $('#statsModal').classList.add('hidden');
  });
  
  $('.modal-backdrop').addEventListener('click', () => {
    $('#statsModal').classList.add('hidden');
  });
}

// Iniciar app cuando cargue el DOM
document.addEventListener('DOMContentLoaded', init);
