[TOC]

# Problemática 

En el canal de noticias CNN, existe una creciente preocupación por la gestión de comentarios anónimos en su plataforma de noticias en línea. Aunque permitir comentarios enriquece la interacción con los lectores, la falta de verificación de identidad y la posibilidad de comentarios ofensivos o desinformativos plantean varios desafíos:



## Identificación de Usuarios Anónimos:

- Muchos comentarios son realizados por usuarios anónimos sin verificar, lo que dificulta la atribución de responsabilidad por comentarios difamatorios o inexactos.

## Calidad del Contenido:

- La falta de identificación puede llevar a una disminución en la calidad de los comentarios, con opiniones no fundamentadas o incluso ataques personales que afectan la reputación del canal.

## Gestión de Contenido Sensible:

- CNN debe asegurar que los comentarios no contengan contenido sensible o que promueva discursos de odio, lo cual puede comprometer la integridad editorial y generar controversias públicas.

## Experiencia del Usuario:

- Los lectores pueden sentirse desmotivados para participar si perciben un ambiente negativo o poco moderado en los comentarios, afectando la interacción y la fidelización de la audiencia.

 Para abordar esta problemática, CNN debe considerar implementar estrategias efectivas de verificación de identidad y moderación de comentarios, así como fomentar una comunidad en línea donde la discusión sea respetuosa y constructiva.



# Solución parcial

Se precisa diseñar un blog de noticias donde los usuarios registrados pueda publicar sus comentarios: 

• Cada autor tiene un nombre, un nombre de usuario, una cuenta de Twitter y una descripción. Además, de forma opcional, los usuarios pueden proporcionar como datos su dirección postal (calle, número, puerta, C.P., ciudad) o sus teléfonos de contacto (pueden tener varios). 

• Las noticias tienen un título, un cuerpo y una fecha de publicación. Son publicadas por un autor y pueden contener o no, una lista de tags. 

• Las noticias reciben comentarios, quedando registrado la persona que lo escribió, el comentario escrito y el momento en el que lo hizo.



 **Se recomienda explorar otras alternativas de solución o mejorar el diseño del diagrama propuesto.**

![](https://i.ibb.co/n78JF9n/RED.png)

## Consultas 

### 1. Consultas de los datos del usuario por nombre de usuario y por cuenta de Twitter: 

```javascript
db.User.find({},{_id:0,nike:1,account:1}).toArray()
```

### 2. Agrupación por código postal (contar el número de usuarios de cada C.P). 

```javascript
[
  {
    $project: {
      address : 1
    }
  },
  {
    $unwind: "$address"
  },
  {
    $project: {
      _id:0,
      "address.postalCode":1
    }
  },
  {
    $unwind: "$address.postalCode"
  },
  {
    $group: {
      _id:  "$address.postalCode",
      count: {$sum:1}
    }
  },
  {
    $project: {
      _id:0,
	    postalCode: "$_id",
      count:1
  }
  }
]
```

### 3. Consultas por número de teléfono. 

```javascript
  db.User.find({phone:{$gt:'+987654321'}},{_id:0,nike:1,account:1}).toArray()
```

### 4. Consultas de noticias publicadas por usuarios.

```javascript
[
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  }
]
```

### 5. 10 últimas noticias publicadas ordenadas por fecha (de más reciente a más antigua). 

 ```javascript
  db.new.find({},{_id:0,title:1,body:1,date:1}).sort({date:-1}).limit(10).toArray()
 ```

### 6. Número de comentarios por noticia, por día o por usuario.

```javascript
[
  {
    $unwind: "$Comments"
  },
  {
    $group: {
      _id: "$Comments.User",
      numeroDeComentarios: { $sum: 1 }
    }
  },
  {
    $sort: { numeroDeComentarios: -1 }
  }
]
```

### 7. Retornar al usuario con nombre de usuario “Frank_blog”. 
<!-- David Miller -->

```javascript
db.User.find({name:"David Miller"},{_id:0,}).toArray()
``` 
vacio

### 8. Retornar los usuarios llamados “Peter”. 
<!-- Daniel -->

```javascript
db.User.find({name:{ $regex: 'Daniel', $options: 'i' }},{_id:0,}).toArray()
``` 
Vacio 

### 9. Contar el número de usuarios con CP= “39005”. 
<!-- 67890 -->

```javascript
db.User.find({ address: { $elemMatch:{ postalCode: "39005" }}},{}).count()
```
vacio

### 10. Retornar a un usuario con número de teléfono: “111111111”. 
<!-- "+444444444" -->

```javascript
db.User.find({phone:{$eq:"+111111111"}},{}).toArray()
```

### 11. Retornar nombre_usuario y cuenta_twitter, sin _id, de usuarios con CP igual o mayor que “39005”.
<!-- 67890 -->

```javascript
db.User.find({address:{$elemMatch: {postalCode:'39005'}}},{_id:0,nike:1,account:1}).toArray()
```

### 12. Número de noticias publicadas por usuario. 

```javascript
[
  {
    $group: {
      _id: "$author",
      count: { $sum: 1 }
    }
  }
]
```

### 11. 10 últimas noticias publicadas.

```javascript
 db.new.find({},{}).sort({date:-1}).limit(10).toArray()
```

### 12. Noticias que no tienen el campo tag. 
<!-- tags -->

 ```javascript
  db.new.find({ tags: { $exists: false }},{}).toArray()
 ```

### 13. Noticias publicadas en un periodo de fechas. ¿Se podrían realizar consultas por año, mes y día sobre el campo de tipo ISOdate

```javascript
[
  {
    $addFields: {
      date: {
        $dateFromString: {
          dateString: "$date",
          format: "%Y-%m-%d"
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      date: 1
    }
  },
  {
    $match: {
      date: {
        $gte: new Date("2024-06-20"),
        $lte: new Date("2024-06-25")
      }
    }
  }
]
```