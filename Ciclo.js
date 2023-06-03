function generarSecuencia() {
  let numero = 1;
  let incremento = 1;

  while (numero <= 56) {
    console.log(numero);

    incremento++; 
    numero += incremento; /

    if (numero > 56) {
      break; 
    }
  }
}

generarSecuencia();