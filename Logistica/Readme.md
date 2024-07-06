# Trabajo Logistica 

Creación de la base de datos En mongo partiendo de la imagen de SQL 'Normalizada'

Primera colección: Sucursales --Naranja

```json
{
  "_id": ObjectId("ID único de la Sucursal"),  // ID único generado por MongoDB para identificar la sucursal
  "codigoSucursal": "Código de la Sucursal",  // Código de la sucursal
  "nombreSucursal": "Nombre de la Sucursal",  // Nombre de la sucursal
  "direccion": {  // Dirección de la sucursal
    "direccion": "Dirección de la Sucursal",
    "ciudad": {
      "codigoCiudad": "Código de la Ciudad",  // Código de la ciudad
      "nombreCiudad": "Nombre de la Ciudad",  // Nombre de la ciudad
      "pais": {
        "codigoPais": "Código del País",  // Código del país
        "nombrePais": "Nombre del País"  // Nombre del país
      }
    }
  }
}
```
Segunda Colección : Cliente  -- Azul

![image-20240702155524925](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20240702155524925.png)

```json
{
  "_id": ObjectId("ID único del Cliente"),  // ID único generado por MongoDB para identificar al cliente
  "nombre": "Nombre del Cliente",  // Nombre completo del cliente
  "email": "email@ejemplo.com",  // Correo electrónico del cliente
  "telefonos": [  // Array de objetos que contiene la información de contacto del cliente
    {
      "numero": "123456789",  // Número de teléfono del cliente
      "codigoPais": "Código del País",  // Código del país del número de teléfono
      "uso": "casa"  // Uso del número de teléfono (e.g., casa, trabajo, móvil)
    }
  ],
  "direccion": {  // Dirección del cliente
    "direccion": "Dirección del Cliente",
    "ciudad": {
      "codigoCiudad": "Código de la Ciudad",  // Código de la ciudad
      "nombreCiudad": "Nombre de la Ciudad",  // Nombre de la ciudad
      "pais": {
        "codigoPais": "Código del País",  // Código del país
        "nombrePais": "Nombre del País"  // Nombre del país
      }
    }
  }
}
```
Tercer Coleccion: Vehiculos  -- Amarillo 

```json
{
  "_id": ObjectId("ID único del vehículo"),  // ID único generado por MongoDB para identificar el vehículo
  "placa": "ABC123",  // Placa del vehículo
  "marca": "Marca del carro",  // Marca del vehículo
  "modelo": "Año del carro",  // Año de fabricación o modelo del vehículo
  "capacidadDeCarga": "Peso en kg",  // Capacidad de carga del vehículo en kilogramos
  "ubicacion": "Sucursal en la que está o a la que se dirige"  // Ubicación actual del vehículo o sucursal de destino
}
```

Cuerto Coleccion: Empleados  -- Rojo

```json
{
  "_id": ObjectId("ID único del Empleado"),  // ID único generado por MongoDB para identificar al empleado
  "nombre": "Nombre del Empleado",  // Nombre completo del empleado
  "telefonos": [  // Array de objetos que contiene la información de contacto del empleado
    {
      "numero": "123456789",  // Número de teléfono del empleado
      "codigoPais": "Código del País",  // Código del país del número de teléfono
      "uso": "casa"  // Uso del número de teléfono (e.g., casa, trabajo, móvil)
    }
  ],
  "rol": "Auxiliar"  // Rol del empleado en la organización (e.g., Auxiliar, Conductor)
}


```

Quinta Coleccion: Rutas -- Verde

```json
{
  "_id": ObjectId("ID único del Ruta"), // ID único para identificar la ruta
  "descripcionRuta": "Descripción de la Ruta",  // Descripción detallada de la ruta
  "sucursal": ObjectId("ID Sucursal"),  // Código de la sucursal 
  "auxiliar": [
    ObjectId("ID Empleado"),  // Id  del auxiliar asociado a la ruta
    ObjectId("ID Empleado")   // Id  del auxiliar asociado a la ruta
  ],
  "placasVehiculo": "Placa del Vehículo",  // Placa del vehículo que realiza la ruta
  "conductor": ObjectId("ID Empleado")   // Id  del conductor encargado de la ruta
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