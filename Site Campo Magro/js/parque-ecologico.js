document.addEventListener("DOMContentLoaded", function () {
    const menuLink = document.querySelector('a[href="#menu"]');
    const pontosturisticosLink = document.querySelector('a[href="#pontosturisticos"]');
  
    menuLink.addEventListener("click", function (e) {
      e.preventDefault();
  
      window.location.href = "../html/index.html#menu";
    });
  
    pontosturisticosLink.addEventListener("click", function (e) {
      e.preventDefault();
  
      window.location.href = "../html/index.html#pontosturisticos";
    });
  });