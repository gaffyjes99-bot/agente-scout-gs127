import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `Eres el Asistente Jefe Scout Digital del **Grupo Scout 127 Liceo de Cervantes Norte** de Colombia. Tu misión es ayudar a los jefes de la Tropa a diseñar actividades épicas para jóvenes de 11 a 14 años dentro del ciclo de programa **Spider-Verso**.

---

## CONOCIMIENTO BASE - BITÁCORA SCOUT

### La Ruta de Progresión
Los scouts recorren fases: Pieterno → Vigía → Explorador → Excursionista → Expedicionario. Cada fase tiene desafíos personales que el scout realiza en cualquier orden.

### Promesa Scout
"Por mi honor y con la gracia de Dios, prometo hacer todo cuanto de mí dependa, para cumplir mis deberes para con Dios y la Patria, ayudar al prójimo en toda circunstancia y cumplir fielmente la Ley Scout."

### Ley Scout (10 puntos)
1. El Scout cifra su honor en ser digno de confianza
2. El Scout es leal
3. El Scout es útil y ayuda a los demás sin esperar recompensa
4. El Scout es amigo de todos y hermano de cualquier scout
5. El Scout es cortés y respeta las convicciones de los demás
6. El Scout ve en la naturaleza la obra de Dios y procura su conservación
7. El Scout es obediente, responsable y ordenado
8. El Scout sonríe y canta en sus dificultades
9. El Scout es económico, trabajador y cuidadoso del bien ajeno
10. El Scout es limpio y sano, puro en pensamientos, palabras y acciones

### Lema: "¡SIEMPRE LISTO!" | Divisa: "HACER UNA BUENA ACCIÓN DIARIA"

### Virtudes Scout: Lealtad, Pureza, Abnegación/Sacrificio

### Sistema de Patrullas
Cada Tropa está conformada por 2+ patrullas de 6-8 integrantes. Cada patrulla tiene: Guía (líder), Sub-Guía, scouts. Las patrullas llevan nombres de animales regionales.

### Formaciones Scout
Herradura (ceremonias), Rectángulo (más usual), Fila India, Semicírculo (demostraciones), Estrella (gran juego), Columnas (desfile).

### Señales de Pito
Atención, Auxilio-Socorro (SOS), Alto, Marchen, Peligro, Entendido, Reunión de Tropa, Reunión de Guías, Reunión de Jefatura.

### Áreas de Crecimiento
1. **Creatividad** - expresión artística, ingenio, innovación
2. **Afectividad** - emociones, relaciones, empatía
3. **Sociabilidad** - trabajo en equipo, comunidad, liderazgo
4. **Carácter** - valores, disciplina, resiliencia
5. **Espiritualidad** - fe, trascendencia, sentido de vida
6. **Corporalidad** - salud, deporte, habilidades físicas

---

## FICHA DE ACTIVIDAD - FORMATO OFICIAL GS127

La Ficha de Actividad tiene las siguientes secciones:
- **Información General**: Ciclo de Programa, Nombre Actividad, Fecha y hora, Lugar, Encargado, Rama (TROPA), Participantes, Duración, Área de Crecimiento
- **Planeación Educativa**: Objetivo General, Objetivos Específicos, Objetivos por Área de Crecimiento
- **Cronograma**: Tabla con Tiempo, Actividad, Descripción, Responsable
- **Contexto de la actividad** (Ambiente de referencia Spider-Verso)
- **Paso a paso** de la Actividad
- **Equipo de Planificación**: Nombre, Cargo, Responsabilidad, Contacto
- **Materiales**: N°, Nombre, Descripción/Característica, Cantidad
- **Recomendaciones para el Desarrollo**
- **Evaluación**: Cualitativa y Cuantitativa (Desafiante, Útil, Recompensante, Atractiva, Segura)
- **Evaluación de Amenazas/Riesgos**
- **Firmas**: Elaboró, Revisó, Aprobó

---

## REGLAS DE COMPORTAMIENTO

### 1. SALUDO Y RECOPILACIÓN INICIAL
- Saluda SIEMPRE de forma fraternal con el saludo scout: "¡Buenos días/tardes hermano Jefe! ¡Siempre Listos! 🤝"
- Solicita OBLIGATORIAMENTE:
  a) Fecha programada para la actividad
  b) Número de scouts que asistirán
- El Ciclo de Programa ACTUAL es: **Spider-Verso** (tema central: multiverso de héroes, cada patrulla es una versión alternativa de Spider-Man, misiones interdimensionales)
- Solicita una idea inicial del jefe; si no la tiene, propón una actividad creativa basada en la Bitácora Scout

### 2. DISEÑO DE ACTIVIDADES
- Las actividades deben ser DESAFIANTES, ANIMADAS y DIVERTIDAS para jóvenes de 11-14 años
- Usa temática Spider-Verso: cada actividad tiene "misiones", "portales dimensionales", "telarañas", "multiverso"
- Aplica principios del escultismo: sistema de patrullas, progresión por fases, Ley Scout
- Las actividades deben desarrollar las Áreas de Crecimiento
- Asegúrate que sean seguras, retadoras y pedagógicas

### 3. ENTREGA - FICHA DE ACTIVIDAD
Cuando el jefe apruebe la idea, genera la Ficha de Actividad COMPLETA en formato JSON con esta estructura exacta:

IMPORTANTE: Cuando generes la ficha, incluye al FINAL de tu respuesta un bloque JSON así:
\`\`\`json_ficha
{
  "ficha_no": "número",
  "ciclo_programa": "Spider-Verso",
  "nombre_actividad": "...",
  "fecha_hora": "...",
  "lugar": "LICEO DE CERVANTES NORTE",
  "encargado": "...",
  "rama": "TROPA",
  "participantes": "número",
  "duracion": "horas/minutos",
  "area_crecimiento": "área(s)",
  "objetivo_general": "...",
  "objetivos_especificos": ["obj1", "obj2", "obj3"],
  "objetivos_areas": {
    "creatividad": "...",
    "afectividad": "...",
    "sociabilidad": "...",
    "caracter": "...",
    "espiritualidad": "...",
    "corporalidad": "..."
  },
  "cronograma": [
    {"tiempo": "X min", "actividad": "nombre", "descripcion": "descripción detallada", "responsable": "quien"},
    {"tiempo": "X min", "actividad": "nombre", "descripcion": "descripción detallada", "responsable": "quien"}
  ],
  "contexto_actividad": "descripción del ambiente Spider-Verso...",
  "paso_a_paso": ["paso 1", "paso 2", "paso 3", "..."],
  "equipo_planificacion": [
    {"nombre": "...", "cargo": "Jefe de Tropa", "responsabilidad": "...", "contacto": "..."}
  ],
  "materiales": [
    {"numero": 1, "nombre": "...", "descripcion": "...", "cantidad": "..."},
    {"numero": 2, "nombre": "...", "descripcion": "...", "cantidad": "..."}
  ],
  "recomendaciones": "...",
  "evaluacion_cualitativa": "...",
  "notas_seguridad": "..."
}
\`\`\`

### TONO
- Servicial, experto, motivador, arraigado en valores de la Ley y Promesa Scout
- Usa lenguaje técnico scout: patrullas, guías, insignias, progresión, sistema de patrullas
- Mezcla el entusiasmo del Spider-Verso con la seriedad pedagógica del escultismo
- En español colombiano, cálido y fraternal`;

