// ================================
// FitPulse - Reto +3kg (Foco: Alimentacion)
// ================================

// Rutinas de referencia (ahora gestionadas por tu companero de entreno).
// Se muestran solo como consulta informativa, sin seguimiento de "completado".
const WORKOUTS = {
  0: { // Domingo
    type: 'rest',
    name: 'Movilidad Postural + Tecnica Handstand',
    emoji: '🧘',
    exercises: [
      { name: 'Movilidad de munecas', detail: '5 min', emoji: '🖐️' },
      { name: 'Practica de Handstand en pared', detail: '10 min tecnico', emoji: '🤸' },
      { name: 'Estiramiento toracico', detail: '3×30 s', emoji: '🐈' }
    ]
  },

  1: { // Lunes
    type: 'workout',
    name: 'Espalda-Biceps',
    emoji: '💪',
    exercises: [
      { name: 'Planche Lean (Protraccion max)', detail: '4×20 s', emoji: '📐' },
      { name: 'Pseudo Planche Push-ups', detail: '3×8-10 (Tempo 3-1-1-0)', emoji: '🚀' },
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
      { name: 'Puente de gluteo unipodal', detail: '3×15/pierna', emoji: '🌉' },
      { name: 'Elevacion de talones', detail: '4×20', emoji: '🩰' },
      { name: 'Compresion abdominal (sentado)', detail: '3×10 pulsos', emoji: '📉' }
    ]
  },

  3: { // Miercoles
    type: 'workout',
    name: 'Pierna',
    emoji: '⚙️',
    exercises: [
      { name: 'Wall Handstand Hold', detail: '4×30-45 s', emoji: '🧱' },
      { name: 'Scapular Push-ups con banda', detail: '3×15', emoji: '📎' },
      { name: 'Flexiones Diamante (en tabla)', detail: '3×10-12', emoji: '💎' },
      { name: 'Vuelos laterales (Manc. 1kg)', detail: '3×20 (lento)', emoji: '🦅' },
      { name: 'Y-W-T Extensions (Postura)', detail: '3×12', emoji: '👐' }
    ]
  },

  4: { // Jueves
    type: 'workout',
    name: 'Full Body Hibrido + Hipertrofia',
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
    type: 'workout',
    name: 'Dia Clave: Planche & Volumen Upper',
    emoji: '🚀',
    exercises: [
      { name: 'Planche Lean (Maxima inclinacion)', detail: '5×15 s', emoji: '📐' },
      { name: 'Pseudo Planche Push-ups', detail: '4×8', emoji: '🏗️' },
      { name: 'Pike Push-ups (Pies elevados)', detail: '3×8', emoji: '🔻' },
      { name: 'Flexiones en tabla (Codos pegados)', detail: '3×Max', emoji: '🦾' },
      { name: 'Band Pull-aparts (Hombro post.)', detail: '4×20', emoji: '🪢' }
    ]
  }
};

  6: { // Sabado
    type: 'rest',
    name: 'Descanso Total / Recuperacion',
    emoji: '😴',
    detail: 'Prioriza sueno (9h) y superavit calorico.'
  }
  },

