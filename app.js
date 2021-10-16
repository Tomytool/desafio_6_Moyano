const inicio = () => {
  let arrayAleatorio = [];
  let arrayNumerosPares = [];
  let cantidadN = parseInt(
    prompt('Ingrese la cantidad de elementios que formaran esta array:')
  );
  for (let i = 0; i < cantidadN; i++) {
    let numeroRandom = Math.random() * (1000 - 1) + 1;
    arrayAleatorio.push(Math.round(numeroRandom));
  }
  console.log(arrayAleatorio);
  let arrayOrdenada = arrayAleatorio.sort();
  console.log(arrayOrdenada);
  arrayOrdenada.forEach((elemento) => {
    if (elemento % 2 == 0) {
      arrayNumerosPares.push(elemento);
    }
  });
  console.log('Array con elementos pares:');
  console.log(arrayNumerosPares);
};
