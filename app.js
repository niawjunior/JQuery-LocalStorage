    $(document).ready(function() {
        $("#save").click(function() {
            var fname = $("#fname").val();
            var sub = $("#sub").val();
            var mark = $("#mark").val();

            var tblrow = "<tr><td>" + 1 + "</td><td>" +
                fname + "</td><td>" +
                sub + "</td><td>" +
                mark + "</td></tr>";

            $("tbody").append(tblrow);
            $("#fname").val("");
            $("#sub").val("");
            $("#mark").val("");
        });
    });