const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
let uppass = [];
let inpass = [];

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
var counter=0;
signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// adding and removing border
function upimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            uppass.splice(uppass.indexOf(element.id), 1);
            counter--;
            // console.log(element.id);
            // console.log(uppass);
        }
        else {
            Image.classList.add('clicked');
            uppass.push(element.id);
            counter++;
            // console.log(element.id);
            // console.log(uppass);
        }
    }
}

function inimg(element) {
    var Image = element.querySelector('img');
    if (Image) {
        console.log("here");
        counter++;
        if (Image.classList.contains('clicked')) {
            Image.classList.remove('clicked');
            inpass.splice(inpass.indexOf(element.id), 1);
            // console.log(element.id);
            // console.log(inpass);
        }
        else {
            Image.classList.add('clicked');
            inpass.push(element.id);
            // console.log(element.id);
            // console.log(inpass);
        }
    }
    
}
document.getElementById("myForm").addEventListener("submit", function(event) {
    var email = document.getElementById("upmail").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//    console.log(email);
    if (!re.test(email)) {
      alert("Invalid email address");
      event.preventDefault();
    }else{
        if(counter>0)signup();
        else alert("Please select an object!");
    }
  });
function signup() {
    sessionStorage.setItem("upname", document.getElementById('upmail').value);
    sessionStorage.setItem("uppass", uppass);
    // console.log(uppass);
    if(uppass.length== null){
        alert("choose any object")
    }
    var myText = "Account Created Succesfully";
    alert(myText);
    // console.log("run");

}

// image pattern authentication
var v2 = new Boolean(false);
function signin() {
    let str = document.getElementById('inmail').value;
    let array = sessionStorage.getItem("uppass");
    
    let check1 = array.localeCompare(inpass.toString());
    if ((!str.localeCompare(sessionStorage.getItem("upname"))) && !check1) {
        var myText = "Login is successful";
        alert(myText);
        NewTab(); 
    }
    else{
        var myText = "Login Failed";
        alert(myText);
        emailjs.init("red7y59yf11Vsfxj2");
        sendMail3();
    }
}

var templateParams = {
    to_name: 'User',
    from_name: 'Rahul',
    message: 'Please try again!'
  };

 function sendMail3(){
    emailjs.send('service_ktz39ao', 'template_m1h3m8f', templateParams )
    .then(function(res){
        // console.log("Success", res.status);
        alert("Wrong sequence, check your email");
    })
}
function sendMail2(){
    emailjs.send('service_ktz39ao', 'template_m1h3m8f', templateParams)
    .then(function(res){
        // console.log("Success", res.status);
        alert("mail sent successfully");
    })
}

function NewTab() {
    window.open(
      "route.html", "_blank");
}
