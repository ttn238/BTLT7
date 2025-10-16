$(document).ready(function () {
    var expression = "";

    $(".num, .op").bind("click", function () {
        expression += $(this).text();
        $("#display").val(expression);
    });

    $("#clear").bind("click", function () {
        expression = "";
        $("#display").val("");
        $("#msg").fadeOut("fast");
    });

    $("#equal").bind("click", function () {
        var regex = /^(\d+)([+\-*/])(\d+)$/;
        if (!regex.test(expression)) {
            $("#msg").html("Biểu thức không hợp lệ!").fadeIn("slow");
            return;
        }

        var parts = expression.match(regex);
        var a = parseFloat(parts[1]);
        var op = parts[2];
        var b = parseFloat(parts[3]);
        var result = 0;

        switch (op) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/':
                if (b === 0) {
                    $("#msg").html("Không thể chia cho 0!").fadeIn("slow");
                    return;
                }
                result = a / b; break;
        }

        $("#display").val(result);
        $("#msg").html("Biểu thức hợp lệ!").fadeOut(2000);
        expression = "";
    });
});
