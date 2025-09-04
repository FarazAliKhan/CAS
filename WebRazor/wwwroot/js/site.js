// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(".breadcrumb").children().first().remove();

function submitForm() {
    var form = document.getElementById("reviewForm");
    form.action = "/Review/";
    form.method = "POST";
    form.submit();
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

function post() {
    
}