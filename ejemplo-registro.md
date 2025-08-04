# 📝 Ejemplo de Registro Completo

## Formulario Llenado

Cuando alguien llena el formulario de registro con estos datos:

- **Nombre**: María González López
- **Edad**: 29
- **Ciudad y País**: Guadalajara, México
- **Profesión**: Diseñadora Gráfica / Emprendedora
- **Propósito/Sueño**: Crear una agencia de diseño que empodere a mujeres emprendedoras a través de branding auténtico y estrategias visuales que reflejen su esencia y propósito.
- **Motivación**: Quiero conectar con otras mujeres emprendedoras, aprender de sus experiencias y crecer junto a una comunidad que apoye el desarrollo profesional femenino.
- **Red Social**: https://www.instagram.com/maria_designs
- **Mensaje**: Cada mujer tiene una historia única que merece ser contada visualmente. Juntas podemos crear un mundo donde el emprendimiento femenino brille con autenticidad y propósito.
- **Foto**: https://ejemplo.com/maria-gonzalez.jpg

## Datos Generados

El sistema automáticamente genera este objeto JSON:

```json
{
  "nombre": "María González López",
  "edad": 29,
  "ciudad_pais": "Guadalajara, México",
  "profesion": "Diseñadora Gráfica / Emprendedora",
  "proposito_sueno": "Crear una agencia de diseño que empodere a mujeres emprendedoras a través de branding auténtico y estrategias visuales que reflejen su esencia y propósito.",
  "motivacion": "Quiero conectar con otras mujeres emprendedoras, aprender de sus experiencias y crecer junto a una comunidad que apoye el desarrollo profesional femenino.",
  "red_social": "https://www.instagram.com/maria_designs",
  "mensaje": "Cada mujer tiene una historia única que merece ser contada visualmente. Juntas podemos crear un mundo donde el emprendimiento femenino brille con autenticidad y propósito.",
  "foto": "https://ejemplo.com/maria-gonzalez.jpg",
  "autorizado": false
}
```

## Instrucciones en Consola

El sistema muestra estas instrucciones en la consola del navegador:

```
📝 Nuevo miembro registrado: {objeto completo}

🎯 Datos del nuevo miembro para agregar al JSON:
{
  "nombre": "María González López",
  "edad": 29,
  "ciudad_pais": "Guadalajara, México",
  "profesion": "Diseñadora Gráfica / Emprendedora",
  "proposito_sueno": "Crear una agencia de diseño que empodere a mujeres emprendedoras a través de branding auténtico y estrategias visuales que reflejen su esencia y propósito.",
  "motivacion": "Quiero conectar con otras mujeres emprendedoras, aprender de sus experiencias y crecer junto a una comunidad que apoye el desarrollo profesional femenino.",
  "red_social": "https://www.instagram.com/maria_designs",
  "mensaje": "Cada mujer tiene una historia única que merece ser contada visualmente. Juntas podemos crear un mundo donde el emprendimiento femenino brille con autenticidad y propósito.",
  "foto": "https://ejemplo.com/maria-gonzalez.jpg",
  "autorizado": false
}

📋 Instrucciones para agregar manualmente al archivo community.json:
1. Abre el archivo assets/data/community.json
2. Agrega el siguiente objeto al final del array (antes del corchete de cierre):
{objeto completo}
3. Asegúrate de agregar una coma después del objeto anterior
```

## Proceso de Autorización

1. **Registro**: El miembro se registra y aparece con `"autorizado": false`
2. **Revisión**: El administrador revisa el perfil y la información
3. **Autorización**: Cambia `"autorizado": false` a `"autorizado": true`
4. **Visualización**: El miembro aparece automáticamente en la comunidad

## Validaciones del Formulario

- ✅ Todos los campos son obligatorios
- ✅ La edad debe estar entre 18 y 100 años
- ✅ Las URLs deben tener formato válido
- ✅ Los campos de texto no pueden estar vacíos
- ✅ Mensajes de error claros y específicos 