// Logic for finding the dates in the dates section
const today = new Date();
document.querySelectorAll('.date-item').forEach(p => {
    const monthsBack = parseInt(p.getAttribute('data-offset'), 10);
    const pastDate = new Date(today);
    pastDate.setMonth(pastDate.getMonth() - monthsBack);
    const formatted =  `${pastDate.getDate()}/${pastDate.getMonth()+1}/${pastDate.getFullYear()}`;
    writespan(p, formatted)
});

// Function for making the spans in the left most dates section
function writespan(parent, text) {
    var span = document.createElement("span");
    span.classList.add("dates");
    span.innerText = text;
    parent.appendChild(span);
};

// Sample honour log and quick spreadsheet copy arrays
logArray = ["Roblox Username: ","Roblox Profile link: ","Medal Applying For: ", "Status: "]

// Logic for the clear button
document.getElementById("clearbutton").addEventListener("click", function() {
    document.getElementById("logarea").value = "";
    document.getElementById("logform").reset();
});

document.getElementById("rightdiv").style.width = document.getElementById("sprd-div").offsetWidth + "px";
document.getElementById("logarea").style.width = (document.getElementById("logform").offsetWidth - 50) + "px";

// Logic for the submit button
document.getElementById("logform").addEventListener("submit", function(event) {
    event.preventDefault();
    printlog();
    
});



// Logic for opening the settings menu on clicking the button
/*document.getElementById("settings-button").addEventListener("click", () => {
    const settings = document.getElementsByClassName("settings")[0];
    if (settings.style.display === "none") {
        settings.style.display = "block";
    } else {
        settings.style.display = "none";
    }
}); 
*/

// Function & Logic for writing the honour log output
function printlog() {

    let spreadsheetval = [];
    const sv = spreadsheetval;

    // Logic for adding the username and profile link to the array
    logArray[0] += document.getElementById("username-input").value;
    logArray[1] += document.getElementById("link-input").value;

    // Appends the spreadsheetval array with username, blank spots for division & regiment, and profile link
    sv.push(document.getElementById("username-input").value, "", "", document.getElementById("link-input").value);

    // Logic for determining the log message and spreadsheet value for the medal chosen and it's clasp.
    if (document.getElementById("medal-asm").checked) {
        if (document.getElementById("clasp0").checked) {
            logArray[2] += "Army Service Medal - (No Clasp | 3 Months Service)";
            sv.push("Army Service Medal", "No Clasp");

        } else if (document.getElementById("clasp1").checked) {
            logArray[2] += "Army Service Medal - (Clasp 1 | 6 Months Service)";
            sv.push("Army Service Medal", "Clasp I");

        } else if (document.getElementById("clasp2").checked) {
            logArray[2] += "Army Service Medal - (Clasp 2 | 9 Months Service)";
            sv.push("Army Service Medal", "Clasp II");

        } else if (document.getElementById("clasp3").checked) {
            logArray[2] += "Army Service Medal - (Clasp 3 | 12 Months Service)";
            sv.push("Army Service Medal", "Clasp III");

        }
    } else if (document.getElementById("medal-avc").checked) {
        if (document.getElementById("clasp0").checked) {
            logArray[2] += "Army Veteran Cross - (No Clasp | 18 Months Service)";
            sv.push("Army Veteran Cross", "No Clasp");

        } else if (document.getElementById("clasp1").checked) {
            logArray[2] += "Army Veteran Cross - (Clasp 1 | 24 Months Service)";
            sv.push("Army Veteran Cross", "Clasp I");

        } else if (document.getElementById("clasp2").checked) {
            logArray[2] += "Army Veteran Cross - (Clasp 2 | 30 Months Service)";
            sv.push("Army Veteran Cross", "Clasp II");

        } else if (document.getElementById("clasp3").checked) {
            logArray[2] += "Army Veteran Cross - (Clasp 3 | 36 Months Service)";
            sv.push("Army Veteran Cross", "Clasp III");

        }
    } else if (document.getElementById("medal-rec").checked) {
        if (document.getElementById("clasp0").checked) {
            logArray[2] += "Army Recruitment Medal - (No Clasp | 20 Recruits)";
            sv.push("Recruitment Accolade", "No Clasp");

        } else if (document.getElementById("clasp1").checked) {
            logArray[2] += "Army Recruitment Medal - (Clasp 1 | 40 Recruits)";
            sv.push("Recruitment Accolade", "Clasp I");

        } else if (document.getElementById("clasp2").checked) {
            logArray[2] += "Army Recruitment Medal - (Clasp 2 | 70 Recruits)";
            sv.push("Recruitment Accolade", "Clasp II");

        } else if (document.getElementById("clasp3").checked) {
            logArray[2] += "Army Recruitment Medal - (Clasp 3 | 100 Recruits)";
            sv.push("Recruitment Accolade", "Clasp III");

        }
    } 
    if (document.getElementById("medal-wag").checked) {
        logArray[2] += "Wagram Campaign Medal";
        sv.push("Wagram Campaign", "No Clasp");

    } else if (document.getElementById("medal-wat").checked) {
        logArray[2] += "Waterloo Campaign Medal";
        sv.push("Waterloo Campaign", "No Clasp");

    } else if (document.getElementById("medal-ibe").checked) {
        logArray[2] += "Iberian Campaign Medal";
        sv.push("Iberian Campaign", "No Clasp");

    } else if (document.getElementById("medal-wal").checked) {
        logArray[2] += "Walcheren Campaign Medal";
        sv.push("Walcheren Campaign", "No Clasp");

    }

    // Logic for what to write in the honour log depending if the awarded checkbox is ticked
    if (document.getElementById("checkbox-award").checked) {
        logArray[3] += "Awarded.";
    } else {
        logArray[3] += "Rejected";
    }
    // Logic for adding a reason to the rejection is there is one
    const reason = document.getElementById("reason-input").value;
    if (reason !== "") {
        logArray[3] += ` - (${reason})`;
    }

    // Appends the current date today for the quick spreadsheet log function
    sv.push(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);
    sv.push("");
    sv.push(""); // Space that cookie username would go
    
    // Joins all values in the spreadsheet value array with a tab for gaps
    const spreadsheet_final = sv.join("\t");

    // Puts the respective spreadsheet value into the preview table
    const cells = document.getElementById("tablepreview").getElementsByTagName("td");
    for (i = 0; i < 9; i++) {
        cells[i].innerText = spreadsheetval[i]
    };
    spreadsheetval = []

    // Copies the joined spreadsheet line to the clipboard
    document.getElementById("copyspreadsheet-button").addEventListener("click", () => {
        navigator.clipboard.writeText(spreadsheet_final);
        spreadsheetval = []
    });

    // Joins the log array into one message and puts it in the log area
    document.getElementById("logarea").value = logArray.join("\n");
    logArray = ["Roblox Username: ","Roblox Profile link: ","Medal Applying For: ", "Status: "];
    
}
