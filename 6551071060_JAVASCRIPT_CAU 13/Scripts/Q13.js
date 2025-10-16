$(document).ready(function () {
    $("#eye").bind("click", function () {
        var input = $("#password");
        var type = input.attr("type");

        if (type === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $("#loginBtn").bind("click", function () {
        var user = $("#username").val().trim();
        var pass = $("#password").val().trim();

        if (user === "" && pass === "") {
            $("#message")
                .css({ "color": "red", "background": "#ffe6e6" })
                .html("Vui lòng nhập tên đăng nhập và mật khẩu!")
                .fadeIn("fast");
        } 
        else if (user === "") {
            $("#message")
                .css({ "color": "red", "background": "#ffe6e6" })
                .html("Vui lòng nhập tên đăng nhập!")
                .fadeIn("fast");
        } 
        else if (pass === "") {
            $("#message")
                .css({ "color": "red", "background": "#ffe6e6" })
                .html("Vui lòng nhập mật khẩu!")
                .fadeIn("fast");
        } 
        else {
            $("#message")
                .css({ "color": "#2f855a", "background": "#e6ffed" })
                .html(" Bạn đã đăng nhập thành công!")
                .fadeIn("slow");
        }
    });
});
