var tblRecord = [];
$(document).ready(function() {
    createTableRow();
    $("#save").click(function() {
        var fname = $("#fname").val();
        var sub = $("#sub").val();
        var mark = $("#mark").val();

        // var tblObj = {};
        // tblObj.fname = fname;
        // tblObj.sub = sub;
        // tblObj.mark = mark;

        var tblObj = { fname: fname, sub: sub, mark: mark };
        tblRecord.push(tblObj);
        console.log(tblRecord);
        //convert us object to json string

        localStorage.tblData = JSON.stringify(tblRecord);
        createTableRow();
        $("#fname").val("");
        $("#sub").val("");
        $("#mark").val("");
    });
});

function createTableRow() {
    //convert json string to js object
    tblRecord = JSON.parse(localStorage.tblData);
    for (var i = 0; i < tblRecord.length; i++) {
        var fname = tblRecord[i].fname;
        var sub = tblRecord[i].sub;
        var mark = tblRecord[i].mark;

        var tblrow = "<tr><td>" + 1 + "</td><td>" +
            fname + "</td><td>" +
            sub + "</td><td>" +
            mark + "</td></tr>";
        $("tbody").append(tblrow);
    }

}