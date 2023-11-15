function myFunction() {
    var sname = document.getElementById("subjectName").value;
    var present = eval(document.getElementById("present").value);
    var ctotal = eval(document.getElementById("currentTotal").value);
    var total = eval(document.getElementById("netTotal").value);

    console.log(sname, present, ctotal, total);

    if (sname == "" || present == undefined || ctotal == undefined || total == undefined) {
        alert("Field(s) incomplete!");
    }
    else if (Number.isInteger(present) == false || Number.isInteger(ctotal) == false || Number.isInteger(total) == false) {
        alert("Enter positive integers only!");
    }
    else if (present < 0 || ctotal < 1 || total < 1) {
        alert("Improper values!");
    }
    else if (present > ctotal) {
        alert("Present cannot be greater than Current Total");
    }
    else if (ctotal > total) {
        alert("Current Total cannot be greater than Total Classes");
    }
    else {
        var absent = ctotal - present;
        var tmissable = Math.floor(0.25*total)
        var missable = tmissable - absent;
        var rclasses = total - ctotal;
        if (missable < 0) {
            missable = 0;
        }
        var cattendance = Math.round((present/ctotal)*10000)/100;
        var pattendance = Math.round(((present + rclasses)/total)*10000)/100;
        // alert("Absent: " + absent + "\nTotal Missable: " + tmissable + "\nMissable: " + missable + "\nRemaining classes: " + rclasses + "\nAttendence: " + cattendance + "\nProspective: " + pattendance);

        const node0 = document.createTextNode(sname);
        const node1 = document.createTextNode("Your current attendance is " + pattendance + "%");
        const node3 = document.createTextNode("Absent: " + absent + "\nTotal Missable: " + tmissable + "\nMissable: " + missable + "\nRemaining classes: " + rclasses + "\nAttendence: " + cattendance + "\nProspective: " + pattendance);

        const sub_heading = document.createElement("h2");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        
        sub_heading.appendChild(node0);
        para1.appendChild(node1)
        para2.appendChild(node3)
        
        const sect = document.createElement("div");
        sect.className = "rsection";

        sect.appendChild(sub_heading);
        sect.appendChild(para1);
        sect.appendChild(para2);

        document.body.appendChild(sect);

        document.getElementById("subjectName").value = "";
        document.getElementById("present").value = "";
        document.getElementById("currentTotal").value = "";
        document.getElementById("netTotal").value = "";

        // const element = document.getElementById("body");
        // element.appendChild(para);
    }

}