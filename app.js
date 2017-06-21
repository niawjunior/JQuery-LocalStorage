var tblRecord = [];
$(document).ready(function() {
    // createTableRow();
    $("#save").click(function() {
        var fname = $("#fname").val();
        var sub = $("#sub").val();
        var date = $("#date").val();

        // var tblObj = {};
        // tblObj.fname = fname;
        // tblObj.sub = sub;
        // tblObj.date = date;

        var tblObj = { fname: fname, sub: sub, date: date };
        tblRecord.push(tblObj);
        console.log(tblRecord);
        //convert us object to json string

        localStorage.tblData = JSON.stringify(tblRecord);
        createTableRow();
        $("#fname").val("");
        $("#sub").val("");
        $("#date").val("");
    });
});

function createTableRow() {
    //convert json string to js object
    tblRecord = JSON.parse(localStorage.tblData);
    for (var i = 0; i < tblRecord.length; i++) {
        var fname = tblRecord[i].fname;
        var sub = tblRecord[i].sub;
        var date = tblRecord[i].date;

        var tblrow = "<tr><td>" +
            fname + "</td><td>" +
            sub + "</td><td>" +
            date + "</td></tr>";
        $("tbody").append(tblrow);
    }

}