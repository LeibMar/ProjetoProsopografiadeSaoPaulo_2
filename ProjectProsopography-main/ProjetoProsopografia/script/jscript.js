/* mostra as opções de busca refinada */

const obj_botao_busca_refinada = document.querySelector('#refinar')
const obj_div_refinada = document.querySelector('.busca_refined')
const obj_busca_main = document.querySelector('.busca_main')

obj_div_refinada.style.display ='none'
obj_botao_busca_refinada.addEventListener('click', FunMostraMenu)

function FunMostraMenu() {
    
        obj_div_refinada.style.display = ''
    
  
}

/*  logo ampliado do patrocinador */

const obj_div_logo_maior = document.querySelector('#logo_maior')
const obj_logo_patrocinio = document.querySelectorAll('.logo_patrocinador')

const obj_logo_novo = document.createElement('img')
const obj_txt_novo = document.createElement('input')

for (obj_logo of obj_logo_patrocinio) {
    obj_logo.addEventListener('click', function() {  FunAdicionalogo(this.src, this.alt)} )
}

function FunAdicionalogo(par_src, par_alt) {
    obj_logo_novo.setAttribute('src', par_src)
    obj_logo_novo.setAttribute('alt', par_alt)
    obj_logo_novo.setAttribute('title', par_alt)
    obj_div_logo_maior.appendChild(obj_logo_novo)

    obj_txt_novo.setAttribute('type', 'text')
    obj_txt_novo.setAttribute('disabled', 'true')
    obj_txt_novo.setAttribute('value', par_alt)
    obj_txt_novo.setAttribute('size', 30)
    obj_txt_novo.setAttribute('class', 'novo_input')
    obj_div_logo_maior.appendChild(obj_txt_novo)
}
 
/* Mostra lista alfabética */

const obj_lista_alfabetica = document.querySelector('#lista_alfabetica')
const obj_botao_menu_alfabetico = document.querySelector('#menu_alfabetico')

obj_lista_alfabetica.style.display = 'none'

obj_botao_menu_alfabetico.addEventListener('click', FunAcionaMenu)


function FunAcionaMenu() {
    
    obj_lista_alfabetica.style.display = ''
}





const obj_botao_busca_principal = document.querySelector('#busca')
const obj_input_busca = document.querySelector('#campo_main')

obj_botao_busca_principal.addEventListener('click', FunDireciona)

function FunDireciona() {
    
    if (obj_input_busca.value !== 'Digite um nome ou termo...') {
       window.location.href='Entrada.html'   }
       else {
        alert('Digite um termo no campo de busca!')
    }
}


