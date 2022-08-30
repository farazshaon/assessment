//--------my profile--------
let subMenu = document.getElementById('subMenu');
function toggleMenu() {
  subMenu.classList.toggle('open-menu')
}

//----Side Menu-------
$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

//-------Menu Active Color------
$(document).ready(function(){
$('ul li a').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('li a.active').removeClass('active');
        $(this).addClass('active');
    }
});
});
