$(document).ready(function () {
    $("#fileInput").bind("change", function () {
        var file = $(this).val().split("\\").pop();

        if (file === "") {
            $("#fileInfo").fadeOut("fast");
            return;
        }

        var parts = file.split(".");
        var tenFile = parts[0];
        var moRong = parts.length > 1 ? parts.pop() : "Không có";

        $("#fileInfo").html("Tên tệp: <b>" + tenFile + "</b><br>Phần mở rộng: <b>" + moRong + "</b>")
                      .fadeIn("slow");
    });
});
