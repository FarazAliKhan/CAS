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
            setTabsBackgroundDark();
            hideDetails("detailsBasicInfo");
            fieldFocus(sectId);
        }
    }
}

function fieldFocus(sectionId) {
    switch (sectionId) {
        case "1": 
            $("#lidetails1").css("background", "#1C578A");
            $("#activeDetailsId").val("details1");
            $('#details1').removeAttr('hidden');
            document.getElementById("txtFIELD1_1_1").focus();
            break;
        case "2": 
            $("#lidetails2").css("background", "#1C578A");
            $("#activeDetailsId").val("details2");
            $('#details2').removeAttr('hidden');
            document.getElementById("txtFIELD2_1_1").focus();
            break;
        case "3": 
            $("#lidetails3").css("background", "#1C578A");
            $("#activeDetailsId").val("details3");
            $('#details3').removeAttr('hidden');
            document.getElementById("txtFIELD3_1").focus();
            break;
        case "4": 
            $("#lidetails4").css("background", "#1C578A");
            $("#activeDetailsId").val("details4");
            $('#details4').removeAttr('hidden');
            document.getElementById("txtFIELD4_1_1").focus();
            break;
        case "5": 
            $("#lidetails5").css("background", "#1C578A");
            $("#activeDetailsId").val("details5");
            $('#details5').removeAttr('hidden');
            document.getElementById("txtFIELD5_1").focus();
            break;
        case "6": 
            $("#lidetails6").css("background", "#1C578A");
            $("#activeDetailsId").val("details6");
            $('#details6').removeAttr('hidden');
            document.getElementById("txtFIELD6_1_1").focus();
            break;
        case "7": 
            $("#lidetails7").css("background", "#1C578A");
            $("#activeDetailsId").val("details7");
            $('#details7').removeAttr('hidden');
            document.getElementById("txtFIELD7_1_1").focus();
            break;
        case "8": 
            $("#lidetails8").css("background", "#1C578A");
            $("#activeDetailsId").val("details8");
            $('#details8').removeAttr('hidden');
            document.getElementById("txtFIELD8_1").focus();
            break;
        case "9": 
            $("#lidetails9").css("background", "#1C578A");
            $("#activeDetailsId").val("details9");
            $('#details9').removeAttr('hidden');
            document.getElementById("txtFIELD9_1").focus();
            break;
        case "10": 
            $("#lidetails10").css("background", "#1C578A");
            $("#activeDetailsId").val("details10");
            $('#details10').removeAttr('hidden');
            document.getElementById("txtFIELD10_1").focus();
            break;
        case "11": 
            $("#lidetails11").css("background", "#1C578A");
            $("#activeDetailsId").val("details11");
            $('#details11').removeAttr('hidden');
            document.getElementById("txtFIELD11_1").focus();
            break;
        case '0': 
            $("#lidetailsBasicInfo").css("background", "#1C578A");
            $("#activeDetailsId").val("detailsBasicInfo");
            $('#detailsBasicInfo').removeAttr('hidden');
            document.getElementById("txtCOURT").focus();
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

function showDetails(detailsId) {
    let activeDetails = $("#activeDetailsId").val();
    hideDetails(activeDetails);
    $('#li' + detailsId).css("background", "#1C578A");
    $('#' + detailsId).removeAttr('hidden');
    $("#activeDetailsId").val(detailsId);
}

function hideDetails(detailsId) {
    $('#li' + detailsId).css("background", "#26374A");
    $('#' + detailsId).attr('hidden', true);
}

function gotoPrevious() {
    let activeDetails = $("#activeDetailsId").val();
    switch (activeDetails) {
        case "detailsBasicInfo": 
            break;
        case "details1": showDetails("detailsBasicInfo");
            $("#lidetailsBasicInfo").css("background", "#1C578A");
            $("#lidetails1").css("background", "#26374A");
            break;
        case "details2": showDetails("details1");
            $("#lidetails1").css("background", "#1C578A");
            $("#lidetails2").css("background", "#26374A");
            break;
        case "details3": showDetails("details2");
            $("#lidetails2").css("background", "#1C578A");
            $("#lidetails3").css("background", "#26374A");
            break;
        case "details4": showDetails("details3");
            $("#lidetails3").css("background", "#1C578A");
            $("#lidetails4").css("background", "#26374A");
            break;
        case "details5": showDetails("details4");
            $("#lidetails4").css("background", "#1C578A");
            $("#lidetails5").css("background", "#26374A");
            break;
        case "details6": showDetails("details5");
            $("#lidetails5").css("background", "#1C578A");
            $("#lidetails6").css("background", "#26374A");
            break;
        case "details7": showDetails("details6");
            $("#lidetails6").css("background", "#1C578A");
            $("#lidetails7").css("background", "#26374A");
            break;
        case "details8": showDetails("details7");
            $("#lidetails7").css("background", "#1C578A");
            $("#lidetails8").css("background", "#26374A");
            break;
        case "details9": showDetails("details8");
            $("#lidetails8").css("background", "#1C578A");
            $("#lidetails9").css("background", "#26374A");
            break;
        case "details10": showDetails("details9");
            $("#lidetails9").css("background", "#1C578A");
            $("#lidetails10").css("background", "#26374A");
            break;
        case "details11": showDetails("details10");
            $("#lidetails10").css("background", "#1C578A");
            $("#lidetails11").css("background", "#26374A");
            break;
    }
}

function gotoNext() {
    let activeDetails = $("#activeDetailsId").val();
    switch (activeDetails) {
        case "detailsBasicInfo": showDetails("details1");
            $("#lidetails1").css("background", "#1C578A");
            $("#lidetailsBasicInfo").css("background", "#26374A");
            break;
        case "details1": showDetails("details2");
            $("#lidetails2").css("background", "#1C578A");
            $("#lidetails1").css("background", "#26374A");
            break;
        case "details2": showDetails("details3");
            $("#lidetails3").css("background", "#1C578A");
            $("#lidetails2").css("background", "#26374A");
            break;
        case "details3": showDetails("details4");
            $("#lidetails4").css("background", "#1C578A");
            $("#lidetails3").css("background", "#26374A");
            break;
        case "details4": showDetails("details5");
            $("#lidetails5").css("background", "#1C578A");
            $("#lidetails4").css("background", "#26374A");
            break;
        case "details5": showDetails("details6");
            $("#lidetails6").css("background", "#1C578A");
            $("#lidetails5").css("background", "#26374A");
            break;
        case "details6": showDetails("details7");
            $("#lidetails7").css("background", "#1C578A");
            $("#lidetails6").css("background", "#26374A");
            break;
        case "details7": showDetails("details8");
            $("#lidetails8").css("background", "#1C578A");
            $("#lidetails7").css("background", "#26374A");
            break;
        case "details8": showDetails("details9");
            $("#lidetails9").css("background", "#1C578A");
            $("#lidetails8").css("background", "#26374A");
            break;
        case "details9": showDetails("details10");
            $("#lidetails10").css("background", "#1C578A");
            $("#lidetails9").css("background", "#26374A");
            break;
        case "details10": showDetails("details11");
            $("#lidetails11").css("background", "#1C578A");
            $("#lidetails10").css("background", "#26374A");
            break;
        case "details11": 
            break;
    }
}

function enableDisableReview() {
    if ($("#txtCOURT").val() != ""
        && $("#intREPORTINGYEAR").val() != ""
        && $("#dtFROM").val() != ""
        && $("#dtTO").val() != ""
    ) {
        $("#btnReview").removeAttr('disabled');
    }
    else {
        $("#btnReview").attr('disabled', true);
    }
}

function setTabsBackgroundDark() {
    $("#lidetailsBasicInfo").css("background", "#26374A");
    $("#lidetails1").css("background", "#26374A");
    $("#lidetails2").css("background", "#26374A");
    $("#lidetails3").css("background", "#26374A");
    $("#lidetails4").css("background", "#26374A");
    $("#lidetails5").css("background", "#26374A");
    $("#lidetails6").css("background", "#26374A");
    $("#lidetails7").css("background", "#26374A");
    $("#lidetails8").css("background", "#26374A");
    $("#lidetails9").css("background", "#26374A");
    $("#lidetails10").css("background", "#26374A");
    $("#lidetails11").css("background", "#26374A");
}
