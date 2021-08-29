let navbar = document.querySelector('.navbar');

 
let searchForm = document.querySelector('.searchBar');

document.querySelector('#search-b').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

 
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}