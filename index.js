function replaceNewline()
{
    var data = $("#text").val();
    var result = data.replace(/\n/g,"");
    $("#text").val(result);
}