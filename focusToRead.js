$(document).ready(function () {
    var $anyElement = $('a, p, h1, h2, h3, h4, h5');
    //$('body').append('<div class="overlay"></div>');
    $anyElement.hover(
        function ()
        {
            if ($(this).text().length > 10) {
                $(this).addClass("highlight");
            }
        },
        function ()
        {
            $(this).removeClass("highlight");
        });
});