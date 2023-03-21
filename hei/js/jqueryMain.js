$(".gallery").mouseenter(function(){
    $(this).children("h2").removeClass("d-none");
    $(this).children(".d-flex").children(".contenu-lr").removeClass("d-none");
    $(this).children(".d-flex").children(".contenu-lr").addClass("d-flex");
    $(this).children(".d-flex").children(".contenu-lr").animate({width: ["50","linear"]});
    $(this).children(".d-flex").children(".contenu-lr").addClass("w-50");
});

$(".gallery").mouseleave(function(){
    $(this).children("h2").addClass("d-none");
    $(this).children(".d-flex").children(".contenu-lr").addClass("d-none");
    $(this).children(".d-flex").children(".contenu-lr").removeClass("d-flex");
    $(this).children(".d-flex").children(".contenu-lr").css("width","0");
    $(this).children(".d-flex").children(".contenu-lr").removeClass("w-50");
});