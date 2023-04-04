const myArray = [1, 2, 3, 4, 5]; 
function addElement() {
  const newElement = Number(document.getElementById("newElement").value); 
  const position = Number(document.getElementById("position").value); 

  if (isNaN(newElement) || isNaN(position)) { 
    document.getElementById("output").textContent = "Por favor, ingresa números válidos para el nuevo elemento y la posición.";
  } else if (position < 0 || position > myArray.length) { 
    document.getElementById("output").textContent = "Por favor, ingresa una posición entre 0 y " + myArray.length + ".";
  } else {
    myArray.splice(position, 0, newElement); 
    document.getElementById("output").textContent = "Arreglo actualizado: " + myArray.join(", "); 
  }
}
