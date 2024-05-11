let Habitantes = [
    { id: 1, nombre: 'Alberto', descripcion: 'Alberto es un perro amistoso y enérgico que siempre está listo para jugar y dar largos paseos por el parque.', imagen: '../Images/Habitantes/habitante1.png' },
    { id: 2, nombre: 'Albondiga', descripcion: 'Albondiga es un perro de raza mixta con una personalidad encantadora. Le encanta pasar el tiempo con su familia humana y recibir mimos.', imagen: '../Images/Habitantes/habitante2.png' },
    { id: 3, nombre: 'Romeo', descripcion: 'Romeo es un perro dulce y cariñoso que busca un hogar donde pueda ser el compañero leal de alguien para siempre.', imagen: '../Images/Habitantes/habitante3.png' },
    { id: 4, nombre: 'Lechuga', descripcion: ' Lechuga es un gato curioso y juguetón que disfruta explorando cada rincón de su hogar y tomando largas siestas al sol.', imagen: '../Images/Habitantes/habitante4.png' },
    { id: 5, nombre: 'Elsa', descripcion: 'Elsa es una gata elegante y tranquila que disfruta de la compañía tranquila y las caricias suaves.', imagen: '../Images/Habitantes/habitante5.png' },
    { id: 6, nombre: 'Pamela', descripcion: 'Pamela es una gata traviesa y juguetona que siempre está buscando nuevas aventuras en casa.', imagen: '../Images/Habitantes/habitante6.png' },
    { id: 7, nombre: 'Rango', descripcion: 'Rango es una tortuga tranquila y relajada que disfruta tomando el sol y explorando su entorno con calma.', imagen: '../Images/Habitantes/habitante7.jpg' },
    { id: 8, nombre: 'Raptor', descripcion: 'Raptor es una tortuga activa y curiosa que disfruta explorando su terrario y descubriendo nuevas delicias para comer.', imagen: '../Images/Habitantes/habitante8.png' },
    { id: 9, nombre: 'Mantequilla', descripcion: 'Mantequilla es un perro cariñoso y leal que siempre está listo para brindar amor y compañía a su familia.', imagen: '../Images/Habitantes/habitante9.png' },
    { id: 10, nombre: 'Twinkie', descripcion: 'Twinkie es un conejo juguetón y curioso que le encanta saltar y explorar su entorno en busca de aventuras.', imagen: '../Images/Habitantes/habitante10.png' },
    { id: 11, nombre: 'Oreo', descripcion: 'Oreo es un conejo tranquilo y relajado que disfruta de largos períodos de descanso y de comer sus alimentos favoritos.', imagen: '../Images/Habitantes/habitante11.png' },
    { id: 12, nombre: 'Blanquita', descripcion: 'Blanquita es una conejita dulce y afectuosa que adora recibir caricias y mimos de sus humanos.', imagen: '../Images/Habitantes/habitante12.png' },
    { id: 13, nombre: 'Don Cuervo', descripcion: 'Don Cuervo es una cobaya cariñosa y curiosa que disfruta explorando su entorno y socializando con sus compañeros de jaula.', imagen: '../Images/Habitantes/habitante13.png' },
    { id: 14, nombre: 'Tontin', descripcion: 'Tontin es una cobaya juguetona y enérgica que siempre está lista para correr y explorar su entorno.', imagen: '../Images/Habitantes/habitante14.png' },
    { id: 15, nombre: 'Manguito', descripcion: 'Destructora de mundos, capaz de comer fruta y verdura a una velocidad de: 1mpg (manguito por hora.)', imagen: '../Images/Habitantes/habitante15.png' }
];
let row;
Habitantes.forEach((habitante, index) => {
    if (index % 3 === 0) {
        row = document.createElement('div');
        row.className = 'row justify-content-center';
        document.getElementById('habitantesRow').appendChild(row);
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