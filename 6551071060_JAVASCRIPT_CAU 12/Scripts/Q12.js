$(document).ready(function () {
    $("input[name='passport']").bind("change", function () {
        if ($(this).val() === "yes") {
            $("#passportBox").slideDown("fast");
        } else {
            $("#passportBox").slideUp("fast");
        }
    });

    $("input[name='credit']").bind("change", function () {
        if ($(this).val() === "yes") {
            $("#creditBox").slideDown("fast");
        } else {
            $("#creditBox").slideUp("fast");
        }
    });
});
