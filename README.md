## Listado de películas 
Esta aplicación muestra un listado de películas del Studio Ghibli utilizando su [API](http://ghibliapi.herokuapp.com/ "API"). 
Pantallas:
- Inicio: 
  - Permite realizar la búsqueda de películas por coincidencias con el título, en caso de limpiar la búsqueda se mostrarán todas las películas de nuevo.
  - Se puede configurar para mostrar o no la opción de autocompletado en la búsqueda asignando el valor de **true** o **false** a la variable de ambiente **VUE_APP_AUTOCOMPLETE** ya que las películas que se muestran en el listado se filtran automáticamente desde la búsqueda y se puede prescindir del autocompletado. 
 - Las películas se muestran paginadas para el caso en que el acervo de películas crezca.
 - Al dar click en el botón **See More** te envía a la pantalla del Detalle de la película.
- Detalle:
  - Permite visualizar la información completa de la película seleccionada.
  - Para mejorar la experiencia del usuario se agregó una URL amigable y un breadcrumb que le permite conocer dónde está y regresar fácilmente a la pantalla inicial si así lo desea. 
  
### Arquitectura
Para la creación de la aplicación se emplearon las siguientes tecnologías:
- Vue.js
- Tailwindcss
- ESLint
- Jest

### Estructura
- **src/assets/css**: contiene los archivos css, cada uno con el nombre del componente al que pertenecen.
- **src/assets/img**: contiene las imagenes.
-  **src/components**: contiene los componentes que se utilizan en las vistas.
-  **src/components/icons**: contiene los componentes referentes a los iconos.
-  **src/layouts**: contiene los componentes que se utilizan como layouts, en este caso solo existe main, pero esta pensado en caso de que se requiera agregar más.
-  **src/views:** contiene los componentes que se utilizan como vistas. 
- **test/unit**: contiene los archivos con las pruebas.

### Trade-offs 
- Mejorar el estilo de las opciones del autocompletado.
- Agregar en el paginado más botones que le permitan al usuario ir a determinada página y conocer cuántas hay en total. 
- Agregar más casos en las pruebas.
- Permitir buscar también por productor o director. 

### Demo
Para visualizar la aplicación dar click [Aquí](https://keyvapers-studio-ghibli.herokuapp.com/ "Demo")

### Instrucciones de despliegue
Crear archivo .env y configurar las variables de ambiente:
```
VUE_APP_API_URL=https://ghibliapi.herokuapp.com
VUE_APP_AUTOCOMPLETE=false
```
Para instalar todas las dependencias:
```
npm install
```
Para ejecutar Eslint: 
```
npm run lint
```
Para ejecutar pruebas: 
```
npm run test
```
Para ejecutar localmente
```
npm run serve
```
Para compilar para producción
```
npm run build
```
