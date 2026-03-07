# Portal Municipal - El Alcázar, Misiones

Portal web oficial de la Municipalidad de El Alcázar, provincia de Misiones, Argentina.

## Características

- ✅ **Diseño institucional moderno y sobrio** - Estética profesional adaptada a un municipio pequeño
- ✅ **Responsive design completo** - Optimizado para mobile, tablet y desktop
- ✅ **Secciones institucionales** - Información del municipio, noticias, turismo, contacto
- ✅ **Gestión de servicios y trámites** - Formularios para reclamos, cementerio, turnos
- ✅ **UI/UX cuidada** - Microinteracciones, transiciones suaves, navegación clara
- ✅ **Identidad regional** - Paleta de colores inspirada en la naturaleza misionera
- ✅ **Código limpio y escalable** - TypeScript, componentes reutilizables, arquitectura clara

## Stack tecnológico

- **Next.js 14** (App Router)
- **React 18** 
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (iconos)

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura del proyecto

```
portal-municipal/
├── app/
│   ├── components/
│   │   ├── Header.tsx                 # Navegación principal sticky
│   │   ├── HeroSection.tsx           # Hero institucional con imagen
│   │   ├── QuickAccessSection.tsx    # Accesos rápidos
│   │   ├── MunicipalitySection.tsx   # Sobre el municipio
│   │   ├── ServicesSection.tsx       # Trámites y servicios
│   │   ├── NewsSection.tsx           # Últimas noticias
│   │   ├── TourismSection.tsx        # Turismo e identidad local
│   │   ├── ContactSection.tsx        # Contacto institucional
│   │   ├── Footer.tsx                # Footer completo
│   │   └── modals/
│   │       ├── ReclamosModal.tsx     # Formulario de reclamos
│   │       ├── CementerioModal.tsx   # Formulario cementerio
│   │       └── TurnosModal.tsx       # Formulario turnos
│   ├── globals.css                   # Estilos globales
│   ├── layout.tsx                    # Layout raíz
│   └── page.tsx                      # Página principal
├── public/                           # Archivos estáticos
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Secciones del portal

### 1. Hero institucional
Presentación del municipio con imagen de fondo, título institucional y CTAs principales.

### 2. Accesos rápidos
4 tarjetas con enlaces directos a las secciones más importantes.

### 3. El municipio
Información institucional sobre El Alcázar, su identidad y valores comunitarios.

### 4. Trámites y servicios
6 servicios principales con categorización:
- **Enlaces externos**: Pago de patente, boletas e impuestos
- **Solicitudes online**: Reclamos vecinales, cementerio, turnos
- **Información**: Formularios y requisitos

### 5. Últimas noticias
3 noticias destacadas sobre obras, eventos y actividades municipales.

### 6. Turismo e identidad local
3 atractivos turísticos: reserva natural, circuito rural, cultura local.

### 7. Contacto
Información de contacto completa, mapa placeholder y formulario.

### 8. Footer
Footer institucional con enlaces, servicios, contacto y redes sociales.

## Formularios interactivos

Los formularios se presentan en modales elegantes:

### Reclamos vecinales
- Datos personales (nombre, DNI, teléfono)
- Ubicación (barrio/zona)
- Tipo de reclamo (select)
- Descripción detallada
- Adjuntar imagen (UI mock)

### Cementerio municipal
- Datos personales
- Tipo de solicitud (parcela, nicho, mantenimiento, consulta)
- Detalle de solicitud
- Adjuntar documentación (UI mock)

### Turnos y atención
- Datos personales
- Área de consulta (select)
- Fecha preferida
- Motivo de consulta

## Paleta de colores

**Verde institucional (primary)**: Inspirado en la vegetación misionera
- 50-900: Escala completa de verdes

**Terracota/Tierra (accent)**: Tonos cálidos regionales
- 50-900: Escala completa de terracota

**Grises**: Para textos y backgrounds neutros

## Tipografías

- **Manrope**: Display/títulos institucionales
- **Inter**: Cuerpo de texto, UI elements

## Estado actual

Este es un **frontend completo y funcional** listo para:
- ✅ Navegación y UX completa
- ✅ Formularios con validación visual
- ✅ Responsive design en todos los dispositivos
- ✅ Microinteracciones y transiciones
- ⏳ Pendiente: Integración con backend
- ⏳ Pendiente: Sistema de autenticación
- ⏳ Pendiente: Base de datos y APIs

## Próximos pasos sugeridos

1. **Backend**: Crear APIs para procesar formularios
2. **CMS**: Implementar panel admin para noticias
3. **Autenticación**: Sistema de login para vecinos
4. **Base de datos**: PostgreSQL o similar
5. **Deploy**: Vercel, Netlify o servidor propio
6. **SEO**: Optimización y sitemap
7. **Analytics**: Google Analytics o Plausible

## Personalización

Para adaptar el portal a otro municipio:

1. Cambiar nombre y datos en `Header.tsx`
2. Actualizar contenido en `HeroSection.tsx`
3. Modificar información en `MunicipalitySection.tsx`
4. Ajustar noticias en `NewsSection.tsx`
5. Actualizar atractivos turísticos en `TourismSection.tsx`
6. Cambiar datos de contacto en `ContactSection.tsx` y `Footer.tsx`
7. Modificar colores en `tailwind.config.js` si se desea

## Licencia

Este proyecto fue desarrollado como portal institucional para la Municipalidad de El Alcázar.

---

**Desarrollado con ❤️ para El Alcázar, Misiones**
