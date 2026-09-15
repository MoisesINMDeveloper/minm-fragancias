Actúa como un Desarrollador Frontend Senior experto en React, Next.js y Tailwind CSS.

Necesito que crees una Landing Page moderna, responsiva y minimalista para exhibir productos. La aplicación debe desarrollarse en **Next.js (App Router)** usando **TypeScript** y **Tailwind CSS**.

### Requisitos Principales:

1. **Estructura de Datos Mockeada (.json):**
   - Crea un archivo local `src/data/products.json` con al menos 6 a 8 productos de ejemplo.
   - Cada objeto de producto debe contener: `id`, `name`, `category`, `price`, `description`, `imageUrl` (usar URLs externas de Unsplash/Pexels) y `featured` (booleano).
   - Define las interfaces de TypeScript correspondientes para los datos de los productos.

2. **Configuración de Imágenes Externas:**
   - Incluye la configuración requerida en `next.config.js` (`images.remotePatterns` o `images.domains`) para permitir la carga de imágenes desde dominios externos mediante el componente `<Image />` de Next.js.

3. **Secciones de la Landing Page:**
   - **Header / Navbar:** Sticky, logo minimalista, enlaces de navegación suave (Inicio, Productos, Nosotros, Contacto) y un ícono de carrito de compras/contacto.
   - **Hero Section:** Diseño limpio con un título impactante, subtítulo descriptivo, un botón de llamado a la acción (CTA) y una imagen destacada.
   - **Sección de Productos:**
     - Grid responsivo (1 columna en móvil, 2 en tablet, 3 o 4 en escritorio).
     - Filtro simple por categoría o barra de búsqueda sencilla (sin estado complejo ni BD, puramente reactivo en frontend).
     - Tarjetas de producto (*Product Cards*) con diseño limpio, hover suave, visualización de imagen externa, título, precio, categoría y un botón "Ver detalle" o "Consultar".
   - **Modal de Detalle de Producto:** Al hacer clic en un producto, abrir un modal responsivo con la descripción completa y detalles.
   - **Sección Sobre Nosotros / Valor:** Breve bloque minimalista explicando los beneficios o historia de la marca.
   - **Footer:** Enlaces rápidos, redes sociales y copyright.

4. **Diseño y Estilos (Minimalista & Responsivo):**
   - Utiliza **Tailwind CSS**.
   - Estética: Espaciado amplio, tipografía clara, bordes suaves, paleta de colores neutra (blancos, grises, negros o acentos sutiles).
   - Totalmente responsivo (*Mobile-first*).

### Entregables:
Por favor, proporciona el código completo organizando los archivos estructuradamente:
1. `src/data/products.json` y la interfaz TypeScript.
2. `next.config.js` configurado para dominios de imágenes externas.
3. Componentes UI modulares (p. ej., `Header`, `Hero`, `ProductCard`, `ProductGrid`, `ProductModal`, `Footer`).
4. La página principal `src/app/page.tsx` integrando todos los componentes.