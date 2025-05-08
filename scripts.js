const today = new Date();
document.querySelectorAll('.date-item').forEach(p => {
    const monthsBack = parseInt(p.getAttribute('data-offset'), 10);
    const pastDate = new Date(today);
    pastDate.setMonth(pastDate.getMonth() - monthsBack);

    const formatted =  `${pastDate.getDate()}/${pastDate.getMonth()+1}/${pastDate.getFullYear()}`;
    p.textContent += ` ${formatted}`;
});


logArray = ["Roblox Username: ","Roblox Profile link: ","Medal Applying For: ", "Status: "]
spreadsheetval = []

document.getElementById("clearbutton").addEventListener("click", function() {
    document.getElementById("logarea").value = "";
    document.getElementById("logform").reset();
});

document.getElementById("logform").addEventListener("submit", function(event) {
    event.preventDefault();
    printlog();
});


function printlog() {
    let logArray = [
        "Roblox Username: " + document.getElementById("username-input").value,
        "Roblox Profile link: " + document.getElementById("link-input").value,
        "Medal Applying For: ",
        "Status: "
    ];

    spreadsheetval.push(document.getElementById("username-input").value);
    spreadsheetval.push(".");
    spreadsheetval.push(".");
    spreadsheetval.push(document.getElementById("link-input").value);

    if (document.getElementById("medal-asm").checked) {
        if (document.getElementById("clasp0").checked) {
            logArray[2] += "Army Service Medal - (No Clasp | 3 Months Service)";
            spreadsheetval.push("Army Service Medal");
            spreadsheetval.push("No Clasp");
        } else if (document.getElementById("clasp1").checked) {
            logArray[2] += "Army Service Medal - (Clasp 1 | 6 Months Service)";
            spreadsheetval.push("Army Service Medal");
            spreadsheetval.push("Clasp I");
        } else if (document.getElementById("clasp2").checked) {
            logArray[2] += "Army Service Medal - (Clasp 2 | 9 Months Service)";
            spreadsheetval.push("Army Service Medal");
            spreadsheetval.push("Clasp II");
        } else if (document.getElementById("clasp3").checked) {
            logArray[2] += "Army Service Medal - (Clasp 3 | 12 Months Service)";
            spreadsheetval.push("Army Service Medal");
            spreadsheetval.push("Clasp III");
        }
    } else if (document.getElementById("medal-avc").checked) {
        if (document.getElementById("clasp0").checked) {
            logArray[2] += "Army Veteran Cross - (No Clasp | 18 Months Service)";
            spreadsheetval.push("Army Veteran Cross");
            spreadsheetval.push("No Clasp");
        } else if (document.getElementById("clasp1").checked) {
            logArray[2] += "Army Veteran Cross - (Clasp 1 | 24 Months Service)";
            spreadsheetval.push("Army Veteran Cross");
            spreadsheetval.push("Clasp I");
        } else if (document.getElementById("clasp2").checked) {
            logArray[2] += "Army Veteran Cross - (Clasp 2 | 30 Months Service)";
            spreadsheetval.push("Army Veteran Cross");
            spreadsheetval.push("Clasp II");
        } else if (document.getElementById("clasp3").checked) {
            logArray[2] += "Army Veteran Cross - (Clasp 3 | 36 Months Service)";
            spreadsheetval.push("Army Veteran Cross");
            spreadsheetval.push("Clasp III");
        }
    } else if (document.getElementById("medal-rec").checked) {
        if (document.getElementById("clasp0").checked) {
            logArray[2] += "Army Recruitment Medal - (No Clasp | 20 Recruits)";
            spreadsheetval.push("Recruitment Accolade");
            spreadsheetval.push("No Clasp");
        } else if (document.getElementById("clasp1").checked) {
            logArray[2] += "Army Recruitment Medal - (Clasp 1 | 40 Recruits)";
            spreadsheetval.push("Recruitment Accolade");
            spreadsheetval.push("Clasp I");
        } else if (document.getElementById("clasp2").checked) {
            logArray[2] += "Army Recruitment Medal - (Clasp 2 | 70 Recruits)";
            spreadsheetval.push("Recruitment Accolade");
            spreadsheetval.push("Clasp II");
        } else if (document.getElementById("clasp3").checked) {
            logArray[2] += "Army Recruitment Medal - (Clasp 3 | 100 Recruits)";
            spreadsheetval.push("Recruitment Accolade");
            spreadsheetval.push("Clasp III");
        }
    } 
    if (document.getElementById("medal-wag").checked) {
        logArray[2] += "Wagram Campaign Medal";
        spreadsheetval.push("Wagram Campaign");
        spreadsheetval.push("No Clasp");
    } else if (document.getElementById("medal-wat").checked) {
        logArray[2] += "Waterloo Campaign Medal";
        spreadsheetval.push("Waterloo Campaign");
        spreadsheetval.push("No Clasp");
    } else if (document.getElementById("medal-ibe").checked) {
        logArray[2] += "Iberian Campaign Medal";
        spreadsheetval.push("Iberian Campaign");
        spreadsheetval.push("No Clasp");
    } else if (document.getElementById("medal-wal").checked) {
        logArray[2] += "Walcheren Campaign Medal";
        spreadsheetval.push("Walcheren Campaign");
        spreadsheetval.push("No Clasp");
    }

    spreadsheetval.push(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);


    if (document.getElementById("checkbox-award").checked) {
        logArray[3] += "Awarded.";
    } else {
        logArray[3] += "Rejected";
    }

    const reason = document.getElementById("reason-input").value;
    if (reason !== "") {
        logArray[3] += ` - (${reason})`;
    }

    const spreadsheet_final = spreadsheetval.join("\t");

    document.getElementById("copyspreadsheet-button").addEventListener("click", function() {
        navigator.clipboard.writeText(spreadsheet_final);
        spreadsheetval = []
    });



    document.getElementById("logarea").value = logArray.join("\n");

    
}

