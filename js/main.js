let CONTACT_INFO = { phone: '', email: '', whatsapp: '' };

// Updated Costumes List based on Organizer's Message
const costumes = [
    // --- CHARACTERS ÚNICOS (MENCIONADOS) ---
    { id: 1, title: "Vampiro del Politburó", cat: "terror", diff: 2, icon: "🧛", desc: "Miembro del partido que nunca muere. Su sed de sangre solo es superada por su sed de vodka.", props: ["Chapa oficial del partido", "Copa de cristal con líquido rojo", "Capa negra raída"], makeup: "Cejas unidas (estilo Brezhnev), colmillos, palidez extrema.", stats: [10, 5, 2] },
    { id: 2, title: "Yeti Soviético", cat: "terror", diff: 3, icon: "🦍", desc: "El abominable hombre de las nieves siberianas. Se le ha visto bailando surf en los Urales.", props: ["Pelo blanco sintético", "Máscara de monstruo", "Harapos"], makeup: "Cara azulada por el frío, nieve falsa.", stats: [9, 8, 3] },
    { id: 3, title: "Cucaracha Radiactiva", cat: "terror", diff: 3, icon: "🪳", desc: "Superviviente nuclear definitiva. Resistente a todo menos al rock and roll.", props: ["Antenas largas", "Caparazón cartón", "Patas extra"], makeup: "Piel marrón/negra brillante, ojos compuestos.", stats: [6, 9, 8] },
    { id: 4, title: "Momia de Lenin", cat: "terror", diff: 2, icon: "🤕", desc: "Se ha levantado del mausoleo para poner orden en el guateque.", props: ["Vendas sucias", "Traje antiguo asomando", "Pin de la URSS"], makeup: "Piel seca, hundida, óxido.", stats: [8, 4, 1] },

    // --- GRUPOS TEMÁTICOS ---
    { id: 5, title: "Brujas de la Noche", cat: "grupo", diff: 2, icon: "🧙‍♀️", desc: "Aviadoras del 588º Regimiento. Temibles en el aire y en la pista de baile. Mezcla de piloto y bruja.", props: ["Gorro/Gafas Aviador", "Bufanda/Fular estrellas", "Nariz con verruga", "Escoba/Hélice"], makeup: "Piel verde, uñas largas negras, estrella roja en pecho.", stats: [7, 8, 9] },
    { id: 6, title: "Mutantes Olímpicos", cat: "grupo", diff: 2, icon: "🏃", desc: "Atletas de Moscú 80 que entrenaron cerca de Chernobyl. Aros, patines, forzudos, gimnasia...", props: ["Uniforme deportivo retro", "Aros/Patines/Pesas", "Medallas deformadas"], makeup: "Piel verde/mimético, branquias falsas, escamas (redecilla), manos palmeadas.", stats: [8, 9, 6] },
    { id: 7, title: "Monjas Ortodoxas", cat: "grupo", diff: 1, icon: "🕶️", desc: "Hermanas del convento sagrado del Reverb. Van de incógnito con gafas de sol oscuras.", props: ["Hábito negro (tela)", "Gafas de sol negras", "Rosario gigante"], makeup: "Piel muy pálida, labios negros.", stats: [5, 3, 10] },

    // --- EXTRAS COMPATIBLES ---
    { id: 8, title: "Cosmonauta Zombi", cat: "ciencia", diff: 3, icon: "👨‍🚀", desc: "Héroe espacial caído. Traje naranja rasgado y quemado.", props: ["Casco roto", "Mangueras sueltas", "Bandera URSS quemada"], makeup: "Cara putrefacta visible tras el cristal, venas negras.", stats: [8, 9, 3] },
    { id: 9, title: "Laika Mutante", cat: "ciencia", diff: 3, icon: "🐶", desc: "Perro espacial con múltiples cabezas y rabia estelar.", props: ["Arnés espacial", "Hueso de uranio", "Sputnik roto"], makeup: "Pelo falso, hocico, ojos amarillos brillantes.", stats: [7, 8, 4] },
    { id: 10, title: "Frankenstein Proletario", cat: "ciencia", diff: 3, icon: "🔨", desc: "Cuerpo hecho de piezas de tractor y metal pesado.", props: ["Martillo y Hoz gigantes", "Botas de acero"], makeup: "Grapas metálicas, piel color óxido.", stats: [9, 7, 1] },
    { id: 11, title: "Sirena del Volga", cat: "terror", diff: 2, icon: "🧜‍♀️", desc: "Rusalka mutada por residuos industriales. Quizás parte del equipo de Natación Mutante.", props: ["Tocado ruso de espinas", "Red de pesca"], makeup: "Escamas azules, labios negros, pelo mojado.", stats: [5, 6, 8] },
    { id: 12, title: "Espectro de la KGB", cat: "terror", diff: 2, icon: "🕵️", desc: "El miedo invisible. Gabardina que parece vacía.", props: ["Cámara espía", "Sombrero Fedora", "Auricular"], makeup: "Cara oculta con vendas o pintura negra total.", stats: [9, 8, 2] },
    { id: 13, title: "Rasputín Surfista", cat: "festivo", diff: 1, icon: "🏄‍♂️", desc: "Monje loco recién salido del río congelado.", props: ["Cruces y ajos", "Tabla-Icono", "Barba de algas"], makeup: "Ojos de loco, piel azulada de ahogado.", stats: [6, 5, 10] },
    { id: 14, title: "Matrioska Slasher", cat: "terror", diff: 3, icon: "🪆", desc: "Muñeca gigante con máscara agrietada tipo Jason.", props: ["Cuchillo", "Estructura circular", "Mini matrioskas"], makeup: "Calavera bajo la máscara de muñeca.", stats: [8, 9, 1] },
    { id: 15, title: "Turista en el Más Allá", cat: "festivo", diff: 1, icon: "🏖️", desc: "Típico veraneante de Crimea pero... muerto.", props: ["Camisa flores", "Ushanka (gorro piel)", "Flotador"], makeup: "Pintura blanca base, labios azules.", stats: [5, 4, 9] },
    { id: 16, title: "Científico de Chernobyl", cat: "ciencia", diff: 1, icon: "🧪", desc: "Investigador que se olvidó el traje de plomo.", props: ["Bata blanca sucia", "Gafas de sol", "Tubos con neón"], makeup: "Manchas verdes 'tóxicas' en manos y cara.", stats: [7, 6, 4] },
    { id: 17, title: "Marinero Fantasma", cat: "festivo", diff: 1, icon: "⚓", desc: "Flota del Mar Negro, versión espectral.", props: ["Camiseta rayas azul", "Gorro marinero", "Red"], makeup: "Piel gris, un poco de barro o algas.", stats: [8, 5, 7] },
    { id: 18, title: "Radioaficionado Pripyat", cat: "ciencia", diff: 1, icon: "📻", desc: "Sintonizando voces del otro mundo.", props: ["Auriculares grandes", "Antena", "Cables"], makeup: "Sangre por los oídos, mirada perdida.", stats: [8, 7, 4] },
    { id: 19, title: "Azafata Aeroflot", cat: "festivo", diff: 1, icon: "✈️", desc: "Vuelo directo al infierno siberiano. Posible Bruja de la Noche encubierta.", props: ["Pañuelo cuello", "Bandeja vacía", "Chapa avión"], makeup: "Maquillaje años 60 muy exagerado y corrido.", stats: [7, 6, 6] },
    { id: 20, title: "Fantasma de la Estepa", cat: "terror", diff: 1, icon: "👻", desc: "El clásico fantasma pero con estilo militar.", props: ["Sábana blanca", "Gorro Pilotka", "Cadenas"], makeup: "No requiere (va bajo sábana) o cara pálida.", stats: [5, 6, 4] },

    // --- RESTORED CLASSICS ---
    { id: 21, title: "Baba Yaga Playera", cat: "festivo", diff: 2, icon: "👵", desc: "La bruja del bosque se une a la fiesta surf. (Original restaurado)", props: ["Tabla-mortero", "Escoba de remo", "Collar de huesos"], makeup: "Nariz ganchuda, pañuelo, gafas de sol retro.", stats: [6, 7, 9] },
    { id: 22, title: "Pionera Radiactiva", cat: "festivo", diff: 2, icon: "☢️", desc: "Juventud comunista con brillo tóxico. Siempre lista para la fiesta.", props: ["Pañoleta roja", "Contador Geiger", "Corneta abollada"], makeup: "Pintura neón verde, ojos blancos (lentes).", stats: [8, 6, 5] },
    { id: 23, title: "Obrero Poseído", cat: "terror", diff: 1, icon: "🏗️", desc: "Trabajador de la construcción bajo control mental. Construyendo el escenario perfecto.", props: ["Mono azul/beige", "Martillo plástico", "Ladrillo"], makeup: "Ojos rojos (pintura), cara de cansancio extremo.", stats: [9, 6, 2] },
    { id: 24, title: "Músico Surf Maldito", cat: "festivo", diff: 1, icon: "🎸", desc: "El bajista del grupo tras el apocalipsis. Toca aunque pierda un brazo.", props: ["Guitarra cartón", "Gorra oficial", "Gafas sol"], makeup: "Mitad cara normal, mitad calavera.", stats: [5, 5, 10] },
    { id: 25, title: "Espía Congelado", cat: "terror", diff: 1, icon: "❄️", desc: "Lo sacaron del permafrost siberiano ayer. Aún tiene hielo en las pestañas.", props: ["Abrigo largo", "Periódico Pravda", "Cámara"], makeup: "Mucha laca en pelo, pintura blanca (escarcha).", stats: [9, 7, 3] }
];

