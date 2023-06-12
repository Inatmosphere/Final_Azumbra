function strings()
{
    var string1 = document.getElementById("String").value; //first name input//
    var string2 = document.getElementById("String2").value; //last name input//
    var string3 = document.getElementById("String3");   //zip code input//
    string3.style.display === "none"  //zip code toggle//
    string3.style.display = "none";   //zip code set to off//

    var fName  = string1 + string2
   document.getElementById("Updated string").innerHTML = "name = " + fName
   
if(fName.length >20)
{
    alert("name is invalid") //notify if name invalid//
}
else
{
    string3.style.display = "block";    //hides zipcode input if name is invalid//
}
}


function strings2()
{
    var string3 = document.getElementById("String3").value;

    if(string3.length ==5) //check if zip code is right length//
{
    document.getElementById("Updated string2").innerHTML = "Zip Code = " + string3  //write down zip code// 
}
else
{
    alert("zipcode invalid")
}

}