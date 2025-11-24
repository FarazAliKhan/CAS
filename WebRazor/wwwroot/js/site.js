// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(".breadcrumb").children().first().remove();
enableDisableReview();

function submitForm(sectionId) {
    var form = document.getElementById("reviewForm");
    form.action = "/Review?sectionId=" + sectionId;
    form.method = "POST";
    form.submit();
}

function submitForReview() {
    var validator = $("form").validate();
    if ($('form').valid()) {
        if (!(validate())) {
            $('#validationModal').modal('show');
            return;
        }
        else {
            var form = document.getElementById("createForm");
            form.submit();
        }
    }
    else {
        var errors = validator.errorList;
        showValidationSummary(errors);
    }
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
            //$("#lidetails1").css("background", "#1C578A");
            $("#activeDetailsId").val("details1");
            $('#details1').removeAttr('hidden');
            document.getElementById("txtFIELD1_1_1").focus();
            document.getElementById("txtFIELD1_1_1").setAttribute("required", "true");
            makeSection1Required();
            break;
        case "2":
            //$("#lidetails2").css("background", "#1C578A");
            $("#activeDetailsId").val("details2");
            $('#details2').removeAttr('hidden');
            document.getElementById("txtFIELD2_1_1").focus();
            makeSection2Required();
            break;
        case "3":
           // $("#lidetails3").css("background", "#1C578A");
            $("#activeDetailsId").val("details3");
            $('#details3').removeAttr('hidden');
            document.getElementById("txtFIELD3_1").focus();
            makeSection3Required();
            break;
        case "4":
            //$("#lidetails4").css("background", "#1C578A");
            $("#activeDetailsId").val("details4");
            $('#details4').removeAttr('hidden');
            document.getElementById("txtFIELD4_1_1").focus();
            makeSection4Required();
            break;
        case "5":
            //$("#lidetails5").css("background", "#1C578A");
            $("#activeDetailsId").val("details5");
            $('#details5').removeAttr('hidden');
            document.getElementById("txtFIELD5_1").focus();
            makeSection5Required();
            break;
        case "6":
            //$("#lidetails6").css("background", "#1C578A");
            $("#activeDetailsId").val("details6");
            $('#details6').removeAttr('hidden');
            document.getElementById("txtFIELD6_1_1").focus();
            makeSection6Required();
            break;
        case "7":
            //$("#lidetails7").css("background", "#1C578A");
            $("#activeDetailsId").val("details7");
            $('#details7').removeAttr('hidden');
            document.getElementById("txtFIELD7_1_1").focus();
            makeSection7Required();
            break;
        case "8":
            //$("#lidetails8").css("background", "#1C578A");
            $("#activeDetailsId").val("details8");
            $('#details8').removeAttr('hidden');
            document.getElementById("txtFIELD8_1").focus();
            makeSection8Required();
            break;
        case "9":
            //$("#lidetails9").css("background", "#1C578A");
            $("#activeDetailsId").val("details9");
            $('#details9').removeAttr('hidden');
            document.getElementById("txtFIELD9_1").focus();
            makeSection9Required();
            break;
        case "10":
            //$("#lidetails10").css("background", "#1C578A");
            $("#activeDetailsId").val("details10");
            $('#details10').removeAttr('hidden');
            document.getElementById("txtFIELD10_1").focus();
            makeSection10Required();
            break;
        case "11":
            //$("#lidetails11").css("background", "#1C578A");
            $("#activeDetailsId").val("details11");
            $('#details11').removeAttr('hidden');
            document.getElementById("txtFIELD11_1").focus();
            makeSection11Required();
            break;
        case "12":
            //$("#lidetails12").css("background", "#1C578A");
            $("#activeDetailsId").val("details12");
            $('#details12').removeAttr('hidden');
            document.getElementById("txtFIED_12_Comments").focus();
            break;
        case '0':
            //$("#lidetailsBasicInfo").css("background", "#1C578A");
            $("#activeDetailsId").val("detailsBasicInfo");
            $('#detailsBasicInfo').removeAttr('hidden');
            document.getElementById("txtCOURT").focus();
            break;
    }
}

function showDetails(detailsId) {
    let activeDetails = $("#activeDetailsId").val();
    hideDetails(activeDetails);
    $('#li' + detailsId).css("background", "#1C578A");
    $('#' + detailsId).removeAttr('hidden');
    $("#activeDetailsId").val(detailsId);
    const summary = document.getElementById("validationSummary");
    summary.classList.add("d-none");
    switch (detailsId) {
        case "detailsBasicInfo":
            break;
        case "details1":
            makeSection1Required();
            break;
        case "details2":
            makeSection2Required();
            break;
        case "details3":
            makeSection3Required();
            break;
        case "details4":
            makeSection4Required();
            break;
        case "details5":
            makeSection5Required();
            break;
        case "details6":
            makeSection6Required();
            break;
        case "details7":
            makeSection7Required();
            break;
        case "details8":
            makeSection8Required();
            break;
        case "details9":
            makeSection9Required();
            break;
        case "details10":
            makeSection10Required();
            break;
        case "details11":
            makeSection11Required();
            break;
        case "details12":
            break;
    }
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
        case "details1":
            $("#btnPrevious").attr("hidden", true);
            $("#btnNext").removeAttr("hidden");
            showDetails("detailsBasicInfo");
            //$("#lidetailsBasicInfo").css("background", "#1C578A");
            //$("#lidetails1").css("background", "#26374A");
            makeSection1NotRequired();
            break;
        case "details2": showDetails("details1");
            //$("#lidetails1").css("background", "#1C578A");
            //$("#lidetails2").css("background", "#26374A");
            makeSection2NotRequired();
            break;
        case "details3": showDetails("details2");
            //$("#lidetails2").css("background", "#1C578A");
            //$("#lidetails3").css("background", "#26374A");
            makeSection3NotRequired();
            break;
        case "details4": showDetails("details3");
            //$("#lidetails3").css("background", "#1C578A");
            //$("#lidetails4").css("background", "#26374A");
            makeSection4NotRequired();
            break;
        case "details5": showDetails("details4");
            //$("#lidetails4").css("background", "#1C578A");
            //$("#lidetails5").css("background", "#26374A");
            makeSection5NotRequired();
            break;
        case "details6": showDetails("details5");
            //$("#lidetails5").css("background", "#1C578A");
            //$("#lidetails6").css("background", "#26374A");
            makeSection6NotRequired();
            break;
        case "details7": showDetails("details6");
            //$("#lidetails6").css("background", "#1C578A");
            //$("#lidetails7").css("background", "#26374A");
            makeSection7NotRequired();
            break;
        case "details8": showDetails("details7");
            //$("#lidetails7").css("background", "#1C578A");
            //$("#lidetails8").css("background", "#26374A");
            makeSection8NotRequired();
            break;
        case "details9": showDetails("details8");
            //$("#lidetails8").css("background", "#1C578A");
            //$("#lidetails9").css("background", "#26374A");
            makeSection9NotRequired();
            break;
        case "details10": showDetails("details9");
            //$("#lidetails9").css("background", "#1C578A");
            //$("#lidetails10").css("background", "#26374A");
            makeSection10NotRequired();
            break;
        case "details11": showDetails("details10");
            //$("#lidetails10").css("background", "#1C578A");
            //$("#lidetails11").css("background", "#26374A");
            makeSection11NotRequired();
            break;
        case "details12":
            $("#btnReview").attr("hidden", true);
            $("#revMessage").attr("hidden", true);
            $("#btnNext").removeAttr("hidden");
            showDetails("details11");
            //$("#lidetails11").css("background", "#1C578A");
            //$("#lidetails12").css("background", "#26374A");
            break;
    }
    const summary = document.getElementById("validationSummary");
    summary.classList.add("d-none");
}

