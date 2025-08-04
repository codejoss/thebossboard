# 📸 Ejemplo de Subida de Imagen

## Proceso Completo

### 1. Usuario Selecciona Imagen

**Archivo original**: `Mi Foto de Perfil.jpg` (2.3 MB, formato JPG)

### 2. Validación Automática

✅ **Tipo de archivo**: JPG (válido)
✅ **Tamaño**: 2.3 MB < 5 MB (válido)
✅ **Vista previa**: Se muestra automáticamente

### 3. Generación del Nombre de Archivo

**Nombre original**: `Mi Foto de Perfil.jpg`
**Nombre generado**: `mi-foto-de-perfil.jpg`

**Proceso de normalización**:
1. Convertir a minúsculas: `mi foto de perfil.jpg`
2. Remover acentos: `mi foto de perfil.jpg`
3. Reemplazar espacios con guiones: `mi-foto-de-perfil.jpg`
4. Limpiar caracteres especiales: `mi-foto-de-perfil.jpg`

### 4. Datos Generados en el JSON

```json
{
  "nombre": "María González López",
  "edad": 29,
  "ciudad_pais": "Guadalajara, México",
  "profesion": "Diseñadora Gráfica / Emprendedora",
  "proposito_sueno": "Crear una agencia de diseño que empodere a mujeres emprendedoras...",
  "motivacion": "Quiero conectar con otras mujeres emprendedoras...",
  "red_social": "https://www.instagram.com/maria_designs",
  "mensaje": "Cada mujer tiene una historia única que merece ser contada visualmente...",
  "foto": "./assets/images/profiles/maria-gonzalez-lopez.jpg",
  "autorizado": false
}
```

### 5. Instrucciones en Consola

```
📝 Nuevo miembro registrado: {objeto completo}

📁 Procesando archivo de imagen: maria-gonzalez-lopez.jpg
📋 Instrucciones para guardar la imagen:
1. Guarda el archivo "Mi Foto de Perfil.jpg" como "maria-gonzalez-lopez.jpg"
2. Colócalo en la carpeta: assets/images/profiles/
3. Asegúrate de que el archivo sea accesible desde la web

🎯 Datos del nuevo miembro para agregar al JSON:
{objeto JSON completo}

📋 Instrucciones para agregar manualmente al archivo community.json:
1. Abre el archivo assets/data/community.json
2. Agrega el siguiente objeto al final del array (antes del corchete de cierre):
{objeto JSON completo}
3. Asegúrate de agregar una coma después del objeto anterior
4. El miembro aparecerá con autorizado: false hasta que lo cambies a true
```

## Ejemplos de Normalización de Nombres

| Nombre Original | Nombre Generado |
|----------------|-----------------|
| `Ana Karen González.jpg` | `ana-karen-gonzalez.jpg` |
| `María José López-Pérez.png` | `maria-jose-lopez-perez.png` |
| `Carmen M. Quezada.jpeg` | `carmen-m-quezada.jpeg` |
| `Pamela Pérez (Foto).gif` | `pamela-perez-foto.gif` |
| `Elvira Hernández_2024.jpg` | `elvira-hernandez-2024.jpg` |

## Validaciones Implementadas

### ✅ Tipos de Archivo Aceptados
- `image/jpeg`
- `image/jpg`
- `image/png`
- `image/gif`

### ✅ Límites de Tamaño
- **Máximo**: 5 MB
- **Mínimo**: 1 KB

### ✅ Validaciones de Formato
- Solo caracteres alfanuméricos, espacios y guiones en nombres
- Extensión de archivo preservada
- Nombres normalizados para compatibilidad web

## Flujo de Trabajo Completo

1. **Usuario llena formulario** → Incluye selección de imagen
2. **Validación automática** → Tipo, tamaño y formato
3. **Vista previa** → Se muestra la imagen seleccionada
4. **Generación de nombre** → Normalización automática
5. **Envío de datos** → Procesamiento del formulario
6. **Instrucciones en consola** → Para guardar imagen y JSON
7. **Agregado manual** → Imagen y datos al proyecto
8. **Autorización** → Cambio de `autorizado: false` a `true`

## Beneficios del Sistema

- **Consistencia**: Nombres de archivo estandarizados
- **Compatibilidad**: Funciona en todos los sistemas web
- **Organización**: Estructura clara de archivos
- **Validación**: Prevención de errores de formato
- **Facilidad**: Proceso automatizado de normalización 