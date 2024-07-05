[TOC]
# Problemática

Discord enfrenta la necesidad urgente de optimizar la gestión de datos de usuarios y publicaciones en su plataforma. En la actualidad, se encuentran con serios desafíos en términos de escalabilidad y eficiencia al manejar grandes volúmenes de información. La base de datos actual no está diseñada para gestionar eficazmente las complejas relaciones entre usuarios, publicaciones y las etiquetas asociadas, lo que repercute negativamente en la velocidad de respuesta y, en consecuencia, en la experiencia del usuario.

Uno de los problemas más críticos es la lentitud en la recuperación de datos, que afecta tanto a usuarios individuales como a comunidades enteras al intentar acceder a mensajes y contenido histórico. Esto se debe, en parte, a la falta de una arquitectura de datos robusta que permita un acceso rápido y eficiente a la información almacenada.

Además, el diseño actual de la base de datos no facilita el escalado horizontal, una técnica esencial para distribuir la carga de trabajo entre múltiples servidores. Esta limitación se vuelve cada vez más problemática a medida que la plataforma experimenta un crecimiento continuo y sostenido en el número de usuarios y la cantidad de contenido generado. Sin un sistema de gestión de datos que pueda escalar eficazmente, Discord corre el riesgo de enfrentar tiempos de inactividad más frecuentes y una disminución en la calidad del servicio.

Para abordar estos desafíos, es fundamental que Discord adopte nuevas estrategias y tecnologías de gestión de datos. Esto podría incluir la implementación de bases de datos distribuidas, el uso de índices más eficientes y la optimización de consultas para mejorar el rendimiento general. También sería beneficioso considerar una revisión completa de la arquitectura de la base de datos, con el objetivo de garantizar que pueda soportar el crecimiento futuro y proporcionar una experiencia de usuario rápida y confiable.



## **Requisitos y Desafíos:**

1. **Gestión de Usuarios:** Necesidad de almacenar información detallada de cada usuario, incluyendo datos personales y preferencias de privacidad.

2. **Gestión de Publicaciones:** Cada publicación debe contener datos como autor, título, contenido y etiquetas. Se requiere una estructura que permita consultas eficientes y rápidas recuperaciones de datos basadas en diferentes criterios.

3. **Escalabilidad:** La base de datos debe poder escalar fácilmente a medida que aumenta el número de usuarios y publicaciones sin comprometer el rendimiento.

   


## **Objetivos de Diseño:**

- Implementar una base de datos MongoDB que sea flexible y capaz de manejar relaciones complejas entre entidades como usuarios y publicaciones.

- Optimizar consultas para mejorar la velocidad de recuperación de datos y la eficiencia operativa.

- Diseñar un esquema de datos que facilite la expansión y el mantenimiento a largo plazo del sistema.

  

## **Colección de Usuarios (`users`):**

- Cada usuario tiene un identificador único, nombre de usuario, nombre completo, correo electrónico, edad, ciudad de residencia, lista de amigos y fecha de registro.

  ```json
  {
        "_id": ObjectId("user1"),
        "username": "usuario1",
        "name": "Usuario Uno",
        "email": "usuario1@example.com",
        "age": 25,
        "city": "Ciudad A",
        "friends": [ObjectId("user2"), ObjectId("user3")],
        "createdAt": ISODate("2024-06-27T10:00:00Z")
    }
  ```

## **Colección de Publicaciones (`posts`):**

- Cada publicación tiene un identificador único, autor (referencia al usuario que la creó), título, contenido, etiquetas y fecha de creación.

  ```json
  {
      "_id": ObjectId("post1"),
      "author": ObjectId("user1"),
      "title": "Mi primera publicación",
      "content": "¡Hola amigos!",
      "tags": ["saludos", "primer post"],
      "createdAt": ISODate("2024-06-27T13:00:00Z")
  }
  ```



# Consultas

1. ##### **Obtener todos los usuarios:**

   ```javascript
   db.users.find({},{_id:0,username:1}).toArray()
   ```

2. ##### **Buscar un usuario por nombre de usuario:**

   ```javascript
   db.users.find({username: "montiel"},{_id:0,username:1}).toArray()
   ```

3. **Buscar publicaciones de un usuario específico:**

   ```javascript
   db.posts.find({author: "66884f5bbd394e3498498327"},{_id:0}).toArray()
   ```

4. **Obtener publicaciones por una etiqueta específica:**

   ```javascript
   db.posts.find({tags: "bucaramanga"},{_id:0}).toArray()
   ```

5. **Buscar usuarios mayores de 25 años:**

   ```javascript
   db.users.find({age:{$gt:25}},{_id:0}).toArray()
   ```

6. **Buscar usuarios que viven en una ciudad específica:**

   ```javascript
   db.users.find({ city: 'bucaramanga' },{_id:0}).toArray()
   ```

7. **Obtener publicaciones ordenadas por fecha de creación descendente:**

   ```javascript
   db.posts.find().sort({ "createdAt": -1 }).toArray()
   ```

8. **Contar el número total de usuarios:**

   ```javascript
   db.users.find().count()
   ```

9. **Buscar usuarios que tienen amigos en común:**

   ```javascript
   db.users.find({friends:"66884d25bd394e349849831f"},{_id:1}).toArray()
   ```

10. **Buscar usuarios que se registraron después de una fecha específica:**

    ```javascript
    db.users.find({"createdAt": { "$gt": new Date("2024-06-12") }},{_id:0}).toArray()
    
    ```

