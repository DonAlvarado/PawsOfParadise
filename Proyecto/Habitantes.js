let Habitantes = [
    { id: 1, nombre: 'Habitante 1', descripcion: 'Descripción del Habitante 1', imagen: 'url_de_la_imagen_1' },
    { id: 2, nombre: 'Habitante 2', descripcion: 'Descripción del Habitante 2', imagen: 'url_de_la_imagen_2' },
    { id: 3, nombre: 'Habitante 3', descripcion: 'Descripción del Habitante 3', imagen: 'url_de_la_imagen_3' },
    { id: 4, nombre: 'Habitante 4', descripcion: 'Descripción del Habitante 4', imagen: 'url_de_la_imagen_4' },
    { id: 5, nombre: 'Habitante 5', descripcion: 'Descripción del Habitante 5', imagen: 'url_de_la_imagen_5' },
    { id: 6, nombre: 'Habitante 6', descripcion: 'Descripción del Habitante 6', imagen: 'url_de_la_imagen_6' },
    { id: 7, nombre: 'Habitante 7', descripcion: 'Descripción del Habitante 7', imagen: 'url_de_la_imagen_7' },
    { id: 8, nombre: 'Habitante 8', descripcion: 'Descripción del Habitante 8', imagen: 'url_de_la_imagen_8' },
    { id: 9, nombre: 'Habitante 9', descripcion: 'Descripción del Habitante 9', imagen: 'url_de_la_imagen_9' },
    { id: 10, nombre: 'Habitante 10', descripcion: 'Descripción del Habitante 10', imagen: 'url_de_la_imagen_10' },
    { id: 11, nombre: 'Habitante 11', descripcion: 'Descripción del Habitante 11', imagen: 'url_de_la_imagen_11' },
    { id: 12, nombre: 'Habitante 12', descripcion: 'Descripción del Habitante 12', imagen: 'url_de_la_imagen_12' },
    { id: 13, nombre: 'Habitante 13', descripcion: 'Descripción del Habitante 13', imagen: 'url_de_la_imagen_13' },
    { id: 14, nombre: 'Habitante 14', descripcion: 'Descripción del Habitante 14', imagen: 'url_de_la_imagen_14' },
    { id: 15, nombre: 'Habitante 15', descripcion: 'Descripción del Habitante 15', imagen: 'url_de_la_imagen_15' }
];

let row;
Habitantes.forEach((habitante, index) => {
    if (index % 3 === 0) {
        row = document.createElement('div');
        row.className = 'row justify-content-center';
        document.body.appendChild(row);
    }

    let habitanteElemento = document.createElement('div');
    habitanteElemento.className = 'col-sm-4 mb-4';
    habitanteElemento.innerHTML = `
        <div class="card">
            <img src="${habitante.imagen}" class="card-img-top" alt="${habitante.nombre}">
            <div class="card-body">
                <h5 class="card-title">${habitante.nombre}</h5>
                <p class="card-text">${habitante.descripcion}</p>
            </div>
        </div>
    `;
    row.appendChild(habitanteElemento);
});
