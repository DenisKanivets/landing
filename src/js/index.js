$(window).ready(function () {
    $('#scroll-content').scroll(function () {
        $('#second-section').animate({
            backgroundColor: '#433795'
        }, 3000)
    })
});