const WELCOME_MESSAGE = {
  role: "assistant",
  content: `¡Buenos días hermano Jefe! ¡**Siempre Listos**! 🕷️🤝

Soy tu Asistente Jefe Scout Digital del **Grupo Scout 127 Liceo de Cervantes Norte**. Estoy aquí para ayudarte a diseñar actividades épicas para la Tropa dentro de nuestro ciclo de programa **Spider-Verso** 🌐

Para comenzar a planear nuestra próxima aventura multidimensional, necesito que me indiques:

1. 📅 **¿Cuál es la fecha programada para la actividad?**
2. 👥 **¿Cuántos scouts asistirán?**

Una vez tenga estos datos, ¡diseñamos juntos una actividad que haga quedar a nuestros scouts como verdaderos Héroes del Multiverso! 🦸‍♂️`
};

function FichaViewer({ ficha, onClose }) {
  const downloadHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Ficha de Actividad - ${ficha.nombre_actividad}</title>
<style>
  body { font-family: Arial, sans-serif; font-size: 11px; margin: 20px; color: #000; }
  h1 { font-size: 14px; text-align: center; color: #1a1a6e; }
  h2 { font-size: 12px; color: #1a1a6e; border-bottom: 1px solid #1a1a6e; margin-top: 15px; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
  th { background: #1a1a6e; color: white; padding: 5px; text-align: left; font-size: 10px; }
  td { border: 1px solid #ccc; padding: 5px; vertical-align: top; }
  .header-table td { border: 1px solid #1a1a6e; padding: 4px; }
  .label { font-weight: bold; background: #e8e8f0; }
  .footer { margin-top: 30px; display: flex; justify-content: space-around; }
  .firma { border-top: 1px solid #000; width: 150px; text-align: center; padding-top: 5px; }
  @media print { body { margin: 10px; } }
</style>
</head>
<body>
<h1>🕷️ GRUPO SCOUT 127 - LICEO DE CERVANTES NORTE</h1>
<h1>FICHA DE ACTIVIDAD N° ${ficha.ficha_no || '01'} - CICLO: ${ficha.ciclo_programa}</h1>

<table class="header-table">
  <tr><td class="label">Nombre de la Actividad</td><td colspan="3">${ficha.nombre_actividad}</td></tr>
  <tr>
    <td class="label">Fecha y Hora</td><td>${ficha.fecha_hora}</td>
    <td class="label">Lugar</td><td>${ficha.lugar}</td>
  </tr>
  <tr>
    <td class="label">Rama</td><td>${ficha.rama}</td>
    <td class="label">Participantes</td><td>${ficha.participantes}</td>
  </tr>
  <tr>
    <td class="label">Duración</td><td>${ficha.duracion}</td>
    <td class="label">Área de Crecimiento</td><td>${ficha.area_crecimiento}</td>
  </tr>
  <tr><td class="label">Encargado</td><td colspan="3">${ficha.encargado || ''}</td></tr>
</table>

<h2>PLANEACIÓN EDUCATIVA</h2>
<table><tr><td class="label" style="width:30%">Objetivo General</td><td>${ficha.objetivo_general}</td></tr></table>
<table>
  <tr><th>Objetivos Específicos</th><th>Objetivos por Área de Crecimiento</th></tr>
  <tr><td>${(ficha.objetivos_especificos||[]).map((o,i)=>`${i+1}. ${o}`).join('<br>')}</td>
  <td>
    <b>Creatividad:</b> ${ficha.objetivos_areas?.creatividad||''}<br>
    <b>Afectividad:</b> ${ficha.objetivos_areas?.afectividad||''}<br>
    <b>Sociabilidad:</b> ${ficha.objetivos_areas?.sociabilidad||''}<br>
    <b>Carácter:</b> ${ficha.objetivos_areas?.caracter||''}<br>
    <b>Espiritualidad:</b> ${ficha.objetivos_areas?.espiritualidad||''}<br>
    <b>Corporalidad:</b> ${ficha.objetivos_areas?.corporalidad||''}
  </td></tr>
</table>

<h2>CRONOGRAMA</h2>
<table>
  <tr><th>Tiempo</th><th>Actividad</th><th>Descripción</th><th>Responsable</th></tr>
  ${(ficha.cronograma||[]).map(r=>`<tr><td>${r.tiempo}</td><td>${r.actividad}</td><td>${r.descripcion}</td><td>${r.responsable}</td></tr>`).join('')}
</table>

<h2>CONTEXTO DE LA ACTIVIDAD (Ambiente de referencia)</h2>
<table><tr><td>${ficha.contexto_actividad}</td></tr></table>

<h2>PASO A PASO DE LA ACTIVIDAD</h2>
<table><tr><td>${(ficha.paso_a_paso||[]).map((p,i)=>`${i+1}. ${p}`).join('<br>')}</td></tr></table>

<h2>EQUIPO DE PLANIFICACIÓN</h2>
<table>
  <tr><th>Nombre</th><th>Cargo</th><th>Responsabilidad</th><th>Contacto</th></tr>
  ${(ficha.equipo_planificacion||[]).map(e=>`<tr><td>${e.nombre}</td><td>${e.cargo}</td><td>${e.responsabilidad}</td><td>${e.contacto}</td></tr>`).join('')}
</table>

<h2>MATERIALES</h2>
<table>
  <tr><th>N°</th><th>Nombre del Material</th><th>Descripción</th><th>Cantidad</th></tr>
  ${(ficha.materiales||[]).map(m=>`<tr><td>${m.numero}</td><td>${m.nombre}</td><td>${m.descripcion}</td><td>${m.cantidad}</td></tr>`).join('')}
</table>

<h2>RECOMENDACIONES Y NOTAS DE SEGURIDAD</h2>
<table>
  <tr><td class="label" style="width:50%">Recomendaciones para el Desarrollo</td><td class="label">Notas de Seguridad</td></tr>
  <tr><td>${ficha.recomendaciones}</td><td>${ficha.notas_seguridad||''}</td></tr>
</table>

<h2>EVALUACIÓN DE LA ACTIVIDAD</h2>
<table><tr><td class="label">Cualitativa</td><td>${ficha.evaluacion_cualitativa}</td></tr></table>

<div class="footer">
  <div class="firma">Elaboró</div>
  <div class="firma">Revisó</div>
  <div class="firma">Aprobó</div>
</div>

<p style="text-align:center;margin-top:20px;color:#666;font-size:10px">
  Grupo Scout 127 - Liceo de Cervantes Norte | Asociación Scouts de Colombia | ¡Siempre Listos!
</p>
</body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Ficha_Actividad_${ficha.nombre_actividad?.replace(/\s+/g,'_') || 'Scout'}_GS127.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,0.85)', zIndex:1000,
      display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'
    }}>
      <div style={{
        background:'#0a0a1a', border:'2px solid #e63946', borderRadius:'12px',
        maxWidth:'800px', width:'100%', maxHeight:'90vh', overflow:'auto',
        fontFamily:'Arial, sans-serif', fontSize:'12px', color:'#fff'
      }}>
        {/* Header */}
        <div style={{
          background:'linear-gradient(135deg, #1a1a6e, #e63946)',
          padding:'16px 20px', display:'flex', justifyContent:'space-between', alignItems:'center',
          borderRadius:'10px 10px 0 0'
        }}>
          <div>
            <div style={{fontSize:'16px', fontWeight:'bold'}}>🕷️ FICHA DE ACTIVIDAD</div>
            <div style={{fontSize:'12px', opacity:0.9}}>Grupo Scout 127 - Liceo de Cervantes Norte</div>
          </div>
          <div style={{display:'flex', gap:'10px'}}>
            <button onClick={downloadHTML} style={{
              background:'#fff', color:'#1a1a6e', border:'none', borderRadius:'6px',
              padding:'8px 16px', cursor:'pointer', fontWeight:'bold', fontSize:'12px'
            }}>⬇️ Descargar HTML</button>
            <button onClick={onClose} style={{
              background:'rgba(255,255,255,0.2)', color:'#fff', border:'1px solid rgba(255,255,255,0.3)',
              borderRadius:'6px', padding:'8px 12px', cursor:'pointer', fontSize:'14px'
            }}>✕</button>
          </div>
        </div>

        <div style={{padding:'20px'}}>
          {/* Info General */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'16px',
            background:'rgba(230,57,70,0.1)', border:'1px solid rgba(230,57,70,0.3)', borderRadius:'8px', padding:'12px'
          }}>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Ciclo: </span>{ficha.ciclo_programa}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Actividad: </span>{ficha.nombre_actividad}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Fecha: </span>{ficha.fecha_hora}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Lugar: </span>{ficha.lugar}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Participantes: </span>{ficha.participantes}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Duración: </span>{ficha.duracion}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Área: </span>{ficha.area_crecimiento}</div>
            <div><span style={{color:'#e63946', fontWeight:'bold'}}>Encargado: </span>{ficha.encargado}</div>
          </div>

          {/* Objetivos */}
          <Section title="📋 PLANEACIÓN EDUCATIVA">
            <div style={{marginBottom:'8px'}}><strong style={{color:'#e63946'}}>Objetivo General:</strong> {ficha.objetivo_general}</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px'}}>
              <div>
                <strong style={{color:'#e63946'}}>Objetivos Específicos:</strong>
                <ul style={{margin:'4px 0', paddingLeft:'16px'}}>
                  {(ficha.objetivos_especificos||[]).map((o,i)=><li key={i}>{o}</li>)}
                </ul>
              </div>
              <div>
                <strong style={{color:'#e63946'}}>Por Áreas de Crecimiento:</strong>
                {Object.entries(ficha.objetivos_areas||{}).map(([k,v])=>(
                  <div key={k} style={{marginTop:'3px'}}><span style={{textTransform:'capitalize', fontWeight:'bold'}}>{k}:</span> {v}</div>
                ))}
              </div>
            </div>
          </Section>

          {/* Cronograma */}
          <Section title="⏱️ CRONOGRAMA">
            <table style={{width:'100%', borderCollapse:'collapse'}}>
              <thead>
                <tr style={{background:'rgba(230,57,70,0.3)'}}>
                  {['Tiempo','Actividad','Descripción','Responsable'].map(h=>(
                    <th key={h} style={{padding:'6px', textAlign:'left', border:'1px solid rgba(255,255,255,0.1)', fontSize:'11px'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(ficha.cronograma||[]).map((r,i)=>(
                  <tr key={i} style={{background: i%2===0?'rgba(255,255,255,0.03)':'transparent'}}>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)', whiteSpace:'nowrap'}}>{r.tiempo}</td>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)', fontWeight:'bold'}}>{r.actividad}</td>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)'}}>{r.descripcion}</td>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)'}}>{r.responsable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* Contexto */}
          <Section title="🌐 CONTEXTO (Ambiente Spider-Verso)">
            <p style={{margin:0, lineHeight:'1.6'}}>{ficha.contexto_actividad}</p>
          </Section>

          {/* Paso a paso */}
          <Section title="📌 PASO A PASO">
            <ol style={{margin:0, paddingLeft:'20px', lineHeight:'1.8'}}>
              {(ficha.paso_a_paso||[]).map((p,i)=><li key={i}>{p}</li>)}
            </ol>
          </Section>

          {/* Materiales */}
          <Section title="🎒 MATERIALES">
            <table style={{width:'100%', borderCollapse:'collapse'}}>
              <thead>
                <tr style={{background:'rgba(230,57,70,0.3)'}}>
                  {['N°','Material','Descripción','Cantidad'].map(h=>(
                    <th key={h} style={{padding:'6px', textAlign:'left', border:'1px solid rgba(255,255,255,0.1)'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(ficha.materiales||[]).map((m,i)=>(
                  <tr key={i} style={{background: i%2===0?'rgba(255,255,255,0.03)':'transparent'}}>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)', textAlign:'center'}}>{m.numero}</td>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)'}}>{m.nombre}</td>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)'}}>{m.descripcion}</td>
                    <td style={{padding:'6px', border:'1px solid rgba(255,255,255,0.1)'}}>{m.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* Recomendaciones */}
          <Section title="⚠️ RECOMENDACIONES Y SEGURIDAD">
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
              <div><strong style={{color:'#e63946'}}>Recomendaciones:</strong><p style={{marginTop:'4px'}}>{ficha.recomendaciones}</p></div>
              <div><strong style={{color:'#e63946'}}>Notas de Seguridad:</strong><p style={{marginTop:'4px'}}>{ficha.notas_seguridad}</p></div>
            </div>
          </Section>

          {/* Evaluacion */}
          <Section title="📊 EVALUACIÓN">
            <div><strong style={{color:'#e63946'}}>Cualitativa:</strong> {ficha.evaluacion_cualitativa}</div>
          </Section>

          {/* Firmas */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'16px', marginTop:'20px',
            textAlign:'center'
          }}>
            {['Elaboró','Revisó','Aprobó'].map(f=>(
              <div key={f} style={{borderTop:'1px solid rgba(255,255,255,0.4)', paddingTop:'8px', color:'#aaa'}}>
                {f}
              </div>
            ))}
          </div>

          <div style={{textAlign:'center', marginTop:'16px', color:'#555', fontSize:'10px'}}>
            Grupo Scout 127 - Liceo de Cervantes Norte | Asociación Scouts de Colombia | ¡Siempre Listos!
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{marginBottom:'12px'}}>
      <div style={{
        background:'rgba(26,26,110,0.6)', padding:'6px 10px',
        borderLeft:'3px solid #e63946', marginBottom:'8px',
        fontWeight:'bold', fontSize:'12px', color:'#e8e8ff'
      }}>{title}</div>
      <div style={{paddingLeft:'8px', lineHeight:'1.6', color:'#ddd'}}>{children}</div>
    </div>
  );
}

function SpiderWeb({ style }) {
  return (
    <svg style={style} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.15">
      <line x1="100" y1="0" x2="100" y2="200" stroke="white" strokeWidth="0.5"/>
      <line x1="0" y1="100" x2="200" y2="100" stroke="white" strokeWidth="0.5"/>
      <line x1="0" y1="0" x2="200" y2="200" stroke="white" strokeWidth="0.5"/>
      <line x1="200" y1="0" x2="0" y2="200" stroke="white" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="20" stroke="white" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="45" stroke="white" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="0.5"/>
      <circle cx="100" cy="100" r="95" stroke="white" strokeWidth="0.5"/>
    </svg>
  );
}

function TypingIndicator() {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'4px', padding:'12px 16px'}}>
      {[0,1,2].map(i=>(
        <div key={i} style={{
          width:'8px', height:'8px', borderRadius:'50%', background:'#e63946',
          animation:'bounce 1.2s infinite', animationDelay:`${i*0.2}s`
        }}/>
      ))}
      <style>{`@keyframes bounce { 0%,80%,100%{transform:scale(0.8);opacity:0.5} 40%{transform:scale(1.2);opacity:1} }`}</style>
    </div>
  );
}

export default function ScoutAgent() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [ficha, setFicha] = useState(null);
  const [showFicha, setShowFicha] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const extractFicha = (text) => {
    const match = text.match(/```json_ficha\s*([\s\S]*?)```/);
    if (match) {
      try { return JSON.parse(match[1].trim()); } catch(e) { return null; }
    }
    return null;
  };

  const cleanText = (text) => text.replace(/```json_ficha[\s\S]*?```/g, '').trim();

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      const fullText = data.content?.map(c => c.text || '').join('') || 'Error al procesar la respuesta.';
      
      const extractedFicha = extractFicha(fullText);
      if (extractedFicha) setFicha(extractedFicha);

      const displayText = cleanText(fullText);
      setMessages(prev => [...prev, { role: 'assistant', content: displayText, hasFicha: !!extractedFicha }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: '⚠️ Error de conexión. Verifica tu red e intenta nuevamente.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br/>')
      .replace(/#{1,3}\s(.*?)(<br\/>|$)/g, '<strong style="font-size:14px;color:#e63946">$1</strong>$2');
  };

  return (
    <div style={{
      height: '100vh', display: 'flex', flexDirection: 'column',
      background: 'linear-gradient(135deg, #060612 0%, #0d0d2b 50%, #1a0408 100%)',
      fontFamily: '"Segoe UI", Arial, sans-serif', position: 'relative', overflow: 'hidden'
    }}>
      {/* Background web */}
      <SpiderWeb style={{position:'absolute', top:'-50px', right:'-50px', width:'300px', height:'300px'}}/>
      <SpiderWeb style={{position:'absolute', bottom:'-50px', left:'-50px', width:'250px', height:'250px'}}/>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, #0d0d2b, #1a0408)',
        borderBottom: '2px solid #e63946',
        padding: '12px 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(230,57,70,0.3)', zIndex: 10
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'14px'}}>
          <div style={{
            width:'48px', height:'48px', borderRadius:'50%',
            background:'linear-gradient(135deg, #e63946, #1a1a6e)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'24px', boxShadow:'0 0 15px rgba(230,57,70,0.5)'
          }}>🕷️</div>
          <div>
            <div style={{fontWeight:'bold', fontSize:'15px', color:'#fff', letterSpacing:'0.5px'}}>
              Jefe Scout IA — GS127
            </div>
            <div style={{fontSize:'11px', color:'rgba(255,255,255,0.6)'}}>
              Grupo Scout 127 · Liceo de Cervantes Norte · Ciclo: <span style={{color:'#e63946', fontWeight:'bold'}}>Spider-Verso</span>
            </div>
          </div>
        </div>
        <div style={{display:'flex', gap:'8px', alignItems:'center'}}>
          {ficha && (
            <button onClick={()=>setShowFicha(true)} style={{
              background: 'linear-gradient(135deg, #e63946, #c1121f)',
              color: '#fff', border: 'none', borderRadius: '8px',
              padding: '8px 16px', cursor: 'pointer', fontWeight: 'bold',
              fontSize: '12px', boxShadow: '0 2px 10px rgba(230,57,70,0.4)',
              display:'flex', alignItems:'center', gap:'6px'
            }}>
              📋 Ver Ficha
            </button>
          )}
          <div style={{
            width:'10px', height:'10px', borderRadius:'50%', background:'#22c55e',
            boxShadow:'0 0 8px #22c55e'
          }}/>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: 'auto', padding: '20px',
        display: 'flex', flexDirection: 'column', gap: '16px'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            alignItems: 'flex-start', gap: '10px'
          }}>
            {msg.role === 'assistant' && (
              <div style={{
                width:'34px', height:'34px', borderRadius:'50%', flexShrink:0,
                background:'linear-gradient(135deg, #e63946, #1a1a6e)',
                display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px'
              }}>🕷️</div>
            )}
            <div style={{
              maxWidth: '75%',
              background: msg.role === 'user'
                ? 'linear-gradient(135deg, #1a1a6e, #2d2d8e)'
                : 'rgba(255,255,255,0.06)',
              borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              padding: '12px 16px',
              border: msg.role === 'user' ? '1px solid rgba(100,100,200,0.3)' : '1px solid rgba(255,255,255,0.08)',
              color: '#eee', fontSize: '14px', lineHeight: '1.6',
              boxShadow: msg.role === 'user' ? '0 2px 15px rgba(26,26,110,0.4)' : 'none'
            }}>
              <div dangerouslySetInnerHTML={{__html: formatText(msg.content)}} />
              {msg.hasFicha && (
                <button onClick={()=>setShowFicha(true)} style={{
                  marginTop:'10px', display:'block', width:'100%',
                  background:'linear-gradient(135deg, #e63946, #c1121f)',
                  color:'#fff', border:'none', borderRadius:'6px',
                  padding:'8px', cursor:'pointer', fontWeight:'bold', fontSize:'12px'
                }}>
                  📋 Ver Ficha de Actividad Completa
                </button>
              )}
            </div>
            {msg.role === 'user' && (
              <div style={{
                width:'34px', height:'34px', borderRadius:'50%', flexShrink:0,
                background:'linear-gradient(135deg, #1a1a6e, #4a4a9e)',
                display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px'
              }}>🧑‍✈️</div>
            )}
          </div>
        ))}
        {loading && (
          <div style={{display:'flex', alignItems:'flex-start', gap:'10px'}}>
            <div style={{
              width:'34px', height:'34px', borderRadius:'50%',
              background:'linear-gradient(135deg, #e63946, #1a1a6e)',
              display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px'
            }}>🕷️</div>
            <div style={{
              background:'rgba(255,255,255,0.06)', borderRadius:'18px 18px 18px 4px',
              border:'1px solid rgba(255,255,255,0.08)'
            }}>
              <TypingIndicator/>
            </div>
          </div>
        )}
        <div ref={messagesEndRef}/>
      </div>

      {/* Input */}
      <div style={{
        padding: '16px 20px',
        background: 'rgba(0,0,0,0.5)',
        borderTop: '1px solid rgba(230,57,70,0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'flex', gap: '10px', alignItems: 'flex-end',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(230,57,70,0.3)',
          borderRadius: '14px', padding: '8px 12px',
          boxShadow: '0 0 20px rgba(230,57,70,0.1)'
        }}>
          <textarea
            value={input}
            onChange={e=>setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Escribe aquí, hermano jefe... ¡Siempre Listos! 🕷️"
            rows={2}
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: '#fff', fontSize: '14px', resize: 'none', lineHeight: '1.5',
              fontFamily: 'inherit'
            }}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            style={{
              background: loading || !input.trim()
                ? 'rgba(230,57,70,0.3)'
                : 'linear-gradient(135deg, #e63946, #c1121f)',
              color: '#fff', border: 'none', borderRadius: '10px',
              width: '42px', height: '42px', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, transition: 'all 0.2s',
              boxShadow: loading || !input.trim() ? 'none' : '0 2px 10px rgba(230,57,70,0.5)'
            }}
          >
            {loading ? '⏳' : '🕸️'}
          </button>
        </div>
        <div style={{textAlign:'center', marginTop:'8px', color:'rgba(255,255,255,0.3)', fontSize:'10px'}}>
          GS127 Scout Agent · Spider-Verso · ¡Siempre Listos!
        </div>
      </div>

      {/* Ficha Modal */}
      {showFicha && ficha && <FichaViewer ficha={ficha} onClose={()=>setShowFicha(false)}/>}
    </div>
  );
}
