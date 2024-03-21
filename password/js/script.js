

var myPassData = document.querySelector("#myPassword");
// console.log(myPassData);
var myBtnData=document.querySelector("#btn");
// console.log(myBtnData);

var changePass = ()=>{
    if(myBtnData.value == "show")
    {
        // alert("button working");
        myBtnData.value = "hide";
        myPassData.type = "text"
    }
    else
    {
        myBtnData.value = "show";
        myPassData.type = "password"
    }
}






// clients.forEach((data, value) =>{}