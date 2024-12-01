function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
  
document.querySelectorAll('.s_button')[1].onclick = () =>{
    let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').appendChild(lists[0]);
}
document.querySelectorAll('.s_button')[0].onclick = () =>{
    let lists = document.querySelectorAll('.item');
    document.querySelector('#slide').prepend(lists[lists.length - 1]);
}
