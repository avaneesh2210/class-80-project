function paragraph()
{
    var paragraph_array = [];
    for (var i = 1 ; i <=6 ; i++)
    {
        paragraph_array.push(document.getElementById("input_" + i).value);
    }
    paragraph_array.join(". ");
    document.getElementById("show_paragraph").innerHTML = paragraph_array.join(". ");
}