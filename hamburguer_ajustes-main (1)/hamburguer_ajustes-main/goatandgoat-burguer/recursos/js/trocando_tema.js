const trocandoTemaBtn = document.querySelector("#trocando_tema")

function toggleTrocandoTemas(){
    document.body.classList.toggle("tema_escuro")
}

function pegarTema(){

    const tema = localStorage.getItem("tema_escuro")

    if(tema){
        toggleTrocandoTema()
    }
    

}
//pegarTema()

trocandoTemaBtn.addEventListener("change",function(){
    toggleTrocandoTema()

    localStorage.removeItem("tema_escuro")

    if(document.body.classList.contains("tema_escuro")){
        localStorage.setItem("tema_escuro",1)
    }

})