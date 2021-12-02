const tabuadaController = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', () => {
  it('list', () => {
    let res = {
      render: function(){}
    }

    const numeros = []
    for(let i=1; i<=100; i++) {
      numeros.push(i)
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('tabuada/list', { numeros })
    tabuadaController.list({}, res)
  })

  it('calculate tabuada', () => {
    let res = {
      render: function(){}
    }

    const tabuadas = []
    const num = 10

    for(let i=0; i<=10; i++) {
      tabuadas.push({
        num,
        i,
        resultado: num*i
      })
    }

    let mock = sinon.mock(res)
    mock.expects('render').once().withArgs('tabuada/tabuada', {
      num,
      tabuadas
    })
    tabuadaController.tabuada({ params: { num }}, res)
  })
})