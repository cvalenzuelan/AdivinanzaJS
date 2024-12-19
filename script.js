let numeroAzar = Math.floor(Math.random() * 10) + 1;
let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;
function comprobar() {
	let numeroIngresado = parseInt(numeroEntrada.value);
	if (
		numeroIngresado < 1 ||
		numeroIngresado > 100 ||
		isNaN(numeroIngresado)
	) {
		mensaje.textContent = "Por favor, introduce un numero entre 1 y 100";
		mensaje.style.color = "black";
		return;
	}
	if (numeroAzar === numeroIngresado) {
		intentos++;
		intento.textContent = intentos;
		mensaje.textContent = "MUY BIEN!!!!! Adivinaste el número.";
		mensaje.style.color = "limegreen";
		document.getElementById("boton").disabled = true;
		return;
	}
	if (numeroAzar > numeroIngresado) {
		intentos++;
		intento.textContent = intentos;
		mensaje.textContent = "El número oculto es MAYOR";
		mensaje.style.color = "darkred";
		return;
	}
	if (numeroAzar < numeroIngresado) {
		intentos++;
		intento.textContent = intentos;
		mensaje.textContent = "El número oculto es MENOR";
		mensaje.style.color = "darkred";
		return;
	}
}

function sorteo() {
	let texto = "<tr><th>Premio</th><th>N° Ganador</th></tr>";
	const maximo = document.getElementById("sorteo").value;
	const premios = document.getElementById("premios").value;
	for (let index = 1; index <= premios; index++) {
		let ganador = Math.floor(Math.random() * maximo) + 1;
		texto += "<tr><td>" + index + "</td><td>" + ganador + "</td></tr>";
	}
	document.getElementById("resultado").innerHTML = texto;
}
