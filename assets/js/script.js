const nuevaTarea = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#btnAgregar");
const totalTareas = document.querySelector("#totalTareas");
const tareasRealizadas = document.querySelector("#tareasRealizadas");
const tareasAgregadas = document.querySelector("#tareasAgregadas");

let tareas = [];

function renderTareas() {
  let tr = "";
  for (let tarea of tareas) {
    const tareaClass = tarea.realizada ? "tarea-realizada" : "";

    tr += `<tr>
                    <td>${tarea.id}</td>
                    <td class="${tareaClass}">${tarea.nombre}</td>
                    <td>
                        <button onclick="agregarCheck(${tarea.id})" type="button" class="btn btn-success"><i class="fa-solid fa-check"></i></button>
                        <button onclick="eliminarTarea(${tarea.id})" type="button" class="btn btn-danger"><i class="fa-solid fa-xmark"></i></button>
                    </td>
                </tr>`;
  }
  tareasAgregadas.innerHTML = tr;
  totalTareas.textContent = `Total: ${tareas.length}`;
  const realizadas = tareas.filter((tarea) => tarea.realizada).length;
  tareasRealizadas.textContent = `Tareas realizadas: ${realizadas}`;
}

btnAgregar.addEventListener("click", () => {
  const inputRealizado = nuevaTarea.value.trim();
  if (inputRealizado) {
    tareas.push({ id: Date.now(), nombre: inputRealizado, realizada: false });
    nuevaTarea.value = "";
    renderTareas();
  }
});

function agregarCheck(id) {
  const tarea = tareas.find((t) => t.id === id);
  if (tarea) {
    tarea.realizada = !tarea.realizada;
    renderTareas();
  }
}

function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  renderTareas();
}

renderTareas();
