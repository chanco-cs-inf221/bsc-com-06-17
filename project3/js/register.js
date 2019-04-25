function register() {
    var Details = {
        email: document.getElementById("mail").value,
        password: document.getElementById("pass").value
    };
    if (Details.email !== "" && Details.password !== "") {
        DetailsArray = JSON.parse(localStorage.getItem("Details")) || [];
        DetailsArray.push(Details);
        localStorage.setItem("Details", JSON.stringify(DetailsArray));
        DetailsArray = localStorage.getItem("Details");
        DetailsArray = JSON.parse(DetailsArray);
    }
    window.location.reload(true);
}

function getDetailsArray(){
      return JSON.parse(localStorage.getItem ("Details"));
} 


function init(){
    var DetailsArray  = getDetailsArray();

    for(i = 0; i < DetailsArray.length; i++){

     var Details = DetailsArray[i];
     createDetails(Details);
    }
}
   
  
