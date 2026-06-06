La Tri App - Splash Screen Mobile Exam

Aplicación móvil desarrollada con React Native y Expo Go para la materia de Programación en Dispositivos Móviles.

El proyecto presenta una app informativa sobre la Selección Ecuatoriana de Fútbol, incluyendo una pantalla de bienvenida, una pantalla principal con estilo visual moderno, tarjetas interactivas, partidos de Ecuador en el Mundial 2026 y fichas detalladas de jugadores destacados.

Descripción del proyecto

La Tri App es una aplicación móvil básica pero visualmente atractiva que permite conocer información relevante de Ecuador rumbo al Mundial 2026.

La app inicia con un Splash Screen animado que muestra el logo de la Selección Ecuatoriana. Después de unos segundos, realiza una transición suave hacia la pantalla principal, donde se presentan los rivales del grupo, los partidos de Ecuador y los jugadores más importantes de la selección.

El diseño utiliza una interfaz estilo retro moderno, inspirada en dashboards deportivos, con tarjetas grandes, colores llamativos, bordes redondeados, tipografía fuerte y elementos interactivos.

Objetivo

El objetivo principal del proyecto es familiarizarse con el entorno de desarrollo móvil usando React Native con Expo Go, aplicando componentes fundamentales como:

View

Text

Image

ImageBackground

ScrollView

Pressable

TouchableOpacity

Modal

Animated

StyleSheet

Además, se busca practicar la estructura básica de un proyecto Expo, el manejo de assets locales, la creación de pantallas, la interacción con tarjetas y la presentación de información mediante ventanas flotantes.

Funcionalidades principales

Splash Screen

La aplicación incluye una pantalla de bienvenida con:

Logo de la Selección Ecuatoriana de Fútbol.

Texto principal: Ecuador.

Texto secundario: La Tri rumbo a la gloria.

Barra de carga animada.

Animación de entrada del logo y textos.

Duración aproximada de 2 a 3 segundos.

Transición suave hacia la pantalla principal.

Home Screen

La pantalla principal contiene:

Encabezado de la app: La Tri App.

Tarjeta principal con el logo de Ecuador.

Información general del Mundial 2026.

Resumen visual con grupo, partidos y jugadores destacados.

Sección de rivales del grupo.

Sección de partidos de Ecuador.

Sección de jugadores destacados.

Tarjetas interactivas

La app permite tocar tarjetas para abrir una ventana flotante con información ampliada.

Tarjetas de partidos

Cada partido muestra:

Rival.

Fecha.

Hora en Ecuador.

Estadio.

Ciudad.

Imagen del estadio.

Análisis breve del partido.

Tarjetas de jugadores

Cada jugador muestra una ficha con:

Imagen del jugador.

Club actual.

Posición.

Goles con Ecuador.

Año de debut.

Clubes donde ha jugado.

Logros importantes.

Explicación de por qué es importante para La Tri.

Contenido incluido en la app

Rivales del Grupo E

Ecuador

Alemania

Costa de Marfil

Curazao

Partidos de Ecuador

PartidoFechaHora EcuadorEstadioCosta de Marfil vs Ecuador14 de junio de 202618:00Philadelphia StadiumEcuador vs Curazao20 de junio de 202621:00Kansas City StadiumEcuador vs Alemania25 de junio de 202615:00New York New Jersey Stadium

Jugadores destacados

Moisés Caicedo

Piero Hincapié

Willian Pacho

Pervis Estupiñán

Enner Valencia

Tecnologías utilizadas

React Native: framework utilizado para construir interfaces móviles mediante componentes nativos.

Expo Go: herramienta que permite ejecutar y probar la aplicación en un dispositivo móvil de forma rápida.

TypeScript: usado para organizar mejor los tipos de datos de partidos y jugadores.

Expo Font: utilizado para cargar una fuente personalizada.

Bebas Neue: fuente usada para dar un estilo visual fuerte, moderno y deportivo.

Git y GitHub: utilizados para el control de versiones y la entrega del proyecto en un repositorio público.

Estructura del proyecto

Splash-Screen-Mobile-Exam/

├── assets/

│ ├── logo-ecuador.png

│ ├── players/

│ │ ├── caicedo.png

│ │ ├── enner.png

│ │ ├── hincapie.png

│ │ ├── pacho.png

│ │ └── pervis.png

│ └── stadiums/

│ ├── kansas-city.jpg

│ ├── new-york-new-jersey.png

│ └── philadelphia.jpg

├── src/

│ └── screens/

│ ├── HomeScreen.tsx

│ └── SplashScreen.tsx

├── App.tsx

├── index.js

├── app.json

├── package.json

└── README.md

Instalación y ejecución

1. Clonar el repositorio

git https://github.com/DavidYascaribay/-Splash-Screen-Mobile-Exam.git

1. Ingresar a la carpeta del proyecto

cd Splash-Screen-Mobile-Exam

1. Instalar dependencias

npm install

1. Instalar dependencias de fuente

npx expo install expo-font

npm install @expo-google-fonts/bebas-neue

1. Ejecutar el proyecto

npx expo start --go -c

1. Abrir en Expo Go

Después de ejecutar el proyecto, se mostrará un código QR en la terminal o navegador.

Para probar la aplicación, se debe escanear el QR usando la aplicación Expo Go desde un teléfono Android o iOS.

Comandos útiles

Ejecutar el proyecto:

npx expo start --go

Ejecutar limpiando caché:

npx expo start --go -c

Ver el estado de Git:

git status

Agregar cambios:

git add .

Crear commit:

git commit -m "mensaje del commit"

Subir cambios a GitHub:

git push

Commits realizados durante el desarrollo

Durante el desarrollo se trabajó por etapas para evidenciar el avance del proyecto. Algunos commits recomendados son:

chore: crear proyecto base con Expo

fix: configurar entrada principal sin expo router

feat: crear splash y home con React Native

style: crear home suave y agregar splash screen

feat: agregar transicion suave e interactividad en tarjetas

feat: agregar modales con detalle de partidos y jugadores

style: aplicar interfaz retro moderna con imagenes png

style: mejorar imagenes de jugadores en modal

docs: actualizar README del proyecto

Características visuales

La interfaz fue diseñada con un estilo retro moderno, utilizando:

Fondo verde/gris suave.

Tarjetas oscuras.

Colores deportivos como amarillo, coral, azul y negro.

Bordes gruesos.

Tarjetas redondeadas.

Sombras para dar profundidad.

Tipografía grande y llamativa.

Modales con información detallada.

Imágenes de jugadores y estadios.

Aprendizajes obtenidos

Con este proyecto se practicó:

Creación de una app móvil con Expo.

Uso de React Native con TypeScript.

Organización de pantallas en carpetas.

Manejo de imágenes locales.

Creación de un Splash Screen personalizado.

Uso de animaciones con Animated.

Creación de ventanas flotantes con Modal.

Uso de tarjetas interactivas con Pressable.

Aplicación de estilos con StyleSheet.

Control de versiones usando Git y GitHub.

Autor

David Yascaribay

Proyecto desarrollado para la materia de Programación en Dispositivos Móviles.
