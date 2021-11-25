$(document).ready(function() {
    console.log( "ready!" );
    document.getElementById("text").innerHTML=10;

    var data=[
        {id:1,name:"Jacki",marks:35},
        {id:2,name:"john",marks:40},
        {id:3,name:"rocky",marks:45},
        {id:4,name:"raghu",marks:50}
    ]
    var str="<table>";
    
    data.forEach(element => {
        str+="<tr>";
        str+="<td>"+element.id+"</td>"+"<td>"+element.name+"</td>"+"<td>"+element.marks+"</td>";
        str+="</tr>";
    });
    str+="</table>";
    console.log(str);
    document.getElementById("data").innerHTML=str;

});