// Plan de alimentacion de alta densidad calorica - Reto +3kg (Ectomorfo)
// 4 comidas al dia: Desayuno, Almuerzo, Merienda y Cena.
const MEALS = {
  0: { // Domingo (Descanso)
    breakfast: { name: 'Tostada Francesa Pro', desc: '2 rebanadas de pan de molde pasadas por 2 huevos, leche y canela, con miel y nueces.', protein: 24, carbs: 62, fat: 24, kcal: 560 },
    lunch: { name: 'Yogur Griego con Granola', desc: '1 yogur griego grande + granola + 1 cda de mantequilla de cacahuete.', protein: 20, carbs: 48, fat: 22, kcal: 470 },
    snack: { name: 'Sandwich de Queso de Cabra y Miel', desc: '2 rebanadas de pan de molde + rulo de cabra + miel a la sarten.', protein: 18, carbs: 40, fat: 24, kcal: 460 },
    dinner: { name: 'Pizza Casera de Pollo (Sarten/Airfryer)', desc: 'Tortilla de trigo o pita abierta + tomate + mozzarella + 100-150g pollo + oregano.', protein: 38, carbs: 38, fat: 22, kcal: 510 }
  },

  1: { // Lunes
    breakfast: { name: 'Tortitas de Avena y Platano', desc: '60g avena + 1 platano + 2 huevos + leche entera + miel. Batir y a la sarten.', protein: 28, carbs: 78, fat: 16, kcal: 570 },
    lunch: { name: 'Batido Gainer Casero', desc: '400ml leche entera + 1 platano + 2 cdas de crema de cacahuete + avena + cacao.', protein: 32, carbs: 60, fat: 34, kcal: 680 },
    snack: { name: 'Pita de Atun y Queso', desc: '1 pan de pita + 2 latas de atun + queso mozzarella. Airfryer 8 min.', protein: 45, carbs: 35, fat: 20, kcal: 490 },
    dinner: { name: 'Quesadillas de Pollo Airfryer', desc: '2 tortillas de trigo o pitas + 150g pechuga de pollo + mucho queso + especias.', protein: 48, carbs: 40, fat: 26, kcal: 570 }
  },

  2: { // Martes
    breakfast: { name: 'Sandwich Club Proteico', desc: '3 pisos de pan + 2 huevos fritos + 1 loncha de queso + tomate + aguacate.', protein: 30, carbs: 48, fat: 32, kcal: 590 },
    lunch: { name: 'Bowl de Yogur Potente', desc: '2 yogures griegos + punado grande de nueces + 1 manzana + miel.', protein: 22, carbs: 45, fat: 28, kcal: 510 },
    snack: { name: 'Pita-Pizza Express', desc: 'Pan de pita + tomate frito + 100g pollo + queso. Airfryer.', protein: 35, carbs: 38, fat: 18, kcal: 460 },
    dinner: { name: 'Fajitas de Ternera Rapidas', desc: '150g ternera en tiras + cebolla + pimiento + guacamole + pan de pita o tortillas.', protein: 40, carbs: 45, fat: 26, kcal: 560 }
  },

  3: { // Miercoles
    breakfast: { name: 'Bowl de Yogur y Chia', desc: '2 yogures griegos + 30g chia + avena seca + frutos secos + miel.', protein: 26, carbs: 55, fat: 26, kcal: 560 },
    lunch: { name: 'Sandwich de Crema de Cacahuete y Platano', desc: '2 rebanadas de pan o pita tostada + 2 cdas de crema de cacahuete + 1 platano.', protein: 18, carbs: 62, fat: 28, kcal: 570 },
    snack: { name: 'Nuggets de Pollo "Fit" Airfryer', desc: 'Pechuga en dados, empanada con copos de maiz machacados y huevo.', protein: 42, carbs: 32, fat: 12, kcal: 400 },
    dinner: { name: 'Pitas de Carne Picada', desc: '150g carne picada de ternera + queso mozzarella + 2 panes de pita. Airfryer.', protein: 45, carbs: 42, fat: 30, kcal: 610 }
  },

  4: { // Jueves
    breakfast: { name: 'Huevos Revueltos Potentes', desc: '3 huevos + chorrito de leche + 50g queso fundido + 2 tostadas o pita con aceite.', protein: 32, carbs: 40, fat: 35, kcal: 600 },
    lunch: { name: 'Batido de Chocolate y Avena', desc: '300ml leche entera + 40g avena + cacao + punado de almendras trituradas.', protein: 22, carbs: 50, fat: 26, kcal: 520 },
    snack: { name: 'Sandwich de Atun y Huevo', desc: '2 rebanadas de pan + 1 lata de atun + 1 huevo cocido + mayonesa.', protein: 30, carbs: 35, fat: 20, kcal: 440 },
    dinner: { name: 'Patatas con Queso y Bacon (Airfryer)', desc: '2 patatas en cubos con aceite + tiras de pollo + bacon + queso fundido.', protein: 36, carbs: 55, fat: 24, kcal: 580 }
  },

  5: { // Viernes (Descanso)
    breakfast: { name: 'Porridge de Avena y Nutella', desc: 'Avena cocida con leche entera + 1 cda grande de Nutella + nueces + semillas.', protein: 18, carbs: 68, fat: 22, kcal: 530 },
    lunch: { name: 'Bocadillo de Atun Completo', desc: 'Pan de barra o 2 pitas + 2 latas de atun + 1 huevo cocido + mayonesa.', protein: 38, carbs: 52, fat: 22, kcal: 560 },
    snack: { name: 'Batido Express', desc: '350ml leche entera + 1 yogur griego + 1 platano + 1 cda de crema de cacahuete.', protein: 24, carbs: 48, fat: 20, kcal: 480 },
    dinner: { name: 'Hamburguesa de Pollo Casera', desc: 'Pan burger + hamburguesa de pollo de 150g + queso + aguacate + tomate.', protein: 42, carbs: 42, fat: 28, kcal: 580 }
  },

  6: { // Sabado (Descanso)
    breakfast: { name: 'Tostadas de Aguacate y Salmon o Huevo', desc: '2 tostadas o pita + 1 aguacate entero + salmon ahumado o 2 huevos.', protein: 26, carbs: 46, fat: 34, kcal: 580 },
    lunch: { name: 'Bowl Gainer Express', desc: '1 platano + 1 yogur griego + punado de granola o cereales + miel.', protein: 16, carbs: 62, fat: 14, kcal: 430 },
    snack: { name: 'Pita de Jamon Serrano y Queso', desc: 'Pan de pita + aceite de oliva + jamon serrano + queso semicurado. Airfryer.', protein: 28, carbs: 32, fat: 24, kcal: 460 },
    dinner: { name: 'Burrito de Arroz y Pollo', desc: 'Tortilla grande + arroz cocido + 150g pollo + mucho queso. Tostado en sarten.', protein: 40, carbs: 58, fat: 20, kcal: 560 }
  }
};

