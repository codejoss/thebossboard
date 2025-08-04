# The Boss Board

Una aplicación web que muestra la comunidad de mujeres emprendedoras de The Boss Room VIP.

## 🚀 Características

- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Interfaz Moderna**: Utiliza Tailwind CSS para un diseño elegante
- **Modal Interactivo**: Muestra detalles completos de cada miembro
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Arquitectura Modular**: Código organizado en módulos reutilizables

## 📁 Estructura del Proyecto

```
thebossboard/
├── index.html                 # Página principal
├── registro.html              # Formulario de registro
├── assets/
│   ├── css/
│   │   └── styles.css        # Estilos personalizados
│   ├── js/
│   │   ├── app.js           # Archivo principal de la aplicación
│   │   ├── registro.js      # Manejo del formulario de registro
│   │   └── modules/
│   │       ├── DataManager.js      # Manejo de datos
│   │       ├── CardBuilder.js      # Construcción de tarjetas
│   │       ├── ModalManager.js     # Gestión del modal
│   │       ├── CommunityApp.js     # Aplicación principal
│   │       └── RegistrationManager.js # Gestión del registro
│   ├── data/
│   │   └── community.json      # Datos de la comunidad
│   └── images/
│       ├── logo/
│       │   └── BossBoard-white.png # Logo de la aplicación
│       └── profiles/               # Imágenes de perfil
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos y animaciones
- **JavaScript ES6+**: Funcionalidad interactiva
- **Tailwind CSS**: Framework de utilidades CSS
- **Módulos ES6**: Organización del código

## 🚀 Cómo Usar

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. Explora la comunidad haciendo clic en las tarjetas
4. Usa el modal para ver detalles completos de cada miembro
5. **Registro**: Haz clic en "¡Únete a la Comunidad!" para registrar nuevos miembros
6. **Test del filtro**: Abre `test-filter.html` para verificar la funcionalidad de autorización

## 📝 Funcionalidades

### Tarjetas de Miembros
- Muestra información básica de cada miembro
- Enlaces directos a redes sociales
- Efectos hover atractivos

### Modal de Detalles
- Información completa del miembro
- Foto de perfil en alta resolución
- Propósito, motivación y mensaje personal
- Enlace a perfil social

### Navegación
- Cerrar modal con X, clic fuera o tecla ESC
- Scroll suave y responsive
- Estados de carga y error

### Sistema de Autorización
- Solo se muestran miembros con `"autorizado": true`
- Miembros pendientes (`"autorizado": false`) no aparecen en la aplicación
- Logging en consola con estadísticas de autorización

### Formulario de Registro
- Formulario completo para nuevos miembros en `registro.html`
- Validación de campos obligatorios y formatos
- Subida de archivos de imagen con vista previa
- Generación automática de nombres de archivo normalizados
- Los nuevos registros se agregan con `"autorizado": false`
- Instrucciones automáticas en consola para agregar al JSON

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `assets/css/styles.css`:
- Color principal: `#8d766c`
- Color secundario: `#968279`
- Gradientes y efectos personalizables

### Datos
Para agregar nuevos miembros, edita `assets/data/community.json`:
```json
{
  "nombre": "Nombre Apellido",
  "edad": 30,
  "ciudad_pais": "Ciudad, País",
  "profesion": "Profesión",
  "proposito_sueno": "Descripción del propósito...",
  "motivacion": "Motivación para unirse...",
  "red_social": "https://instagram.com/usuario",
  "mensaje": "Mensaje personal...",
  "foto": "./assets/images/profiles/foto.jpg",
  "autorizado": true
}
```

**Campo `autorizado`:**
- `true`: El miembro se mostrará en la aplicación
- `false`: El miembro NO se mostrará (pendiente de autorización)

## 🔧 Desarrollo

### Estructura Modular
El código está organizado en módulos ES6 para mejor mantenibilidad:

- **DataManager**: Maneja la carga y gestión de datos
- **CardBuilder**: Construye y renderiza las tarjetas
- **ModalManager**: Gestiona la funcionalidad del modal
- **CommunityApp**: Coordina todos los módulos

### Mejores Prácticas
- Código modular y reutilizable
- Separación de responsabilidades
- Manejo de errores robusto
- Comentarios descriptivos
- Nombres de variables y funciones claros

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

## 📄 Licencia

Este proyecto es parte de The Boss Room VIP Community.

---

**Desarrollado con ❤️ para empoderar mujeres emprendedoras** 