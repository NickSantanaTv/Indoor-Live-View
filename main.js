
const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {

    // Alternamos estilos para el menú y body
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    // Alternamos su atributo 'src' para el ícono del menú
    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'hamburger-menu-icon.png'){
        e.target.setAttribute('src','hamburger-menu-icon blanco.png');
    }else{
        e.target.setAttribute('src','hamburger-menu-icon.png');
    }
});

// This is just to auto-update the data-text if you're editing it directly on the page and is not required for the actual effect
$('[data-text]').on('keyup', function(){
    $(this).attr('data-text', $(this).text());
  });