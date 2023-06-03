const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const a = parseFloat(document.getElementById('a').value);
	const b = parseFloat(document.getElementById('b').value);
	const c = parseFloat(document.getElementById('c').value);
	
	if (isNaN(a) || isNaN(b) || isNaN(c)) {
		resultado.innerHTML = '<p>Por favor ingrese los valores de a, b y c.</p>';
		return;
	}
	
	if (a === 0) {
		resultado.innerHTML = '<p>El valor de a no puede ser cero.</p>';
		return;
	}
	
	const discriminante = b * b - 4 * a * c;
	
	if (discriminante < 0) {
		resultado.innerHTML = '<p>No hay soluciones reales.</p>';
		return;
	}
	
	const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
	const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
	
	resultado.innerHTML = `<p>Las soluciones son x1 = ${x1.toFixed(2)} y x2 = ${x2.toFixed(2)}.</p>`;
});