// Frases motivacionales
const QUOTES = [
  "El unico mal entrenamiento es el que no hiciste.",
  "Tu cuerpo puede aguantar casi todo. Es tu mente la que tienes que convencer.",
  "No cuentes los dias, haz que los dias cuenten.",
  "Suda ahora, brilla despues. ✨",
  "Cada comida es un ladrillo mas hacia tu meta de +3kg. 🍽️",
  "No se trata de ser el mejor, se trata de ser mejor que ayer.",
  "El exito empieza con la decision de intentarlo.",
  "Tu unico limite eres tu mismo.",
  "Come con proposito, crece con constancia. 🔥",
  "Los campeones siguen cuando ya no pueden mas.",
  "La disciplina es el puente entre metas y logros.",
  "No pares cuando estes cansado, para cuando hayas terminado.",
  "Ganar peso tambien es un entrenamiento: el de tu constancia. 💪"
];

// ================================
// Estado de la App
// ================================

let state = {
  selectedDate: new Date(),
  weekOffset: 0,
  currentSection: 'food',
  completedDays: {}, // { 'YYYY-MM-DD': { meals: [true, false, false, false], allDone: bool } }
  streak: 0
};

// ================================
// Utilidades
// ================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const MEAL_KEYS = ['breakfast', 'lunch', 'snack', 'dinner'];
const MEAL_LABELS = {
  breakfast: { label: 'Desayuno', icon: '🌅' },
  lunch: { label: 'Almuerzo', icon: '☀️' },
  snack: { label: 'Merienda', icon: '🍎' },
  dinner: { label: 'Cena', icon: '🌙' }
};

function formatDateKey(date) {
  return date.toISOString().split('T')[0];
}

