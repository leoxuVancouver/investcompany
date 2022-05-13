
$(document).ready(function () {
    $('.header').height($(window).height());
})



$(document).ready(function () {
    $('#surveySubmit').click(function () {
        checked = $("input[type=checkbox]:checked").length;
        if (!checked) {
            alert("You must check at least one checkbox.");
            return false;
        } 
    });
});


window.onload = function() {
    document.forms[0].onsubmit = function() {
       if (this.checkValidity()) alert("Information is well received.");
       return false;
    };
 };