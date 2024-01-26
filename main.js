function toggleNav() {
    const navBar = document.querySelector('.navBar');
    const menuBtn = document.querySelector('.menuBtn');
    navBar.classList.toggle('closed');
    
    const chevronIcon = document.querySelector('.menuBtn i');
    chevronIcon.classList.toggle('fa-chevron-left');
    chevronIcon.classList.toggle('fa-chevron-right');

    console.log("clicked");
}