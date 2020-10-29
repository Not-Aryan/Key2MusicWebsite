document.querySelectorAll('nav li a').forEach(elem => elem.addEventListener("click" , function() {
    scroll(this.name);
}));

function scroll(aid){
    var aTag = $("div[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top}, 1250);
}