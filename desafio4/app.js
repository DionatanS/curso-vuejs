new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe01: 'classe01',
		classe02: 'classe02',
		classeTeste: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque'
					? 'encolher' : 'destaque'
			},1000)
		},
		iniciarProgresso() {

		}
	}
})
