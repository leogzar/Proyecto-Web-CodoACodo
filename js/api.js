let raza = document.getElementById('raza');
let razaimg = document.getElementById('razaimg');

fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data => {
    const razas = Object.keys(data.message);
    const index = Math.floor(Math.random() * razas.length);
    const razaaleat = razas[index];

    fetch(`https://dog.ceo/api/breed/${razaaleat}/images/random`)
      .then(response => response.json())
      .then(data => {
        const imgURL = data.message;
        raza.textContent = razaaleat;
        razaimg.src = imgURL;
      })
      .catch(error => {
        console.error('Ocurrió un error al obtener la imagen de la raza:', error);
      });
  })
  .catch(error => {
    console.error('Ocurrió un error al obtener la raza:', error);
  });