function gotoNext() {
    var validator = $("form").validate();
    if ($('form').valid()) {
        const summary = document.getElementById("validationSummary");
        summary.classList.add("d-none");
        let activeDetails = $("#activeDetailsId").val();
        switch (activeDetails) {
            case "detailsBasicInfo":
                $("#btnPrevious").removeAttr("hidden");
                showDetails("details1");
               // $("#lidetails1").css("background", "#1C578A");
                // $("#lidetailsBasicInfo").css("background", "#26374A");
                makeSection1Required();
                break;
            case "details1": showDetails("details2");
                //$("#lidetails2").css("background", "#1C578A");
                //$("#lidetails1").css("background", "#26374A");
                makeSection2Required();
                break;
            case "details2": showDetails("details3");
                //$("#lidetails3").css("background", "#1C578A");
                //$("#lidetails2").css("background", "#26374A");
                makeSection3Required();
                break;
            case "details3": showDetails("details4");
                //$("#lidetails4").css("background", "#1C578A");
                //$("#lidetails3").css("background", "#26374A");
                makeSection4Required();
                break;
            case "details4": showDetails("details5");
                //$("#lidetails5").css("background", "#1C578A");
                //$("#lidetails4").css("background", "#26374A");
                makeSection5Required();
                break;
            case "details5": showDetails("details6");
                //$("#lidetails6").css("background", "#1C578A");
                //$("#lidetails5").css("background", "#26374A");
                makeSection6Required();
                break;
            case "details6": showDetails("details7");
                //$("#lidetails7").css("background", "#1C578A");
                //$("#lidetails6").css("background", "#26374A");
                makeSection7Required();
                break;
            case "details7": showDetails("details8");
                //$("#lidetails8").css("background", "#1C578A");
                //$("#lidetails7").css("background", "#26374A");
                makeSection8Required();
                break;
            case "details8": showDetails("details9");
                //$("#lidetails9").css("background", "#1C578A");
                //$("#lidetails8").css("background", "#26374A");
                makeSection9Required();
                break;
            case "details9": showDetails("details10");
                //$("#lidetails10").css("background", "#1C578A");
                //$("#lidetails9").css("background", "#26374A");
                makeSection10Required();
                break;
            case "details10": showDetails("details11");
                //$("#lidetails11").css("background", "#1C578A");
                //$("#lidetails10").css("background", "#26374A");
                makeSection11Required();
                break;
            case "details11": showDetails("details12");
                //$("#lidetails12").css("background", "#1C578A");
                //$("#lidetails11").css("background", "#26374A");
                $("#btnNext").attr("hidden", true);
                $("#btnReview").removeAttr("hidden");
                $("#btnPrevious").removeAttr("hidden");
                $("#revMessage").removeAttr("hidden");
                break;
            case "details12":
                break;
        }
    }
    else {
        var errors = validator.errorList;
        showValidationSummary(errors);
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
    $("#lidetails12").css("background", "#26374A");
}

function submitBasicInfoForm() {
    var form = document.getElementById("basicInfoForm");
    form.action = "/Create?handler=basicinfo";
    form.method = "POST";
    form.submit();
}

//$('form').each(function () {
//    var validator = $(this).data('validator');
//    if (validator) {
//        validator.settings.showErrors = function (map, errors) {
//            this.defaultShowErrors();
//            if ($('div[data-valmsg-summary=true] li:visible').length) {
//                this.checkForm();
//                if (this.errorList.length)
//                    $(this.currentForm).triggerHandler("invalid-form", [this]);
//                else
//                    $(this.currentForm).resetSummary();
//            }
//        };
//    }
//});

//jQuery.fn.resetSummary = function () {
//    var form = this.is('form') ? this : this.closest('form');
//    form.find("[data-valmsg-summary=true]")
//        .removeClass("validation-summary-errors")
//        .addClass("validation-summary-valid")
//        .find("ul")
//        .empty();
//    return this;
//};

//$('form').validate({
//    errorPlacement: function (error, element) {
//        element = element.closest('li');
//        element = element.children(':first-child');
//        error.insertBefore(element);
//        error.addClass('message');
//        $(function () {                                 // my function
//            var errorIndex = $(error).index('div');
//            var errorId = 'errordiv' + errorIndex.toString();
//            $(error).attr('id', errorId);
//            $('.errorList').append('<li><a href="#' + errorId + '">' + $(error).text() + '</a></li>');
//        });
//    }
//});

//$('form').validate({
//    errorPlacement: function (error, element) {
//        showValidationSummary(["Please enter", "value"]);
//    }
//});

function showValidationSummary(errors) {
    const summary = document.getElementById("validationSummary");
    const list = document.getElementById("errorList");
    list.innerHTML = ""; // Clear previous errors

    errors.forEach(error => {
        const li = document.createElement("li");
        li.textContent = error.message;
        list.appendChild(li);
    });

    summary.classList.remove("d-none");
}

// Make Required
function makeSection1Required() {
    document.getElementById("txtFIELD1_1_1").setAttribute("required", "true");
    document.getElementById("txtFIELD1_1_2").setAttribute("required", "true");
    document.getElementById("txtFIELD1_1_3").setAttribute("required", "true");
    document.getElementById("txtFIELD1_1_4").setAttribute("required", "true");
    document.getElementById("txtFIELD1_1_5").setAttribute("required", "true");
    document.getElementById("txtFIELD1_1_6").setAttribute("required", "true");
    document.getElementById("txtFIELD1_1_7").setAttribute("required", "true");
    document.getElementById("txtFIELD1_2_1").setAttribute("required", "true");
    document.getElementById("txtFIELD1_2_2").setAttribute("required", "true");
    document.getElementById("txtFIELD1_2_3").setAttribute("required", "true");
    document.getElementById("txtFIELD1_2_4").setAttribute("required", "true");
    document.getElementById("txtFIELD1_2_5").setAttribute("required", "true");
}

function makeSection2Required() {
    document.getElementById("txtFIELD2_1_1").setAttribute("required", "true");
    document.getElementById("txtFIELD2_1_2").setAttribute("required", "true");
    document.getElementById("txtFIELD2_2_1_1").setAttribute("required", "true");
    document.getElementById("txtFIELD2_2_1_2").setAttribute("required", "true");
    document.getElementById("txtFIELD2_2_1_3").setAttribute("required", "true");
    document.getElementById("txtFIELD2_2_2_1").setAttribute("required", "true");
    document.getElementById("txtFIELD2_2_2_2").setAttribute("required", "true");
    document.getElementById("txtFIELD2_2_2_3").setAttribute("required", "true");
}

function makeSection3Required() {
    document.getElementById("txtFIELD3_1").setAttribute("required", "true");
    document.getElementById("txtFIELD3_2").setAttribute("required", "true");
}

function makeSection4Required() {
    document.getElementById("txtFIELD4_1_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_4_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_4_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_4_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_5_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_5_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_5_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_6_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_6_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_1_6_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_4_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_4_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_4_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_5_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_5_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_5_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_6_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_6_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_2_6_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_4_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_4_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_4_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_5_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_5_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_5_3").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_6_1").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_6_2").setAttribute("required", "true");
    document.getElementById("txtFIELD4_3_6_3").setAttribute("required", "true");
}

