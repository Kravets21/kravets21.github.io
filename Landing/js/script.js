$('#form-btn').on('click', function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#text').val();
    $.ajax({
            type: "POST",
            url: "ajax/send.php",
            data: {'name': name, 'email': email , 'phone': phone, 'text': message},
            dataType: 'html',
            success: function(data){ 
                data = data.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                if(data =='error')
                {
                    alert('Fill all the fields!'); 
                }
                else{
                    alert('You have sent the message'); 
                    $('form').trigger('reset');
                }
                }
        })  
});

var e = $('.team-title__title');
var el = $('.about-title__item');
var ele = $('.features__item');
var elem = $('.article__img');
var eleme = $('.blog-title_title');
var elemen = $('.info_block');
var element = $('.extension-block');
var element1 = $('.team_tables');
var element2 = $('.form-title__title');



$(window).scroll(function(){
    if ( $(this).scrollTop() > e.offset().top - 900 ) {
        e.addClass('animation1');
    }
    if ( $(this).scrollTop() > el.offset().top - 900 ) {
        el.addClass('animation1');
    }
    if ( $(this).scrollTop() > ele.offset().top - 850 ) {
        ele.addClass('animation2');
    }
    if ( $(this).scrollTop() > elem.offset().top - 900 ) {
        elem.addClass('animation3');
    }
    if ( $(this).scrollTop() > eleme.offset().top - 900 ) {
        eleme.addClass('animation1');
    }
    if ( $(this).scrollTop() > elemen.offset().top - 900 ) {
        elemen.addClass('animation3');
    }
    if ( $(this).scrollTop() > element.offset().top - 800 ) {
        element.addClass('animation4');
    }
    if ( $(this).scrollTop() > element1.offset().top - 800 ) {
        element1.addClass('animation2');
    }
    if ( $(this).scrollTop() > element2.offset().top - 800 ) {
        element2.addClass('animation1');
    }

});
