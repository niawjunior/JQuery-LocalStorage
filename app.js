var tblRecord = [];
$(document).ready(function() {
    $("#save").click(function() {
        var fname = $("#fname").val();
        var sub = $("#sub").val();
        var mark = $("#mark").val();


        var tblrow = "<tr><td>" + 1 + "</td><td>" +
            fname + "</td><td>" +
            sub + "</td><td>" +
            mark + "</td></tr>";


        var tblObj = {};
        tblObj.fname = fname;
        tblObj.sub = sub;
        tblObj.mark = mark;
        tblRecord.push(tblObj);
        console.log(tblRecord);
        localStorage.tblData = JSON.stringify(tblRecord);
        $("tbody").append(tblrow);
        $("#fname").val("");
        $("#sub").val("");
        $("#mark").val("");
    });
});