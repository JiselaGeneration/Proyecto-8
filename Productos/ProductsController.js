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
  // Método para formatear el precio
  formatPrice(price) {
    return `$ ${parseInt(price).toLocaleString('es-CO')}`;
  }

  async cargarProductos(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      const data = await response.json();
      console.log('Datos recibidos de la API:', data); // Log para verificar

      data.forEach(producto => {
        this.addItem(
          producto.nombre, // Asegúrate de que estas propiedades existen
          producto.descripcion,
          producto.imagen,
          producto.precio.toString(),
          producto.region
        );
      });

      console.log('Productos añadidos:', this.items); // Aquí deberías ver los productos añadidos
      this.displayItems();
    } catch (error) {
      console.error('Error al consumir la API: ', error);
    }
  }


  // Create the displayItems method
  displayItems() {
    const contenedorProductos = document.getElementById("productos");
  
    this.items.forEach((producto) => {
      const productoHTML = `
        <div class="prod col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div class="card h-100 shadow-sm border-0 rounded-lg overflow-hidden">
                <img src="${producto.imageUrl}" class="card-img-top zoom-image producto-imagen" alt="${producto.name}" data-id="${producto.id}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-truncate">${producto.name}</h5>
                    <p class="card-text text-muted">
                        <i class="bi bi-geo-alt"></i> ${producto.region}
                    </p>
                    <p class="card-text">
                        <i class="bi bi-currency-dollar"></i> <strong>${producto.price}</strong>
                    </p>
                    <button class="add-cart btn btn-primary mt-3" data-id="${producto.id}" data-name="${producto.name}" data-price="${producto.price}" data-image="${producto.imageUrl}">Añadir al Carrito</button>
                </div>
                
            </div>
        </div>
      `;
      contenedorProductos.innerHTML += productoHTML;
    });
  
    // Añadir event listener a las imágenes
    document.querySelectorAll('.prod .producto-imagen').forEach(img => {
      img.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id, 10);
        const producto = this.items.find(item => item.id === id);
        if (producto) {
          Swal.fire({
        
            html: `
            <div id="swal-content">
              <img src="${producto.imageUrl}" alt="${producto.name}" class="swal-img"/>
              <div class="info">
                <h1>${producto.name}</h1>
                <p><strong>  </strong> </p>
                <p> ${producto.description}</p>
                <p><strong>Región:</strong> ${producto.region}</p>
                <p><strong>Precio:</strong> ${this.formatPrice(producto.price)}</p>
                
                <button class="add-to-cart btn btn-primary mt-3" data-id="${producto.id}" data-name="${producto.name}" data-price="${producto.price}" data-image="${producto.imageUrl}">Añadir al Carrito</button>
              </div>
            </div>
              `,
            showConfirmButton: false, // Oculta el botón de confirmación predeterminado
            width: '50rem'
          });
  
          // Añadir event listener al botón dentro de SweetAlert2
          document.querySelector('.swal2-container .add-to-cart').addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id, 10);
            const name = e.target.dataset.name;
            const price = parseInt(e.target.dataset.price, 10);
            const image = e.target.dataset.image;
  
            addToCart(id, name, price, image);
            let timerInterval;
            Swal.fire({
              title: 'Producto agregado',
              text: 'El producto ha sido agregado exitosamente al carrito.',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                  timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              }
            }).then((result) => {
              /* Read more about handling dismissals below */
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
          });
        }
      });
    });
  }

  
}
// Crear una instancia de ProductsController
const productos = new ProductsController();

// Llamar a la función para cargar productos
productos.cargarProductos('http://localhost:8080/productos/traer');

// Mostrar los productos en el HTML al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  productos.displayItems();
  updateCartCounter();
});
// Actualizar el contador del carrito
function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCounter = document.getElementById("cart-counter");
  cartCounter.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}


// Agregar producto al carrito
function addToCart(id, name, price, image) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, image, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
}

// Manejar clic en botones de añadir al carrito
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart")) {
    const id = parseInt(e.target.dataset.id, 10);
    const name = e.target.dataset.name;
    const price = parseInt(e.target.dataset.price, 10);
    const image = e.target.dataset.image;

    addToCart(id, name, price, image);
    Swal.fire({
      title: 'Producto agregado',
      text: 'El producto ha sido agregado exitosamente al carrito.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'custom-confirm-button'
      }
    });
    let timerInterval;
    Swal.fire({
      title: 'Producto agregado',
      text: 'El producto ha sido agregado exitosamente al carrito.',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  }
});

