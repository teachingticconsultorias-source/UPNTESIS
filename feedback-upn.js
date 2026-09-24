/*
  UPN TESIS - Ajustes de feedback + Política institucional de IA
  Mantiene el diseño visual existente y reutiliza sus clases CSS.
*/
(function () {
  const norm = s => (s || "").replace(/\s+/g, " ").trim().toLowerCase();

  function findDetails(title) {
    return [...document.querySelectorAll("details.criterion")].find(d => {
      const h = d.querySelector(".criterion-title h3");
      return h && norm(h.textContent).includes(norm(title));
    });
  }

  function updateEvaluaciones() {
    const d = findDetails("Orientaciones sobre entregables");
    if (!d) return;
    const h=d.querySelector(".criterion-title h3"), p=d.querySelector(".criterion-title p"), body=d.querySelector(".criterion-body");
    if(h) h.textContent="Orientaciones sobre las evaluaciones";
    if(p) p.textContent="Los estudiantes comprenden qué deben presentar en la Evaluación Parcial y en la Evaluación Final, y qué se espera en cada una.";
    if(body) body.innerHTML=`
      <ul class="tips">
        <li>Recuerda que los dos entregables evaluativos del curso son la <strong>Evaluación Parcial</strong> y la <strong>Evaluación Final</strong>.</li>
        <li>Explica con anticipación qué corresponde presentar en cada evaluación y cuáles son los criterios que se revisarán.</li>
        <li>Usa la rúbrica, guía o modelo correspondiente para ayudar a visualizar el resultado esperado.</li>
        <li>Durante las asesorías, relaciona los avances del equipo con la evaluación que corresponda y verifica qué deben hacer después.</li>
      </ul>
      <div class="from-to"><span class="chip-old">“Revisen el entregable”</span> → <span class="chip-new">Evaluación Parcial / Evaluación Final + criterios + siguiente paso</span></div>`;
  }

  function updateComunicacion() {
    const d=findDetails("Comunicación verbal y no verbal");
    if(!d) return;
    const h=d.querySelector(".criterion-title h3"), p=d.querySelector(".criterion-title p"), body=d.querySelector(".criterion-body");
    if(h) h.textContent="Comunicación verbal, paraverbal y no verbal";
    if(p) p.textContent="Comunica orientaciones de manera clara y cuida cómo tu voz, presencia y condiciones de conexión acompañan el mensaje.";
    if(body) body.innerHTML=`
      <ul class="tips">
        <li><strong>Verbal:</strong> explica una idea central a la vez, define términos técnicos cuando sea necesario y acompaña las orientaciones con ejemplos.</li>
        <li><strong>Paraverbal:</strong> cuida el tono, volumen, ritmo, pausas y énfasis de tu voz para facilitar la comprensión y destacar las ideas importantes.</li>
        <li><strong>No verbal:</strong> mantén tu cámara encendida durante la sesión y procura una postura y expresión que favorezcan la cercanía con los estudiantes.</li>
        <li><strong>Condiciones:</strong> cuida la iluminación, el encuadre, la calidad del audio y, en lo posible, un entorno sin distractores.</li>
        <li>Realiza pausas para preguntas y mantén un tono cercano, respetuoso y orientador.</li>
      </ul>
      <div class="example"><b>Recuerda:</b> lo paraverbal incluye cómo utilizas la voz: tono, volumen, ritmo, pausas y énfasis.</div>
      <div class="from-to"><span class="chip-old">Solo cuidar lo que digo</span> → <span class="chip-new">Mensaje claro + voz adecuada + presencia docente</span></div>`;
  }

  function addGrabacionEquipos() {
    const section=document.getElementById("equipos");
    if(!section || section.querySelector(".feedback-equipos")) return;
    const idea=section.querySelector(".try-next");
    if(!idea) return;
    const box=document.createElement("div");
    box.className="recording-note feedback-equipos";
    box.innerHTML=`
      <div style="font-size:22px">🎥</div>
      <div>
        <b>Graba la asesoría realizada con cada equipo.</b>
        <p>Es importante que la asesoría quede registrada para que los estudiantes puedan volver a consultar las orientaciones brindadas. Durante la grabación, menciona de manera clara <strong>todas las oportunidades de mejora identificadas</strong> en el trabajo y orienta qué deben ajustar.</p>
        <p><strong>Antes de finalizar:</strong> verifica que el equipo tenga claridad sobre qué aspecto debe mejorar, cómo puede hacerlo y cuál será el siguiente paso.</p>
      </div>`;
    idea.insertAdjacentElement("afterend",box);
  }

  function addPoliticaIA() {
    const section=document.getElementById("herramientas");
    if(!section || section.querySelector("#politica-ia-upn")) return;
    const head=section.querySelector(".section-head");
    if(!head) return;

    const policy=document.createElement("div");
    policy.id="politica-ia-upn";
    policy.className="rubric-note";
    policy.style.cssText="text-align:left;max-width:none;margin-bottom:30px;font-weight:400;";
    policy.innerHTML=`
      <span class="section-kicker">Uso ético de IA</span>
      <h3 style="margin:8px 0 10px;color:var(--upn-black);">🤖 Antes de utilizar IA en la asesoría, revisa la política institucional</h3>
      <p style="margin:0 0 14px;">
        La Universidad Privada del Norte cuenta con lineamientos para el uso adecuado, ético, transparente y seguro de la inteligencia artificial. <strong>Revisa estas orientaciones antes de utilizar herramientas de IA con tus estudiantes</strong> y consulta el documento institucional completo cuando necesites verificar los criterios aplicables.
      </p>

      <div class="criteria-grid" style="margin-top:18px;">
        <div class="criterion" style="box-shadow:none;">
          <div class="criterion-body" style="padding:20px;">
            <h3 style="margin-top:0;">✅ Como docente puedes</h3>
            <ul class="tips">
              <li>Usar IA como apoyo para elaborar rúbricas, formularios y materiales didácticos.</li>
              <li>Apoyarte en IA para la planificación, organización y acompañamiento académico.</li>
              <li>Utilizarla como apoyo en revisión de literatura, análisis y visualización de datos.</li>
              <li>Apoyarte en IA para organizar retroalimentación, manteniendo siempre la revisión y el criterio docente.</li>
              <li>Orientar a los estudiantes sobre el uso ético, íntegro, transparente y responsable de la IA.</li>
            </ul>
          </div>
        </div>

        <div class="criterion" style="box-shadow:none;">
          <div class="criterion-body" style="padding:20px;">
            <h3 style="margin-top:0;">🚫 Como docente no debes</h3>
            <ul class="tips">
              <li>Delegar completamente a la IA la creación de contenidos evaluativos sin revisión, adaptación pedagógica y supervisión humana.</li>
              <li>Basar una evaluación exclusivamente en detectores automáticos de IA.</li>
              <li>Usar IA para justificar calificaciones o decisiones sin criterios profesionales claros.</li>
              <li>Realizar monitoreo encubierto mediante IA.</li>
              <li>Compartir información personal o sensible de estudiantes en plataformas que no garanticen la protección de datos.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="example" style="margin-top:18px;background:#fff;">
        <b>🔎 ¿Sospechas que un estudiante utilizó IA?</b>
        <p style="margin:7px 0 0;">No bases tu conclusión únicamente en un detector automático. Conversa con el estudiante, contrasta su estilo de escritura y formula preguntas sobre el trabajo presentado.</p>
      </div>

      <div class="example" style="margin-top:12px;background:#fff;">
        <b>🎓 Uso de IA en trabajos de tesis</b>
        <p style="margin:7px 0 0;">El estudiante mantiene la responsabilidad sobre el contenido final y debe declarar el uso de IA cuando corresponda. Puede utilizarla como apoyo en actividades permitidas, pero no presentar contenido generado por IA como propio, delegar la redacción íntegra de la tesis, manipular resultados ni ingresar indebidamente datos personales o sensibles.</p>
      </div>

      <div style="margin-top:18px;padding:20px;border-radius:16px;background:#fff;border:1px solid var(--line);">
        <div style="font-weight:900;font-size:17px;margin-bottom:7px;">📄 Revisa el documento institucional completo</div>
        <p style="margin:0 0 14px;color:var(--muted);">
          Consulta la <strong>Política para el uso adecuado de la Inteligencia Artificial en la Universidad Privada del Norte</strong> (UPN-PLC-0013, versión 2, publicada el 23/04/2026). El documento también incluye la <strong>Declaración de Uso de Inteligencia Artificial</strong> aplicable a trabajos de titulación.
        </p>
        <a class="btn btn-primary" href="politica-uso-ia-upn-v2.pdf" target="_blank" rel="noopener">📄 Revisar política completa de IA – UPN</a>
        <p style="margin:12px 0 0;font-size:12px;color:var(--muted);">Importante: una copia guardada fuera del Sistema de Gestión Documental es una copia no controlada. Verifica la versión institucional vigente.</p>
      </div>`;
    head.insertAdjacentElement("afterend",policy);
  }

  function addCopilotWarning(){
    const section=document.getElementById("rocef");
    if(!section || section.querySelector(".copilot-privacy-feedback")) return;
    const wrap=section.querySelector(".rocef-wrap") || section.querySelector(".container");
    if(!wrap) return;
    const w=document.createElement("div");
    w.className="example copilot-privacy-feedback";
    w.style.cssText="margin:20px auto 0;max-width:900px;";
    w.innerHTML=`<b>🔐 Antes de usar Copilot</b><p style="margin:7px 0 0;">Evita ingresar datos personales o sensibles del estudiante. Utiliza únicamente la información necesaria para construir la retroalimentación y revisa siempre el resultado antes de utilizarlo.</p>`;
    wrap.appendChild(w);
  }

  function init(){
    updateEvaluaciones();
    updateComunicacion();
    addGrabacionEquipos();
    addPoliticaIA();
    addCopilotWarning();
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",init);
  else init();
})();