let radarChart = null;
let selectedId = null;
let soundEnabled = false;

function toggleSound() {
    soundEnabled = !soundEnabled;
    const el = document.getElementById('sound-indicator');
    if (soundEnabled) {
        el.textContent = "ON";
        el.classList.remove('text-zinc-500', 'line-through');
        el.classList.add('text-green-600');
    } else {
        el.textContent = "OFF";
        el.classList.remove('text-green-600');
        el.classList.add('text-zinc-500', 'line-through');
    }
}

function playStampSound() {
    if (!soundEnabled) return;
    const audio = document.getElementById('audio-stamp');
    if (audio) {
        audio.currentTime = 0;
        audio.volume = 0.4;
        audio.play().catch(e => console.log("Audio play blocked"));
    }
}

function playClickSound() {
    if (!soundEnabled) return;
    const audio = document.getElementById('audio-click');
    if (audio) {
        audio.currentTime = 0;
        audio.volume = 0.2; // Softer than stamp
        audio.play().catch(e => console.log("Audio play blocked"));
    }
}

function toggleDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');

    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        backdrop.classList.remove('open');
    } else {
        drawer.classList.add('open');
        backdrop.classList.add('open');
        // Fill drawer list if empty
        const drawerList = document.getElementById('drawer-list');
        if (drawerList.children.length === 0) {
            renderList(drawerList, true);
        }
    }
}

