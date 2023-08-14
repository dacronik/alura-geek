const search = document.getElementById("search_toogle");
const searchIcon = document.getElementById("search-icon");
const searchMobile = document.getElementById("search_mobile_form");

search.addEventListener('click',function(){
    //cambiando la clase del icono de busqueda 
    searchIcon.classList.toggle('fa-magnifying-glass');
    searchIcon.classList.toggle('fa-xmark');
   // Cambiando el display de searchMobile
    if (searchIcon.classList.contains('fa-magnifying-glass')) {
    searchMobile.style.display = 'none';
    } else {
    searchMobile.style.display = 'block';
}
});



