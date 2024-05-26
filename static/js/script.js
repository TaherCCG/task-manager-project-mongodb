/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    // Navbar collapse
    $(".sidenav").sidenav({
        edge: "right"
    });
    // Task List collapsible
    $('.collapsible').collapsible();
    // Urgent tooltip
    $('.tooltipped').tooltip();
    // Form Select
    $("select").formSelect();
    // Form Datepicker
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
});