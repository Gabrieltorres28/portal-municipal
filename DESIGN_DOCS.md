# Documentación de Diseño - Portal Municipal El Alcázar

## Filosofía de Diseño

### Concepto visual
El portal fue diseñado con una estética **institucional refinada con calidez regional**, evitando el aspecto corporativo frío típico de portales gubernamentales grandes, pero manteniendo la seriedad necesaria para un sitio oficial.

### Principios de diseño aplicados

1. **Sobriedad con calidez**
   - Uso de verdes naturales (vegetación misionera)
   - Tonos terracota como acento (tierra, regionalidad)
   - Espacios amplios y respiración visual
   - Sin efectos exagerados ni tendencias pasajeras

2. **Claridad institucional**
   - Jerarquía tipográfica fuerte
   - CTAs (Call To Action) claramente identificables
   - Navegación simple e intuitiva
   - Contenido bien estructurado

3. **Identidad regional tangible**
   - Paleta inspirada en naturaleza misionera
   - Imágenes de selva, verde, comunidad
   - Contenido que refleja vida de pueblo pequeño
   - Tono cercano pero profesional

## Sistema de Diseño

### Colores

#### Primary (Verde institucional)
Inspirado en la vegetación abundante de Misiones:
```
50:  #f0f9f4  - Backgrounds suaves
100: #dcf2e4  - Hover states claros
300: #8ad1ad  - Elementos secundarios
500: #339b6a  - Color principal
700: #1d6445  - Textos sobre fondos claros
900: #16422f  - Acentos oscuros
```

#### Accent (Terracota/Tierra)
Tonos cálidos regionales:
```
50:  #fdf8f6  - Backgrounds suaves
100: #f8ebe3  - Secciones destacadas
500: #c87654  - Color acento principal
700: #964a34  - Hover states
900: #66372a  - Textos oscuros
```

### Tipografía

#### Manrope (Display)
- **Uso**: Títulos principales, nombres institucionales
- **Pesos**: 400, 500, 600, 700, 800
- **Características**: Geométrica moderna, legible, institucional sin ser aburrida

#### Inter (Cuerpo)
- **Uso**: Textos de cuerpo, UI elements, navegación
- **Pesos**: 300, 400, 500, 600, 700
- **Características**: Alta legibilidad, profesional, óptima en pantallas

### Espaciado y Layout

#### Grid system
- Max-width contenedor: 1280px (7xl)
- Padding horizontal: 4 (mobile) → 6 (tablet) → 8 (desktop)
- Gaps entre elementos: 6-8 (sections) | 4-6 (cards)

#### Spacing vertical
- Secciones principales: py-24 (96px)
- Subsecciones: py-16 / py-20
- Elementos individuales: mb-6 / mb-8 / mb-12

### Componentes UI

#### Botones
- **Primarios**: Gradient verde, shadow-lg, hover:scale-105
- **Secundarios**: Border blanco/transparente sobre fondos oscuros
- **Links**: Text con icon, hover con transform

#### Cards
- Border radius: rounded-2xl (16px)
- Shadow: shadow-sm → hover:shadow-xl
- Hover: -translate-y-1 + border color change
- Padding: p-6 / p-8

#### Modales
- Backdrop: bg-black/50 + backdrop-blur-sm
- Container: rounded-2xl, max-w-2xl
- Animaciones: fade-in + scale-in
- Sticky header con info contextual

### Microinteracciones

#### Hover states
- Escala suave: hover:scale-105 / hover:scale-110
- Translación: hover:-translate-y-1 / hover:translate-x-1
- Color transitions: transition-colors duration-200
- Shadow elevation: shadow-sm → shadow-xl

#### Animaciones de entrada
- Hero: fade-in-up con stagger (animation-delay)
- Cards: Hover transforms con duration-300
- Modales: fade-in (backdrop) + scale-in (content)

#### Estados de foco
- Ring: focus:ring-2 focus:ring-primary-500
- Border: focus:border-transparent
- Outline: outline-none (con ring visible)

## Arquitectura de Componentes

### Componentes principales

