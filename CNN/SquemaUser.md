``` JSON
{
    $jsonSchema: {
      required: ['nike', 'account', 'name', 'descripcion', 'phone', 'address'],
      properties: {
        nike: {
          bsonType: "string",
          description: "The User's name is mandatory and is of type string"
        },
        account: {
          bsonType: "string",
          pattern: "^@[^@]*$",
          description: "Account must contain an '@' character"
        },
        name: {
          bsonType: "string",
          pattern:'^[a-zA-Z\s]+$',
          description:"Name must contain only letters and spaces"
        },
        descripcion: {
          bsonType: "string"
        },
        phone: {
          bsonType: "array",
          items: {
            bsonType: "string",
            pattern: "^\\+[0-9]+$",
            description: "Phone number must start with a '+' and be followed by digits only"
          }
        },
        address: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ['street', 'number', 'city', 'postalCode'],
            additionalProperties: false,
            properties: {
              street: {
                bsonType: "string",
                pattern:'^[a-zA-Z0-9\s]+$'
              },
              number: {
                bsonType: "string",
                pattern: "^[0-9\s]+$",
              },
              city: {
                bsonType: "string",
                pattern:'^[a-zA-Z\s]+$'
              },
              postalCode: {
                bsonType: "array",
                items: {
                  bsonType: "string",
                  pattern: "^[0-9\s]+$"
                }
              }
            }
          }
        }
      }
    }
  }
```
