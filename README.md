# Bitba tienda e-commerce desarrollada en React

Proyecto final e-commerce (comercio electronico), Curso React-Js de CoderHouse. Año 2022

# Contenido

Esta app consiste de una tienda virtual en una single-page application (SPA), o aplicación de página única, en la cual el usuario
puede seleccionar productos los cuales se encuentran en una base de datos (mediante Firebase) y elegir la cantidad correspondiente, para luego ir al icono "carrito" donde podra pasar a la instancia final de compra del producto.El proyecto se encuentra actualmente en fase de desarrollo ya que ciertas funcionalidades para
poder comercializar mediante la tienda necesitan ser terminadas. 

# Tecnologia utilizada

App desarrollada en Rect-JS

# Instalacion

Se requiere de Node.js para poder ejecutarse.
Instalar las dependencias e iniciar el servidor.

$ cd myappreact
$ npm install

Luego para clonar este repositorio debe seguir las siguientes instrucciones:

1 - Abrir Visual Studio Code

2 - Cambiar el directorio de trabajo actual a la ubicación en donde se quiera clonar el directorio.

3 - Escribir git clone y luego pegar la siguiente URL https://github.com/mmax2001/myReactStore

4 - Presionar Enter para asi crear su clon del repositorio de manera local.

Si necesita mas información al respecto: https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository

# Complementos adicionales

Con el repositorio ya clonado en su equipo, restaria ejecutarlo correctamente, para ello se deben instalar previamente las siguientes librerias:

- react-router.dom : librería para enrutamiento y navegabilidad entra las diferentes secciones de nuestra SPA. Se debe ejecutar en la terminal del Visual Studio Code el siguiente comando:

npm install react-router-dom@6 

- Firebase : Libreria de servicios de Google, la cual brinda una plataforma para el desarrollo de aplicaciones web y aplicaciones móviles en terminos del front-end, sin preocuparnos del back-end, puntalmente en este desarrollo se utiliza el servicio de Firebase Storage el cual proporciona cargas y descargas seguras de archivos para aplicaciones Firebase, sin importar la calidad de la red. El desarrollador lo puede utilizar para almacenar imágenes, audio, vídeo, o cualquier otro contenido generado por el usuario. Firebase Storage se basa en el almacenamiento de Google Cloud Storage. Para instalar Firebase al igual que en el paso anterior,haciendo uso de la terminal aplicamos el siguiente comando:

npm install firebase

-react-bootstrap 5.1.3: framework front-end el cual se utiliza para darle diferentes estilos a las paginas web.
Instalacion desde consola:

npm install react-bootstrap@next bootstrap@5.1.3

- bootstrap 5.0 : Kit de herramientas de código abierto para front-end, con el cual  damos estilo al proyecto. El mismo está incluido a través de un link en App.js mediante la sentencia: 

import 'bootstrap/dist/css/bootstrap.min.css';

- react-icons: conjunto de iconos para incluir en el estilizado de paginas. 
Su instalacion desde consola idem anterior requiere del comando:

npm install react-icons --save

- formik: la librería Formik para la gestión de formularios, nos proporciona las herramientas suficientes para que podamos crearlos en nuestras aplicaciones de una manera rápida, sencilla y eficiente.
Instalacion desde la consola:

npm install formik --save

-yup:libreria que nos permite validar los campos presentes en los formularios, en conjunto con la libreria anteriormente mencionada (formik) nos acerca un conjunto ideal a la hora de crear formularios.
Instalacion desde la consola:

npm install yup react-yup

-lottie-react:libreria que nos brinda un conjunto de animaciones para incluir en proyectos, con fines obviamente esteticos.
Instalacion desde consola:

npm install lottie-react

-font awesome react: font awesome es un kit de herramientas para sitios web que proporciona iconos y logotipos.
Su instalacion se realiza con el siguiente comando:

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

# Ejecucion

Para la ejecucion de la app en React se debe ubicar en el directorio donde se encuentra el repositorio clonado y desde la consola ejecutar el siguiente
comando:

npm start

luego se abrira automaticamente una ventana en el navegador donde podra visualizarse
el proyecto, en caso contrario con ingresar la URL http://localhost:3000/ se logra
el mismo efecto.

# Componentes del proyecto

Cart: componente que contiene los items seleccionados desde la tienda,asi mismo efectua la logica para sumar-restar cantidades, y precios de los items en el mismo.
CartWidget: componente para mostrar el numero de los items en el carrito.
ItemListContainer:componente para mostrar el catalogo completo de items.
footer: componente que despliega un footer con informacion respectiva a la tienda.
form: componente que contiene un formulario de contacto.
FormCheckOut y OrderCode: simil anterior FormCheckOut contiene un formulario validado, que permite contactar al cliente, y OrderCode nos trae un codigo de orden generado en Firebase Store,luego de completar los campos del componente FormCheckOut.
Item: este componente genera una vista del producto en la tienda.
ItemCounter: componente para controlar las cantidades seleccionadas desde la tienda.
ItemDetail: componente similar a item, con la diferencia que despliega un detallado mas abarcativo del producto.
ItemDetailContainer: este componente contiene a ItemDetail, y se encarga de traer desde la base de datos el contenido del item seleccionado.
ItemList: se encarga de renderizar la lista de items.
ItemListContainer: trae desde la base de datos el catalogo completo o por categorias de los productos de la tienda, en conjunto con ItemList para genera la vista total de productos.
Navbar: componente que renderiza la barra de navegacion de la pagina
con los links a diferentes secciones.
CartContext: brinda contexto con un conjunto de funciones disponibles a cualquier componente que requiera uso de ellas.
dataStore: mock o ejemplo de testeo de base de datos.
firebase-config y firebase-createOrder: el primero gestiona el acceso a la base Firebase y el segundo genera la orden de compra con un codigo unico de orden.
loaderData: este componente mediante el uso de promesas, se encarga de cargar la base de datos de testeo o mock de datos, en el caso de no usar una base de datos como Firebase Store.

# Vista del proyecto
