"use script";
var buttonMenu = document.getElementById('toggle-button');
buttonMenu.addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        document.getElementById('prev').style.top = '200px';
        document.getElementById('next').style.top = '200px';
        menu.style.display = '';
    } else {
        document.getElementById('prev').style.top = '410px';
        document.getElementById('next').style.top = '410px';
        menu.style.display = 'block';
    }
});

function slider() {
    var $rightButton = $('#next');
    var $leftButton = $('#prev');


    $leftButton.hide();
    $('section#slider div.slide').hide();
    $('section#slider div#news-1.slide').show();

    function onRightButtonClick() {
        var $currentSlide = $('section#slider div.slide:visible');
        if (!$currentSlide.hasClass('end-news')) {
            $currentSlide.hide().next().show();
            $leftButton.show();
        }
        if ($currentSlide.next().hasClass('end-news')) {
            $rightButton.hide();
        }
    }

    function onLeftButtonClick() {
        var $currentSlide = $('section#slider div.slide:visible');
        if ($currentSlide.attr('id') !== 'news-1') {
            $currentSlide.hide().prev().show();
            $rightButton.show();
        }
        if ($currentSlide.prev().attr('id') === 'news-1') {
            $leftButton.hide();
        }
    }

    $rightButton.on('click', onRightButtonClick);
    $leftButton.on('click', onLeftButtonClick);
}
slider();