// --- CONTACT FORM LOGIC ---
function toggleModal() {
    const modal = document.getElementById('contact-modal');
    const c = costumes.find(x => x.id === selectedId);

    if (modal.classList.contains('hidden')) {
        const nameEl = document.getElementById('modal-costume-name');
        if (nameEl) {
            nameEl.textContent = c ? c.title : '---';
        }
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

async function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = btn.innerText;

    // Disable button and show loading state
    btn.disabled = true;
    btn.innerText = "ENCRIPTANDO...";

    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const name = document.getElementById('contact-name').value;
    const msg = document.getElementById('contact-msg').value;
    const errorEl = document.getElementById('contact-error');
    const form = document.getElementById('contact-form');

    if (!email && !phone) {
        errorEl.textContent = "* Debes proporcionar Teléfono o Email de contacto.";
        errorEl.classList.remove('hidden');
        btn.disabled = false;
        btn.innerText = originalBtnText;
        return;
    }
    errorEl.classList.add('hidden');

    const c = costumes.find(x => x.id === selectedId);
    const title = c ? c.title : 'Desconocido';

    // Payload
    const payload = {
        name,
        email,
        phone,
        message: msg,
        costume: title
    };

    try {
        // Prepare fallback link just in case
        const subject = `ASIGNACIÓN VESTIDOR: ${title.toUpperCase()} - ${name}`;
        const body = `¡Saludos Organizador!

Solicito la asignación del siguiente sujeto: ${title}.

--- DATOS DE CONTACTO ---
Agente: ${name}
Teléfono: ${phone}
Email: ${email}

--- MENSAJE ADICIONAL ---
${msg}

Glory to the Gagarins!`;
        const mailtoLink = `mailto:ritmoandblues@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Attempt Serverless Send
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.ok) {
            // Success!
            form.innerHTML = `
                <div class="text-center py-10 space-y-4">
                    <div class="text-6xl">🚀</div>
                    <h3 class="pixel-font text-2xl text-green-600 font-bold">TRANSMISIÓN COMPLETADA</h3>
                    <p class="text-xs text-zinc-600">El Politburó ha recibido tu solicitud. Recibirás instrucciones pronto.</p>
                    <button onclick="toggleModal()" class="mt-4 bg-zinc-800 text-white px-4 py-2 pixel-font uppercase">Cerrar</button>
                </div>
            `;
        } else {
            throw new Error(result.error || "Error en el servidor");
        }

    } catch (err) {
        console.warn("Fallo serverless, activando fallback manual.", err);

        // Show Fallback UI
        const subject = `ASIGNACIÓN VESTIDOR: ${title.toUpperCase()} - ${name}`;
        const body = `¡Saludos Organizador!\n\nSolicito la asignación del siguiente sujeto: ${title}.\n\n--- DATOS DE CONTACTO ---\nAgente: ${name}\nTeléfono: ${phone}\nEmail: ${email}\n\n--- MENSAJE ADICIONAL ---\n${msg}\n\nGlory to the Gagarins!`;
        const mailtoLink = `mailto:ritmoandblues@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        form.innerHTML = `
            <div class="text-center py-6 space-y-4 border-2 border-red-500 bg-red-100 p-4">
                <div class="text-4xl">⚠️</div>
                <h3 class="pixel-font text-xl text-red-700 font-bold uppercase">FALLO DE ENLACE</h3>
                <p class="text-[10px] text-red-900 font-bold">Los satélites han fallado. Debes enviar la solicitud manualmente.</p>
                
                <a href="${mailtoLink}" target="_blank" class="block w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 pixel-font text-xl uppercase tracking-widest border-b-4 border-red-900 active:border-b-0 active:translate-y-1 transition-all">
                    ✉️ FORZAR ENVÍO MANUAL (Mail)
                </a>
                
                <button type="button" onclick="location.reload()" class="text-[10px] underline text-zinc-500">Volver a intentar</button>
            </div>
        `;
    }
}

// --- AI ENGINE (SECURE) ---

async function askAI(mode) {
    const outputContainer = document.getElementById('ai-output-container');
    const outputEl = document.getElementById('ai-output');
    const loader = document.getElementById('ai-loader');
    const buttons = document.querySelectorAll('.btn-soviet'); // Select all AI buttons

    if (!selectedId) {
        outputContainer.classList.remove('hidden');
        outputEl.innerHTML = "<span class='text-red-500'>[ERROR] SELECCIONA UN SUJETO PRIMERO</span>";
        return;
    }

    // Disable all buttons to prevent spam
    buttons.forEach(btn => btn.disabled = true);

    const c = costumes.find(x => x.id === selectedId);
    loader.style.display = 'flex';
    outputContainer.classList.add('hidden'); // Hide previous output
    outputEl.textContent = "";

    try {
        const response = await fetch('/api/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mode: mode,
                character: {
                    title: c.title,
                    props: c.props
                }
            })
        });

        const data = await response.json();

        if (!response.ok) {
            // Check for quota error
            if (response.status === 503) {
                throw new Error("La IA está saturada (Quota Exceeded). Inténtalo en un minuto.");
            }
            throw new Error(data.error || "Error de comunicación con el Politburó");
        }

        // Simular efecto de mecanografía
        outputContainer.classList.remove('hidden');
        await typeLine(data.text, outputEl);

    } catch (err) {
        console.error("AI Error:", err);
        outputContainer.classList.remove('hidden');
        outputEl.innerHTML = `<span class='text-red-500'>[ERROR] FALLO EN LA RED NEURONAL.<br>${err.message}</span>`;
    } finally {
        loader.style.display = 'none';
        // Re-enable buttons
        buttons.forEach(btn => btn.disabled = false);
    }
}

