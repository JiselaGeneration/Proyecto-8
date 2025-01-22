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
            region: region
        };
        // Push the item to the items property
        this.items.push(item);
    }

    // Create the displayItems method
    displayItems() {
        const contenedorProductos = document.getElementById('productos');

        this.items.forEach(producto => {
            const productoHTML = `
 <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div class="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                <img src="${producto.imageUrl}" class="card-img-top zoom-image" alt="${producto.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate" style="font-size: 1.2rem; font-weight: bold;">${producto.name}</h5>
                    <p class="card-text text-muted" style="font-size: 0.95rem; flex-grow: 1;">${producto.description}</p>
                    <p class="card-text"><strong>Precio: $${producto.price}</strong></p>
                    <a href="#" class="btn btn-primary mt-auto d-flex justify-content-center align-items-center py-2">Añadir al Carrito</a>
                </div>
            </div>
        </div> `;
            contenedorProductos.innerHTML += productoHTML;
        });
    }
}

// Crear una instancia de ProductsController
const productos = new ProductsController();

// Añadir productos
productos.addItem("Bocadillo", "Veleño", "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/MJMN5R4HK5DXVL4TOSMFD7OSUU.jpg", 13000, "Andina");
productos.addItem("Roscon", "Veleño", "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/MJMN5R4HK5DXVL4TOSMFD7OSUU.jpg", 20000, "Andina");
productos.addItem("Roscon", "Veleño", "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/MJMN5R4HK5DXVL4TOSMFD7OSUU.jpg", 20000, "Andina");
productos.addItem("Roscon", "Veleño", "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/MJMN5R4HK5DXVL4TOSMFD7OSUU.jpg", 20000, "Andina");

// Mostrar los productos en el HTML al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    productos.displayItems();
});