window.addEventListener("load",function(){
   document.querySelector(".preloader").classList.add("opacity-0");
   setTimeout(function(){
       document.querySelector(".preloader").style.display="none";
   },1000);   
})

var submitted= false;

function validateName(){
    var name = document.getElementById('name').value;
    if(!name.match(/^[a-zA-Z]{3,}(?:[a-zA-Z]+){0,2}$/)){
        alert("Please enter your correct name!");
        return false;
    }
    return true;
}

function validateEmail(){
    var name = document.getElementById('email').value;
    if(!name.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        alert("Please enter valid email!");
        return false;
    }
    return true;
}

function resetFrom(){
    document.getlog(...data:any[]:void).reset();
    console.log('Reset');

}

function valideteForm(){
    if(!validateName()|| !validateEmail()){
        return false;
    }

    else{
        submitted=true;
        var thankyou= 'Your message sent successfully. Thanks!';
        document.getElementById('success').append(thankyou);
        return true;
    }
}
