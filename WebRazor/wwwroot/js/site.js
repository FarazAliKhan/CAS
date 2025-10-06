// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(".breadcrumb").children().first().remove();

function submitForm(sectionId) {
    var form = document.getElementById("reviewForm");
    form.action = "/Review?sectionId=" + sectionId;
    form.method = "POST";
    form.submit();
}

function focusOnForm(sectionId) {
    let sectField = document.getElementById("sectionId");
    if (sectField != null) {
        let sectId = sectField.value;
        if (sectId != null && sectId != "") {
            fieldFocus(sectId);
        }
    }
}

function fieldFocus(sectionId) {
    switch (sectionId) {
        case "1": document.getElementById("txtFIELD1_1_1").focus();
            break;
        case "2": document.getElementById("txtFIELD2_1_1").focus();
            break;
        case "3": document.getElementById("txtFIELD3_1").focus();
            break;
        case "4": document.getElementById("txtFIELD4_1_1").focus();
            break;
        case "5": document.getElementById("txtFIELD5_1").focus();
            break;
        case "6": document.getElementById("txtFIELD6_1_1").focus();
            break;
        case "7": document.getElementById("txtFIELD7_1_1").focus();
            break;
        case "8": document.getElementById("txtFIELD8_1").focus();
            break;
        case "9": document.getElementById("txtFIELD9_1").focus();
            break;
        case "10": document.getElementById("txtFIELD10_1").focus();
            break;
        case "11": document.getElementById("txtFIELD11_1").focus();
            break;
        case '0': document.getElementById("txtCOURT").focus();
            break;
    }
}

function Save() {
    //var xhr = new XMLHttpRequest();
    //var url = "/Review";
    //xhr.open("POST", url, true);

    let firstname = $("#firstName").val();
    let lastname = $("#lastName").val();
    let dob = $("#dob").val();

    let datastring = `{
        "FirstName": ` + firstname + `,` +
       `"LastName": ` + lastname +
        `}`;

    let obj = {
        "FirstName" : firstname,
        "LastName": lastname,
        "dob": dob
    }

    $.ajax({
        type: "POST",
        url: "/Review?handler=ReviewToCreate",
        data: { data: JSON.stringify(datastring) },
        dataType: "json",
        success: function (data) {
            window.location.href = "/Create/Load"
        }
    })
}