// la recuperation des elemment 

const form = document.querySelector("#form");
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// evenemet

form.addEventListener('submit',e=>{
    e.preventDefault();

    form_verify();
})

// fonction
function form_verify(){
    // obtenir tous les valeurs input
    const userValue  = username.value.trim();
    const emailValue  = email.value.trim();
    const pwdValue  = password.value.trim();
    const pwd2Value  = password2.value.trim();

    // username verify
    if (userValue === "") {
        let message ="username ne peut pas etre vide";
        setError(username,message);
    }else if(!username.match(/^[a-zA-Z]/)){
        let message ="username doit commencer par une lettre";
        setError(username,message);
    }else{
        let letterNum = userValue.length;
        if (letterNum < 3){
            let message ="username doit avoir au moin 3 caractèrés";
            setSuccess(username);
        }
    }

    // email verify

    if (emailValue === "") {
        let message ="email ne peut pas etre vide";
        setError(email,message);
    }else if(!email_verify(emailValue)){
        let message ="email non valide";
        setError(email,message);
    }else{
       setSuccess(email);
    }

    // password form_verify

    if(pwdValue ===""){
        let message ="le mot de passe ne peut pas etre vide";
        setError(password,message);
    }else if(!password_verify(pwdValue)){
        let message ="le mot de passe est trop faible(8 à 12 caractères)";
        setError(password);
    }else{
        setSuccess(password);
    }


    // password2 verify
    if(pwd2Value ===""){
        let message ="le mot de passe ne peut pas etre vide";
        setError(password2,message);
    }else if(pwdValue !== pwd2Value){
        let message ="les mots de passes corespondent pas";
        setError(password2,message);
    }else{
        setSuccess(password2);
    }
}



function setError(elem,message){
    const formcontrole = elem.parentElement;
    const small = formcontrole.querySelector('small');

    // ajout du message d'erreur
    small.innerText = message

    // ajout de la class erreur
    formcontrole.className = "form-controle error";
}
function setSuccess(elem){
    const formcontrole = elem.parentElement;
    formcontrole.className ='form-controle success';
}

function email_verify(email){
        return /^[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}
function password_verify(password){
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zZ-Z0-9!@#$%^&*]{8,12}$/.test(password);
}
