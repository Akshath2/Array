student_array=[];

function submit()
{
    for (var i= 1 ; i<= 4; i++)
    {
        var student=document.getElementById("student_"+ i).value;
        console.log(student);
        student_array.push(student);

    }

    console.log(student_array);

    display_array=[];
    var length_of_array=student_array.length;
    console.log(length_of_array);

    for (var k= 0 ; k<length_of_array; k++)
    {
        display_array.push( "<h4>NAME- "+student_array[k]+"</h4>");
        console.log(display_array);
    }
    console.log(display_array);

    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_commas= display_array.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sort()
{
    student_array.sort();
    console.log(student_array);
    display_array_sort=[];
    var length_of_array=student_array.length;
    console.log(length_of_array);

    for (var k= 0 ; k<length_of_array; k++)
    {
        display_array_sort.push( "<h4>NAME- "+student_array[k]+"</h4>");
        console.log(display_array_sort);
    }
    console.log(display_array_sort);

    document.getElementById("display_name_with_commas").innerHTML=display_array_sort;

    var remove_commas= display_array_sort.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}
    function newupdate()
    {
    
    
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+student_array+ "</h4>";

}