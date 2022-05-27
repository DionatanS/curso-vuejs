new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
	computed:{
		resultado() {
			if(this.valor != 37){
			return this.resultado = 'Valor diferente de 37'
			}else if(this.valor === 37){
			return this.resultado = 'Valor igual a 37'
			}
		}
	},
	methods: {
		
	},
	watch: {
		resultado() {
			setTimeout(() => {
				this.valor = 0
			}, 5000)
		}
	}
	
});