// AUTO-GENERATED — Datos de las 42 diapositivas
export const slides = [
  {
    id: 1,
    section: "Introducci\u00f3n y Objetivos",
    hasNotes: true,
    html: `<div class="slide-header">
            <span class="slide-section">Introducción y Objetivos</span>
            <span class="slide-num">1 / 42</span>
        </div>
        <div class="slide-body" style="text-align: center;">
            <h2 style="font-size: 3.2rem; color: #38bdf8;">Sistemas de Memoria y Gestión de Recursos</h2>
            <h3 style="color: #cbd5e1;">Estructura de Hardware, Abstracción del S.O. y Algoritmos de Administración</h3>
            <p style="text-align: center; max-width: 800px; margin: 20px auto 0 auto; color: #94a3b8;">
                Fusión fluida entre el diseño físico del silicio (Unidad 4) y el rol administrativo del Kernel para el diseño de software eficiente (Unidad 3).
            </p>
        </div>
        <div class="teacher-notes">
            <div class="teacher-notes-title">💡 Notas de Dictado (0-3 min)</div>
            <p>Iniciar la clase remarcando la importancia del trilema de diseño del hardware y cómo repercute directamente en la estabilidad del software que ellos programan.</p>
        </div>`
  },
  {
    id: 2,
    section: "Introducci\u00f3n y Objetivos",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Introducción y Objetivos</span>
            <span class="slide-num">2 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Objetivos Académicos de la Sesión</h2>
            <p>Al finalizar esta clase de 120 minutos, el alumno será capaz de:</p>
            <ol>
                <li><strong>Dominar</strong> la estructura, justificación y el trilema de la jerarquía de memoria.</li>
                <li><strong>Diferenciar</strong> eléctricamente las tecnologías de semiconductores SRAM vs DRAM.</li>
                <li><strong>Analizar</strong> el impacto de los principios de localidad espacial y temporal en la Caché.</li>
                <li><strong>Evaluar</strong> las responsabilidades del S.O. respecto a protección, reubicación y aislamiento.</li>
                <li><strong>Calcular</strong> el impacto de la fragmentación aplicando algoritmos dinámicos de asignación.</li>
                <li><strong>Comprender</strong> el mapeo lógico/físico coordinado entre la MMU y las tablas de páginas.</li>
            </ol>
        </div>`
  },
  {
    id: 3,
    section: "Bloque 1: El Escenario F\u00edsico",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 1: El Escenario Físico</span>
            <span class="slide-num">3 / 42</span>
        </div>
        <div class="slide-body">
            <h2>La Brecha de Rendimiento (Memory Wall)</h2>
            <p>A lo largo de las últimas décadas, el rendimiento bruto y la velocidad de los procesadores han escalado de manera exponencial a una tasa aproximada del <strong>60% anual</strong>.</p>
            <p>En contraste, la reducción de latencia y velocidad de acceso de las memorias RAM principales (DRAM) apenas ha avanzado a un ritmo del <strong>7% anual</strong>.</p>
            <div class="highlight-box">
                <p>Esta enorme divergencia genera el denominado "Muro de Memoria": un cuello de botella donde el procesador de alta velocidad gasta ciclos vacíos esperando que los datos arriben desde los buses externos.</p>
            </div>
        </div>`
  },
  {
    id: 4,
    section: "Bloque 1: El Escenario F\u00edsico",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 1: El Escenario Físico</span>
            <span class="slide-num">4 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Evolución: El Muro de Memoria</h2>
            <div class="technical-diagram">
                <svg width="600" height="200" viewBox="0 0 600 200">
                    <path d="M 50 160 Q 250 130 550 20" fill="none" stroke="#38bdf8" stroke-width="4" />
                    <line x1="50" y1="160" x2="550" y2="150" stroke="#94a3b8" stroke-width="3" />
                    <line x1="50" y1="160" x2="50" y2="10" stroke="#fff" stroke-width="2" />
                    <line x1="50" y1="160" x2="570" y2="160" stroke="#fff" stroke-width="2" />
                    <text x="560" y="25" fill="#38bdf8" font-size="11" font-weight="bold">Rendimiento CPU (+60%)</text>
                    <text x="560" y="145" fill="#94a3b8" font-size="11" font-weight="bold">Rendimiento RAM (+7%)</text>
                </svg>
                <div class="diagram-title">Figura 1.1: Divergencia histórica de velocidades e introducción de ciclos de espera.</div>
            </div>
            <p>Para mitigar este impacto, los arquitectos de hardware interponen memorias intermedias ultra-rápidas.</p>
        </div>`
  },
  {
    id: 5,
    section: "Bloque 1: El Escenario F\u00edsico",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 1: El Escenario Físico</span>
            <span class="slide-num">5 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Jerarquía de Memoria: El Trilema</h2>
            <p>La solución de ingeniería adoptada consiste en estructurar un conjunto de memorias organizadas en forma piramidal, basándose en una regla de compensación directa:</p>
            <ul>
                <li><strong>A menor tiempo de acceso (más rápida):</strong> Mayor costo por bit y menor capacidad de almacenamiento debido a limitaciones físicas de espacio y disipación térmica.</li>
                <li><strong>A mayor capacidad de almacenamiento:</strong> Menor costo por bit, pero tiempos de acceso significativamente más altos debido a la distancia de los buses y tecnologías.</li>
            </ul>
        </div>`
  },
  {
    id: 6,
    section: "Bloque 1: El Escenario F\u00edsico",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 1: El Escenario Físico</span>
            <span class="slide-num">6 / 42</span>
        </div>
        <div class="slide-body">
            <h2>La Pirámide del Hardware</h2>
            <div class="technical-diagram">
                <svg width="400" height="180" viewBox="0 0 400 180">
                    <polygon points="200,10 370,170 30,170" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                    <line x1="160" y1="50" x2="240" y2="50" stroke="#06b6d4" stroke-width="1.5" />
                    <line x1="120" y1="95" x2="280" y2="95" stroke="#06b6d4" stroke-width="1.5" />
                    <line x1="75" y1="135" x2="325" y2="135" stroke="#06b6d4" stroke-width="1.5" />
                    <text x="200" y="40" fill="#fff" font-size="10" text-anchor="middle" font-weight="bold">Reg. CPU</text>
                    <text x="200" y="75" fill="#fff" font-size="10" text-anchor="middle">Caché (L1, L2, L3)</text>
                    <text x="200" y="115" fill="#fff" font-size="10" text-anchor="middle">Memoria RAM</text>
                    <text x="200" y="155" fill="#fff" font-size="10" text-anchor="middle">Discos / Almacenamiento</text>
                </svg>
                <div class="diagram-title">Figura 2.1: Estructura piramidal clásica de inclusión e intercambio de bloques.</div>
            </div>
            <p>El objetivo: Lograr que el procesador opere a la velocidad de la cima manteniendo el costo y volumen de la base.</p>
        </div>`
  },
  {
    id: 7,
    section: "Bloque 1: El Escenario F\u00edsico",
    hasNotes: true,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 1: El Escenario Físico</span>
            <span class="slide-num">7 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Las Tres Variables del Trilema</h2>
            <div class="grid-3">
                <div style="background:#0f172a; padding:15px; border-radius:6px; border: 1px solid #1e293b;">
                    <h4 style="color:#38bdf8; margin-bottom:10px;">1. Velocidad</h4>
                    <p style="font-size:0.9rem;">A menor distancia física del núcleo del CPU, menor tiempo de propagación eléctrica y ciclos de bus diferidos.</p>
                </div>
                <div style="background:#0f172a; padding:15px; border-radius:6px; border: 1px solid #1e293b;">
                    <h4 style="color:#06b6d4; margin-bottom:10px;">2. Capacidad</h4>
                    <p style="font-size:0.9rem;">A mayor densidad física del silicio o componente magnético, mayor volumen neto utilizable de almacenamiento.</p>
                </div>
                <div style="background:#0f172a; padding:15px; border-radius:6px; border: 1px solid #1e293b;">
                    <h4 style="color:#f59e0b; margin-bottom:10px;">3. Costo</h4>
                    <p style="font-size:0.9rem;">El precio por bit se incrementa exponencialmente al aproximarse al núcleo de ejecución directa en silicio.</p>
                </div>
            </div>
            <div class="teacher-notes">
                <div class="teacher-notes-title">📌 Pregunta guía para el grupo</div>
                <p>¿Qué sucedería si elimináramos la caché y conectáramos el CPU directo a la RAM DDR5? Respuesta: Pérdida dramática de rendimiento por latencia de bus.</p>
            </div>
        </div>`
  },
  {
    id: 8,
    section: "Bloque 1: El Escenario F\u00edsico",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 1: El Escenario Físico</span>
            <span class="slide-num">8 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Métricas Comparativas del Hardware</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nivel de Jerarquía</th>
                        <th>Tecnología Base</th>
                        <th>Tiempo de Acceso Típico</th>
                        <th>Costo Relativo por GB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Registros del CPU</strong></td>
                        <td>CMOS Latch / Flip-Flops</td>
                        <td>0.25 a 0.5 ns</td>
                        <td>Extremadamente Alto</td>
                    </tr>
                    <tr>
                        <td><strong>Memoria Caché L1</strong></td>
                        <td>SRAM Estática Dedicada</td>
                        <td>0.5 a 1 ns</td>
                        <td>Muy Alto</td>
                    </tr>
                    <tr>
                        <td><strong>Memoria Caché L2-L3</strong></td>
                        <td>SRAM Estática Compartida</td>
                        <td>2 a 15 ns</td>
                        <td>Alto</td>
                    </tr>
                    <tr>
                        <td><strong>Memoria RAM Principal</strong></td>
                        <td>DRAM Dinámica (DDR)</td>
                        <td>50 a 100 ns</td>
                        <td>Medio-Bajo</td>
                    </tr>
                    <tr>
                        <td><strong>Almacenamiento Secundario</strong></td>
                        <td>NAND Flash / Discos Magnéticos</td>
                        <td>10 µs a 10 ms</td>
                        <td>Muy Bajo</td>
                    </tr>
                </tbody>
            </table>
        </div>`
  },
  {
    id: 9,
    section: "Bloque 2: Memorias Internas",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 2: Memorias Internas</span>
            <span class="slide-num">9 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Memoria Interna: Registros del CPU</h2>
            <h3>La frontera más rápida del procesamiento</h3>
            <p>Los <strong>Registros</strong> representan el peldaño superior de la jerarquía interna. Integrados de forma nativa dentro de la Unidad Lógica Aritmética (ALU) y la Unidad de Control.</p>
            <ul>
                <li><strong>Capacidad:</strong> 32 o 64 bits por registro. Apenas unos pocos kilobytes totales por núcleo de CPU.</li>
                <li><strong>Velocidad de acceso:</strong> Operación directa en 1 ciclo de reloj, sin demoras de direccionamiento ni buses externos.</li>
                <li><strong>Registros clave:</strong>
                    <ul>
                        <li><em>Program Counter (PC):</em> Dirección de la próxima instrucción.</li>
                        <li><em>Instruction Register (IR):</em> Almacena la instrucción en decodificación actual.</li>
                    </ul>
                </li>
            </ul>
        </div>`
  },
  {
    id: 10,
    section: "Bloque 2: Memorias Internas",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 2: Memorias Internas</span>
            <span class="slide-num">10 / 42</span>
        </div>
        <div class="slide-body">
            <h2>SRAM vs DRAM: Fundamentos de Silicio</h2>
            <div class="grid-2">
                <div style="background:#0f172a; padding:20px; border-radius:8px; border: 1px solid #1e293b;">
                    <h4 style="color:#38bdf8; margin-bottom:10px;">SRAM (Static RAM) <span class="badge">Caché</span></h4>
                    <ul>
                        <li>Compuesta por <strong>6 transistores</strong> por cada bit almacenado.</li>
                        <li>Mantiene el estado eléctrico estable mientras el circuito reciba energía.</li>
                        <li><strong>Ventaja:</strong> Ultra-rápida, no requiere refresco de celdas.</li>
                        <li><strong>Desventaja:</strong> Ocupa mucha área, es costosa y de baja densidad.</li>
                    </ul>
                </div>
                <div style="background:#0f172a; padding:20px; border-radius:8px; border: 1px solid #1e293b;">
                    <h4 style="color:#06b6d4; margin-bottom:10px;">DRAM (Dynamic RAM) <span class="badge badge-alt">RAM Principal</span></h4>
                    <ul>
                        <li>Estructura minimalista de <strong>1 transistor y 1 capacitor</strong> por bit.</li>
                        <li>Guarda los datos en forma de carga eléctrica acumulada en el capacitor.</li>
                        <li><strong>Ventaja:</strong> Alta densidad por oblea de silicio a bajo costo comercial.</li>
                        <li><strong>Desventaja:</strong> Requiere <strong>ciclos de refresco constantes</strong> debido a fugas.</li>
                    </ul>
                </div>
            </div>
        </div>`
  },
  {
    id: 11,
    section: "Bloque 2: Memorias Internas",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 2: Memorias Internas</span>
            <span class="slide-num">11 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Esquema Eléctrico de Celdas de Memoria</h2>
            <div class="technical-diagram">
                <div style="display:flex; gap:60px;">
                    <div style="text-align:center;">
                        <strong style="color:#06b6d4;">(a) Celda DRAM (1T + 1C)</strong>
                        <div style="border: 2px solid #334155; padding: 15px; margin-top:10px; background:#111827; border-radius:6px; font-family:monospace; font-size:0.85rem;">
                            Línea de Palabra ----[Transistor]---- (Capacitor ⌿) <br>
                                               | <br>
                                           Línea de Bit
                        </div>
                    </div>
                    <div style="text-align:center;">
                        <strong style="color:#38bdf8;">(b) Celda SRAM (6 Transistores)</strong>
                        <div style="border: 2px solid #334155; padding: 15px; margin-top:10px; background:#111827; border-radius:6px; font-family:monospace; font-size:0.85rem;">
                            Inversores cruzados biestables<br>
                            Mantiene el bit de forma estática<br>
                            Sin descarga pasiva por capacitor.
                        </div>
                    </div>
                </div>
                <div class="diagram-title">Figura 3.1: Complejidad espacial de celdas SRAM frente al minimalismo DRAM.</div>
            </div>
            <p>La simplicidad de DRAM es lo que permite integrar módulos de 16GB o 32GB en ranuras comerciales estándar.</p>
        </div>`
  },
  {
    id: 12,
    section: "Bloque 2: Memorias Internas",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 2: Memorias Internas</span>
            <span class="slide-num">12 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Evolución de la RAM: Tecnología DDR</h2>
            <h3>Maximización del ancho de banda síncrono</h3>
            <p>La memoria RAM dinámica ha evolucionado a través de rigurosos estándares industriales de sincronización:</p>
            <ul>
                <li><strong>SDRAM (Synchronous DRAM):</strong> Sincroniza la lectura/escritura con el reloj del bus del sistema, eliminando los tiempos muertos de los esquemas asíncronos.</li>
                <li><strong>DDR (Double Data Rate):</strong> Transfiere datos de manera simultánea en el <strong>flanco de subida</strong> y en el <strong>flanco de bajada</strong> de cada ciclo de reloj del sistema.</li>
            </ul>
            <div class="highlight-box">
                <p>Las arquitecturas de vanguardia (DDR5) dividen internamente el módulo en dos canales independientes de datos y agregan circuitería On-Die ECC para autocorregir errores transitorios de inversión de bits.</p>
            </div>
        </div>`
  },
  {
    id: 13,
    section: "Bloque 3: Memoria Cach\u00e9",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 3: Memoria Caché</span>
            <span class="slide-num">13 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Memoria Caché: Arquitectura Intermedia</h2>
            <h3>Contención local de instrucciones y datos</h3>
            <p>Estructura de alta velocidad basada en SRAM cuyo único fin es interceptar las solicitudes recurrentes del procesador para evitar llamadas directas a la RAM.</p>
            <p>Se organiza en capas concéntricas según su cercanía al procesador:</p>
            <ul>
                <li><strong>L1 (Level 1):</strong> Integrada en el núcleo del core. Dividida internamente en L1-Instrucciones y L1-Datos. Latencia mínima (1 ciclo).</li>
                <li><strong>L2 (Level 2):</strong> Mayor volumen, comúnmente dedicada en exclusiva a cada núcleo.</li>
                <li><strong>L3 (Level 3 - Last Level Cache):</strong> Banco masivo de memoria SRAM compartido por todos los núcleos del procesador. Actúa como amortiguador antes del bus externo de la RAM principal.</li>
            </ul>
        </div>`
  },
  {
    id: 14,
    section: "Bloque 3: Memoria Cach\u00e9",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 3: Memoria Caché</span>
            <span class="slide-num">14 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Interconexión y Flujo de Tags</h2>
            <div class="technical-diagram">
                <div style="border:2px solid #38bdf8; padding:8px; width:100%; text-align:center; background:#111827;">
                    <strong>CORE DEL CPU (Emisión de Dirección de Memoria)</strong>
                </div>
                <div style="font-size:1.2rem; color:#06b6d4;">↓</div>
                <div style="display:flex; gap:10px; width:100%;">
                    <div style="border:1px dashed #64748b; padding:8px; flex:1; text-align:center;">L1 (Privada)</div>
                    <div style="border:1px dashed #64748b; padding:8px; flex:1; text-align:center;">L2 (Privada)</div>
                    <div style="border:1px dashed #64748b; padding:8px; flex:1; text-align:center;">L3 (Compartida)</div>
                </div>
                <div style="font-size:1.2rem; color:#06b6d4;">↓ Fallo total de Caché (Miss)</div>
                <div style="border:2px solid #94a3b8; padding:8px; width:100%; text-align:center; background:#1e293b;">
                    <strong>CONTROLADOR DE RAM (Bus Externo DRAM)</strong>
                </div>
                <div class="diagram-title">Figura 4.1: Flujo escalonado de verificación de etiquetas en lectura de datos.</div>
            </div>
            <p>Cada consulta de datos sigue el principio de inclusión: si se encuentra en L1, por defecto reside en los niveles inferiores de caché.</p>
        </div>`
  },
  {
    id: 15,
    section: "Bloque 3: Memoria Cach\u00e9",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 3: Memoria Caché</span>
            <span class="slide-num">15 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Visión del DIE (Pastilla de Silicio)</h2>
            <h3>La distribución real del silicio en procesadores modernos</h3>
            <p>Al analizar microscópicamente el plano topográfico de un procesador moderno, se observa una realidad de diseño evidente:</p>
            <div class="highlight-box">
                <p><strong>Más del 50% de la superficie total de silicio del procesador está asignada a estructuras repetitivas de memoria SRAM para caché (L2 y L3), sacrificando espacio de cómputo directo.</strong></p>
            </div>
            <ul>
                <li><strong>Justificación física:</strong> Reducir a nanómetros la distancia que recorren los electrones para abatir la latencia y evitar la degradación de velocidad del bus externo.</li>
                <li><strong>Topología:</strong> Se enlazan los núcleos mediante buses de interconexión interna en anillo (Ring) o mallas de ultra alta velocidad.</li>
            </ul>
        </div>`
  },
  {
    id: 16,
    section: "Bloque 3: Memoria Cach\u00e9",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 3: Memoria Caché</span>
            <span class="slide-num">16 / 42</span>
        </div>
        <div class="slide-body">
            <h2>05. Principios de Localidad</h2>
            <h3>La justificación del almacenamiento intermedio</h3>
            <p>La eficiencia de la memoria caché se basa en el comportamiento empírico del software, estructurado bajo dos leyes fundamentales de referencia:</p>
            <div class="grid-2">
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#38bdf8; margin-bottom:8px;">Localidad Temporal <span class="badge">Tiempo</span></h4>
                    <p style="font-size:0.9rem; text-align:left;">Si se accede a una dirección de memoria, es altamente probable que se vuelva a referenciar de manera exacta esa misma dirección en el corto plazo.<br><br><strong>Ejemplos:</strong> Variables de iteración (<code>for i</code>), acumuladores de bucles, subrutinas recurrentes.</p>
                </div>
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#06b6d4; margin-bottom:8px;">Localidad Espacial <span class="badge badge-alt">Espacio</span></h4>
                    <p style="font-size:0.9rem; text-align:left;">El acceso a una dirección de memoria predice con alto grado de certeza que las próximas referencias serán a direcciones contiguas o adyacentes.<br><br><strong>Ejemplos:</strong> Recorrido secuencial de instrucciones en ensamblador, procesamiento de arreglos lineales.</p>
                </div>
            </div>
        </div>`
  },
  {
    id: 17,
    section: "Bloque 3: Memoria Cach\u00e9",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 3: Memoria Caché</span>
            <span class="slide-num">17 / 42</span>
        </div>
        <div class="slide-body">
            <h2>El Hit Rate y su Impacto Crítico</h2>
            <p>El rendimiento de la memoria caché se evalúa bajo dos estados estrictos:</p>
            <ul>
                <li><strong>Cache Hit (Acierto):</strong> El dato reside en la caché y se sirve al CPU sin introducir retrasos de ciclo.</li>
                <li><strong>Cache Miss (Fallo):</strong> El dato debe buscarse fuera del microprocesador en la RAM, provocando un congelamiento temporal de ejecución del núcleo (Stall).</li>
            </ul>
            <div class="highlight-box">
                <p>Las arquitecturas optimizadas requieren mantener un <strong>Hit Rate superior al 95%</strong>. Una caída marginal del 5% en los aciertos puede disminuir a la mitad la velocidad de ejecución efectiva de los programas por la penalización de acceso a los buses externos.</p>
            </div>
        </div>`
  },
  {
    id: 18,
    section: "Bloque 4: Almacenamiento Persistente",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 4: Almacenamiento Persistente</span>
            <span class="slide-num">18 / 42</span>
        </div>
        <div class="slide-body">
            <h2>06. Memoria Externa y Persistencia</h2>
            <h3>Resguardo masivo y no volátil</h3>
            <p>Nivel de la jerarquía encargado de resguardar el sistema operativo, binarios y archivos de datos de forma estable ante la ausencia de corriente eléctrica.</p>
            <p>Se divide en dos aproximaciones tecnológicas distintas de almacenamiento masivo:</p>
            <ol>
                <li><strong>HDD (Hard Disk Drive):</strong> Unidades mecánicas basadas en platos giratorios ferromagnéticos y brazos actuadores con cabezales de lectura/escritura inductiva.</li>
                <li><strong>SSD (Solid State Drive):</strong> Unidades totalmente electrónicas basadas en bloques interconectados de transistores de puerta flotante NAND Flash, sin partes móviles.</li>
            </ol>
        </div>`
  },
  {
    id: 19,
    section: "Bloque 4: Almacenamiento Persistente",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 4: Almacenamiento Persistente</span>
            <span class="slide-num">19 / 42</span>
        </div>
        <div class="slide-body">
            <h2>HDD Mecánico vs SSD de Estado Sólido</h2>
            <table>
                <thead>
                    <tr>
                        <th>Atributo Técnico</th>
                        <th>HDD Magnético Mecánico</th>
                        <th>SSD NAND Flash Electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Mecanismo Base</strong></td>
                        <td>Platos giratorios y brazos móviles</td>
                        <td>Matrices de transistores de celda flotante</td>
                    </tr>
                    <tr>
                        <td><strong>Latencia de Acceso</strong></td>
                        <td><strong>Alta (5 a 15 ms):</strong> Depende del tiempo de búsqueda física del sector y rotación</td>
                        <td><strong>Ultra-Baja (25 a 100 µs):</strong> Acceso direccionado directo por el controlador</td>
                    </tr>
                    <tr>
                        <td><strong>Sensibilidad al Acceso Aleatorio</strong></td>
                        <td>Pésimo rendimiento. Obliga al cabezal a reposicionarse constantemente.</td>
                        <td>Excelente rendimiento. El tiempo de lectura es idéntico en cualquier celda.</td>
                    </tr>
                    <tr>
                        <td><strong>Impacto de la Fragmentación</strong></td>
                        <td>Crítico. Requiere desfragmentación periódica del sistema de archivos.</td>
                        <td>Nulo a nivel de cabezal. Gestionado internamente por el algoritmo de Wear Leveling.</td>
                    </tr>
                </tbody>
            </table>
        </div>`
  },
  {
    id: 20,
    section: "Bloque 4: Almacenamiento Persistente",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 4: Almacenamiento Persistente</span>
            <span class="slide-num">20 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Métricas de Entrada/Salida: IOPS</h2>
            <p>La velocidad de los dispositivos de almacenamiento masivo se evalúa bajo la métrica de <strong>IOPS (Operaciones de Entrada/Salida por Segundo)</strong> en bloques de 4KB:</p>
            <ul>
                <li><strong>HDD Comercial (7.200 RPM):</strong> Rango aproximado de ~75 a 100 IOPS.</li>
                <li><strong>SSD Conexión de bus SATA:</strong> Rango aproximado de ~50.000 a 90.000 IOPS.</li>
                <li><strong>SSD Protocolo NVMe (PCIe Gen 4/5):</strong> <strong>Supera las 1.000.000 IOPS</strong> <span class="badge">Rendimiento Enterprise</span></li>
            </ul>
            <div class="highlight-box">
                <p>Las unidades NVMe omiten los cuellos de botella heredados de las controladoras SATA, acoplándose en forma directa a los carriles PCIe nativos conectados al procesador central.</p>
            </div>
        </div>`
  },
  {
    id: 21,
    section: "Bloque 4: Almacenamiento Persistente",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 4: Almacenamiento Persistente</span>
            <span class="slide-num">21 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Infraestructuras de Datos Masivos</h2>
            <h3>Estrategias de persistencia corporativa</h3>
            <ul>
                <li><strong>Cloud Tiering:</strong> Automatización por software para mover en caliente datos históricos inactivos ("fríos") a repositorios de la nube, preservando el almacenamiento flash local rápido para cargas críticas.</li>
                <li><strong>SAN / NAS:</strong> Arquitecturas de almacenamiento centralizado a nivel de red corporativa mediante protocolos Fibre Channel o iSCSI de canal dedicado.</li>
                <li><strong>Cintas Magnéticas LTO:</strong> Almacenamiento definitivo en frío. Menor costo neto por Terabyte y retención física superior a 30 años sin consumo eléctrico, ideal para resguardo regulatorio.</li>
            </ul>
        </div>`
  },
  {
    id: 22,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">22 / 42</span>
        </div>
        <div class="slide-body">
            <h2>07. Gestión de Memoria por el S.O.</h2>
            <h3>La administración del recurso físico compartido</h3>
            <p>Comprendido el hardware, pasamos al software de sistema. La memoria RAM es un recurso escaso que debe ser arbitrado estrictamente por el kernel del <strong>Sistema Operativo</strong>.</p>
            <p>Si las aplicaciones de usuario accedieran sin restricciones a las direcciones físicas de las celdas, un desborde o error lógico corrompería el espacio del núcleo u otros procesos concurrentes.</p>
            <div class="highlight-box">
                <p>El Sistema Operativo implementa una capa de abstracción total, aislando a los programas y otorgándoles la ilusión de poseer un mapa continuo y exclusivo de direcciones.</p>
            </div>
        </div>`
  },
  {
    id: 23,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">23 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Responsabilidades del Administrador de Memoria</h2>
            <p>El módulo de gestión de memoria del kernel opera bajo tres principios directrices de diseño:</p>
            <ul>
                <li><strong>1. Control del Estado de Asignación:</strong> Mantener un registro en tiempo real de cada byte en la RAM, sabiendo con exactitud qué áreas están activas y cuáles están libres.</li>
                <li><strong>2. Protección y Aislamiento:</strong> Bloquear accesos inválidos de lectura o escritura entre procesos ajenos, impidiendo invasiones de direcciones a menos que el kernel autorice explícitamente un bloque compartido.</li>
                <li><strong>3. Reubicación Dinámica:</strong> Permitir la carga de programas en cualquier coordenada libre de la RAM, independientemente del direccionamiento original de compilación.</li>
            </ul>
        </div>`
  },
  {
    id: 24,
    section: "Bloque 5: El Rol del Software",
    hasNotes: true,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">24 / 42</span>
        </div>
        <div class="slide-body">
            <h2>El Espacio de Direcciones Lógicas</h2>
            <h3>Independencia y aislamiento de procesos</h3>
            <p>La abstracción fundamental creada para la multiprogramación segura es el <strong>Espacio de Direcciones (Address Space)</strong>.</p>
            <ul>
                <li><strong>Definición:</strong> El conjunto indexado de direcciones de memoria lógica que un proceso específico puede referenciar en su código.</li>
                <li><strong>Aislamiento:</strong> El mapa del <em>Proceso A</em> es independiente al del <em>Proceso B</em>. La instrucción virtual <code>0x00400000</code> mapea a posiciones físicas de silicio totalmente separadas en cada aplicación.</li>
            </ul>
            <div class="teacher-notes">
                <div class="teacher-notes-title">💡 Analogía pedagógica para el pizarrón</div>
                <p>Es el equivalente a las habitaciones numeradas en hoteles separados: la habitación "205" del Hotel Centro contiene huéspedes diferentes a la habitación "205" del Hotel Norte.</p>
            </div>
        </div>`
  },
  {
    id: 25,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">25 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Mecanismos de Intercambio (Swapping)</h2>
            <h3>Amortiguación ante la saturación de memoria</h3>
            <p>Cuando la demanda de memoria RAM por parte de las aplicaciones activas excede el límite físico del hardware instalado, el S.O. activa el mecanismo de <strong>Swapping</strong>.</p>
            <ul>
                <li><strong>Operación:</strong> Suspende procesos bloqueados o inactivos, copiando su imagen completa desde la RAM hacia un sector dedicado del almacenamiento secundario (partición de intercambio o archivo de paginación).</li>
                <li><strong>Liberación:</strong> Libera marcos físicos de inmediato para asignarlos a hilos prioritarios. Al despertar el proceso suspendido, el kernel lo restaura en la RAM, reubicándolo dinámicamente.</li>
            </ul>
        </div>`
  },
  {
    id: 26,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">26 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Estructuras de Control de Espacio Libre</h2>
            <div class="grid-2">
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#38bdf8; margin-bottom:8px;">Mapas de Bits (Bitmaps)</h4>
                    <p style="font-size:0.9rem; text-align:left;">La memoria física se divide en unidades fijas de asignación. Cada unidad mapea a un bit en un vector de control: <code>0</code> libre, <code>1</code> asignado.<br><br><strong>Fallo:</strong> Localizar bloques grandes libres demanda costosas búsquedas lineales bit a bit, penalizando el rendimiento.</p>
                </div>
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#06b6d4; margin-bottom:8px;">Listas Ligadas (Linked Lists)</h4>
                    <p style="font-size:0.9rem; text-align:left;">El kernel mantiene una lista de nodos ordenados secuencialmente.<br><br>Cada registro indica de forma explícita un descriptor identificador: si es un segmento asignado a un Proceso (P) o un Hueco vacío (H), seguido de su dirección base de inicio, longitud de bytes y el puntero al nodo subsecuente.</p>
                </div>
            </div>
        </div>`
  },
  {
    id: 27,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">27 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Modelos de Particionamiento de RAM</h2>
            <h3>Evolución en la asignación multiprogramada</h3>
            <ul>
                <li><strong>Particionamiento Fijo:</strong> La RAM se secciona estáticamente en bloques rígidos durante el arranque del sistema. Las particiones pueden poseer dimensiones idénticas o heterogéneas. Gestión simple, pero ineficiente ante procesos pequeños que no aprovechan el tamaño asignado.</li>
                <li><strong>Particionamiento Dinámico:</strong> Las particiones se dimensionan, crean y destruyen de forma elástica en tiempo de ejecución. Al cargar un binario, el S.O. evalúa la lista de huecos libres y corta un bloque exacto ajustado a la demanda requerida.</li>
            </ul>
        </div>`
  },
  {
    id: 28,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">28 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Algoritmos de Asignación en Listas Libres</h2>
            <table>
                <thead>
                    <tr>
                        <th>Algoritmo</th>
                        <th>Lógica de Búsqueda del S.O.</th>
                        <th>Ventaja Operativa</th>
                        <th>Desventaja Crítica</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>First-Fit (Primer Ajuste)</strong></td>
                        <td>Recorre la lista desde el inicio y otorga el <strong>primer hueco libre</strong> con capacidad suficiente.</td>
                        <td>Es la técnica más rápida en velocidad de asignación.</td>
                        <td>Concentra fragmentación residual al comienzo de la lista libre.</td>
                    </tr>
                    <tr>
                        <td><strong>Best-Fit (Mejor Ajuste)</strong></td>
                        <td>Analiza la lista completa buscando el hueco cuyo tamaño sea <strong>lo más cercano posible</strong> al solicitado.</td>
                        <td>Preserva bloques de gran tamaño para solicitudes futuras.</td>
                        <td>Genera residuos de memoria microscópicos e inutilizables.</td>
                    </tr>
                    <tr>
                        <td><strong>Worst-Fit (Peor Ajuste)</strong></td>
                        <td>Inspecciona el mapa completo y ubica el proceso en el <strong>hueco libre más grande disponible</strong>.</td>
                        <td>El residuo remanente suele ser grande y útil para otros hilos.</td>
                        <td>Agota rápidamente las áreas masivas de memoria contigua.</td>
                    </tr>
                </tbody>
            </table>
        </div>`
  },
  {
    id: 29,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">29 / 42</span>
        </div>
        <div class="slide-body">
            <h2>El Fenómeno de la Fragmentación</h2>
            <div class="grid-2">
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#38bdf8; margin-bottom:8px;">Fragmentación Interna</h4>
                    <p style="font-size:0.9rem; text-align:left;">Ocurre dentro de particiones fijas. Se manifiesta cuando el espacio requerido por el proceso es menor que las dimensiones fijas del bloque asignado.<br><br>El espacio remanente queda inutilizable para el sistema, estando técnicamente reservado pero vacío y sin uso real.</p>
                </div>
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#06b6d4; margin-bottom:8px;">Fragmentación Externa</h4>
                    <p style="font-size:0.9rem; text-align:left;">Ocurre en esquemas dinámicos. Se presenta cuando el total de memoria libre agregada en el sistema es suficiente para cargar una aplicación, pero dicho espacio está esparcido en múltiples huecos pequeños no contiguos.<br><br>Al requerir direccionamiento lineal contiguo, la asignación es rechazada.</p>
                </div>
            </div>
        </div>`
  },
  {
    id: 30,
    section: "Bloque 5: El Rol del Software",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 5: El Rol del Software</span>
            <span class="slide-num">30 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Compactación: Mitigación por Fuerza Bruta</h2>
            <h3>El alto costo de reordenar la memoria en caliente</h3>
            <div class="technical-diagram">
                <div style="width:100%;">
                    <strong>Antes de Compactar:</strong>
                    <div class="process-bar">
                        <div class="process-part" style="width:20%; background:#1e3a8a;">Proc A (20M)</div>
                        <div class="process-part" style="width:15%; background:#334155;">Libre (15M)</div>
                        <div class="process-part" style="width:25%; background:#0f766e;">Proc B (25M)</div>
                        <div class="process-part" style="width:40%; background:#334155;">Libre (40M)</div>
                    </div>
                    <strong>Después de Compactar:</strong>
                    <div class="process-bar">
                        <div class="process-part" style="width:20%; background:#1e3a8a;">Proc A (20M)</div>
                        <div class="process-part" style="width:25%; background:#0f766e;">Proc B (25M)</div>
                        <div class="process-part" style="width:55%; background:#0284c7;">Espacio Libre Unificado Contiguo (55M)</div>
                    </div>
                </div>
            </div>
            <p><strong>Costo operativo:</strong> Exige congelar temporalmente todos los procesos (Stop-The-World) mientras el CPU copia físicamente millones de palabras a nuevas ubicaciones de la RAM. Es una solución computacionalmente costosa.</p>
        </div>`
  },
  {
    id: 31,
    section: "Bloque 6: Actividad Pr\u00e1ctica de Aula",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 6: Actividad Práctica de Aula</span>
            <span class="slide-num">31 / 42</span>
        </div>
        <div class="slide-body">
            <h2>08. Taller Práctico de Asignación</h2>
            <h3>Escenario de resolución interactiva en pizarra</h3>
            <p>Planteamiento clásico para evaluar los algoritmos de asignación dinámica de memoria:</p>
            <div style="background:#0c1524; padding:15px; border-radius:8px; border: 1px solid #38bdf8; font-size:1rem; line-height:1.3;">
                <strong>Estado Inicial de Particiones Libres (Orden Físico):</strong><br>
                <code>[Partición 1: 100K] → [Partición 2: 500K] → [Partición 3: 200K] → [Partición 4: 300K] → [Partición 5: 400K]</code><br><br>
                <strong>Ráfaga Secuencial de Procesos Entrantes:</strong><br>
                <code>Proceso 1 (P1): 212K  →  Proceso 2 (P2): 417K  →  Proceso 3 (P3): 112K  →  Proceso 4 (P4): 350K</code>
            </div>
            <p style="margin-top:10px;">Determinar la asignación de bloques mediante la estrategia de <strong>Best-Fit (Mejor Ajuste)</strong> y calcular la fragmentación resultante.</p>
        </div>`
  },
  {
    id: 32,
    section: "Bloque 6: Actividad Pr\u00e1ctica de Aula",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 6: Actividad Práctica de Aula</span>
            <span class="slide-num">32 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Análisis de Asignación: Paso a Paso</h2>
            <ul>
                <li><strong>P1 (212K):</strong> Evalúa los huecos. La partición más ajustada que lo contiene es la de 300K. <br><em>Fragmentación Interna:</em> 300K - 212K = <strong>88K</strong>.</li>
                <li><strong>P2 (417K):</strong> Solo dispone de espacio suficiente en la partición de 500K. <br><em>Fragmentación Interna:</em> 500K - 417K = <strong>83K</strong>.</li>
                <li><strong>P3 (112K):</strong> Entre los huecos libres de 100K (insuficiente), 200K y 400K, el óptimo es el de 200K. <br><em>Fragmentación Interna:</em> 200K - 112K = <strong>88K</strong>.</li>
                <li><strong>P4 (350K):</strong> El único bloque remanente con capacidad es el de 400K. <br><em>Fragmentación Interna:</em> 400K - 350K = <strong>50K</strong>.</li>
            </ul>
        </div>`
  },
  {
    id: 33,
    section: "Bloque 6: Actividad Pr\u00e1ctica de Aula",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 6: Actividad Práctica de Aula</span>
            <span class="slide-num">33 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Matriz de Estado Final del Sistema</h2>
            <table>
                <thead>
                    <tr>
                        <th>Partición Física</th>
                        <th>Tamaño Inicial</th>
                        <th>Proceso Asignado</th>
                        <th>Espacio Útil</th>
                        <th>Fragmentación Interna</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Partición 1</td>
                        <td>100 KB</td>
                        <td><em style="color:#ef4444;">Ninguno (Libre)</em></td>
                        <td>0 KB</td>
                        <td>0 KB</td>
                    </tr>
                    <tr>
                        <td>Partición 2</td>
                        <td>500 KB</td>
                        <td><strong>Proceso 2 (P2)</strong></td>
                        <td>417 KB</td>
                        <td><strong>83 KB</strong></td>
                    </tr>
                    <tr>
                        <td>Partición 3</td>
                        <td>200 KB</td>
                        <td><strong>Proceso 3 (P3)</strong></td>
                        <td>112 KB</td>
                        <td><strong>88 KB</strong></td>
                    </tr>
                    <tr>
                        <td>Partición 4</td>
                        <td>300 KB</td>
                        <td><strong>Proceso 1 (P1)</strong></td>
                        <td>212 KB</td>
                        <td><strong>88 KB</strong></td>
                    </tr>
                    <tr>
                        <td>Partición 5</td>
                        <td>400 KB</td>
                        <td><strong>Proceso 4 (P4)</strong></td>
                        <td>350 KB</td>
                        <td><strong>50 KB</strong></td>
                    </tr>
                </tbody>
            </table>
            <div class="highlight-box" style="padding:10px; margin-top:10px;">
                <p style="font-size:1rem;"><strong>Métricas del Taller:</strong> Desperdicio por fragmentación interna: <strong>309 KB</strong>. Fragmentación externa: <strong>0 KB</strong> (todas las solicitudes fueron procesadas con éxito).</p>
            </div>
        </div>`
  },
  {
    id: 34,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">34 / 42</span>
        </div>
        <div class="slide-body">
            <h2>09. Memoria Virtual: El Paradigma Definitivo</h2>
            <h3>Ruptura de la contigüidad física obligatoria</h3>
            <p>Los esquemas clásicos imponen una restricción: exigen contigüidad en los bloques de la RAM y que todo el programa resida en la memoria física para poder ejecutarse.</p>
            <p>La <strong>Memoria Virtual</strong> desliga por completo el direccionamiento lógico del programa de la distribución real del hardware de almacenamiento.</p>
            <ul>
                <li><strong>Premisa:</strong> Un software puede ejecutarse si mantiene en la RAM física exclusivamente los bloques de código o datos requeridos en sus ciclos inmediatos.</li>
                <li><strong>Efecto neto:</strong> Habilita al S.O. a ejecutar procesos cuyas demandas superen la capacidad instalada de memoria RAM física del equipo.</li>
            </ul>
        </div>`
  },
  {
    id: 35,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">35 / 42</span>
        </div>
        <div class="slide-body">
            <h2>Mecánica de Paginación</h2>
            <h3>Segmentación homogénea del mapa lógico</h3>
            <p>La arquitectura de memoria virtual se implementa dividiendo el espacio de direcciones en bloques de tamaño fijo potencia de 2 (habitualmente 4KB):</p>
            <div class="grid-2">
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#38bdf8; margin-bottom:8px;">Páginas Virtuales (Lógicas)</h4>
                    <p style="font-size:0.9rem; text-align:left;">Bloques uniformes en los que el compilador y el S.O. estructuran el espacio lógico de una aplicación. El programa asume un orden secuencial contiguo.</p>
                </div>
                <div style="background:#0f172a; padding:15px; border-radius:6px; border:1px solid #1e293b;">
                    <h4 style="color:#06b6d4; margin-bottom:8px;">Marcos de Página (Frames)</h4>
                    <p style="font-size:0.9rem; text-align:left;">Divisiones físicas idénticas en tamaño dentro de la memoria RAM real. Almacenan cualquier página lógica sin requerir contigüidad espacial en silicio.</p>
                </div>
            </div>
            <div class="highlight-box" style="margin-top:15px; padding:12px;">
                <p style="font-size:1rem;"><strong>Eliminación de la Fragmentación Externa:</strong> Cualquier página libre encaja en cualquier marco físico disponible.</p>
            </div>
        </div>`
  },
  {
    id: 36,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">36 / 42</span>
        </div>
        <div class="slide-body">
            <h2>La Tabla de Páginas (Page Table)</h2>
            <h3>La estructura de mapeo dinámico del kernel</h3>
            <p>Para registrar la posición física de cada fragmento lógico de los programas, el S.O. mantiene una estructura indexada por proceso denominada <strong>Tabla de Páginas</strong>.</p>
            <ul>
                <li><strong>Mapeo:</strong> Actúa como un diccionario indexado que traduce el número de página virtual al marco físico real en la RAM.</li>
                <li><strong>Bit de Validez / Presencia:</strong> Indicador binario crítico que señala si la página buscada está cargada en la RAM principal (<code>1</code>) o permanece en el almacenamiento secundario lento de intercambio (<code>0</code>).</li>
            </ul>
        </div>`
  },
  {
    id: 37,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">37 / 42</span>
        </div>
        <div class="slide-body">
            <h2>El Mecanismo de Traducción Lógica</h2>
            <div class="technical-diagram">
                <div style="display:flex; gap:15px; font-family:monospace; background:#111827; padding:10px;">
                    <div style="border:1px solid #38bdf8; padding:5px;">Página Lógica (p)</div>
                    <div style="border:1px solid #06b6d4; padding:5px;">Desplazamiento (d)</div>
                </div>
                <div style="color:#38bdf8; font-size:1rem;">↓ Consulta en Tabla</div>
                <div style="border:1px solid #fff; padding:8px; background:#1e293b; font-size:0.9rem;">
                    [ p ] ---- Mapeo ----→ [ Marco Físico 'f' ]
                </div>
                <div style="color:#06b6d4; font-size:1rem;">↓ Concatenación Directa</div>
                <div style="display:flex; gap:15px; font-family:monospace; background:#111827; padding:10px;">
                    <div style="border:1px solid #4ade80; padding:5px; color:#4ade80;">Marco RAM (f)</div>
                    <div style="border:1px solid #06b6d4; padding:5px;">Desplazamiento (d)</div>
                </div>
                <div class="diagram-title">Figura 9.1: Proceso lineal de traducción de direcciones virtuales a físicas.</div>
            </div>
            <p>Es fundamental recalcar que el <strong>Desplazamiento (d)</strong> se mantiene inalterado en el proceso, pues la posición relativa interna dentro del bloque no varía.</p>
        </div>`
  },
  {
    id: 38,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">38 / 42</span>
        </div>
        <div class="slide-body">
            <h2>10. Unidad de Gestión de Memoria (MMU)</h2>
            <h3>La aceleración por hardware del mapa de traducción</h3>
            <p>La traducción ocurre miles de millones de veces por segundo en cada ciclo de instrucción del código. Ejecutar este proceso mediante software del S.O. degradaría drásticamente el rendimiento global.</p>
            <div class="highlight-box">
                <p><strong>La MMU (Memory Management Unit) es el coprocesador de hardware integrado en el silicio de la CPU encargado de interceptar cada acceso a memoria y resolver el mapeo en nanosegundos.</strong></p>
            </div>
            <p>Si la MMU detecta que el bit de validez de la página consultada es cero (<code>0</code>), interrumpe el ciclo del hardware y dispara la excepción de <strong>Fallo de Página (Page Fault)</strong>.</p>
        </div>`
  },
  {
    id: 39,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">39 / 42</span>
        </div>
        <div class="slide-body">
            <h2>El Protocolo de Rescate ante un Page Fault</h2>
            <p>Al activarse la interrupción por fallo de página, el kernel toma el control del sistema:</p>
            <ol>
                <li>Localiza la página requerida en el espacio de intercambio del disco secundario.</li>
                <li>Identifica un marco físico libre en la memoria RAM principal. *(Aplica algoritmos de reemplazo como LRU si la RAM está colmada)*.</li>
                <li>Ordena la transferencia por DMA del bloque de datos desde el almacenamiento hacia el marco asignado.</li>
                <li>Modifica la Tabla de Páginas vinculando el marco físico y cambiando el bit de presencia a uno (<code>1</code>).</li>
                <li>Indica al CPU reanudar la instrucción exacta de hardware que causó la excepción.</li>
            </ol>
        </div>`
  },
  {
    id: 40,
    section: "Bloque 7: Memoria Virtual",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Bloque 7: Memoria Virtual</span>
            <span class="slide-num">40 / 42</span>
        </div>
        <div class="slide-body">
            <h2>El TLB (Translation Lookaside Buffer)</h2>
            <h3>Caché de hardware para tablas de traducción</h3>
            <p>Debido a que las tablas de páginas residen en la RAM, la MMU requeriría accesos extra a memoria para traducir cada dirección lógica. Para evitar esta penalización, se integra la caché asociativa de alta velocidad denominada <strong>TLB</strong>.</p>
            <ul>
                <li><strong>Función:</strong> Resguarda las últimas traducciones válidas indexadas de página-a-marco resueltas por el hardware.</li>
                <li><strong>Operación:</strong> La MMU consulta la TLB en paralelo. Si ocurre un acierto (TLB Hit), la dirección física se obtiene al instante, reduciendo el impacto en el bus de datos.</li>
            </ul>
        </div>`
  },
  {
    id: 41,
    section: "Conclusi\u00f3n y Cierre",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Conclusión y Cierre</span>
            <span class="slide-num">41 / 42</span>
        </div>
        <div class="slide-body">
            <h2>11. Síntesis y Buenas Prácticas</h2>
            <h3>Impacto del hardware en el desarrollo de software</h3>
            <p>Completado el mapeo de memoria, la interrelación entre el silicio y el software define el rendimiento de un sistema:</p>
            <ul>
                <li><strong>Conciencia del Hardware:</strong> Diseñar estructuras de datos contiguas incrementa los Cache Hits en L1/L2, reduciendo ciclos perdidos por bloqueos del CPU.</li>
                <li><strong>Eficiencia en la Gestión:</strong> Controlar la fragmentación y optimizar la reserva dinámica mitiga la compactación forzada y degradaciones por Swapping masivo.</li>
                <li><strong>Aislamiento Seguro:</strong> Las políticas de protección implementadas en el hardware de la MMU garantizan entornos de multiprocesamiento estables.</li>
            </ul>
        </div>`
  },
  {
    id: 42,
    section: "Fin de la Sesi\u00f3n Magistral",
    hasNotes: false,
    html: `<div class="slide-header">
            <span class="slide-section">Fin de la Sesión Magistral</span>
            <span class="slide-num">42 / 42</span>
        </div>
        <div class="slide-body" style="text-align: center;">
            <h2 style="font-size: 3.5rem; color: #38bdf8;">¿Preguntas o Debate?</h2>
            <p style="text-align: center; font-size: 1.3rem; color: #94a3b8; margin-top: 20px;">Muchas gracias por su atención.</p>
            <p style="text-align: center; font-size: 0.95rem; color: #64748b; margin-top: 60px;">
                Sistemas de Memoria y Gestión de Recursos • Cátedra Unificada Unidades 3 y 4
            </p>
        </div>`
  },
];
