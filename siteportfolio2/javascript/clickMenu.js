function clickMenu() {
    if (menu.style.display == 'flex' || window.matchMedia("(max-width: 972px)")) {
        menu.style.display = 'none'    
    } else {
        menu.style.display = 'flex'
    }
    
}
