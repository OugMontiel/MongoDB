# Trabajo Logistica 

Creación de la base de datos En mongo partiendo de la imagen de SQL 'Normalizada'

Primera colección: Sucursales --Naranja

```json
{
  "codigoSucursal": "codigo de la Sucursal",
  "nombreSucursal": "Nombre de la Sucursal",
  "Direccion": {
    "direccion": "Dirección de la Sucursal",
    "Ciudad": {
      "codigoCiudad": "Código de la Ciudad",
      "nombreCiudad": "Nombre de la Ciudad",
      "Pais": {
        "CodigoPais": "Código del País",
        "nombrePais": "Nombre del País"
      }
    }
  }
}

```
Segunda Colección : Cliente  -- Azul

![image-20240702155524925](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20240702155524925.png)

```json
{
  "id":"Id del cliente "
  "nombre": "Nombre del Cliente",
  "email": "email@ejemplo.com",
  "telefonos": [
    {
      "numero": "123456789",
      "codigoPais": "Código del País",
      "uso": "casa"
    }
  ],
  "direccion": {
    "direccion": "Dirección del Cliente",
    "ciudad": {
      "codigoCiudad": "Código de la Ciudad",
      "nombreCiudad": "Nombre de la Ciudad",
      "pais": {
        "codigoPais": "Código del País",
        "nombrePais": "Nombre del País"
      }
    }
  }
}


```
Tercer Coleccion: Vehiculos  -- Amarillo 

```json
{
  "placa": "placa",
  "marca": "marca del carro",
  "modelo": "año del carro",
  "capacidadDeCarga": "pesos en kg",
  "ubicacion": "Sucursal En la que esta o a la que se dirigue"
}

```

Cuerto Coleccion: Empleados  -- Rojo

```json
{
  "nombre": "Nombre del Empleado",
  "telefonos": [
    {
      "numero": "123456789",
      "codigoPais": "Código del País",
      "uso": "casa"
    }
  ],
  "rol": "Auxiliar" // Rol : auxiliar, conductor 
}


```

Quinta Coleccion: Rutas -- Verde

```json
{
  "ruta": "ID de la Ruta",
  "descripcionRuta": "Descripción de la Ruta",
  "sucursalP": "codigo de la Sucursal",
  "auxiliar": [
    "Nombre del Auxiliar 1",
    "Nombre del Auxiliar 2"
  ],
  "placasVehiculo": "Placa del Vehículo",
  "conductor": "Nombre del Conductor"
}

```

Sexta Colección: Envíos -- Morado

```json
{
    "_id": ObjectId("ID único para el envío"),  // ID único para el envío
    "cliente_id": ObjectId("ID del cliente"),  // ID del cliente
    "paquete_id": [
        ObjectId("ID del paquete 1"),
        ObjectId("ID del paquete 2")
    ],  // IDs de los paquetes
    "sucursal_destino": ObjectId("ID Sucursal"),  // ID de la sucursal de destino
    "sucursal_origen": ObjectId("ID Sucursal"),  // ID de la sucursal de origen
    "estado": [
        {
            "estado": "En tránsito",  // Estado del envío
            "ubicacion": {
                "latitud": 37.7749,
                "longitud": -122.4194
            },  // Coordenadas
            "fecha_hora": ISODate("2023-07-04T12:00:00Z")  // Fecha y hora del registro del estado
        }
    ],
    "fecha_envio": ISODate("2023-07-04T10:00:00Z"),  // Fecha del envío
    "ruta_id": ObjectId("ID de la Ruta"),  // ID de la ruta
    "tipo_servicio": "Express"  // Tipo de servicio
}

```

Septima Coleccion: Paquetes -- Amarillo 
```json 
 {
    "_id": ObjectId("ID único del paquete"),  // ID único para el paquete
    "peso": "Peso en kg del artículo",  // en kg
    "dimensiones": ["altura", "ancho", "profundidad"],  // en cm
    "contenido": "Descripción del Artículo",
    "valor_declarado": 100000  // en COP
}
```