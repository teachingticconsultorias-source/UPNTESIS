/*
  UPN TESIS - Actualización de contenido
  Feedback septiembre 2026
  Mantiene intacto el diseño visual existente.
*/
(function () {
  function normalize(s) {
    return (s || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function findDetailsByHeading(text) {
    return Array.from(document.querySelectorAll("details.criterion")).find(d => {
      const h = d.querySelector(".criterion-title h3");
      return h && normalize(h.textContent).includes(normalize(text));
    });
  }

  function updateEvaluaciones() {
    const d = findDetailsByHeading("Orientaciones sobre entregables");
    if (!d) return;

    const h = d.querySelector(".criterion-title h3");
    const p = d.querySelector(".criterion-title p");
    const body = d.querySelector(".criterion-body");

    if (h) h.textContent = "Orientaciones sobre las evaluaciones";
    if (p) p.textContent = "Los estudiantes comprenden qué deben presentar en la Evaluación Parcial y en la Evaluación Final, y qué se espera en cada una.";

    if (body) {
      body.innerHTML = `
        <ul class="tips">
          <li>Recuerda que los dos entregables evaluativos del curso son la <strong>Evaluación Parcial</strong> y la <strong>Evaluación Final</strong>.</li>
          <li>Explica con anticipación qué corresponde presentar en cada evaluación y cuáles son los criterios que se revisarán.</li>
          <li>Usa la rúbrica, guía o modelo correspondiente para ayudar a visualizar el resultado esperado.</li>
          <li>Durante las asesorías, relaciona los avances del equipo con la evaluación que corresponda y verifica qué deben hacer después.</li>
        </ul>
        <div class="from-to">
          <span class="chip-old">“Revisen el entregable”</span>
          →
          <span class="chip-new">Evaluación Parcial / Evaluación Final + criterios + siguiente paso</span>
        </div>`;
    }
  }

  function updateComunicacion() {
    const d = findDetailsByHeading("Comunicación verbal y no verbal");
    if (!d) return;

    const h = d.querySelector(".criterion-title h3");
    const p = d.querySelector(".criterion-title p");
    const body = d.querySelector(".criterion-body");

    if (h) h.textContent = "Comunicación verbal, paraverbal y no verbal";
    if (p) p.textContent = "Comunica orientaciones de manera clara y cuida cómo tu voz, presencia y condiciones de conexión acompañan el mensaje.";

    if (body) {
      body.innerHTML = `
        <ul class="tips">
          <li><strong>Verbal:</strong> explica una idea central a la vez, define términos técnicos cuando sea necesario y acompaña las orientaciones con ejemplos.</li>
          <li><strong>Paraverbal:</strong> cuida el tono, volumen, ritmo, pausas y énfasis de tu voz para facilitar la comprensión y destacar las ideas importantes.</li>
          <li><strong>No verbal:</strong> mantén tu cámara encendida durante la sesión y procura una postura y expresión que favorezcan la cercanía con los estudiantes.</li>
          <li><strong>Condiciones:</strong> cuida la iluminación, el encuadre, la calidad del audio y, en lo posible, un entorno sin distractores.</li>
          <li>Realiza pausas para preguntas y mantén un tono cercano, respetuoso y orientador.</li>
        </ul>
        <div class="example">
          <b>Recuerda:</b> lo paraverbal no es solo “hablar claro”; incluye cómo utilizas la voz: tono, volumen, ritmo, pausas y énfasis.
        </div>
        <div class="from-to">
          <span class="chip-old">Solo cuidar lo que digo</span>
          →
          <span class="chip-new">Mensaje claro + voz adecuada + presencia docente</span>
        </div>`;
    }
  }

  function addGrabacionEquipos() {
    const section = document.getElementById("equipos");
    if (!section || section.querySelector(".recording-note.feedback-equipos")) return;

    const idea = section.querySelector(".try-next");
    if (!idea) return;

    const box = document.createElement("div");
    box.className = "recording-note feedback-equipos";
    box.innerHTML = `
      <div style="font-size:22px">🎥</div>
      <div>
        <b>Graba la asesoría realizada con cada equipo.</b>
        <p>Es importante que la asesoría quede registrada para que los estudiantes puedan volver a consultar las orientaciones brindadas. Durante la grabación, menciona de manera clara <strong>todas las oportunidades de mejora identificadas</strong> en el trabajo y orienta qué deben ajustar.</p>
        <p><strong>Antes de finalizar:</strong> verifica que el equipo tenga claridad sobre qué aspecto debe mejorar, cómo puede hacerlo y cuál será el siguiente paso.</p>
      </div>`;
    idea.insertAdjacentElement("afterend", box);
  }

  function addPoliticaIA() {
    const section = document.getElementById("herramientas");
    if (!section || section.querySelector("#politica-ia-upn")) return;

    const head = section.querySelector(".section-head");
    if (!head) return;

    const policy = document.createElement("div");
    policy.id = "politica-ia-upn";
    policy.className = "rubric-note";
    policy.style.cssText = "text-align:left;max-width:none;margin-bottom:30px;font-weight:400;";
    policy.innerHTML = `
      <span class="section-kicker">Política institucional UPN · Versión 2 · 23/04/2026</span>
      <h3 style="margin:8px 0 10px;color:var(--upn-black);">🤖 Uso ético y responsable de la inteligencia artificial</h3>

      <p style="margin:0 0 14px;">
        La inteligencia artificial es un recurso de apoyo y <strong>no sustituye el juicio académico, la supervisión humana ni la responsabilidad docente</strong>. Todo material, actividad, instrumento de evaluación o retroalimentación elaborado con apoyo de IA debe ser revisado, validado y adaptado pedagógicamente antes de utilizarse.
      </p>

      <div class="criteria-grid" style="margin-top:18px;">
        <div class="criterion" style="box-shadow:none;">
          <div class="criterion-body" style="padding:20px;">
            <h3 style="margin-top:0;">✅ Como docente puedes</h3>
            <ul class="tips">
              <li>Apoyarte en IA para elaborar rúbricas, formularios y materiales didácticos.</li>
              <li>Utilizarla como apoyo para la planificación, organización y acompañamiento docente.</li>
              <li>Apoyar procesos de revisión de literatura, análisis y visualización de datos.</li>
              <li>Agilizar la elaboración de retroalimentación, siempre con revisión y criterio docente.</li>
              <li>Orientar a los estudiantes sobre un uso ético, íntegro, transparente y responsable de la IA.</li>
            </ul>
          </div>
        </div>

        <div class="criterion" style="box-shadow:none;">
          <div class="criterion-body" style="padding:20px;">
            <h3 style="margin-top:0;">🚫 Como docente no debes</h3>
            <ul class="tips">
              <li>Delegar a la IA la creación completa de contenidos evaluativos sin revisión, adaptación pedagógica ni supervisión humana.</li>
              <li>Basar una evaluación exclusivamente en detectores automáticos de IA.</li>
              <li>Usar IA para justificar calificaciones o decisiones docentes sin criterios profesionales claros.</li>
              <li>Monitorear de forma encubierta a estudiantes mediante IA.</li>
              <li>Compartir información personal o sensible de estudiantes en plataformas que no garanticen la protección de datos.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="example" style="margin-top:18px;background:#fff;">
        <b>🔎 Si sospechas de un uso inadecuado de IA</b>
        <p style="margin:7px 0 0;">No concluyas únicamente a partir de un detector automático. Conversa con el estudiante, contrasta su estilo de escritura y formula preguntas sobre el trabajo presentado.</p>
      </div>

      <div class="example" style="margin-top:12px;background:#fff;">
        <b>🎓 En trabajos de tesis</b>
        <p style="margin:7px 0 0;">El estudiante debe mantener la autoría responsable y declarar el uso de IA cuando corresponda. La IA puede utilizarse como apoyo en procesos como edición lingüística, organización de borradores y determinados apoyos metodológicos, pero no para presentar contenido generado por IA como propio, redactar íntegramente la tesis, manipular resultados o ingresar indebidamente datos personales o sensibles.</p>
      </div>

      <div class="example" style="margin-top:12px;background:#fff;">
        <b>📄 Declaración de uso de IA</b>
        <p style="margin:7px 0 0;">En trabajos de titulación, orienta al estudiante a transparentar el uso de IA cuando corresponda e identificar la herramienta utilizada, su versión y proveedor, de acuerdo con la política institucional.</p>
      </div>

      <p style="margin:16px 0 0;font-size:13px;">
        <strong>Documento institucional:</strong> Política para el uso adecuado de la Inteligencia Artificial en la Universidad Privada del Norte, código UPN-PLC-0013, versión 2. Las copias guardadas fuera del Sistema de Gestión Documental son copias no controladas; verifica siempre la versión institucional vigente.
      </p>`;
    head.insertAdjacentElement("afterend", policy);
  }

  function addCopilotWarning() {
    const section = document.getElementById("rocef");
    if (!section || section.querySelector(".copilot-privacy-feedback")) return;

    const wrap = section.querySelector(".rocef-wrap") || section.querySelector(".container");
    if (!wrap) return;

    const warning = document.createElement("div");
    warning.className = "example copilot-privacy-feedback";
    warning.style.cssText = "margin:20px auto 0;max-width:900px;";
    warning.innerHTML = `
      <b>🔐 Antes de usar Copilot</b>
      <p style="margin:7px 0 0;">Evita ingresar datos personales o sensibles del estudiante. Utiliza únicamente la información necesaria para construir la retroalimentación y revisa siempre el resultado antes de utilizarlo.</p>`;
    wrap.appendChild(warning);
  }

  function init() {
    updateEvaluaciones();
    updateComunicacion();
    addGrabacionEquipos();
    addPoliticaIA();
    addCopilotWarning();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
