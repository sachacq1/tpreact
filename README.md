# Proyecto React - Formulario de Bienvenida y Contacto

## Descripción

Este proyecto es una aplicación en React con dos páginas principales:

1. **Página Principal (https://sachacq.vercel.app/)**: Un formulario para ingresar el nombre del usuario. Si se ingresa un nombre válido, se mostrará el portfolio del desarrollador.
2. **Página de Contacto (https://sachacq.vercel.app//contacto)**: Un formulario de contacto que permite a los usuarios enviar mensajes. El nombre del usuario ingresado en la página principal se mostrará en esta página.

El nombre del usuario se almacena en un estado global utilizando Context API para que pueda ser accedido en ambas páginas.

## Requisitos

- Utilizar un estado global en React para almacenar el nombre del usuario.
- Mostrar el portfolio del desarrollador en la página principal solo si se ha ingresado un nombre válido.
- Implementar un formulario funcional en la página de contacto con los campos: nombre, email y mensaje.
- Utilizar el servicio de FormSubmit para manejar los datos del formulario de contacto.

## Instalación

Para ejecutar el proyecto localmente, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/sachacq1/portfolio-2024
2. **Instala las dependencias:**

    ```bash
    npm install

3. **Inicia la aplicación:**

    ```bash
    npm start
La aplicación debería estar disponible en http://localhost:3000.

## Estructura del Proyecto
- src/components: Contiene los componentes de la aplicación, incluyendo el formulario de bienvenida y el formulario de contacto.
- src/context: Implementa el Context API para el estado global.
- src/pages: Contiene las páginas principales (Home y Contacto).
- src/App.js: Configura las rutas y la estructura general de la aplicación.

## Consideraciones

- El formulario de contacto está configurado para enviar los datos a FormSubmit. Asegúrate de que el URL de FormSubmit esté correctamente configurado en el componente de contacto.
- La interfaz de usuario debe ser intuitiva y agradable en todas las páginas.

