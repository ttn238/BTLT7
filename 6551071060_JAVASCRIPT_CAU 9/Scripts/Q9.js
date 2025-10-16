$(document).ready(function () {

    $("#clearBtn").bind("click", function () {
        $("#infoForm")[0].reset();
        $("#msgBox").removeClass("success error")
                     .html("")
                     .fadeOut("fast");
    });

    $("#finishBtn").bind("click", function () {
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var birthday = $("#birthday").val().trim();
        var zip = $("#zip").val().trim();
        var sex = $("input[name='sex']:checked").val();

        $("#msgBox").removeClass("success error").fadeOut("fast");

        if (name === "" || email === "" || birthday === "" || zip === "" || !sex) {
            $("#msgBox").addClass("error")
                        .html("Vui lòng điền đầy đủ các trường có dấu *")
                        .fadeIn("slow");
            return;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            $("#msgBox").addClass("error")
                        .html("Email không hợp lệ!")
                        .fadeIn("slow");
            return;
        }

        var datePattern = /^(0[1-9]|1[0-2])[\/\-](0[1-9]|[12][0-9]|3[01])[\/\-](19|20)\d\d$/;
        if (!datePattern.test(birthday)) {
            $("#msgBox").addClass("error")
                        .html("Ngày sinh không hợp lệ! (định dạng mm/dd/yyyy)")
                        .fadeIn("slow");
            return;
        }

        var dateParts = birthday.split(/[\/\-]/);
        var year = parseInt(dateParts[2]);
        var now = new Date();
        if (year > now.getFullYear()) {
            $("#msgBox").addClass("error")
                        .html("Năm sinh không hợp lệ!")
                        .fadeIn("slow");
            return;
        }

        if (!/^\d{5}$/.test(zip)) {
            $("#msgBox").addClass("error")
                        .html("ZIP code phải gồm đúng 5 chữ số!")
                        .fadeIn("slow");
            return;
        }

        $("#msgBox").addClass("success")
                    .html(" Dữ liệu hợp lệ! Gửi thành công!")
                    .fadeIn("slow");
    });
});
