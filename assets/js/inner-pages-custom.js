$(document).ready(function ($) {
    $('#toggleGreyLayout').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('greyScaleLayout');
    });
});
