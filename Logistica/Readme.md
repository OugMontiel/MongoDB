# Trabajo Logistica 

![image-20240702155857180](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20240702155857180.png)

Creación de la base de datos En mongo partiendo de la imagen de SQL 'Normalizada'

Primera colección: Sucursales 

![image-20240702150709491](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20240702150709491.png)

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
Segunda Colección : Cliente 

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
Tercer Coleccion: Vehiculos 

```json
{
  "placa": "placa",
  "marca": "marca del carro",
  "modelo": "año del carro",
  "capacidadDeCarga": "pesos en kg",
  "ubicacion": "Sucursal En la que esta o a la que se dirigue"
}

```

Cuerto Coleccion: Empleados 

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
  "rol": "Auxiliar" 
}
-- Rol : auxiliar, conductor 

```

Quinta Coleccion: Rutas

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

Sexta Colección: Envíos 

```json
{
    envio: id 
    cliente : id 
    
}
```

