/* global $ */
function replaceNewline()
{
    var data = $("#text").val();
    var result = data.replace(/\n/g," ").replace(new RegExp("- ", "g"),"");
    $("#text").val(result);
}