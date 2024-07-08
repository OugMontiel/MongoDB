####  Insertar datos en la colección de direcciones
``` javascript
db.direcciones.insertMany([
  {
    "ciudad": {
      "codigoCiudad": "601",
      "nombreCiudad": "Bogotá",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "602",
      "nombreCiudad": "Medellín",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "603",
      "nombreCiudad": "Cali",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "604",
      "nombreCiudad": "Barranquilla",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "605",
      "nombreCiudad": "Cartagena",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "606",
      "nombreCiudad": "Bucaramanga",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "607",
      "nombreCiudad": "Pereira",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "608",
      "nombreCiudad": "Santa Marta",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "609",
      "nombreCiudad": "Cúcuta",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "610",
      "nombreCiudad": "Ibagué",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "611",
      "nombreCiudad": "Manizales",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "612",
      "nombreCiudad": "Pasto",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "613",
      "nombreCiudad": "Montería",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "614",
      "nombreCiudad": "Villavicencio",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "615",
      "nombreCiudad": "Neiva",
    },
    "pais": {
      "codigoPais": "57",
      "nombrePais": "Colombia"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "301",
      "nombreCiudad": "São Paulo",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "302",
      "nombreCiudad": "Rio de Janeiro",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "303",
      "nombreCiudad": "Belo Horizonte",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "304",
      "nombreCiudad": "Brasília",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "305",
      "nombreCiudad": "Curitiba",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "306",
      "nombreCiudad": "Porto Alegre",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "307",
      "nombreCiudad": "Salvador",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "308",
      "nombreCiudad": "Fortaleza",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "309",
      "nombreCiudad": "Recife",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "310",
      "nombreCiudad": "Manaus",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "311",
      "nombreCiudad": "Goiânia",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "312",
      "nombreCiudad": "Belém",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "313",
      "nombreCiudad": "Florianópolis",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "314",
      "nombreCiudad": "Campo Grande",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  },
  {
    "ciudad": {
      "codigoCiudad": "315",
      "nombreCiudad": "Natal",
    },
    "pais": {
      "codigoPais": "55",
      "nombrePais": "Brasil"
    }
  }
]);
```
#### Insertar datos en las Coleccion Sucursales
```javascript
db.sucursales.insertMany([
  {
    "codigoSucursal": "SC001",
    "nombreSucursal": "Sucursal Centro",
    "direccion": {
      "direccion": "Calle 10 #5-20",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC002",
    "nombreSucursal": "Sucursal Norte",
    "direccion": {
      "direccion": "Avenida 15 #30-45",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC003",
    "nombreSucursal": "Sucursal Sur",
    "direccion": {
      "direccion": "Carrera 50 #80-15",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC004",
    "nombreSucursal": "Sucursal Este",
    "direccion": {
      "direccion": "Calle 100 #20-10",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC005",
    "nombreSucursal": "Sucursal Oeste",
    "direccion": {
      "direccion": "Avenida 68 #70-30",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC006",
    "nombreSucursal": "Sucursal Industrial",
    "direccion": {
      "direccion": "Carrera 60 #25-50",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC007",
    "nombreSucursal": "Sucursal Comercial",
    "direccion": {
      "direccion": "Avenida 68 #45-20",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC008",
    "nombreSucursal": "Sucursal Financiera",
    "direccion": {
      "direccion": "Calle 72 #10-25",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC009",
    "nombreSucursal": "Sucursal Universitaria",
    "direccion": {
      "direccion": "Carrera 15 #65-30",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "codigoSucursal": "SC010",
    "nombreSucursal": "Sucursal Residencial",
    "direccion": {
      "direccion": "Calle 40 #30-10",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  }
]);

```
#### Insertar datos en las Coleccion Clientes
```javascript
db.clientes.insertMany([
  {
    "nombre": "Juan Pérez",
    "email": "juan.perez@example.com",
    "telefonos": [
      {
        "numero": "3012345678",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Calle 123 #45-67",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Maria García",
    "email": "maria.garcia@example.com",
    "telefonos": [
      {
        "numero": "3023456789",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Carrera 10 #20-30",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Pedro López",
    "email": "pedro.lopez@example.com",
    "telefonos": [
      {
        "numero": "3034567890",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Avenida 50 #60-70",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Luisa Fernández",
    "email": "luisa.fernandez@example.com",
    "telefonos": [
      {
        "numero": "3045678901",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Calle 70 #80-90",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Carlos Martínez",
    "email": "carlos.martinez@example.com",
    "telefonos": [
      {
        "numero": "3056789012",
        "codigoPais": "+57",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Carrera 5 #15-25",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Ana Torres",
    "email": "ana.torres@example.com",
    "telefonos": [
      {
        "numero": "3067890123",
        "codigoPais": "+57",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Avenida 40 #50-60",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "David Ramírez",
    "email": "david.ramirez@example.com",
    "telefonos": [
      {
        "numero": "3078901234",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Calle 25 #35-45",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Laura Castillo",
    "email": "laura.castillo@example.com",
    "telefonos": [
      {
        "numero": "3089012345",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Carrera 20 #30-40",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Andrés Mendoza",
    "email": "andres.mendoza@example.com",
    "telefonos": [
      {
        "numero": "3090123456",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Avenida 60 #70-80",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Sofía Morales",
    "email": "sofia.morales@example.com",
    "telefonos": [
      {
        "numero": "3101234567",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Calle 90 #100-110",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "João Silva",
    "email": "joao.silva@example.com",
    "telefonos": [
      {
        "numero": "21987654321",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Rua das Flores, 123",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Maria Oliveira",
    "email": "maria.oliveira@example.com",
    "telefonos": [
      {
        "numero": "31987654321",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Avenida Brasil, 456",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Pedro Santos",
    "email": "pedro.santos@example.com",
    "telefonos": [
      {
        "numero": "21987654322",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Rua do Mercado, 789",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Ana Costa",
    "email": "ana.costa@example.com",
    "telefonos": [
      {
        "numero": "31987654322",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Avenida Paulista, 101",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Carlos Pereira",
    "email": "carlos.pereira@example.com",
    "telefonos": [
      {
        "numero": "21987654323",
        "codigoPais": "+55",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Rua do Ouro, 202",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Julia Almeida",
    "email": "julia.almeida@example.com",
    "telefonos": [
      {
        "numero": "31987654323",
        "codigoPais": "+55",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Avenida Atlântica, 303",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Roberto Lima",
    "email": "roberto.lima@example.com",
    "telefonos": [
      {
        "numero": "21987654324",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Rua do Sol, 404",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Marina Ribeiro",
    "email": "marina.ribeiro@example.com",
    "telefonos": [
      {
        "numero": "31987654324",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Avenida das Américas, 505",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Fernando Gomes",
    "email": "fernando.gomes@example.com",
    "telefonos": [
      {
        "numero": "21987654325",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Rua da Praia, 606",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Carla Souza",
    "email": "carla.souza@example.com",
    "telefonos": [
      {
        "numero": "31987654325",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Avenida Independência, 707",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    }
  },
  {
    "nombre": "Alice Johnson",
    "telefonos": [
      {
        "numero": "441234567890",
        "codigoPais": "+44",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "123 London St",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Carlos Mendoza",
    "telefonos": [
      {
        "numero": "523331234567",
        "codigoPais": "+52",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "456 Guadalajara Av",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Emma Brown",
    "telefonos": [
      {
        "numero": "3312345678",
        "codigoPais": "+1",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "789 New York Blvd",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Sophia Lee",
    "telefonos": [
      {
        "numero": "821012345678",
        "codigoPais": "+82",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "101 Seoul Rd",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Oliver Davis",
    "telefonos": [
      {
        "numero": "61412345678",
        "codigoPais": "+61",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "102 Sydney St",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Isabella Martinez",
    "telefonos": [
      {
        "numero": "34912345678",
        "codigoPais": "+34",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "103 Madrid Av",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Liam Wilson",
    "telefonos": [
      {
        "numero": "496912345678",
        "codigoPais": "+49",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "104 Berlin St",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Mia Garcia",
    "telefonos": [
      {
        "numero": "558112345678",
        "codigoPais": "+55",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "105 São Paulo Rd",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Noah Robinson",
    "telefonos": [
      {
        "numero": "3312345678",
        "codigoPais": "+1",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "106 Chicago Blvd",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Ava Hernandez",
    "telefonos": [
      {
        "numero": "541123456789",
        "codigoPais": "+54",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "107 Buenos Aires Av",
      "ciudad_pais": ObjectId()  // ID único de Ciudad pais
    },
    "rol": "Conductor"
  }
]);


```
#### Insertar datos en las Coleccion Empleados
```javascript
db.empleados.insertMany([
  {
    "nombre": "Juan Pérez",
    "telefonos": [
      {
        "numero": "123456789",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Calle 123, Bogotá",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "María González",
    "telefonos": [
      {
        "numero": "234567890",
        "codigoPais": "+57",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Carrera 456, Medellín",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Pedro López",
    "telefonos": [
      {
        "numero": "345678901",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Avenida 789, Cali",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Ana Martínez",
    "telefonos": [
      {
        "numero": "456789012",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Calle Principal 456, Barranquilla",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Luis Rodríguez",
    "telefonos": [
      {
        "numero": "567890123",
        "codigoPais": "+57",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Carrera 789, Cartagena",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Laura Sánchez",
    "telefonos": [
      {
        "numero": "678901234",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Avenida Principal 789, Bucaramanga",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Diego Ramírez",
    "telefonos": [
      {
        "numero": "789012345",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Calle Secundaria 123, Pereira",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Carolina Gómez",
    "telefonos": [
      {
        "numero": "890123456",
        "codigoPais": "+57",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Carrera 456, Cúcuta",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Jorge Hernández",
    "telefonos": [
      {
        "numero": "901234567",
        "codigoPais": "+57",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Avenida 789, Manizales",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Camila Vargas",
    "telefonos": [
      {
        "numero": "012345678",
        "codigoPais": "+57",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Calle Principal 456, Armenia",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Carlos da Silva",
    "telefonos": [
      {
        "numero": "987654321",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Rua Principal 123, São Paulo",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Ana Souza",
    "telefonos": [
      {
        "numero": "876543210",
        "codigoPais": "+55",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Avenida Secundaria 456, Rio de Janeiro",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Paulo Santos",
    "telefonos": [
      {
        "numero": "765432109",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Rua Principal 789, Salvador",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Mariana Oliveira",
    "telefonos": [
      {
        "numero": "654321098",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Avenida Principal 123, Brasília",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Fernando Lima",
    "telefonos": [
      {
        "numero": "543210987",
        "codigoPais": "+55",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Rua Secundaria 456, Fortaleza",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Luiza Costa",
    "telefonos": [
      {
        "numero": "432109876",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Avenida Principal 789, Belo Horizonte",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Ricardo Pereira",
    "telefonos": [
      {
        "numero": "321098765",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Rua Secundaria 123, Recife",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Juliana Fernandes",
    "telefonos": [
      {
        "numero": "210987654",
        "codigoPais": "+55",
        "uso": "trabajo"
      }
    ],
    "direccion": {
      "direccion": "Avenida Principal 456, Curitiba",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Conductor"
  },
  {
    "nombre": "Gabriel Silva",
    "telefonos": [
      {
        "numero": "109876543",
        "codigoPais": "+55",
        "uso": "móvil"
      }
    ],
    "direccion": {
      "direccion": "Rua Principal 789, Porto Alegre",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Auxiliar"
  },
  {
    "nombre": "Amanda Santos",
    "telefonos": [
      {
        "numero": "098765432",
        "codigoPais": "+55",
        "uso": "casa"
      }
    ],
    "direccion": {
      "direccion": "Avenida Secundaria 123, Manaus",
      "ciudad_pais": ObjectId("ID único de Ciudad pais")  // Inserta el ID único de la ciudad y país correspondiente en Brasil
    },
    "rol": "Conductor"
  }
]);

```
#### Insertar datos en las Coleccion Vehículos
```javascript
db.vehiculos.insertMany([
  {
    
    "placa": "HHL164",
      "marca": "Toyota",
      "modelo": "2022",
      "capacidadDeCarga":1000,
      "ubicacion": ObjectId("ID de la Sucursal correspondiente")
  },
  {

    "placa": "XYZ789",
      "marca": "Ford",
      "modelo": "2020",
      "capacidadDeCarga":1200,
      "ubicacion": ObjectId("ID de la Sucursal correspondiente")
  },
  {
    "placa": "ABC133",
    "marca": "Toyota",
    "modelo": "2022",
    "capacidadDeCarga":1500 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "DEF456",
    "marca": "Ford",
    "modelo": "2020",
    "capacidadDeCarga":1800 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "GHI789",
    "marca": "Chevrolet",
    "modelo": "2019",
    "capacidadDeCarga":1600 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "JKL012",
    "marca": "Hyundai",
    "modelo": "2021",
    "capacidadDeCarga":1700 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "MNO345",
    "marca": "Volkswagen",
    "modelo": "2018",
    "capacidadDeCarga":1900 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "PQR678",
    "marca": "Kia",
    "modelo": "2017",
    "capacidadDeCarga":2000 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "STU901",
    "marca": "Mazda",
    "modelo": "2016",
    "capacidadDeCarga":1800 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "VWX234",
    "marca": "Nissan",
    "modelo": "2015",
    "capacidadDeCarga":1700 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "YZA567",
    "marca": "Renault",
    "modelo": "2014",
    "capacidadDeCarga":1600 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  },
  {
    "placa": "BCD890",
    "marca": "Mercedes-Benz",
    "modelo": "2013",
    "capacidadDeCarga":2000 ,
    "ubicacion": ObjectId("ID único de la Sucursal")  // Inserta el ID único de la sucursal correspondiente manualmente
  }
]);
```
#### Insertar datos en las Coleccion Rutas
```javascript
db.rutas.insertMany([
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 1 hacia el norte",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 1"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 2")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "ABC133",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 3")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 2 hacia el sur",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 4"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 5")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "DEF456",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 6")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 3 hacia el este",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 7"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 8")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "GHI789",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 9")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 4 hacia el oeste",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 10"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 11")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "JKL012",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 12")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 5 hacia el centro",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 13"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 14")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "MNO345",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 15")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 6 hacia el occidente",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 16"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 17")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "PQR678",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 18")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 7 hacia el noreste",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 19"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 20")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "STU901",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 21")  // ID del conductor encargado de la ruta
  },
  {
    "_id": ObjectId(),
    "descripcionRuta": "Ruta 8 hacia el noroeste",
    "sucursal": ObjectId("ID Sucursal"),  // Reemplazar con el ID de la sucursal correspondiente
    "auxiliar": [
      ObjectId("ID Empleado 22"),  // ID del primer auxiliar asociado a la ruta
      ObjectId("ID Empleado 23")   // ID del segundo auxiliar asociado a la ruta
    ],
    "placasVehiculo": "VWX234",  // Placa del vehículo asignado a la ruta
    "conductor": ObjectId("ID Empleado 24")  // ID del conductor encargado de la ruta
  }
]);

```
#### Insertar datos en las Coleccion Paquetes
```javascript
db.paquetes.insertMany([
    {
  
        "peso": "5,
        "dimensiones": ["30cm", "20cm", "10cm"],
        "contenido": "Ropa",
        "valor_declarado": 50000,
        "Clasificacion": "Express"
    },
    {
  
        "peso": "10,
        "dimensiones": ["40cm", "30cm", "20cm"],
        "contenido": "Electrónicos",
        "valor_declarado": 200000,
        "Clasificacion": "Estándar"
    }
])
```
#### Insertar datos en las Coleccion Envíos
```javascript
db.envios.insertMany([
    {
  
        "cliente_id": ObjectId("ID del cliente"),
        "paquete_id": [
            ObjectId("ID del paquete 1"),
            ObjectId("ID del paquete 2")
        ],
        "sucursal_destino": ObjectId("ID de la Sucursal de destino"),
        "sucursal_origen": ObjectId("ID de la Sucursal de origen"),
        "estado_Envio": [
            {
                "estado": "En tránsito",
                "ubicacion": {
                    "latitud": 37.7749,
                    "longitud": -122.4194
                },
                "fecha_hora": ISODate("2023-07-04T12:00:00Z")
            }
        ],
        "fecha_envio": ISODate("2023-07-04T10:00:00Z"),
        "ruta_id": ObjectId("ID de la Ruta")
    }
])
```
