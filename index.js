/* global $ */
function replaceNewline()
{
    var data = $("#text").val();
    var result = data.replace(/\n/g," ").replace(new RegExp("- ", "g"),"");
    result = result.replace(/\s*\[.*\]\s*/g,"");
    $("#text").val(result);
}