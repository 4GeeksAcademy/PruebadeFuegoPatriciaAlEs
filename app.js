
const BASEDEDATOS = [
    {
        email: "victor@gmail.com",
        password: "adivinanza",
        productos: [
            "Naranja",
            "Pizza",
            "Cerveza"
        ]
    },
    {
        email: "patricia@gmail.com",
        password: "adivinanza",
        productos: [
            "Manzana",
            "Pera",
            "Banana"
        ]
    }
];

let opcion;

do {
    opcion = eligeUnaOpcion();

    switch (opcion) {
        case 1:
            nuevoRegistro();
            break;
        case 2:
            inicioDeSesion();
            break;
        case 3:
            salirDelSistema();
            alert("Cerrando sesión...");
            break;
        default:
            alert("Inténtalo de nuevo!");
    }

} while (opcion !== 3);


function eligeUnaOpcion() {
    return parseInt(prompt(` <<<< Sistema de Gestión de Usuarios >>>>
        
        1) Registro
        2) Inicio de sesión
        3) Salir del sistema 
        `))
}

function comprobarElUsuario(email, password = null) {
    return BASEDEDATOS.find(usuario => usuario.email === email && (password === null || usuario.password === password));
}

function nuevoRegistro() {
    const nuevoEmail = prompt("Introduce un email: ");
    const nuevaContraseña = prompt("Introduce tu contraseña: ");

    if (comprobarElUsuario(nuevoEmail)) {
        alert("Este email ya existe. Inténtalo con otro.");
    } else {
        BASEDEDATOS.push({
            email: nuevoEmail,
            password: nuevaContraseña,
            productos: []
        });
        alert("Registro creado correctamente. Ya puede iniciar sesión.");
    }
}

function inicioDeSesion() {
    const emailGuardado = prompt("Ingrese su email:");
    const passwordGuardado = prompt("Ingrese su contraseña:");

    const usuario = comprobarElUsuario(emailGuardado, passwordGuardado);

    if (usuario) {
        alert("Inicio de sesión exitoso. Sus productos son: " + usuario.productos.join(", "));
    } else {
        alert("Email o contraseña incorrectos. Por favor intente de nuevo.");
    }
}

function salirDelSistema() {
    alert("Sesión cerrada correctamente");
}