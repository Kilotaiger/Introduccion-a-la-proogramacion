function determinarGanador(jugador1, jugador2) {
    if (jugador1 === jugador2) {
      return 'El juego es un empate.';
    }
  
    switch (jugador1) {
      case 'T':
        switch (jugador2) {
          case 'R':
            return 'Jugador 1 gana. T rompe R.';
          case 'P':
            return 'Jugador 2 gana. P cubre T.';
        }
        break;
  
      case 'R':
        switch (jugador2) {
          case 'T':
            return 'Jugador 2 gana. T rompe R.';
          case 'P':
            return 'Jugador 1 gana. R corta P.';
        }
        break;
  
      case 'P':
        switch (jugador2) {
          case 'T':
            return 'Jugador 1 gana. P cubre T.';
          case 'R':
            return 'Jugador 2 gana. R corta P.';
        }
        break;
    }
  
    return 'Opción inválida. Por favor, ingrese T, R o P.';
  }
  
  // Ejemplo de uso:
  const jugador1 = 'T';
  const jugador2 = 'R';
  
  const resultado = determinarGanador(jugador1, jugador2);
  console.log(resultado);
  