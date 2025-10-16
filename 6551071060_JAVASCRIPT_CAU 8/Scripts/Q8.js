$(document).ready(function () {
    var selectedOperator = "+";

    $(".operator").click(function () {
        selectedOperator = $(this).data("operator");
        $(".operator").css("background-color", "#ddd");
        $(this).css("background-color", "#f0a500");
    });

    $("#calculate").click(function () {
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var result = 0;

        if (isNaN(num1) || isNaN(num2)) {
            alert("Vui lòng nhập đủ hai số!");
            return;
        }

        switch (selectedOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    alert("Không thể chia cho 0!");
                    return;
                }
                result = num1 / num2;
                break;
            case '^':
                result = Math.pow(num1, num2);
                break;
        }

        $("#result").val(result);
    });
});
