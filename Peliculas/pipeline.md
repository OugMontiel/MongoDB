```json
[
  {
    $unwind: "$character"
  },
  {
    $lookup: {
      from: "authors",
      localField: "character.id_actor",
      foreignField: "id_actor",
      as: "actor"
    }
  }
]
```

Primer filtro complejo .. agregatepor medio de Coompass


``` json
 [
  {
    $unwind: "$character"
  },
  {
    $lookup: {
      from: "authors",
      localField: "character.id_actor",
      foreignField: "id_actor",
      as: "relacion"
    }
  },
  {
    $unwind: "$relacion"
  },
  {
    $project: {
      "relacion._id" : 0
    }
  },
  {
    $addFields: {
      "relacion.rol": "$character.rol",
      "relacion.apodo" : "$character.apodo"
    }
  },
  {
    $group: {
      _id: "$_id",
      name: {$first: "$name"},
      character: {$push: "$relacion"},
      genre: {$first: "$genre"},
      format: {$first: "$format"}
      
    }
  }
] 
```