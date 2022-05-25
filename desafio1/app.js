new Vue({
	el: '#desafio',
	data: {
		nome: 'Dionatan da Silva',
		idade: '24',
		src:'https://c.tenor.com/Ut1EdX0r6soAAAAC/code-monkey-checkmate-digital.gif'
	},
	methods: {
		random: function(){
			return Math.random();
		}
	}
})