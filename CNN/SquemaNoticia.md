``` JSON
{
  $jsonSchema: {
    required: [
      'title',
      'body',
      'date',
      'tags',
      'author'
    ],
    properties: {
      title: {
        bsonType: 'string',
        pattern: '^[A-Z][a-zA-Z0-9\\s]*$',
        description: 'Title must start with an uppercase letter and can contain letters, numbers, and spaces'
      },
      body: {
        bsonType: 'string'
      },
      date: {
        bsonType: 'string',
        pattern: '^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$',
        description: 'Date must be in the format YYYY-MM-DD'
      },
      tags: {
        bsonType: 'array',
        items: {
          bsonType: 'string',
          pattern: '^[A-Z][a-zA-Z0-9\\s]*$'
        }
      },
      author: {
        bsonType: 'string',
        pattern: '^[a-zA-Zs\s]+$',
        description: 'Author must contain only letters and spaces'
      }
    }
  }
}
``` 