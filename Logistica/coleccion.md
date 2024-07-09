# Trabajo Logistica 

Creación de la base de datos En mongo partiendo de la imagen de SQL 'Normalizada'
  
  ![ImagenSQLNormalizada](https://github.com/OugMontiel/MongoDB/blob/main/Logistica/img/Captura%20de%20pantalla%202024-07-02%20171223.png)

Primera colección: Sucursales --Naranja

```json
{
  "_id": ObjectId("ID único de la Sucursal"),  // ID único generado por MongoDB para identificar la sucursal
  "codigoSucursal": "Código de la Sucursal",  // Código de la sucursal
  "nombreSucursal": "Nombre de la Sucursal",  // Nombre de la sucursal
  "direccion": {
    "direccion": "Dirección de la Sucursal",
    "ciudad_pais":ObjectId("ID único de Ciudad pais ")
  } 
}
```

Segunda Colección : Cliente  -- Azul

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
  "direccion": {
    "direccion": "Dirección del Cliente",
    "ciudad_pais":ObjectId("ID único de Ciudad pais ")
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
  "ubicacion": ObjectId("ID único de la Sucursal")  // Ubicación actual del vehículo o sucursal de destino
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
  "direccion": {
    "direccion": "Dirección del Empleado",
    "ciudad_pais":ObjectId("ID único de Ciudad pais ")
  },
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
    "estado_Envio": [
        {
            "estado": "En tránsito",  // Estado del envío (recibido, en tránsito, entregado, retenido en aduana)
            "ubicacion": {
                "latitud": 37.7749,
                "longitud": -122.4194
            },  // Coordenadas
            "fecha_hora": ISODate("2023-07-04T12:00:00Z")  // Fecha y hora del registro del estado
        }
    ],
    "fecha_envio": ISODate("2023-07-04T10:00:00Z"),  // Fecha del envío
    "ruta_id": ObjectId("ID de la Ruta")  // ID de la ruta
}
```

Septima Coleccion: Paquetes -- Amarillo

```json 
 {
   "_id": ObjectId("ID único del paquete"),  // ID único para el paquete
    "peso": "Peso en kg del artículo",  // en kg
    "dimensiones": ["altura", "ancho", "profundidad"],  // en cm
    "contenido": "Descripción del Artículo",
    "valor_declarado": 100000,  // en COP
   "Clasificacion": "Express"  // Tipo de servicio (nacional, internacional, exprés, estándar)
}
```

Octaba Coleccion: Direcciones -- Requsito escrito 

```json
{
"_id":ObjectId("ID único de Ciudad pais "),
  "ciudad": {
    "codigoCiudad": "Código de la Ciudad",  // Código de la ciudad
    "nombreCiudad": "Nombre de la Ciudad",  // Nombre de la ciudad
  },
  "pais": {
      "codigoPais": "Código del País",  // Código del país
      "nombrePais": "Nombre del País"  // Nombre del país
    }  
}
```
