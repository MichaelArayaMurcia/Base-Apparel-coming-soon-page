
function ValidateEmail(mail) 
{
    var email = document.getElementById("inputContainer-input").value;
    var emailContainer = document.getElementById("inputContainer-input");
    var errorIcon = document.getElementById("errorIcon");

    console.log(email);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailContainer.classList.add("validEmail");
        emailContainer.classList.remove("invalidEmail");
        errorIcon.classList.remove("errorIconAppear");
        errorIcon.classList.add("errorIconDisappear");
    }
    else {
        emailContainer.classList.add("invalidEmail");
        emailContainer.classList.remove("validEmail");
        errorIcon.classList.add("errorIconAppear");
        errorIcon.classList.remove("errorIconDisappear");
    }
}