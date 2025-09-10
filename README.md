# Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar sorteos de "Amigo Secreto". Permite agregar nombres, mostrarlos en una lista y realizar sorteos aleatorios, eliminando a los amigos sorteados para evitar repeticiones.

---

## Instalación

1. **Clona o descarga este repositorio**  
   Puedes usar Git o descargar el ZIP desde GitHub.

   ```bash
   git clone https://github.com/tu-usuario/Amigo-Secreto.git
   ```

2. **Ubicación de los archivos**  
   Asegúrate de tener los siguientes archivos en la misma carpeta:
   - `index.html`
   - `app.js`
   - `style.css`
   - Carpeta `assets` (con las imágenes necesarias)

3. **No requiere instalación de dependencias**  
   Este proyecto está hecho solo con HTML, CSS y JavaScript puro (vanilla JS).  
   **No necesitas instalar Node.js, npm ni ningún framework.**

---

## Uso

1. **Abre el archivo `index.html` en tu navegador**  
   Haz doble clic en el archivo o ábrelo desde tu navegador favorito.

2. **Agregar amigos**  
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Añadir" o presiona la tecla Enter.
   - El nombre aparecerá en la lista de "Amigos agregados".

3. **Sortear amigo secreto**  
   - Haz clic en el botón "Sortear amigo".
   - El sistema seleccionará un amigo al azar, lo mostrará y lo eliminará de la lista para evitar repeticiones.

---

## Posibles problemas y soluciones

- **No se muestra la lista de amigos o el sorteo no funciona**
  - Verifica que el archivo `app.js` esté en la misma carpeta que `index.html`.
  - Asegúrate de que el navegador no esté usando una versión antigua en caché (puedes recargar con Ctrl+F5).
  - Revisa la consola del navegador para ver si hay errores de JavaScript.

- **No aparecen las imágenes**
  - Asegúrate de que la carpeta `assets` exista y contenga las imágenes referenciadas en el HTML.

- **No se agregan amigos con Enter**
  - Verifica que el código JavaScript que escucha el evento `keydown` esté presente y que el input tenga el id `amigo`.

---

## Información adicional

- **Accesibilidad:**  
  Se han añadido roles y atributos ARIA para mejorar la accesibilidad de la lista y los resultados.

- **Personalización:**  
  Puedes modificar el estilo en `style.css` o cambiar las imágenes en la carpeta `assets` para personalizar la apariencia.

- **Extensión:**  
  Si deseas implementar el sorteo tipo "intercambio" (donde nadie se asigne a sí mismo), revisa la sección de comentarios en el código o solicita ayuda para agregar esta funcionalidad.

---

**¿Tienes dudas o sugerencias?**  
No dudes en abrir un issue o contactar al autor del repositorio.

---

> **IMPORTANTE:**  
> Si abres el archivo directamente y no ves nada, asegúrate de que tu navegador permita la ejecución de JavaScript local. Si tienes problemas, prueba abrir el proyecto con una extensión de servidor local como "Live Server" en VS Code.