function makeSection5Required() {
    document.getElementById("txtFIELD5_1").setAttribute("required", "true");
    document.getElementById("txtFIELD5_2").setAttribute("required", "true");
    document.getElementById("txtFIELD5_3").setAttribute("required", "true");
    document.getElementById("txtFIELD5_4").setAttribute("required", "true");
}

function makeSection6Required() {
    document.getElementById("txtFIELD6_1_1").setAttribute("required", "true");
    document.getElementById("txtFIELD6_1_2").setAttribute("required", "true");
    document.getElementById("txtFIELD6_1_3").setAttribute("required", "true");
    document.getElementById("txtFIELD6_2_1").setAttribute("required", "true");
    document.getElementById("txtFIELD6_2_2").setAttribute("required", "true");
    document.getElementById("txtFIELD6_2_3").setAttribute("required", "true");
    document.getElementById("txtFIELD6_3_1").setAttribute("required", "true");
    document.getElementById("txtFIELD6_3_2").setAttribute("required", "true");
    document.getElementById("txtFIELD6_3_3").setAttribute("required", "true");
}

function makeSection7Required() {
    document.getElementById("txtFIELD7_1_1").setAttribute("required", "true");
    document.getElementById("txtFIELD7_1_2").setAttribute("required", "true");
    document.getElementById("txtFIELD7_1_3").setAttribute("required", "true");
}

function makeSection8Required() {
    document.getElementById("txtFIELD8_1").setAttribute("required", "true");
    document.getElementById("txtFIELD8_2").setAttribute("required", "true");
    document.getElementById("txtFIELD8_3").setAttribute("required", "true");
}

function makeSection9Required() {
    document.getElementById("txtFIELD9_1").setAttribute("required", "true");
    document.getElementById("txtFIELD9_2").setAttribute("required", "true");
}

function makeSection10Required() {
    document.getElementById("txtFIELD10_1").setAttribute("required", "true");
}

function makeSection11Required() {
    document.getElementById("txtFIELD11_1").setAttribute("required", "true");
    document.getElementById("txtFIELD11_2").setAttribute("required", "true");
}

// Make Not Required
function makeSection1NotRequired() {
    document.getElementById("txtFIELD1_1_1").removeAttribute("required");
    document.getElementById("txtFIELD1_1_2").removeAttribute("required");
    document.getElementById("txtFIELD1_1_3").removeAttribute("required");
    document.getElementById("txtFIELD1_1_4").removeAttribute("required");
    document.getElementById("txtFIELD1_1_5").removeAttribute("required");
    document.getElementById("txtFIELD1_1_6").removeAttribute("required");
    document.getElementById("txtFIELD1_1_7").removeAttribute("required");
    document.getElementById("txtFIELD1_2_1").removeAttribute("required");
    document.getElementById("txtFIELD1_2_2").removeAttribute("required");
    document.getElementById("txtFIELD1_2_3").removeAttribute("required");
    document.getElementById("txtFIELD1_2_4").removeAttribute("required");
    document.getElementById("txtFIELD1_2_5").removeAttribute("required");
}

function makeSection2NotRequired() {
    document.getElementById("txtFIELD2_1_1").removeAttribute("required");
    document.getElementById("txtFIELD2_1_2").removeAttribute("required");
    document.getElementById("txtFIELD2_2_1_1").removeAttribute("required");
    document.getElementById("txtFIELD2_2_1_2").removeAttribute("required");
    document.getElementById("txtFIELD2_2_1_3").removeAttribute("required");
    document.getElementById("txtFIELD2_2_2_1").removeAttribute("required");
    document.getElementById("txtFIELD2_2_2_2").removeAttribute("required");
    document.getElementById("txtFIELD2_2_2_3").removeAttribute("required");
}

function makeSection3NotRequired() {
    document.getElementById("txtFIELD3_1").removeAttribute("required");
    document.getElementById("txtFIELD3_2").removeAttribute("required");
}

function makeSection4NotRequired() {
    document.getElementById("txtFIELD4_1_1").removeAttribute("required");
    document.getElementById("txtFIELD4_1_2").removeAttribute("required");
    document.getElementById("txtFIELD4_1_3").removeAttribute("required");
    document.getElementById("txtFIELD4_1_4_1").removeAttribute("required");
    document.getElementById("txtFIELD4_1_4_2").removeAttribute("required");
    document.getElementById("txtFIELD4_1_4_3").removeAttribute("required");
    document.getElementById("txtFIELD4_1_5_1").removeAttribute("required");
    document.getElementById("txtFIELD4_1_5_2").removeAttribute("required");
    document.getElementById("txtFIELD4_1_5_3").removeAttribute("required");
    document.getElementById("txtFIELD4_1_6_1").removeAttribute("required");
    document.getElementById("txtFIELD4_1_6_2").removeAttribute("required");
    document.getElementById("txtFIELD4_1_6_3").removeAttribute("required");
    document.getElementById("txtFIELD4_2_1").removeAttribute("required");
    document.getElementById("txtFIELD4_2_2").removeAttribute("required");
    document.getElementById("txtFIELD4_2_3").removeAttribute("required");
    document.getElementById("txtFIELD4_2_4_1").removeAttribute("required");
    document.getElementById("txtFIELD4_2_4_2").removeAttribute("required");
    document.getElementById("txtFIELD4_2_4_3").removeAttribute("required");
    document.getElementById("txtFIELD4_2_5_1").removeAttribute("required");
    document.getElementById("txtFIELD4_2_5_2").removeAttribute("required");
    document.getElementById("txtFIELD4_2_5_3").removeAttribute("required");
    document.getElementById("txtFIELD4_2_6_1").removeAttribute("required");
    document.getElementById("txtFIELD4_2_6_2").removeAttribute("required");
    document.getElementById("txtFIELD4_2_6_3").removeAttribute("required");
    document.getElementById("txtFIELD4_3_1").removeAttribute("required");
    document.getElementById("txtFIELD4_3_2").removeAttribute("required");
    document.getElementById("txtFIELD4_3_3").removeAttribute("required");
    document.getElementById("txtFIELD4_3_4_1").removeAttribute("required");
    document.getElementById("txtFIELD4_3_4_2").removeAttribute("required");
    document.getElementById("txtFIELD4_3_4_3").removeAttribute("required");
    document.getElementById("txtFIELD4_3_5_1").removeAttribute("required");
    document.getElementById("txtFIELD4_3_5_2").removeAttribute("required");
    document.getElementById("txtFIELD4_3_5_3").removeAttribute("required");
    document.getElementById("txtFIELD4_3_6_1").removeAttribute("required");
    document.getElementById("txtFIELD4_3_6_2").removeAttribute("required");
    document.getElementById("txtFIELD4_3_6_3").removeAttribute("required");
}

function makeSection5NotRequired() {
    document.getElementById("txtFIELD5_1").removeAttribute("required");
    document.getElementById("txtFIELD5_2").removeAttribute("required");
    document.getElementById("txtFIELD5_3").removeAttribute("required");
    document.getElementById("txtFIELD5_4").removeAttribute("required");
}

