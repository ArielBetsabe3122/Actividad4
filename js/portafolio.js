var htmlElement = document.documentElement;
var iconoTema = document.getElementById("iconoTema");

// 1. CONTROL DE TEMA (Oscuro / Claro con memoria)
var temaGuardado = localStorage.getItem("tema_portafolio") || "light";
htmlElement.setAttribute("data-bs-theme", temaGuardado);
actualizarIconoTema(temaGuardado);

function alternarTema() {
    var temaActual = htmlElement.getAttribute("data-bs-theme");
    var nuevoTema = (temaActual === "dark") ? "light" : "dark";
    
    htmlElement.setAttribute("data-bs-theme", nuevoTema);
    localStorage.setItem("tema_portafolio", nuevoTema);
    actualizarIconoTema(nuevoTema);
}

function actualizarIconoTema(tema) {
    if (!iconoTema) return;
    if (tema === "dark") {
        iconoTema.className = "bi bi-brightness-high-fill";
    } else {
        iconoTema.className = "bi bi-moon-stars-fill";
    }
}

// 2. FORMULARIO DE CONTACTO (Validación con SweetAlert2)
function validarYEnviar(e) {
    e.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        Swal.fire({
            title: '¡Campos vacíos!',
            text: 'Por favor, rellena todos los campos antes de enviar.',
            icon: 'warning',
            confirmButtonColor: '#927dc1'
        });
        return;
    }

    Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Gracias, ' + nombre + '. Responderé a tu correo (' + correo + ') lo más pronto posible.',
        icon: 'success',
        confirmButtonColor: '#927dc1'
    });

    document.getElementById("formularioContacto").reset();
}