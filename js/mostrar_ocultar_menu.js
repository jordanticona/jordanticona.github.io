document.getElementById('abrir_menu').addEventListener('click', function(){
  let nav_left = document.getElementById('nav').style.left;
  if(nav_left === '0%'){
    document.getElementById('nav').style.left = '-100%';
  }else{
    document.getElementById('nav').style.left = '0%';
  }
});

window.onresize = function(){
  let anchoVentana = window.innerWidth;
  let nav_links = document.getElementsByClassName('link');

  if(anchoVentana > 950){
    document.getElementById('nav').style.left = '5%';
    ocultarNavegacionConLinks('5%');
  }else if(anchoVentana <= 950){
    document.getElementById('nav').style.left = '-100%';
    ocultarNavegacionConLinks('-100%');
  }
};

if(window.innerWidth <= 950){
  ocultarNavegacionConLinks('-100%');
}

function ocultarNavegacionConLinks(porcentaje){
  let nav_links = document.getElementsByClassName('link');
  for(let i=0; i<4; i++){
    nav_links[i].addEventListener('click', function(){
    document.getElementById('nav').style.left = porcentaje;
    });
  }
};
