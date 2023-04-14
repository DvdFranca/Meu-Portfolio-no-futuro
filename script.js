function menu_open(){
  let menumobile = document.querySelector('.cabecalho_menu_mobile');
  if (menumobile.classList.contains('open')){
    menumobile.classList.remove('open');
  } else {
    menumobile.classList.add('open')
  }
}
