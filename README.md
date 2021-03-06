# Curso React Native - Proyecto CookApp
La aplicación permite ingresar a un listado de las mejores recetas en una vista previa que incluye una serie de etiquetas que permiten caracterizarla (pais, tipo de comida, porciones, tiempo de preparación, entre otros).
Cada receta dispone de un detalle de la misma con una descripción breve y una serie de acciones que permiten acceder a todos los segmentos de esta mediante botones de acción, estos son:
* Preparación: nos lleva a los pasos para la elaboración de la receta.
* Ingredientes: nos lleva al listado de ingredientes de la receta
* Galería: presenta una galería de imágenes de la receta, la que puede ser complementada con fotos propias mediante el uso de la cámara del dispositivo).
* Favoritos: permite registrar la receta en "mis favoritos" para luego poder ir a este apartado y navegar entre ellas, pudiendo también eliminarlas de acá.
## Tecnologías utilizadas
### FrontEnd
* React Native

#### Librerías para RN
* react-navigation (enrutamiento y navegación)
* react-native-image-picker (manejo de la cámara del dispositivo en la app, módulo nativo)
* Axios (para realizar peticiones http a la api)

### BackEnd
* Heroku (https://pacific-savannah-47698.herokuapp.com/ (endpoint base propio)
* BD MySQL (servicio de base de datos db4free)
* CDN Cloudinary (almacenamiento de las imágenes capturadas con el teléfono)

### Métodos API
* /addUrl (para agregar la url de la foto a la base de datos)
* /getUrl/:id (para obtener el listado de urls de imágenes según el id de la receta)
* /recetas (traer el listado completo de recetas, JSON)
* /recetas/:id (traer el detalle de la receta según su id)

---------------
## Requerimientos del proyecto

* Manejo de props y estructura de componentes (patrón de diseño por componentes: stateFull, stateLess, paso de props desde componentes padre)
* Implementación de Context (uso de conextos para el manejo de los favoritos, renderizado condicional y listado)
* React Navigatión (rutas y navegación entre pantallas)
* Hooks (uso de useState: variables, funciones y props; useEffect: consumo de api's sujeta al manejo de un array de dependencias (Nueva foto); useContext: contextos en favoritos, modals y pantalla de detalles de la receta).
* Módulo nativo: uso de la cámara del dispositivo (react native image picker) para hacer uso de esta, hacer la fotografía, y posteriormente obtener las propiedades de la imágen y subirla a nuestro CDN, luego el url generado en cloudinary se registra en nuestra base de datos MySQL.
* Axios: utilizamos esta librería de terceros para manejar nuestras peticiones Http. Utilizamos métodos GET y POST.
