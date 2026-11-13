Ecommerce-Alva - Frontend 🛒

📌 Descripción del proyecto

Ecommerce-Alva es una aplicación web de comercio electrónico desarrollada con React y JavaScript.

El proyecto consiste en una tienda online de productos tecnológicos que permite visualizar un catálogo de productos, consultar sus características, agregarlos al carrito y realizar una simulación del proceso de compra.

El frontend está conectado a un backend desarrollado con Node.js, Express y Sequelize, que proporciona los datos mediante una API REST.

🚀 Tecnologías utilizadas

React: biblioteca utilizada para desarrollar la interfaz de usuario mediante componentes.

JavaScript: lenguaje utilizado para implementar la lógica de la aplicación.

Vite: herramienta utilizada para configurar y ejecutar el entorno de desarrollo.

React Router DOM: gestión de rutas y navegación entre páginas.

Zustand: administración del estado global del carrito de compras.

CSS Modules: organización y aplicación de estilos independientes para cada componente.

Fetch API: comunicación con el backend para obtener los productos.

📁 Estructura del proyecto

La aplicación está organizada mediante componentes reutilizables, páginas, hooks personalizados y un sistema de administración del estado global.

ecommers-alva/
│
├── public/
│   └── imagenes/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── CardProducto/
│   │   └── Carrito/
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── ProductoPage/
│   │   ├── CarritoPage/
│   │   └── Compra/
│   │
│   ├── hooks/
│   │   └── useFetch.js
│   │
│   ├── store/
│   │   └── carritoStore.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md

⚙️ Funcionalidades desarrolladas

Catálogo de productos

Visualización dinámica de productos obtenidos desde el backend.

Presentación de imágenes, nombres, precios y descripciones.

Diseño mediante tarjetas de productos reutilizables.

Detalle del producto

Página individual para consultar la información de cada producto.

Visualización de imagen, descripción y precio.

Navegación mediante React Router DOM.

Carrito de compras

Agregar productos al carrito.

Eliminar productos.

Modificar cantidades.

Calcular automáticamente el total de productos.

Calcular el importe total de la compra.

Vaciar el carrito.

Mostrar la cantidad de productos en el encabezado.

Proceso de compra

Formulario con datos del comprador.

Selección de método de pago.

Simulación del proceso de compra.

Pantalla de confirmación de compra exitosa.

Importante: el proceso de compra es una simulación. No realiza cobros reales ni registra pedidos en una base de datos.

🧩 Administración del estado global

Para administrar el carrito de compras se utilizó Zustand.

Se creó un store personalizado llamado carritoStore.js, encargado de gestionar los productos y las operaciones del carrito.

Entre sus funcionalidades se encuentran:

agregarProductos: incorpora productos al carrito.

eliminarProducto: elimina productos.

actualizarCantidad: modifica las cantidades.

vaciarCarrito: elimina todos los productos.

getTotalItems: calcula la cantidad total de artículos.

getTotalPrecio: calcula el importe total.

🧭 Navegación

Se utilizó React Router DOM para organizar la navegación entre las diferentes páginas de la aplicación.

La estructura permite acceder a:

Inicio.

Productos.

Detalle de productos.

Carrito de compras.

Página de compra.

Confirmación de compra exitosa.

🔌 Conexión con el backend

El frontend consume una API REST desarrollada con Node.js y Express.

Mediante Fetch API se obtienen los productos almacenados en MySQL y se muestran dinámicamente en la interfaz.

La comunicación se realiza utilizando solicitudes HTTP hacia el servidor backend.

🎨 Diseño y estilos

Se utilizaron CSS Modules para mantener los estilos organizados y separados por componente.

Se trabajó en:

Diseño de tarjetas de productos.

Organización del encabezado y navegación.

Distribución del carrito de compras.

Presentación de imágenes.

Diseño de formularios.

Adaptación de los elementos de la interfaz.

🛠️ Instalación y ejecución

1. Clonar el repositorio

git clone URL_DEL_REPOSITORIO

2. Ingresar a la carpeta

cd ecommers-alva

3. Instalar dependencias

npm install

4. Iniciar el proyecto

npm run dev

5. Abrir en el navegador

http://localhost:5173

Para visualizar correctamente los productos es necesario tener el backend iniciado y conectado a la base de datos.

🎯 Objetivo del proyecto

Este proyecto me permitió poner en práctica conocimientos de desarrollo frontend utilizando React, aprendiendo a trabajar con componentes reutilizables, hooks personalizados, rutas, estados globales y comunicación con una API REST.

También me permitió comprender cómo se integra una aplicación frontend con un backend y cómo se construyen las funcionalidades principales de un comercio electrónico.

👨‍💻 Autor

Alvaro Aznar

Proyecto desarrollado con fines educativos y como parte de mi formación en desarrollo web Full Stack.