function makeSection6NotRequired() {
    document.getElementById("txtFIELD6_1_1").removeAttribute("required");
    document.getElementById("txtFIELD6_1_2").removeAttribute("required");
    document.getElementById("txtFIELD6_1_3").removeAttribute("required");
    document.getElementById("txtFIELD6_2_1").removeAttribute("required");
    document.getElementById("txtFIELD6_2_2").removeAttribute("required");
    document.getElementById("txtFIELD6_2_3").removeAttribute("required");
    document.getElementById("txtFIELD6_3_1").removeAttribute("required");
    document.getElementById("txtFIELD6_3_2").removeAttribute("required");
    document.getElementById("txtFIELD6_3_3").removeAttribute("required");
}

function makeSection7NotRequired() {
    document.getElementById("txtFIELD7_1_1").removeAttribute("required");
    document.getElementById("txtFIELD7_1_2").removeAttribute("required");
    document.getElementById("txtFIELD7_1_3").removeAttribute("required");
}

function makeSection8NotRequired() {
    document.getElementById("txtFIELD8_1").removeAttribute("required");
    document.getElementById("txtFIELD8_2").removeAttribute("required");
    document.getElementById("txtFIELD8_3").removeAttribute("required");
}

function makeSection9NotRequired() {
    document.getElementById("txtFIELD9_1").removeAttribute("required");
    document.getElementById("txtFIELD9_2").removeAttribute("required");
}

function makeSection10NotRequired() {
    document.getElementById("txtFIELD10_1").removeAttribute("required");
}

function makeSection11NotRequired() {
    document.getElementById("txtFIELD11_1").removeAttribute("required");
    document.getElementById("txtFIELD11_2").removeAttribute("required");
}

function calculateField_1_1_7() {
    let calcSum = 0;
    if (document.getElementById("txtFIELD1_1_1").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_1_1").value);
    }
    if (document.getElementById("txtFIELD1_1_2").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_1_2").value);
    }
    if (document.getElementById("txtFIELD1_1_3").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_1_3").value);
    }
    if (document.getElementById("txtFIELD1_1_4").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_1_4").value);
    }
    if (document.getElementById("txtFIELD1_1_5").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_1_5").value);
    }
    if (document.getElementById("txtFIELD1_1_6").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_1_6").value);
    }
    document.getElementById("txtFIELD1_1_7").value = calcSum;
}

function calculateField_1_2_5() {
    let calcSum = 0;
    if (document.getElementById("txtFIELD1_2_1").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_2_1").value);
    }
    if (document.getElementById("txtFIELD1_2_2").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_2_2").value);
    }
    if (document.getElementById("txtFIELD1_2_3").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_2_3").value);
    }
    if (document.getElementById("txtFIELD1_2_4").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD1_2_4").value);
    }
    document.getElementById("txtFIELD1_2_5").value = calcSum;
}

function calculateField_5_4() {
    let calcSum = 0;
    if (document.getElementById("txtFIELD5_1").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD5_1").value);
    }
    if (document.getElementById("txtFIELD5_2").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD5_2").value);
    }
    if (document.getElementById("txtFIELD5_3").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD5_3").value);
    }
    document.getElementById("txtFIELD5_4").value = calcSum;
}

function calculateField_7_1_3() {
    let calcSum = 0;
    if (document.getElementById("txtFIELD7_1_1").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD7_1_1").value);
    }
    if (document.getElementById("txtFIELD7_1_2").value != "") {
        calcSum = calcSum + parseInt(document.getElementById("txtFIELD7_1_2").value);
    }
    document.getElementById("txtFIELD7_1_3").value = calcSum;
}

//function showJSPanel(panelContainer, targetId, msg, panelSize) {
//    jsPanel.tooltip.create({
//        container: '#divJSContainer',
//        target: '#' + targetId,
//        mode: 'default',
//        connector: true,
//        position: { my: 'left-top', at: 'right-top' },
//        theme: 'light filled',
//        panelSize: panelSize,
//        headerControls: 'closeonly xs',
//        headerTitle: 'Description',
//        content: msg
//    });
//}

//function showJSPanelTop(panelContainer, targetId, msg, panelSize) {
//    jsPanel.tooltip.create({
//        container: '#divJSContainer',
//        target: '#' + targetId,
//        mode: 'default',
//        connector: true,
//        position: { my: 'center-bottom', at: 'center-top' },
//        theme: 'light filled',
//        panelSize: panelSize,
//        headerControls: 'closeonly xs',
//        headerTitle: 'Description',
//        content: msg
//    });
//}

//function showJSPanelRight(panelContainer, targetId, msg, panelSize, x, y) {
//    var element = $('#' + targetId);
//    //var rect = element.getBoundingClientRect();
//    var pos = element.offset();
//    var _x = pos.left + x;
//    var _y = pos.top + y;
//    jsPanel.tooltip.create({
//        container: '#divJSInfoContainer',
//        target: '#' + targetId,
//        mode: 'default',
//        connector: true,
//        position: {
//            my: 'center', at: 'center', offsetX: _x, offsetY: _y
//        },
//        theme: 'light filled',
//        panelSize: panelSize,
//        headerControls: 'closeonly xs',
//        headerTitle: 'Description',
//        delay: 0,
//        content: msg
//    });
//}

function finalSubmit() {
    var form = document.getElementById("reviewForm");
    form.action = "/Review?finalSubmit=true";
    form.method = "post";
    form.submit();
}

