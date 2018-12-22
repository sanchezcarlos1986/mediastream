Este proyecto fue creado con [Create React App](https://github.com/facebookincubator/create-react-app).

## Mediastream FrontEnd Test 2018
Este proyecto fue realizado para la prueba de Mediastream 2018.

### Instalación
Para hacer funcionar el proyecto una vez clonado localmente, se deben instalar las dependencias, ejecutando el comando `npm i`, `npm install` o `yarn`.
Una vez hecho esto, ejecutar el comando `npm start` o `yarn start`, lo cual abrirá el proyecto en la siguiente URL: http://localhost:3000.

### Descripción
El proyecto cuenta con 2 vistas, la vista Master, donde se listan las películas, y la vista DetailView, que muestra el detalle de cada película.

El siguiente listado nos indica las características generales del proyecto:

- Fue realizado completamente con **React**.
- Para el manejo del estado global de la aplicación, se utilizó **Redux**.
- Para los estilos, se utilizó **Styled Components**.
- Para las transiciones, se utilizó **react-overdrive**.
- Para las peticiones HTTP, se ocupó **Axios**.

En general se utilizaron buenas prácticas de código recomendadas por AirBnb (quienes han contribuido en gran parte a la comunidad) para Javascript y React, las cuales se pueden encontrar en https://github.com/airbnb/javascript y https://github.com/airbnb/javascript/tree/master/react respectivamente.

---

### Vistas
La app cuenta con dos vistas, **Master** y **DetailView**.

A acontinuación se muestra un pequeño detalle de las tareas que realiza cada vista:

Componente | Descripción
--- | ---
**Master.js** | Functional Component. Únicamente se encarga de dibujar al componente _MovieList_.
**DetailView.js** | Class Componenent. Se encarga de llamar a la acción que devuelve la información de cada película, pasándole como parámetro el id de la misma obtenido desde la url.

Una vez obtenida la información, hace un _setState_ de la película para dibujarla en el render. 

Cuando se ejecuta el método _componentWillUnmount_, se llama a la acción _resetMovie_, para evitar el caché de la animación. 

---

### Componentes
Todos los Componentes son funcionales, excepto _MovieList_, que es una clase ya que el listado de películas se obtiene en el método *ComponentDidMount*.

A acontinuación se muestra un pequeño detalle de las tareas que realiza cada componente:

Componente | Descripción
--- | ---
**AwesomeIcon.js** | Este componente dibuja íconos de la librería Font Awesome.
**Header.js** | Dibuja el logo de Mediastream y muetra un contador de favoritos.
**MovieList.js** | Se encarga de llamar a la acción que trae películas desde la API. Cuando las obtiene, las dibuja en el render, utilizando el componente _Movie_.
**Movie.js** | Recibe como parámetro la película a mostrar, desde donde obtiene toda la información necesaria. Básicamente es cada carátula de la lista de películas.

---

### Redux
Para el manejo del estado global de la app, se utilizó Redux. Todas los Action Creators están trabajando con *Axios* para poder hacer las peticiones HTTP correspondientes.

A continuación se listan las *Actions* creadas para ejecutar las diferentes actualizaciones en la *Store*:

Action | Descripción
--- | ---
**getMovies** | Se encarga de hacer el GET de películas a la API.
Una vez que la respuesta del endpoint está OK y devuelve datos, hacemos el _DISPATCH_ hacia la Store, para dejar el listado de películas disponible para toda la app.
**getMovie** | Similar a *GET_MOVIES*, con la diferencia de que aquí se obtiene la información de una película en particular. Para poder hacer esto, recibe como parámetro el id de la película solicitada, la que a su vez pasa como parámetro al endpoint.
**resetMovie** | Se encarga únicamente de hacer un dispatch con un objeto vacío, para limpiar 
 la película almacenada en la store cada vez que la vista de detalle ejecuta el método componentWillUnmount.