```
Header
├── Logo + Nombre institucional
├── Navegación desktop (links)
└── Menú mobile (hamburger + drawer)

HeroSection
├── Background image + overlay
├── Badge institucional
├── Título + Subtítulo
├── Texto introductorio
└── CTAs principales

QuickAccessSection
└── Grid 4 cards (Noticias, Servicios, Turismo, Contacto)

MunicipalitySection
├── Content (left): Texto + Features grid
└── Image (right): Imagen + Badge flotante

ServicesSection
├── Header explicativo
├── Grid 6 servicios con categorías
└── Modales de formularios

NewsSection
├── Grid 3 noticias
└── CTA "Ver todas"

TourismSection
├── Grid 3 atractivos
└── CTA footer con gradient

ContactSection
├── Info de contacto (4 items)
├── Mapa placeholder
└── Formulario de contacto

Footer
├── Logo + descripción + redes
├── Enlaces (3 columnas)
└── Copyright + institucional
```

### Patrones de composición

#### Pattern: Card con hover
```tsx
<div className="group bg-white rounded-2xl p-8 shadow-sm 
                hover:shadow-xl transition-all duration-300 
                border border-gray-100 hover:border-primary-200 
                hover:-translate-y-1">
  {/* Contenido */}
</div>
```

#### Pattern: Gradient button
```tsx
<button className="px-8 py-4 bg-gradient-to-r from-primary-600 
                   to-primary-700 text-white rounded-xl font-semibold 
                   hover:from-primary-700 hover:to-primary-800 
                   transition-all shadow-lg hover:shadow-xl 
                   hover:scale-105">
  Texto
</button>
```

#### Pattern: Icon container
```tsx
<div className="w-14 h-14 rounded-xl bg-gradient-to-br 
                from-primary-500 to-primary-600 
                flex items-center justify-center 
                shadow-lg group-hover:scale-110 transition-transform">
  <Icon className="text-white" size={28} />
</div>
```

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Estrategia mobile-first
Todos los componentes están diseñados primero para mobile, luego se expanden:

```tsx
// Mobile por defecto, tablet (md:), desktop (lg:)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
```

### Ajustes por dispositivo

#### Header
- Mobile: Logo compacto + hamburger
- Desktop: Logo + navegación horizontal

#### Hero
- Mobile: text-5xl, padding reducido
- Desktop: text-7xl, padding amplio

#### Grids
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 3-4 columnas

#### Modales
- Mobile: max-h-[90vh] con scroll
- Desktop: Centrado con max-width

## Accesibilidad

### Semántica HTML
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Heading hierarchy (h1 → h2 → h3)
- Labels en todos los inputs
- Alt text en imágenes

### Contraste de color
- Texto principal: Ratio > 4.5:1
- Textos grandes: Ratio > 3:1
- Estados de foco visibles

### Navegación por teclado
- Focus states con ring visible
- Skip links (pendiente implementar)
- Tab order lógico

## Performance

### Optimizaciones aplicadas
- Lazy loading de imágenes (Next.js Image)
- CSS Transitions en lugar de JS cuando es posible
- Componentes client solo donde es necesario
- Tree-shaking automático con Tailwind

### Métricas objetivo
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## Extensibilidad

### Agregar nueva sección
```tsx
// 1. Crear componente
export default function NewSection() {
  return <section id="nueva">...</section>
}

// 2. Importar en page.tsx
import NewSection from './components/NewSection'

// 3. Agregar al render
<NewSection />

// 4. Agregar link en Header
{ label: 'Nueva Sección', href: '#nueva' }
```

### Personalizar colores
Editar `tailwind.config.js`:
```js
colors: {
  primary: { /* tus colores */ },
  accent: { /* tus colores */ },
}
```

### Agregar nuevo servicio
Editar array `services` en `ServicesSection.tsx`:
```tsx
{
  icon: TuIcono,
  category: 'Tipo',
  title: 'Nombre',
  description: 'Descripción',
  type: 'online' | 'external' | 'info',
}
```

## Próximas mejoras

### UX
- [ ] Loading states en formularios
- [ ] Toasts para feedback de acciones
- [ ] Skeleton screens durante carga
- [ ] Animaciones de scroll reveal

### Accesibilidad
- [ ] Skip navigation link
- [ ] ARIA labels completos
- [ ] Pruebas con screen readers
- [ ] Modo alto contraste

### Performance
- [ ] Lazy load de secciones below-fold
- [ ] Prefetch de páginas internas
- [ ] Optimización de imágenes WebP
- [ ] Service Worker para offline

### Features
- [ ] Búsqueda interna
- [ ] Sistema de favoritos
- [ ] Compartir en redes sociales
- [ ] Modo oscuro (opcional)
