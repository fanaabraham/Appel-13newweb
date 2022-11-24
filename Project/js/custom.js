// let div2=$(".footer-wrapper div:nth-child(2)");
// div2.attr("id,h3-ul-wrapper-2 ");
// let secondH3=$("#h3-ul-wrapper-2 h3:nth-child(1)");
 
// let secondUl=$("#h3-ul-wrapper-2 ul:nth-child(2)");
// secondH3.on("click",function(){
//     secondUl.slideToggle();
//     div.toggleclass("active")
// })


$(".footer-links-wrapper h3").click(function(){
    if($(window).width()<=768){
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded")
    }
});
$(window).on("reload",function(){
    location.reload()
});