function myFunction() {
    var sname = document.getElementById("subjectName").options[document.getElementById("subjectName").selectedIndex].text;
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
        const node1 = document.createTextNode("Your current attendance is " + cattendance + "%");
        // const node3 = document.createTextNode("Absent: " + absent + "\nTotal Missable: " + tmissable + "\nMissable: " + missable + "\nRemaining classes: " + rclasses + "\nAttendence: " + cattendance + "\nProspective: " + pattendance);
        const node4 = document.createTextNode("Attending all remaining classes will get you at " + pattendance + "%")

        var node5 = document.createTextNode("");
        if (cattendance < 75) {
            var c_to_attend = Math.ceil(((0.75*ctotal - present)/0.25));

            node5 = document.createTextNode("Attend next " + c_to_attend + " classes to get to 75%");
        }
        else {
            var c_to_miss = Math.floor((present - 0.75*ctotal)/0.75);
	
	if (c_to_miss != 0){
            node5 = document.createTextNode("If you miss more than " + c_to_miss + " classes you will fall below 75%");
	}
	else {
	node5 = document.createTextNode("If you miss the next class you will fall below 75%");
}
        }

        var node6 = undefined;
        if (c_to_attend > rclasses) {
            extra_classes = c_to_attend - rclasses;
            var word_class = "classes."
            if (extra_classes == 1) {
                word_class = "class."
            }
            node6 = document.createTextNode("You need " + extra_classes + " extra "+ word_class);
        }
        else {
            node6 = document.createTextNode("You do not need any extra classes.");
        }


        const sub_heading = document.createElement("h2");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        const para3 = document.createElement("p");
        const para4 = document.createElement("p");
        const para5 = document.createElement("p");
        
        sub_heading.appendChild(node0);
        para1.appendChild(node1)
        // para2.appendChild(node3)
        para3.appendChild(node4)
        para4.appendChild(node5);
        para5.appendChild(node6);
        
        const sect = document.createElement("div");
        sect.className = "rsection";

        sect.appendChild(sub_heading);
        sect.appendChild(para1);
        // sect.appendChild(para2);
        sect.appendChild(para3);
        sect.appendChild(para4);
        sect.appendChild(para5);

        document.getElementById("info").insertBefore(sect,document.getElementById("info").firstChild);

        document.getElementById("subjectName").selectedIndex = 0;
        document.getElementById("present").value = "";
        document.getElementById("currentTotal").value = "";
        document.getElementById("netTotal").value = "";

        window.scrollBy(0, 200);

        // const element = document.getElementById("body");
        // element.appendChild(para);
    }

}

function scrollHome() {
    window.scrollTo(0,0);
}

function autofilltotal(subject) {
	const totalClasses= {
	0: "",
	1: 78,
	2: 48,
	3: 78,
	4: 78,
	5: 33,
	6: 7,
	7: 33,
}

	document.querySelector("#netTotal").value = totalClasses[subject]	


}