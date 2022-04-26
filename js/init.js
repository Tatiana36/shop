var menu_visibility = 0;

$(document).ready(function () {
    click_on_menu_button();
    click_on_cross();
})

function click_on_menu_button() {
    $('#burger__menu').click(function () {
        switch_menu();
    })
}

function click_on_cross() {
    $('#cross').click(function () {
        off_menu();
    })
}

function switch_menu() {
    if (menu_visibility === 0) {
        $('#box__burger-menu').css({display: 'block'})
        menu_visibility = 1;
    }
    else {
        $('#box__burger-menu').css({display: 'none'})
        menu_visibility = 0;
    }
}

function off_menu() {
    $('#box__burger-menu').css({display: 'none'})
    menu_visibility = 0;
}