(function() {
  //Navegation Menu
  let bar_icon = document.querySelector('.bar-icon');
  let nav = document.querySelector('.nav');
  let enlaces = document.querySelector('.container-list');
  const body = document.querySelector('body');
  const overlay = document.querySelector('.overlay');

  let contador = true;

  bar_icon.addEventListener('click', function(){
    this.classList.toggle('active');
    toggleModal();
  });

  overlay.addEventListener('click', function(){
    bar_icon.classList.remove('active');
    toggleModal();
  });

  function toggleModal() {
    if (contador == true) {
      body.style.overflow = 'hidden';
      enlaces.style.width = '250px';
      enlaces.style.overflow = 'hidden';
      enlaces.style.transition = '0.5s';

      nav.style.background = '#f1f4df';
      nav.style.transition = '0.5s';
      nav.style.transition = '0.5s';
      nav.style.width = '250px';

      overlay.classList.add('active');

      contador = false;

    }else{
      contador = true;
      body.style.overflow = 'scroll';
      enlaces.style.width = '0%';
      enlaces.style.overflow = 'hidden';
      enlaces.style.transition = '0.5s';

      nav.style.background = 'transparent';
      nav.style.transition = '0.5s';
      nav.style.width = '100%';

      overlay.classList.remove('active');
    }
  }
}());

