new Vue({
  el: '#desafio',
  data: {
    classe1: 'destaque',
    classe01: 'classe01',
    classe02: 'classe02',
    perigo: true,
    classeTeste: '',
    classe4: '',
    cor5: '',
    estilo5: {
      width: '100px',
      heigth: '100px'
    },
    width: '0'
  },
  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
      }, 1000)
    },
    iniciarProgresso() {
      let valor = 0
      const temporizador = setInterval(() => {
        valor += 0.5
        this.width = `${valor}%`
        if (valor == 100) clearInterval(temporizador)
      }, 200)
    },
    setPerigo(event) {
      if (event.target.value == 'true') {
        this.perigo = true
      } else if (event.target.value == 'false') {
        this.perigo = false
      }
    }
  }
})