// --- UI RENDER ---
function initRadar() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['SOVIET', 'HORROR', 'REVERB'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: 'rgba(139, 0, 0, 0.5)',
                borderColor: '#000',
                borderWidth: 2,
                pointBackgroundColor: '#000'
            }]
        },
        options: {
            scales: { r: { min: 0, max: 10, ticks: { display: false }, grid: { color: '#444' } } },
            plugins: { legend: { display: false } },
            maintainAspectRatio: false
        }
    });
}

function renderList(container, isMobile = false) {
    const cat = document.getElementById('cat-select').value;
    const diff = document.getElementById('diff-select').value;
    container.innerHTML = '';

    const filtered = costumes.filter(c => {
        const matchCat = cat === 'all' || c.cat === cat;
        const matchDiff = diff === 'all' || c.diff == diff;
        return matchCat && matchDiff;
    });

    filtered.forEach((c, idx) => {
        const el = document.createElement('div');
        el.className = `card-entry p-3 flex items-center gap-4 transition-all ${selectedId === c.id ? 'selected' : ''}`;
        el.onclick = () => {
            select(c.id, idx + 1);
            if (isMobile) toggleDrawer();
        };

        el.innerHTML = `
            <span class="text-4xl 2xl:text-5xl filter grayscale contrast-125">${c.icon}</span>
            <div class="flex-grow">
                <h4 class="text-xs 2xl:text-base font-black uppercase tracking-tight text-white">${c.title}</h4>
                <div class="flex items-center gap-2 mt-1">
                    <span class="status-light ${c.diff == 1 ? 'light-green' : 'light-red'}"></span>
                    <span class="text-[8px] 2xl:text-xs text-zinc-400 font-bold uppercase">${c.cat} / DIF: ${c.diff}</span>
                </div>
            </div>
        `;
        container.appendChild(el);
    });
}

