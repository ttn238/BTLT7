$(document).ready(function () {
    $("#themeToggle").bind("change", function () {
        if ($(this).is(":checked")) {
            $("body").css({ "background-color": "#ffffff", "color": "#000000" });
            $("#statusText").html("Chế độ hiện tại: <b>Sáng</b>");
            $("#message")
                .css({ "background": "#e6ffed", "color": "#2f855a" })
                .html("Bạn đã chuyển sang chế độ Sáng!")
                .fadeIn("slow")
                .delay(2000)
                .fadeOut("slow");
        } else {
            $("body").css({ "background-color": "#111111", "color": "#ffffff" });
            $("#statusText").html("Chế độ hiện tại: <b>Tối</b>");
            $("#message")
                .css({ "background": "#333", "color": "#f1f1f1" })
                .html("Bạn đã chuyển sang chế độ Tối!")
                .fadeIn("slow")
                .delay(2000)
                .fadeOut("slow");
        }
    });
});
