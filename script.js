window.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('form')
    
//função que adiciona o item no DOM
function adicionaLista(event) {

    event.preventDefault()

    /*para pagina não ficar piscando toda vez q clica no botão*/

    //criando um espaço, para guardar o input
    let itemLista = document.createElement('li')

    //guardando o valor digitado pelo usuario
    let tarefa = document.getElementById('todoInput').value.trim()
    if (tarefa == '') {
        return ('')
    }

    //guardando dentro do itemlista o valor digitado do usuado
    itemLista.innerText = tarefa

    //Procurando no html onde colocar o item da lista e depois colocando o item da lista na lista
    const lista = document.getElementById('todoLista')
    lista.appendChild(itemLista)

    //criar o quadrado de checkbox e adcionar no item lista (ele ja vem como desmarcado default)
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    itemLista.appendChild(checkbox)

    //limpar onde escreve o input
    document.getElementById('todoInput').value = ' '

    form.reset()

    //drag and drop
    itemLista.setAttribute('draggable',true)
    lista.addEventListener('dragstart' , function(e){
        dragging = e.target.closest('li')
    lista.addEventListener('dragover',function(e){
        e.preventDefault()
        const node = e.target.closest('li')
        this.insertBefore(dragging,node)
    })
    lista.addEventListener('dragend',function(e){
        dragging = null
    })
    })


    //sublinha o item da lista
    itemLista.addEventListener('click', function () {
        itemLista.style = "text-decoration: line-through "
        itemLista.style.color = '#ccc'

    })
    
    //remover o item quando clica
    checkbox.onclick = function () {
        lista.removeChild(itemLista)
    } 

    //botão marcar todos
    const botaoMarcar = document.querySelector('#todoMarcarTodos')
    botaoMarcar.onclick = function () {
        lista.style = "text-decoration: line-through "
        lista.style.color = '#ccc'

    }

    //botão excluir todos e deixar colocar novamente
    
    let apagarTudo = document.getElementById('todoRemoverTodos')
    apagarTudo.addEventListener('click', function () {      
    if (itemLista.remove()){
    todoLista.reset()}
    })            

}

//colocando o valor na lista
form.addEventListener('submit', adicionaLista)
})