function updateList() {
    renderList(document.getElementById('costume-list'));
    // Also update drawer if open
    if (document.getElementById('mobile-drawer').classList.contains('open')) {
        renderList(document.getElementById('drawer-list'), true);
    }
}

function select(id, index) {
    if (selectedId !== id) {
        // ID <= 7 get stamp sound, others get click
        if (id <= 7) {
            playStampSound();
        } else {
            playClickSound();
        }
    }
    selectedId = id;
    const c = costumes.find(x => x.id === id);

    document.getElementById('view-title').textContent = c.title;
    document.getElementById('view-desc').textContent = c.desc;
    document.getElementById('view-makeup').textContent = c.makeup;
    document.getElementById('view-icon').textContent = c.icon;
    document.getElementById('view-index').textContent = index.toString().padStart(2, '0');
    document.getElementById('view-serial').textContent = `GAG-${c.cat.substring(0, 2).toUpperCase()}-${Math.floor(Math.random() * 9999)}`;

    const propsEl = document.getElementById('view-props');
    propsEl.innerHTML = c.props.map(p => `<li>• ${p}</li>`).join('');

    // Reset AI stuff
    document.getElementById('ai-output-container').classList.add('hidden');

    // Stamp Logic (VIP only for IDs 1-7)
    const sVip = document.getElementById('stamp-vip');
    sVip.classList.remove('show-stamp');
    sVip.style.transform = 'scale(2)'; // Reset scale and rotation

    if (c.id <= 7) {
        setTimeout(() => {
            const randomAngle = Math.floor(Math.random() * 41) - 20; // Random between -20 and 20
            const isMobile = window.innerWidth < 768;
            const scale = isMobile ? 0.8 : 1.5;
            sVip.style.transform = `rotate(${randomAngle}deg) scale(${scale})`;
            sVip.classList.add('show-stamp');
        }, 100);
    }

    radarChart.data.datasets[0].data = c.stats;
    radarChart.update();

    // Update UI highlight
    document.querySelectorAll('.card-entry').forEach(el => el.classList.remove('selected'));
    // Re-render is expensive, better to just update classes or re-render
    updateList();
}