function getDayName(dayIndex) {
  return ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'][dayIndex];
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

  // Si hoy no esta completado, empezar desde ayer
  const todayKey = formatDateKey(today);
  if (!state.completedDays[todayKey]?.allDone) {
    checkDate.setDate(checkDate.getDate() - 1);
  }

  // Contar dias consecutivos hacia atras (todos los dias cuentan: la comida es diaria)
  while (true) {
    const key = formatDateKey(checkDate);

    if (state.completedDays[key]?.allDone) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }

    // Limite de seguridad
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

  // Actualizar titulo
  const firstDay = days[0];
  const lastDay = days[6];
  let title = '';
  if (state.weekOffset === 0) {
    title = 'Esta semana';
  } else if (state.weekOffset === -1) {
    title = 'Semana pasada';
  } else if (state.weekOffset === 1) {
    title = 'Proxima semana';
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

  // Inicializar estado de comidas del dia si no existe (aplica todos los dias)
  if (!state.completedDays[dateKey]) {
    state.completedDays[dateKey] = {
      meals: new Array(MEAL_KEYS.length).fill(false),
      allDone: false
    };
  }

  const dayData = state.completedDays[dateKey];
  const doneCount = dayData.meals.filter(Boolean).length;
  const totalCount = MEAL_KEYS.length;

  const container = $('#dayContent');

  // Seccion Entreno (solo informativa, sin seguimiento - lo lleva tu companero)
  let workoutHTML = '';
  if (workout.type === 'rest') {
    workoutHTML = `
      <div class="section-card">
        <div class="rest-day">
          <span class="rest-emoji">${workout.emoji}</span>
          <h3 class="rest-title">${workout.name}</h3>
          <p class="rest-subtitle">Tu cuerpo necesita recuperarse. ¡Disfruta el dia!</p>
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
          <span class="section-badge">Info</span>
        </div>
        <p class="rest-subtitle" style="margin-bottom: 14px;">Esta rutina la gestiona tu companero de entreno. Aqui la tienes solo como referencia.</p>
        <div class="exercise-list">
          ${workout.exercises.map((ex) => `
            <div class="exercise-item no-track">
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

  // Seccion Comida (foco principal: 4 comidas al dia)
  const foodHTML = `
    <div class="section-card">
      <div class="section-header">
        <h3 class="section-title">
          <span class="section-icon">🍽️</span>
          Comidas del dia
        </h3>
        <span class="section-badge ${dayData.allDone ? 'completed' : ''}">${doneCount}/${totalCount}</span>
      </div>

      ${MEAL_KEYS.map((key, i) => {
        const meal = meals[key];
        const info = MEAL_LABELS[key];
        const done = dayData.meals[i];
        return `
          <div class="meal-card ${done ? 'done' : ''}" data-index="${i}">
            <div class="meal-header">
              <span class="meal-icon">${info.icon}</span>
              <span class="meal-type">${info.label}</span>
              <div class="meal-check">${done ? '✓' : ''}</div>
            </div>
            <p class="meal-name">${meal.name}</p>
            <p class="meal-desc">${meal.desc}</p>
            ${meal.protein > 0 ? `
              <div class="meal-macros">
                <span class="macro protein">🥩 ${meal.protein}g prot</span>
                <span class="macro carbs">🍞 ${meal.carbs}g carbs</span>
                <span class="macro fat">🥑 ${meal.fat}g grasa</span>
                <span class="macro calories">🔥 ${meal.kcal} kcal</span>
              </div>
            ` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Seccion Progress
  const totalDaysCompleted = Object.values(state.completedDays).filter(d => d.allDone).length;
  const totalMealsEaten = Object.values(state.completedDays).reduce((acc, d) => acc + d.meals.filter(Boolean).length, 0);

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
          <div class="stat-label">📅 Dias completados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalMealsEaten}</div>
          <div class="stat-label">🍽️ Comidas registradas</div>
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

  // Event listeners para comidas
  container.querySelectorAll('.meal-card').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      toggleMeal(dateKey, index);
    });
  });
}

function toggleMeal(dateKey, index) {
  if (!state.completedDays[dateKey]) return;

  const dayData = state.completedDays[dateKey];
  dayData.meals[index] = !dayData.meals[index];

  const allDone = dayData.meals.every(Boolean);
  const wasAllDone = dayData.allDone;
  dayData.allDone = allDone;

  // Celebracion si completa todas las comidas del dia
  if (allDone && !wasAllDone) {
    launchConfetti();
    toast('🎉', '¡Dia de comidas completado!');
    calculateStreak();
    updateStreakDisplay();
  } else if (dayData.meals[index]) {
    toast('🍽️', '¡Buen provecho!');
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
  const totalMealsEaten = Object.values(state.completedDays).reduce((acc, d) => acc + d.meals.filter(Boolean).length, 0);

  body.innerHTML = `
    <div class="progress-grid">
      <div class="stat-card">
        <div class="stat-value">${state.streak}</div>
        <div class="stat-label">🔥 Racha actual</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalDaysCompleted}</div>
        <div class="stat-label">📅 Dias completados</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalMealsEaten}</div>
        <div class="stat-label">🍽️ Comidas registradas</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${Math.round((totalDaysCompleted / Math.max(today.getDate(), 1)) * 100)}%</div>
        <div class="stat-label">🎯 Consistencia mensual</div>
      </div>
    </div>
    <p style="text-align: center; color: var(--text-muted); margin-top: 20px; font-size: 0.9rem;">
      ¡Cada comida cuenta para tu reto de +3kg! 💪
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

  // Navegacion semanal
  $('#prevWeek').addEventListener('click', () => {
    state.weekOffset--;
    renderWeek();
  });

  $('#nextWeek').addEventListener('click', () => {
    state.weekOffset++;
    renderWeek();
  });

  // Navegacion inferior
  $$('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      state.currentSection = section;

      // Actualizar botones activos
      $$('.nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Mostrar seccion
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

  // Modal de estadisticas
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
