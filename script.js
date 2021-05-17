$(document).ready(function () {
$('.logo i').click(function (event) {
    $('.burger').toggleClass('active');
});
    $('.burger-content img').click(function(event) {
        $('.burger').removeClass('active');
        $('body').removeClass('lock');
    });

})