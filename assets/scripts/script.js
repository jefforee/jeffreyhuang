window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if(scroll > 1000) {
        let navOptions = document.getElementsByClassName("nav_options");
        for (let i = 0; navOptions.length; i++)
        navOptions[i].setAttribute("style", "color: black");
    }
})

window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    if(scroll < 1000) {
        let navOptions = document.getElementsByClassName("nav_options");
        for (let i = 0; navOptions.length; i++)
        navOptions[i].setAttribute("style", "color: white");
    }
})

