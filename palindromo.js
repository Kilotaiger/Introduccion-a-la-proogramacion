function esPalindromo(palabra) {
  palabra = palabra.toLowerCase();
  let palabraInvertida = palabra.split('').reverse().join('');
  return palabra === palabraInvertida;
}

let palabra = "oso";

if (esPalindromo(palabra)) {
  console.log(palabra + " es un palíndromo.");
} else {
  console.log(palabra + " no es un palíndromo.");
}