# Servicios Profesionales Mr. Susana

Sitio web informativo oficial de Servicios Profesionales Mr. Susana - Capacitación Personalizada.

## Servicios Ofrecidos

- Asesoría Académica / Academic Counseling / Business English
- English Language Evaluator / Legal Translation / Essay Writer
- Test Specialist: SAT / GMAT / GRE / TOEFL / TOEIC / IELTS

## Información de Contacto

- **E-mail**: mrsusana@yahoo.com / mrsusana@gmail.com
- **Teléfono (Oficina)**: (809)-689-8244
- **WhatsApp**: (809)-904-4805
- **Twitter**: @mrsusana
- **Facebook**: José Miguel Susana

## Cómo Publicar en GitHub Pages

### Método 1: Usando Visual Studio Code (Recomendado)

1. **Abrir la carpeta del proyecto** en Visual Studio Code

2. **Inicializar Git** (si no lo has hecho):
   - Abre la terminal en VS Code (Ctrl + `)
   - Ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Sitio web inicial - Servicios Profesionales Mr. Susana"
   ```

3. **Crear un repositorio en GitHub**:
   - Ve a https://github.com/new
   - Nombra el repositorio: `servicios-mr-susana` (o el nombre que prefieras)
   - NO marques ninguna opción (no README, no .gitignore)
   - Clic en "Create repository"

4. **Conectar y subir a GitHub**:
   - Copia los comandos que aparecen en GitHub en la sección "...or push an existing repository from the command line"
   - Pégalos en la terminal de VS Code, algo similar a:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/servicios-mr-susana.git
   git branch -M main
   git push -u origin main
   ```

5. **Activar GitHub Pages**:
   - En tu repositorio de GitHub, ve a la pestaña **Settings**
   - En el menú izquierdo busca **Pages**
   - En "Source" selecciona:
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Clic en **Save**
   - Espera 1-2 minutos
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/servicios-mr-susana/`

### Método 2: Subir archivos directamente en GitHub

1. Crea un nuevo repositorio en GitHub.com
2. En la página del repositorio, clic en **"Add file" > "Upload files"**
3. Arrastra los archivos: `index.html`, `styles.css`, `script.js`
4. Clic en **"Commit changes"**
5. Ve a **Settings > Pages** y selecciona la rama `main`

## Cómo Ver el Sitio Localmente

1. Abre la carpeta del proyecto en Windows Explorer
2. Haz doble clic en `index.html`
3. O en VS Code: clic derecho en `index.html` > "Open with Live Server" (si tienes la extensión)

## Estructura del Proyecto

```
Jose/
├── index.html       # Página principal
├── styles.css       # Estilos CSS
├── script.js        # Funciones JavaScript
└── README.md        # Este archivo
```

## Tecnologías Utilizadas

- HTML5
- CSS3 (con animaciones y diseño responsivo)
- JavaScript (Vanilla JS)
- Font Awesome (íconos)
- Google Fonts (Poppins)

## Personalización

Para modificar el contenido:
- **Textos**: Edita `index.html`
- **Colores y estilos**: Edita `styles.css` (variables al inicio del archivo)
- **Funcionalidades**: Edita `script.js`