function validate() {
    let result = true;
    let errorHtml = "";

    let fIELD1_1_1 = document.getElementById("txtFIELD1_1_1");
    let fIELD1_1_2 = document.getElementById("txtFIELD1_1_2");
    let fIELD1_1_3 = document.getElementById("txtFIELD1_1_3");
    let fIELD1_1_4 = document.getElementById("txtFIELD1_1_4");
    let fIELD1_1_5 = document.getElementById("txtFIELD1_1_5");
    let fIELD1_1_6 = document.getElementById("txtFIELD1_1_6");
    let fIELD1_1_7 = document.getElementById("txtFIELD1_1_7");
    let fIELD1_2_1 = document.getElementById("txtFIELD1_2_1");
    let fIELD1_2_2 = document.getElementById("txtFIELD1_2_2");
    let fIELD1_2_3 = document.getElementById("txtFIELD1_2_3");
    let fIELD1_2_4 = document.getElementById("txtFIELD1_2_4");
    let fIELD1_2_5 = document.getElementById("txtFIELD1_2_5");

    let txtFIELD2_1_1 = document.getElementById("txtFIELD2_1_1");
    let txtFIELD2_1_2 = document.getElementById("txtFIELD2_1_2");
    let txtFIELD2_2_1_1 = document.getElementById("txtFIELD2_2_1_1");
    let txtFIELD2_2_1_2 = document.getElementById("txtFIELD2_2_1_2");
    let txtFIELD2_2_1_3 = document.getElementById("txtFIELD2_2_1_3");
    let txtFIELD2_2_2_1 = document.getElementById("txtFIELD2_2_2_1");
    let txtFIELD2_2_2_2 = document.getElementById("txtFIELD2_2_2_2");
    let txtFIELD2_2_2_3 = document.getElementById("txtFIELD2_2_2_3");

    let txtFIELD3_1 = document.getElementById("txtFIELD3_1");
    let txtFIELD3_2 = document.getElementById("txtFIELD3_2");

    let txtFIELD4_1_1 = document.getElementById("txtFIELD4_1_1");
    let txtFIELD4_1_2 = document.getElementById("txtFIELD4_1_2");
    let txtFIELD4_1_3 = document.getElementById("txtFIELD4_1_3");
    let txtFIELD4_1_4_1 = document.getElementById("txtFIELD4_1_4_1");
    let txtFIELD4_1_4_2 = document.getElementById("txtFIELD4_1_4_2");
    let txtFIELD4_1_4_3 = document.getElementById("txtFIELD4_1_4_3");
    let txtFIELD4_1_5_1 = document.getElementById("txtFIELD4_1_5_1");
    let txtFIELD4_1_5_2 = document.getElementById("txtFIELD4_1_5_2");
    let txtFIELD4_1_5_3 = document.getElementById("txtFIELD4_1_5_3");
    let txtFIELD4_1_6_1 = document.getElementById("txtFIELD4_1_6_1");
    let txtFIELD4_1_6_2 = document.getElementById("txtFIELD4_1_6_2");
    let txtFIELD4_1_6_3 = document.getElementById("txtFIELD4_1_6_3");
    let txtFIELD4_2_1 = document.getElementById("txtFIELD4_2_1");
    let txtFIELD4_2_2 = document.getElementById("txtFIELD4_2_2");
    let txtFIELD4_2_3 = document.getElementById("txtFIELD4_2_3");
    let txtFIELD4_2_4_1 = document.getElementById("txtFIELD4_2_4_1");
    let txtFIELD4_2_4_2 = document.getElementById("txtFIELD4_2_4_2");
    let txtFIELD4_2_4_3 = document.getElementById("txtFIELD4_2_4_3");
    let txtFIELD4_2_5_1 = document.getElementById("txtFIELD4_2_5_1");
    let txtFIELD4_2_5_2 = document.getElementById("txtFIELD4_2_5_2");
    let txtFIELD4_2_5_3 = document.getElementById("txtFIELD4_2_5_3");
    let txtFIELD4_2_6_1 = document.getElementById("txtFIELD4_2_6_1");
    let txtFIELD4_2_6_2 = document.getElementById("txtFIELD4_2_6_2");
    let txtFIELD4_2_6_3 = document.getElementById("txtFIELD4_2_6_3");
    let txtFIELD4_3_1 = document.getElementById("txtFIELD4_3_1");
    let txtFIELD4_3_2 = document.getElementById("txtFIELD4_3_2");
    let txtFIELD4_3_3 = document.getElementById("txtFIELD4_3_3");
    let txtFIELD4_3_4_1 = document.getElementById("txtFIELD4_3_4_1");
    let txtFIELD4_3_4_2 = document.getElementById("txtFIELD4_3_4_2");
    let txtFIELD4_3_4_3 = document.getElementById("txtFIELD4_3_4_3");
    let txtFIELD4_3_5_1 = document.getElementById("txtFIELD4_3_5_1");
    let txtFIELD4_3_5_2 = document.getElementById("txtFIELD4_3_5_2");
    let txtFIELD4_3_5_3 = document.getElementById("txtFIELD4_3_5_3");
    let txtFIELD4_3_6_1 = document.getElementById("txtFIELD4_3_6_1");
    let txtFIELD4_3_6_2 = document.getElementById("txtFIELD4_3_6_2");
    let txtFIELD4_3_6_3 = document.getElementById("txtFIELD4_3_6_3");

    let txtFIELD5_1 = document.getElementById("txtFIELD5_1");
    let txtFIELD5_2 = document.getElementById("txtFIELD5_2");
    let txtFIELD5_3 = document.getElementById("txtFIELD5_3");
    let txtFIELD5_4 = document.getElementById("txtFIELD5_4");

    let txtFIELD6_1_1 = document.getElementById("txtFIELD6_1_1");
    let txtFIELD6_1_2 = document.getElementById("txtFIELD6_1_2");
    let txtFIELD6_1_3 = document.getElementById("txtFIELD6_1_3");
    let txtFIELD6_2_1 = document.getElementById("txtFIELD6_2_1");
    let txtFIELD6_2_2 = document.getElementById("txtFIELD6_2_2");
    let txtFIELD6_2_3 = document.getElementById("txtFIELD6_2_3");
    let txtFIELD6_3_1 = document.getElementById("txtFIELD6_3_1");
    let txtFIELD6_3_2 = document.getElementById("txtFIELD6_3_2");
    let txtFIELD6_3_3 = document.getElementById("txtFIELD6_3_3");

    let txtFIELD7_1_1 = document.getElementById("txtFIELD7_1_1");
    let txtFIELD7_1_2 = document.getElementById("txtFIELD7_1_2");
    let txtFIELD7_1_3 = document.getElementById("txtFIELD7_1_3");

    let txtFIELD8_1 = document.getElementById("txtFIELD8_1");
    let txtFIELD8_2 = document.getElementById("txtFIELD8_2");
    let txtFIELD8_3 = document.getElementById("txtFIELD8_3");

    let txtFIELD9_1 = document.getElementById("txtFIELD9_1");
    let txtFIELD9_2 = document.getElementById("txtFIELD9_2");

    let txtFIELD10_1 = document.getElementById("txtFIELD10_1");

    let txtFIELD11_1 = document.getElementById("txtFIELD11_1");
    let txtFIELD11_2 = document.getElementById("txtFIELD11_2");

    var sectionHtml = "";
    if ((fIELD1_1_1.value == "")
        || (fIELD1_1_2.value == "")
        || (fIELD1_1_3.value == "")
        || (fIELD1_1_4.value == "")
        || (fIELD1_1_5.value == "")
        || (fIELD1_1_6.value == "")
        || (fIELD1_1_7.value == "")
        || (fIELD1_2_1.value == "")
        || (fIELD1_2_2.value == "")
        || (fIELD1_2_3.value == "")
        || (fIELD1_2_4.value == "")
        || (fIELD1_2_5.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection1();'>Tab 1 –	Number of appeals, cross-appeals, references, bail reviews, and judicial reviews (JRs)</a></div>";
        result = false;
    }

    if ((txtFIELD2_1_1.value == "")
        || (txtFIELD2_1_2.value == "")
        || (txtFIELD2_2_1_1.value == "")
        || (txtFIELD2_2_1_2.value == "")
        || (txtFIELD2_2_1_3.value == "")
        || (txtFIELD2_2_2_1.value == "")
        || (txtFIELD2_2_2_2.value == "")
        || (txtFIELD2_2_2_3.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection2();'>Tab 2 – Civil and criminal case decisions</a></div>";
        result = false;
    }

    if ((txtFIELD3_1.value == "")
        || (txtFIELD3_2.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection3();'>Tab 3 – Number of decisions/judgments (total)</a></div>";
        result = false;
    }

    if ((txtFIELD4_1_1.value == "")
        || (txtFIELD4_1_2.value == "")
        || (txtFIELD4_1_3.value == "")
        || (txtFIELD4_1_4_1.value == "")
        || (txtFIELD4_1_4_2.value == "")
        || (txtFIELD4_1_4_3.value == "")
        || (txtFIELD4_1_5_1.value == "")
        || (txtFIELD4_1_5_2.value == "")
        || (txtFIELD4_1_5_3.value == "")
        || (txtFIELD4_1_6_1.value == "")
        || (txtFIELD4_1_6_2.value == "")
        || (txtFIELD4_1_6_3.value == "")
        || (txtFIELD4_2_1.value == "")
        || (txtFIELD4_2_2.value == "")
        || (txtFIELD4_2_3.value == "")
        || (txtFIELD4_2_4_1.value == "")
        || (txtFIELD4_2_4_2.value == "")
        || (txtFIELD4_2_4_3.value == "")
        || (txtFIELD4_2_5_1.value == "")
        || (txtFIELD4_2_5_2.value == "")
        || (txtFIELD4_2_5_3.value == "")
        || (txtFIELD4_2_6_1.value == "")
        || (txtFIELD4_2_6_2.value == "")
        || (txtFIELD4_2_6_3.value == "")
        || (txtFIELD4_3_1.value == "")
        || (txtFIELD4_3_2.value == "")
        || (txtFIELD4_3_3.value == "")
        || (txtFIELD4_3_4_1.value == "")
        || (txtFIELD4_3_4_2.value == "")
        || (txtFIELD4_3_4_3.value == "")
        || (txtFIELD4_3_5_1.value == "")
        || (txtFIELD4_3_5_2.value == "")
        || (txtFIELD4_3_5_3.value == "")
        || (txtFIELD4_3_6_1.value == "")
        || (txtFIELD4_3_6_2.value == "")
        || (txtFIELD4_3_6_3.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection4();'>Tab 4 – Civil and criminal case time intervals</a></div>";
        result = false;
    }

    if ((txtFIELD5_1.value == "")
        || (txtFIELD5_2.value == "")
        || (txtFIELD5_3.value == "")
        || (txtFIELD5_4.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection5();'>Tab 5 – Number of in-person, virtual and hybrid hearings</a></div>";
        result = false;
    }

    if ((txtFIELD6_1_1.value == "")
        || (txtFIELD6_1_2.value == "")
        || (txtFIELD6_1_3.value == "")
        || (txtFIELD6_2_1.value == "")
        || (txtFIELD6_2_2.value == "")
        || (txtFIELD6_2_3.value == "")
        || (txtFIELD6_3_1.value == "")
        || (txtFIELD6_3_2.value == "")
        || (txtFIELD6_3_3.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection6();'>Tab 6 – Number of motions and applications</a></div>";
        result = false;
    }

    if ((txtFIELD7_1_1.value == "")
        || (txtFIELD7_1_2.value == "")
        || (txtFIELD7_1_3.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection7();'>Tab 7 – Self-Represented Litigants (SRLs)</a></div>";
        result = false;
    }

    if ((txtFIELD8_1.value == "")
        || (txtFIELD8_2.value == "")
        || (txtFIELD8_3.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection8();'>Tab 8 – Number of decisions/judgments rendered</a></div>";
        result = false;
    }

    if ((txtFIELD9_1.value == "")
        || (txtFIELD9_2.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection9();'>Tab 9 – Number of appeals that are heard</a></div>";
        result = false;
    }

    if ((txtFIELD10_1.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection10();'>Tab 10 – Total number of  appeals, cross-appeals, references, bail reviews and JRs pending on December 31<sub>st</sub></a></div>";
        result = false;
    }

    if ((txtFIELD11_1.value == "")
        || (txtFIELD11_2.value == "")
    ) {
        sectionHtml = sectionHtml + "<div> Please complete <a href='javascript:errorSection11();'>Tab 11 – Number of judges (as of December 31st)</a></div>";
        result = false;
    }

    let validationModal = document.getElementById("validation-body");
    validationModal.innerHTML = sectionHtml;
    return result;
}

function hideValidationModal() {
    $('#validationModal').modal('hide');
}

function errorSection1() {
    hideValidationModal();
    let fIELD1_1_1 = document.getElementById("txtFIELD1_1_1");
    let fIELD1_1_2 = document.getElementById("txtFIELD1_1_2");
    let fIELD1_1_3 = document.getElementById("txtFIELD1_1_3");
    let fIELD1_1_4 = document.getElementById("txtFIELD1_1_4");
    let fIELD1_1_5 = document.getElementById("txtFIELD1_1_5");
    let fIELD1_1_6 = document.getElementById("txtFIELD1_1_6");
    let fIELD1_1_7 = document.getElementById("txtFIELD1_1_7");
    let fIELD1_2_1 = document.getElementById("txtFIELD1_2_1");
    let fIELD1_2_2 = document.getElementById("txtFIELD1_2_2");
    let fIELD1_2_3 = document.getElementById("txtFIELD1_2_3");
    let fIELD1_2_4 = document.getElementById("txtFIELD1_2_4");
    let fIELD1_2_5 = document.getElementById("txtFIELD1_2_5");
    showDetails('details1');
    if (fIELD1_1_1.value == "") {
        document.getElementById("txtFIELD1_1_1").focus();
    }
    else if (fIELD1_1_2.value == "") {
        document.getElementById("txtFIELD1_1_2").focus();
    } 
    else if (fIELD1_1_3.value == "") {
        document.getElementById("txtFIELD1_1_3").focus();
    }
    else if (fIELD1_1_4.value == "") {
        document.getElementById("txtFIELD1_1_4").focus();
    }
    else if (fIELD1_1_5.value == "") {
        document.getElementById("txtFIELD1_1_5").focus();
    }
    else if (fIELD1_1_6.value == "") {
        document.getElementById("txtFIELD1_1_6").focus();
    }
    else if (fIELD1_1_7.value == "") {
        document.getElementById("txtFIELD1_1_7").focus();
    }
    else if (fIELD1_2_1.value == "") {
        document.getElementById("txtFIELD1_2_1").focus();
    }
    else if (fIELD1_2_2.value == "") {
        document.getElementById("txtFIELD1_2_2").focus();
    }
    else if (fIELD1_2_3.value == "") {
        document.getElementById("txtFIELD1_2_3").focus();
    }
    else if (fIELD1_2_4.value == "") {
        document.getElementById("txtFIELD1_2_4").focus();
    }
    else if (fIELD1_2_5.value == "") {
        document.getElementById("txtFIELD1_2_5").focus();
    }
}

function errorSection2() {
    hideValidationModal();
    let txtFIELD2_1_1 = document.getElementById("txtFIELD2_1_1");
    let txtFIELD2_1_2 = document.getElementById("txtFIELD2_1_2");
    let txtFIELD2_2_1_1 = document.getElementById("txtFIELD2_2_1_1");
    let txtFIELD2_2_1_2 = document.getElementById("txtFIELD2_2_1_2");
    let txtFIELD2_2_1_3 = document.getElementById("txtFIELD2_2_1_3");
    let txtFIELD2_2_2_1 = document.getElementById("txtFIELD2_2_2_1");
    let txtFIELD2_2_2_2 = document.getElementById("txtFIELD2_2_2_2");
    let txtFIELD2_2_2_3 = document.getElementById("txtFIELD2_2_2_3");
    showDetails('details2');
    if (txtFIELD2_1_1.value == "") {
        document.getElementById("txtFIELD2_1_1").focus();
    }
    else if (txtFIELD2_1_2.value == "") {
        document.getElementById("txtFIELD2_1_2").focus();
    }
    else if (txtFIELD2_2_1_1.value == "") {
        document.getElementById("txtFIELD2_2_1_1").focus();
    }
    else if (txtFIELD2_2_1_2.value == "") {
        document.getElementById("txtFIELD2_2_1_2").focus();
    }
    else if (txtFIELD2_2_1_3.value == "") {
        document.getElementById("txtFIELD2_2_1_3").focus();
    }
    else if (txtFIELD2_2_2_1.value == "") {
        document.getElementById("txtFIELD2_2_2_1").focus();
    }
    else if (txtFIELD2_2_2_2.value == "") {
        document.getElementById("txtFIELD2_2_2_2").focus();
    }
    else if (txtFIELD2_2_2_3.value == "") {
        document.getElementById("txtFIELD2_2_2_3").focus();
    }
}

function errorSection3() {
    hideValidationModal();
    let txtFIELD3_1 = document.getElementById("txtFIELD3_1");
    let txtFIELD3_2 = document.getElementById("txtFIELD3_2");
    showDetails('details3');
    if (txtFIELD3_1.value == "") {
        document.getElementById("txtFIELD3_1").focus();
    }
    else if (txtFIELD3_2.value == "") {
        document.getElementById("txtFIELD3_2").focus();
    }
}

function errorSection4() {
    hideValidationModal();
    let txtFIELD4_1_1 = document.getElementById("txtFIELD4_1_1");
    let txtFIELD4_1_2 = document.getElementById("txtFIELD4_1_2");
    let txtFIELD4_1_3 = document.getElementById("txtFIELD4_1_3");
    let txtFIELD4_1_4_1 = document.getElementById("txtFIELD4_1_4_1");
    let txtFIELD4_1_4_2 = document.getElementById("txtFIELD4_1_4_2");
    let txtFIELD4_1_4_3 = document.getElementById("txtFIELD4_1_4_3");
    let txtFIELD4_1_5_1 = document.getElementById("txtFIELD4_1_5_1");
    let txtFIELD4_1_5_2 = document.getElementById("txtFIELD4_1_5_2");
    let txtFIELD4_1_5_3 = document.getElementById("txtFIELD4_1_5_3");
    let txtFIELD4_1_6_1 = document.getElementById("txtFIELD4_1_6_1");
    let txtFIELD4_1_6_2 = document.getElementById("txtFIELD4_1_6_2");
    let txtFIELD4_1_6_3 = document.getElementById("txtFIELD4_1_6_3");
    let txtFIELD4_2_1 = document.getElementById("txtFIELD4_2_1");
    let txtFIELD4_2_2 = document.getElementById("txtFIELD4_2_2");
    let txtFIELD4_2_3 = document.getElementById("txtFIELD4_2_3");
    let txtFIELD4_2_4_1 = document.getElementById("txtFIELD4_2_4_1");
    let txtFIELD4_2_4_2 = document.getElementById("txtFIELD4_2_4_2");
    let txtFIELD4_2_4_3 = document.getElementById("txtFIELD4_2_4_3");
    let txtFIELD4_2_5_1 = document.getElementById("txtFIELD4_2_5_1");
    let txtFIELD4_2_5_2 = document.getElementById("txtFIELD4_2_5_2");
    let txtFIELD4_2_5_3 = document.getElementById("txtFIELD4_2_5_3");
    let txtFIELD4_2_6_1 = document.getElementById("txtFIELD4_2_6_1");
    let txtFIELD4_2_6_2 = document.getElementById("txtFIELD4_2_6_2");
    let txtFIELD4_2_6_3 = document.getElementById("txtFIELD4_2_6_3");
    let txtFIELD4_3_1 = document.getElementById("txtFIELD4_3_1");
    let txtFIELD4_3_2 = document.getElementById("txtFIELD4_3_2");
    let txtFIELD4_3_3 = document.getElementById("txtFIELD4_3_3");
    let txtFIELD4_3_4_1 = document.getElementById("txtFIELD4_3_4_1");
    let txtFIELD4_3_4_2 = document.getElementById("txtFIELD4_3_4_2");
    let txtFIELD4_3_4_3 = document.getElementById("txtFIELD4_3_4_3");
    let txtFIELD4_3_5_1 = document.getElementById("txtFIELD4_3_5_1");
    let txtFIELD4_3_5_2 = document.getElementById("txtFIELD4_3_5_2");
    let txtFIELD4_3_5_3 = document.getElementById("txtFIELD4_3_5_3");
    let txtFIELD4_3_6_1 = document.getElementById("txtFIELD4_3_6_1");
    let txtFIELD4_3_6_2 = document.getElementById("txtFIELD4_3_6_2");
    let txtFIELD4_3_6_3 = document.getElementById("txtFIELD4_3_6_3");
    showDetails('details4');
    if (txtFIELD4_1_1.value == "") {
        document.getElementById("txtFIELD4_1_1").focus();
    }
    else if (txtFIELD4_1_2.value == "") {
        document.getElementById("txtFIELD4_1_2").focus();
    }
    else if (txtFIELD4_1_3.value == "") {
        document.getElementById("txtFIELD4_1_3").focus();
    }
    else if (txtFIELD4_1_4_1.value == "") {
        document.getElementById("txtFIELD4_1_4_1").focus();
    }
    else if (txtFIELD4_1_4_2.value == "") {
        document.getElementById("txtFIELD4_1_4_2").focus();
    }
    else if (txtFIELD4_1_4_3.value == "") {
        document.getElementById("txtFIELD4_1_4_3").focus();
    }
    else if (txtFIELD4_1_5_1.value == "") {
        document.getElementById("txtFIELD4_1_5_1").focus();
    }
    else if (txtFIELD4_1_5_2.value == "") {
        document.getElementById("txtFIELD4_1_5_2").focus();
    }
    else if (txtFIELD4_1_5_3.value == "") {
        document.getElementById("txtFIELD4_1_5_3").focus();
    }
    else if (txtFIELD4_1_6_1.value == "") {
        document.getElementById("txtFIELD4_1_6_1").focus();
    }
    else if (txtFIELD4_1_6_2.value == "") {
        document.getElementById("txtFIELD4_1_6_2").focus();
    }
    else if (txtFIELD4_1_6_3.value == "") {
        document.getElementById("txtFIELD4_1_6_3").focus();
    }
    else if (txtFIELD4_2_1.value == "") {
        document.getElementById("txtFIELD4_2_1").focus();
    }
    else if (txtFIELD4_2_2.value == "") {
        document.getElementById("txtFIELD4_2_2").focus();
    }
    else if (txtFIELD4_2_3.value == "") {
        document.getElementById("txtFIELD4_2_3").focus();
    }
    else if (txtFIELD4_2_4_1.value == "") {
        document.getElementById("txtFIELD4_2_4_1").focus();
    }
    else if (txtFIELD4_2_4_2.value == "") {
        document.getElementById("txtFIELD4_2_4_2").focus();
    }
    else if (txtFIELD4_2_4_3.value == "") {
        document.getElementById("txtFIELD4_2_4_3").focus();
    }
    else if (txtFIELD4_2_5_1.value == "") {
        document.getElementById("txtFIELD4_2_5_1").focus();
    }
    else if (txtFIELD4_2_5_2.value == "") {
        document.getElementById("txtFIELD4_2_5_2").focus();
    }
    else if (txtFIELD4_2_5_3.value == "") {
        document.getElementById("txtFIELD4_2_5_3").focus();
    }
    else if (txtFIELD4_2_6_1.value == "") {
        document.getElementById("txtFIELD4_2_6_1").focus();
    }
    else if (txtFIELD4_2_6_2.value == "") {
        document.getElementById("txtFIELD4_2_6_2").focus();
    }
    else if (txtFIELD4_2_6_3.value == "") {
        document.getElementById("txtFIELD4_2_6_3").focus();
    }
    else if (txtFIELD4_3_1.value == "") {
        document.getElementById("txtFIELD4_3_1").focus();
    }
    else if (txtFIELD4_3_2.value == "") {
        document.getElementById("txtFIELD4_3_2").focus();
    }
    else if (txtFIELD4_3_3.value == "") {
        document.getElementById("txtFIELD4_3_3").focus();
    }
    else if (txtFIELD4_3_4_1.value == "") {
        document.getElementById("txtFIELD4_3_4_1").focus();
    }
    else if (txtFIELD4_3_4_2.value == "") {
        document.getElementById("txtFIELD4_3_4_2").focus();
    }
    else if (txtFIELD4_3_4_3.value == "") {
        document.getElementById("txtFIELD4_3_4_3").focus();
    }
    else if (txtFIELD4_3_5_1.value == "") {
        document.getElementById("txtFIELD4_3_5_1").focus();
    }
    else if (txtFIELD4_3_5_2.value == "") {
        document.getElementById("txtFIELD4_3_5_2").focus();
    }
    else if (txtFIELD4_3_5_3.value == "") {
        document.getElementById("txtFIELD4_3_5_3").focus();
    }
    else if (txtFIELD4_3_6_1.value == "") {
        document.getElementById("txtFIELD4_3_6_1").focus();
    }
    else if (txtFIELD4_3_6_2.value == "") {
        document.getElementById("txtFIELD4_3_6_2").focus();
    }
    else if (txtFIELD4_3_6_3.value == "") {
        document.getElementById("txtFIELD4_3_6_3").focus();
    }
}

function errorSection5() {
    hideValidationModal();
    let txtFIELD5_1 = document.getElementById("txtFIELD5_1");
    let txtFIELD5_2 = document.getElementById("txtFIELD5_2");
    let txtFIELD5_3 = document.getElementById("txtFIELD5_3");
    let txtFIELD5_4 = document.getElementById("txtFIELD5_4");
    showDetails('details5');
    if (txtFIELD5_1.value == "") {
        document.getElementById("txtFIELD5_1").focus();
    }
    else if (txtFIELD5_2.value == "") {
        document.getElementById("txtFIELD5_2").focus();
    }
    else if (txtFIELD5_3.value == "") {
        document.getElementById("txtFIELD5_3").focus();
    }
    else if (txtFIELD5_4.value == "") {
        document.getElementById("txtFIELD5_4").focus();
    }
}

function errorSection6() {
    hideValidationModal();
    let txtFIELD6_1_1 = document.getElementById("txtFIELD6_1_1");
    let txtFIELD6_1_2 = document.getElementById("txtFIELD6_1_2");
    let txtFIELD6_1_3 = document.getElementById("txtFIELD6_1_3");
    let txtFIELD6_2_1 = document.getElementById("txtFIELD6_2_1");
    let txtFIELD6_2_2 = document.getElementById("txtFIELD6_2_2");
    let txtFIELD6_2_3 = document.getElementById("txtFIELD6_2_3");
    let txtFIELD6_3_1 = document.getElementById("txtFIELD6_3_1");
    let txtFIELD6_3_2 = document.getElementById("txtFIELD6_3_2");
    let txtFIELD6_3_3 = document.getElementById("txtFIELD6_3_3");
    showDetails('details6');
    if (txtFIELD6_1_1.value == "") {
        document.getElementById("txtFIELD6_1_1").focus();
    }
    else if (txtFIELD6_1_2.value == "") {
        document.getElementById("txtFIELD6_1_2").focus();
    }
    else if (txtFIELD6_1_3.value == "") {
        document.getElementById("txtFIELD6_1_3").focus();
    }
    else if (txtFIELD6_2_1.value == "") {
        document.getElementById("txtFIELD6_2_1").focus();
    }
    else if (txtFIELD6_2_2.value == "") {
        document.getElementById("txtFIELD6_2_2").focus();
    }
    else if (txtFIELD6_2_3.value == "") {
        document.getElementById("txtFIELD6_2_3").focus();
    }
    else if (txtFIELD6_3_1.value == "") {
        document.getElementById("txtFIELD6_3_1").focus();
    }
    else if (txtFIELD6_3_2.value == "") {
        document.getElementById("txtFIELD6_3_2").focus();
    }
    else if (txtFIELD6_3_3.value == "") {
        document.getElementById("txtFIELD6_3_3").focus();
    }
}

function errorSection7() {
    hideValidationModal();
    let txtFIELD7_1_1 = document.getElementById("txtFIELD7_1_1");
    let txtFIELD7_1_2 = document.getElementById("txtFIELD7_1_2");
    let txtFIELD7_1_3 = document.getElementById("txtFIELD7_1_3");
    showDetails('details7');
    if (txtFIELD7_1_1.value == "") {
        document.getElementById("txtFIELD7_1_1").focus();
    }
    else if (txtFIELD7_1_2.value == "") {
        document.getElementById("txtFIELD7_1_2").focus();
    }
    else if (txtFIELD7_1_3.value == "") {
        document.getElementById("txtFIELD7_1_3").focus();
    }
}

function errorSection8() {
    hideValidationModal();
    let txtFIELD8_1 = document.getElementById("txtFIELD8_1");
    let txtFIELD8_2 = document.getElementById("txtFIELD8_2");
    let txtFIELD8_3 = document.getElementById("txtFIELD8_3");
    showDetails('details8');
    if (txtFIELD8_1.value == "") {
        document.getElementById("txtFIELD8_1").focus();
    }
    else if (txtFIELD8_2.value == "") {
        document.getElementById("txtFIELD8_2").focus();
    }
    else if (txtFIELD8_3.value == "") {
        document.getElementById("txtFIELD8_3").focus();
    }
}

function errorSection9() {
    hideValidationModal();
    let txtFIELD9_1 = document.getElementById("txtFIELD9_1");
    let txtFIELD9_2 = document.getElementById("txtFIELD9_2");
    showDetails('details9');
    if (txtFIELD9_1.value == "") {
        document.getElementById("txtFIELD9_1").focus();
    }
    else if (txtFIELD9_2.value == "") {
        document.getElementById("txtFIELD9_2").focus();
    }
}

function errorSection10() {
    hideValidationModal();
    let txtFIELD10_1 = document.getElementById("txtFIELD10_1");
    showDetails('details10');
    if (txtFIELD10_1.value == "") {
        document.getElementById("txtFIELD10_1").focus();
    }
}

function errorSection11() {
    hideValidationModal();
    let txtFIELD11_1 = document.getElementById("txtFIELD11_1");
    let txtFIELD11_2 = document.getElementById("txtFIELD11_2");
    showDetails('details11');
    if (txtFIELD11_1.value == "") {
        document.getElementById("txtFIELD11_1").focus();
    }
    else if (txtFIELD11_2.value == "") {
        document.getElementById("txtFIELD11_2").focus();
    }
}
