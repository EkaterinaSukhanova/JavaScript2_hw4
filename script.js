

$(document).ready(function () {
    $(".menu li").on("click", function () {
        if (!$(this).hasClass("active")) {
            let i = $(this).index();
            $(".menu li.active").removeClass("active");
            $(".all-tabs .active").hide().removeClass("active");
            $(this).addClass("active");
            $($(".all-tabs").children(".tab")[i]).fadeIn(500).addClass("active");
        }
    });

});