/////////////////////////////
// Javascript for posts page
//////////////////////////////

$(function() {
    $('.js-menu-icon').click(function() {

        //$(this): self element, which is div.js-menu-icon
        // next() : Next to div.js-menu-icon, named div.menu
        //toggle() : Switch between show and hide
        $(this).next().toggle();
    })

})