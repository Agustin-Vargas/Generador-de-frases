# Generador de Frases Célebres

¡Bienvenido al Generador de Frases Célebres! Esta es una aplicación web interactiva y minimalista que conecta con una API externa para mostrar pensamientos, reflexiones y citas de personajes históricos e ilustres en idioma español, incluyendo información detallada sobre sus autores.


## Características Principales

*   **Consumo de API en Tiempo Real:** Conexión asíncrona mediante `fetch` a la API de RapidAPI (`quotes15`) para traer contenido dinámico.
*   **Información Enriquecida:** No solo muestra la frase y el nombre del autor, sino que también renderiza su biografía o descripción profesional cuando está disponible.
*   **Copiar al Portapapeles:** Incluye un botón interactivo que permite al usuario copiar la frase junto con su autor con un solo clic utilizando la API nativa `navigator.clipboard`.
*   **Interfaz Dinámica y Responsiva:** El diseño se adapta a diferentes tamaños de pantalla y cuenta con una separación visual limpia y equilibrada de sus elementos mediante CSS.
*   **Manejo de Estados:** Control visual para el estado de "Cargando..." mientras se realiza la petición y control de errores si la conexión falla.


## Tecnologías Utilizadas

*   **HTML5:** Estructura semántica del contenedor, la tarjeta de visualización y los botones de acción.
*   **CSS3:** Estructura de diseño utilizando Flexbox, márgenes optimizados para la lectura y transiciones visuales.
*   **JavaScript:** Lógica asíncrona (`async/await`), manipulación del DOM y manejo de eventos del usuario.
*   **API Externa:** `Quotes` de RapidAPI para la obtención del contenido en español.


## Estructura del Proyecto
── index.html      # Estructura principal de la interfaz de usuario
── style.css       # Estilos, diseño de la tarjeta y espaciados
── script.js       # Lógica de consumo de la API e interactividad


## Instalación y Uso
* Clona o descarga este repositorio en tu máquina local.
* Abre el archivo index.html en cualquier navegador web moderno.
* Haz clic en el botón "Nueva frase" para empezar a generar citas célebres.
* Utiliza el botón "Copiar" para guardar el texto directamente en tu portapapeles.
