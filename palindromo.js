function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas y eliminar los espacios
    palabra = palabra.toLowerCase().replace(/[\W_]/g, '');
  
    // Comparar la palabra original con la palabra invertida
    return palabra === palabra.split('').reverse().join('');
  }
  
  // Ejemplo de uso
  console.log(esPalindromo('aldo')); // true
  console.log(esPalindromo('oso')); // true
  console.log(esPalindromo('hola')); // false