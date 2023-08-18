var persona = {
    apellido: "Rosas",
    nombre: "Juan Manuel",
    dni: 123,
    nacimiento: new Date(30-03-1793),
    mascotas: [
        {
            apodo: "negro",
            animal: "caballo",
            edad: 4,
            nacimiento: new Date(01-04-1790)
        },{
            apodo: "punzó",
            animal: "perro",
            edad: 3,
            nacimiento: new Date(01-05-1791)
        }
    ]
};
console.log(persona.mascotas[1].animal);