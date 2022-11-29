const todos = document.getElementById('todos')
const cafe = document.getElementById('cafe')
const almoco = document.getElementById('almoco')
const shakes = document.getElementById('shakes')
const jantar = document.getElementById('jantar')
const itens = document.getElementsByClassName('caixa')

const filtrarMenu = (itemFiltrado) => {
  Array.from(itens).forEach(element => {
    element.style.display = 'none';
  });

  const mostrarItens = document.getElementsByClassName(itemFiltrado)
  Array.from(mostrarItens).forEach(element => {
    element.style.display = 'flex';
  });
}

const filtrarTodos = () => {
  Array.from(itens).forEach(element => {
    element.style.display = 'flex';
  });
}

todos.addEventListener('click', () => {
  filtrarTodos()
})

cafe.addEventListener('click', () => {
  filtrarMenu('cafe')
})

almoco.addEventListener('click', () => {
  filtrarMenu('almoco')
})

shakes.addEventListener('click', () => {
  filtrarMenu('shakes')
})

jantar.addEventListener('click', () => {
  filtrarMenu('jantar')
})