// Boot Sequence
// Boot Sequence (Glitch & Faster)
const bootLines = [
    "INIT_KERNEL_PANIC...",
    "LOADING SOVIET_PROTOCOL_V4...",
    "CHECKING MEMORY... 64KB OK",
    "CONNECTING TO VOSKHOD SATELLITE...",
    "ENCRYPTING SIGNAL...",
    "BYPASSING KGB FIREWALL...",
    "ACCESS GRANTED.",
    "WELCOME, COMRADE."
];

function randomChar() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@$";
    return chars[Math.floor(Math.random() * chars.length)];
}

async function typeLine(text, container) {
    const lineEl = document.createElement('div');
    lineEl.className = 'glitch-line';
    container.appendChild(lineEl);

    if (Math.random() > 0.7) {
        lineEl.classList.add('glitch-anim');
        setTimeout(() => lineEl.classList.remove('glitch-anim'), 200 + Math.random() * 300);
    }

    for (let i = 0; i <= text.length; i += 2) {
        let scramble = "";
        for (let j = 0; j < 5; j++) scramble += randomChar();

        lineEl.innerText = text.substring(0, i) + scramble;
        await new Promise(r => setTimeout(r, 10));
    }
    lineEl.innerText = text;
}

async function runBootSequence() {
    const screen = document.getElementById('boot-screen');
    const textEl = document.getElementById('boot-text');

    for (const line of bootLines) {
        await typeLine(line, textEl);
        await new Promise(r => setTimeout(r, Math.random() * 250));
    }

    await new Promise(r => setTimeout(r, 400));
    screen.style.opacity = '0';
    setTimeout(() => {
        screen.style.display = 'none';

        // UX Improvement: Auto-open drawer on mobile
        if (window.innerWidth < 768) {
            setTimeout(() => {
                toggleDrawer();
            }, 500);
        }
    }, 300);
}

// --- CONFIG LOAD ---
async function loadConfig() {
    try {
        const res = await fetch('/api/config');
        if (res.ok) {
            const data = await res.json();
            CONTACT_INFO = data;

            // Update DOM
            const whatsappEl = document.getElementById('whatsapp-link');
            if (whatsappEl && data.whatsapp) {
                whatsappEl.href = data.whatsapp;
            }
        }
    } catch (e) {
        console.error("Failed to load config", e);
    }
}

document.getElementById('cat-select').onchange = updateList;
document.getElementById('diff-select').onchange = updateList;

window.onload = () => {
    loadConfig();
    runBootSequence();
    initRadar();
    updateList();
    select(1, 1);
};
