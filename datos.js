const cursos = [
	{
		id: 1,
		nombre: 'Node.JS',
		duracion: 30,
		valor: 0
	},
	{
		id: 2,
		nombre: 'Angular.JS',
		duracion: 40,
		valor: 14
	},
	{
		id: 3,
		nombre: 'React.JS',
		duracion: 32,
		valor: 11
	}
];

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'c'
	}
}

module.exports = {
	cursos,
	opciones
};