const body = document.querySelector('body'),
      html = document.querySelector('html'),
    navbar = document.querySelector('.navbar'),
    nav = document.querySelector('.nav-menu'),
    menuBar = document.querySelector('.menu-bar'),
    dropContainer = document.querySelector('.drop-container'),
    dropLink = document.querySelector('.drop-container .nav-link'),
    loading = document.querySelector('.loading');
window.onscroll = ()=>{
    nav.classList.remove('active');
    menuBar.classList.remove('active');
    dropContainer.classList.remove('active');
}
menuBar.onclick = ()=>{
    menuBar.classList.toggle('active');
    nav.classList.toggle('active');
}
let windowWidth = window.innerWidth;
    window.onresize = ()=>{
        windowWidth = window.innerWidth;
    }
setInterval(()=>{
    if(window.innerWidth < 951){
        navbar.classList.add('active');
        dropContainer.onclick = (e)=>{
                dropContainer.classList.toggle('active');
        }
    }else{
        window.onscroll = ()=>{
            this.scrollY > 60 ? navbar.classList.add('active') : navbar.classList.remove('active');
        }
        this.scrollY > 60 ? navbar.classList.add('active') : navbar.classList.remove('active');
    }
} , 100)
window.onresize = ()=>{
    if(window.innerWidth > 951 && window.scrollY < 20){
        navbar.classList.remove('active');
    }
}

    html.style.overflow = 'hidden';
    
body.onload = ()=>{
    html.style.overflowY = 'auto';
    loading.style.display = 'none';
}