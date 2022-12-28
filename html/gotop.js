window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 10) {
      document.querySelector('.go-top-container').classList.add('show');
      
    }
    else{
      document.querySelector('.go-top-container').classList.remove('show');
    }
  }
  
  document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  function cambioColor (){
    var elemento = document.getElementById("body");
    elemento.classList.toggle("botonfondo")
  }
    