// Create a ProductsController class
class ProductsController {
  // Set up the items and currentId property in the constructor
  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }

  // Create the addItem method
  addItem(name, description, imageUrl, price, region) {
    const item = {
      // Increment the currentId property
      id: this.currentId++,
      name: name,
      description: description,
      imageUrl: imageUrl,
      price: price,
      region: region,
    };
    // Push the item to the items property
    this.items.push(item);
  }

  // Create the displayItems method
  displayItems() {
    const contenedorProductos = document.getElementById("productos");

    this.items.forEach((producto) => {
      const productoHTML = `
<div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
    <div class="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
        <img src="${producto.imageUrl}" class="card-img-top zoom-image" alt="${producto.name}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate">${producto.name}</h5>
            <p class="card-text text-muted">
                <i class="bi bi-geo-alt"></i> ${producto.region}
            </p>
            <p class="card-text">
                <i class="bi bi-currency-dollar"></i> <strong>${producto.price}</strong> 
            </p>
            <a href="#" class="btn btn-primary mt-auto d-flex justify-content-center align-items-center py-2 zoom-button">Añadir al Carrito</a>
        </div>
    </div>
</div>

 `;
      contenedorProductos.innerHTML += productoHTML;
    });
  }
}

// Crear una instancia de ProductsController
const productos = new ProductsController();

// Añadir productos
productos.addItem(
  "Sombrero vueltiao",
  "Es uno de los elementos más representativos de la cultura colombiana, tanto a nivel nacional como internacional. Este sombrero colombiano fue diseñado hace más de doscientos años.",
  "https://colombia.co/sites/default/files/inline-images/sombrero-vueltiao-colombiano.jpeg",
  60200,
  "Region caribe"
);
productos.addItem(
  "Queso de Paipa",
  "Oriundo de esa población boyacense, cuenta con el certificado de origen que respalda la producción artesanal de quesos semi-maduros, con sabor ácido y amargo suave, de aroma rancio y color amarillo pálido.",
  "https://colombia.co/sites/default/files/marca-pais/images/wp-content/uploads/2018/04/El-queso-paipa-es-uno-de-los-productos-colombianos-con-Sello-de-Denominacio%CC%81n-de-Origen-%E2%80%93-Queso-paipa-servido-en-tabla-de-madera-Marca-Pai%CC%81s-Colombia-.png",
  25000,
  "Region Andina"
);
productos.addItem(
  "Café Colombiano 5 kilos",
  "Una taza de café colombiano tiene un perfil típico de sabor suave y versátil de fragancias y sabores, entre otras características que cualquier aficionado al café sabe apreciar. Sus propiedades lo hacen irresistible.",
  "https://colombia.co/sites/default/files/marca-pais/images/wp-content/uploads/2017/06/caf%C3%A9-2r2.png",
  95000,
  "Region Andina"
);
productos.addItem(
  "Vajilla de pocillos de Raquira",
  "Es un conjunto de piezas de cerámica artesanal, originarias de Ráquira, Boyacá, Colombia. Estos pocillos son conocidos por su belleza y calidad, y suelen ser decorados con diseños tradicionales y colores vibrantes.",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1QijNYKrUNSqWgjFs05MJ_xLOSi2urav1A&s",
  65000,
  "Region Andina"
);
productos.addItem(
  "Mochila Wayúu",
  "son una expresión auténtica de la cultura y artesanía de este pueblo indígena colombiano. Son tejidas a mano por mujeres Wayúu utilizando técnicas tradicionales y fibras naturales. Cada mochila es única y refleja la creatividad y habilidad&nbsp;de&nbsp;la&nbsp;artesana.",
  "https://artesaniascolombianas.co/wordpress/wp-content/uploads/2017/11/mochila_wayuu_135_2.jpg",
  195000,
  "Region Caribe"
);
productos.addItem(
  "Sombrero Aguadeño",
  "Esta pieza artesanal tejida en las montañas de Aguadas nació hace más de 160 años y su elaboración forma parte del estilo de vida de más de unos 800 artesanos y campesinos, que se dedican a este arte en el norte de Caldas.",
  "https://colombia.co/sites/default/files/inline-images/sombrero-aguadeno.jpeg",
  45000,
  "Region Andina"
);
productos.addItem(
  "Hormiga Culona",
  "Una delicia culinaria que ha cautivado paladares durante siglos. Más que un simple plato, esta hormiga es un símbolo de la rica cultura gastronómica de la región, una tradición arraigada en la historia y la identidad de su gente.",
  "https://colombia.travel/sites/default/files/styles/imagen_650x650/public/actividades/hormigas-culonas.jpg?itok=cX47YYHf",
  45000,
  "Region Andina"
);
productos.addItem(
  "Hamaca Wayúu",
  "Son tejidas a mano con fibras naturales como la lana de cabra y el hilo de algodón, y se caracterizan por sus diseños geométricos y colores vibrantes. Son cómodas, resistentes y reflejan la rica cultura y tradición textil&nbsp;de&nbsp;los&nbsp;Wayúu.",
  "https://i.pinimg.com/1200x/3c/95/44/3c95443b2a7f00528306e77611d9314c.jpg",
  245000,
  "Region caribe"
);
productos.addItem(
  "Achiras del Huila",
  "Es un postre tradicional del departamento del Huila. Está hecho a partir de la harina de achira, un tipo de plátano que se cosecha verde y se seca para producir una harina fina. Es conocido por su textura suave y su sabor dulce y ligeramente tostado.",
  "https://files.lafm.com.co/assets/public/styles/4x3/public/Bizcocho-de-achira-del-Huila.jpg?VersionId=35K7KIaFXLE0q7UmU3DBTpSqWf3nTvGV&itok=4xRfHzt1",
  5000,
  "Region caribe"
);
productos.addItem(
  "Galleta Cuca",
  "Son galletas de sabor dulce y forma redonda que se preparan con harina de trigo, melado espeso de panela (o papelón), huevos, mantequilla, clavos de olor y canela. Son tradicionales en las cocinas de Colombia.",
  "https://pullpan.com.co/wp-content/uploads/2012/07/DSC_0068.jpg",
  15000,
  "Region Pacifica"
);
productos.addItem(
  "Cocadas",
  "Las cocadas es un postre típico de Colombia, aunque es representativo de la gastronomía de las regiones costeras ( principalmente región insular). Su ingrediente principal es el coco rallado, acompañado de panela, canela y clavo de olor.",
  "https://www.elespectador.com/resizer/sCo3Kd3s9GfyVkq7QAlMgbRxXtU=/arc-anglerfish-arc2-prod-elespectador/public/FZGJSIB7IZH45JB7WBD7NXOFR4.jpg",
  8000,
  "Region Insular"
);
productos.addItem(
  "Alpargatas",
  " son un tipo de calzado tradicional colombiano, originario de los departamentos de Boyacá y Santander. Están hechas de tela o lona y suela de caucho o goma, y se caracterizan por su diseño sencillo y cómodo.",
  "https://www.nuestratiendaartesanal.com/wp-content/uploads/2024/08/historia-alpargatas-colombianas.jpeg",
  38000,
  "Region Andina"
);

// Mostrar los productos en el HTML al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  productos.displayItems();
});
