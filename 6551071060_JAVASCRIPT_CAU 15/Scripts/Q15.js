$(document).ready(function () {
    $(".tab-content:first").show();
    $(".tabs li").bind("click", function () {
        var tab_id = $(this).attr("data-tab");
        $(".tabs li").removeClass("active");
        $(".tab-content").hide();
        $(this).addClass("active");
        $("#" + tab_id).fadeIn("slow");
    });
});
