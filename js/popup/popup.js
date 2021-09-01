$(function () {
    var box = $('.box'),
        link = $('.link_list li '),
        box_cover = $('.box_cover'),
        close = $('.close'),
        box_load = $('.box_load'),
        box_load_li = $('.box_load>li'),
        arrow_left = $('.arrow_left>.arrow_span'),
        arrow_right = $('.arrow_right>.arrow_span');

    var all_link = new Array(),
        links = $('.link_list').find('li');
    for (var i = 1; i <= links.length; i++) {
        all_link[i] = 'works_' + i + '.html';
        box_load.append('<li class="load_' + i + '"></li>');
        $('.load_' + i).load(all_link[i]);
    }

    $('.box_load>li').hide();
    link.on('click', function () {
        var li_index = link.index(this) + 1;
        $('.box_load>li').removeClass('active');
        $('.load_' + li_index).addClass('active');
        $('.box_load>li').hide();
        $('.box_load >li.active').show();
        if (box.hasClass('active')) {
            box.removeClass('active');
            box_cover.removeClass('active');
            close.removeClass('active');
            $('.box_load>li').removeClass('active');
        } else {
            box.addClass('active');
            box_cover.addClass('active');
            close.addClass('active');
        }
    });
    box_cover.on('click', function () {
        box.removeClass('active');
        box_cover.removeClass('active');
        close.removeClass('active');
        $('.box_load>li').removeClass('active');
    });
    close.on('click', function () {
        box.removeClass('active');
        box_cover.removeClass('active');
        close.removeClass('active');
        $('.box_load>li').removeClass('active');
    });
    var fade_speed = 300;
    arrow_right.on('click', function () {
        var load_active = $('.box_load >li.active'),
            right = load_active.next('li').length
                ? load_active.next('li')
                : $('.box_load >li:first');
        $('.box_load >li.active').fadeOut(fade_speed).removeClass('active');
        right.fadeIn(fade_speed).addClass('active');
    });
    arrow_left.on('click', function () {
        var load_active = $('.box_load >li.active'),
            left = load_active.prev('li').length
                ? load_active.prev('li')
                : $('.box_load >li:last');
        $('.box_load >li.active').fadeOut(fade_speed).removeClass('active');
        left.fadeIn(fade_speed).addClass('active');
    });
});
