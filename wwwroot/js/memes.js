function makeIconsClickable() {
    $('.icon').on('click', function() {
        var el = $(this);
        if (el.attr('class') == 'icon') {
            el.removeClass('icon');
            el.addClass('icon_active');
        }
        else {
            el.removeClass('icon_active');
            el.addClass('icon');
        }
    });
}

function getElementNumber(coords) {
    var elem = document.elementFromPoint(coords[0], coords[1]);
    return $(elem).attr('num');
}
