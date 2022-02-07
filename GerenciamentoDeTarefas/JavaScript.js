function adicionaTarefa(imagem) //Adiciona tarefa para a lista original
{
    //let a = document.getElementById("inputDaCaixa") //Seleciono o input
    let a = imagem.nextSibling.nextSibling
    
    let conteiner = document.createElement("div") //Crio uma div para colocar o texto

    conteiner.style.backgroundColor = "white" //Estilizando o conteiner

    conteiner.classList.add('adicionaTarefaConteinerJS')
    
    let texto = document.createElement("p") //Crio um texto html
    texto.innerText = a.value //O texto do <p> passa a ser o valor digitado no input

    texto.classList.add('adicionaTarefaTextoJS') //Adiciono uma classe ao texto

    let apagar = criaApagar()

    conteiner.appendChild(texto) //Adiciono o texto dentro da div
    conteiner.appendChild(apagar) //Adiciono a imagem ao conteiner

    let ajuda = imagem.parentNode
    let ajuda2 = ajuda.parentNode

    // let aux = document.querySelector(".caixaDeTarefa") //Pego pelo id a section
    ajuda2.appendChild(conteiner) //Adiciono dentro da section o conteiner criado
     
    // document.body.appendChild(conteiner) //Adiciono a <div> ao HTML
    

}

function adicionaTarefaElementoCriado(imagem) //Adiciona uma tarefa com o conteudo do input para os novas listas de tarefas
{
        //let a = document.getElementById("inputDaCaixa") //Seleciono o input
        let a = imagem.nextSibling //Seleciono o input
     
        let conteiner = document.createElement("div") //Crio uma div para colocar o texto
    
        conteiner.style.backgroundColor = "white" //Estilizando o conteiner
    
        conteiner.classList.add('adicionaTarefaConteinerJS')
        
        let texto = document.createElement("p") //Crio um texto html
        texto.innerText = a.value //O texto do <p> passa a ser o valor digitado no input
    
        texto.classList.add('adicionaTarefaTextoJS') //Adiciono uma classe ao texto
    
        let apagar = document.createElement("img") //Crio uma imagem que vai ser o botao de apagar tarefa
        apagar.src = "apagar.png"
        apagar.style.width = "15px" //Personalizando o tamanho da imagem
        apagar.style.height = "15px"
        apagar.style.marginLeft = "80%"
        apagar.style.marginBottom = "10px"
        apagar.setAttribute("onclick", "removeTarefa(this)")
    
        conteiner.appendChild(texto) //Adiciono o texto dentro da div
        conteiner.appendChild(apagar) //Adiciono a imagem ao conteiner
    
        let ajuda = imagem.parentNode
        let ajuda2 = ajuda.parentNode
    
        // let aux = document.querySelector(".caixaDeTarefa") //Pego pelo id a section
        ajuda2.appendChild(conteiner) //Adiciono dentro da section o conteiner criado
         
        // document.body.appendChild(conteiner) //Adiciono a <div> ao HTML
        
    
}

function removeTarefa(event)
{ 
    let elemento = event.parentNode //Com o event.target eu pego o elemento que foi clicado, e pego o elemento pai dele que é a div toda
    let paiDoElemento = elemento.parentNode
    paiDoElemento.removeChild(elemento)
    // document.querySelector(".caixaDeTarefa").removeChild(elemento)  //Aqui eu pego a section caixaDeTarefa e removo um elemento filho dela, que no caso é o elemento clicado   
}

let windowWidth = window.innerWidth
let larguraDisponivel = windowWidth - 600
function adicionaListaDeTarefas() //Adiciona uma nova lista de tarefas
{
    // alert(larguraDisponivel)
    if(larguraDisponivel > 200){
    let caixaDeTarefa = document.createElement("section")
    caixaDeTarefa.classList.add("caixaDeTarefa")

    let textoDaCaixa = document.createElement("p")
    textoDaCaixa.innerText = "Adicionar Tarefa"
    textoDaCaixa.id = "textoDaCaixa"

    caixaDeTarefa.appendChild(textoDaCaixa)

    let apagar = criaApagar() //CRIA IMAGEM
    apagar.setAttribute("onclick", "removeListaDeTarefa(this)")
    apagar.style.marginLeft = "80%"
    apagar.style.marginTop = "15px"
    
    
    caixaDeTarefa.appendChild(apagar)

    let contender = document.createElement("div")
    contender.classList.add("contender")



    let adiciona = document.createElement("img")
    adiciona.id = "adiciona"
    adiciona.src = "simboloMais.png"
    adiciona.setAttribute("onclick", "adicionaTarefaElementoCriado(this)")

    contender.appendChild(adiciona)

    let inputDaCaixa = document.createElement("input")
    inputDaCaixa.type = "text"
    inputDaCaixa.id = "inputDaCaixa"

    contender.appendChild(inputDaCaixa)
    contender.style.marginTop = "15px"

    caixaDeTarefa.appendChild(contender)


    let addCaixaTarefa = document.querySelector(".addCaixaDeTarefa")
    let elementoPai = addCaixaTarefa.parentNode

    elementoPai.insertBefore(caixaDeTarefa, addCaixaTarefa)

    larguraDisponivel = larguraDisponivel - 200
    }
}

function criaApagar() //Crio o botaozinho de pagar (só a imagem)
{
    let apagar = document.createElement("img") //Crio uma imagem que vai ser o botao de apagar tarefa
    apagar.src = "apagar.png"
    apagar.style.width = "15px" //Personalizando o tamanho da imagem
    apagar.style.height = "15px"
    apagar.style.marginLeft = "80%"
    apagar.style.marginBottom = "10px"
    apagar.setAttribute("onclick", "removeTarefa(this)")
    return apagar
}

function removeListaDeTarefa(elemento) //Remove uma lista de tarefas 
{
    larguraDisponivel = larguraDisponivel + 200
   let paiDoElemento = elemento.parentNode //O elemento é a imagem do X, o pai desse elemento é a section que vamos remover
   let paiDoExcluido = paiDoElemento.parentNode //Pego o pai da section para poder removela
   paiDoExcluido.removeChild(paiDoElemento) //Removo a section
}


