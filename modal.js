// sign up for newsletter modal
var modal= document.getElementById("hidden_modal");
var closeButton= document.querySelector(".close-button");

var timer = function(){
 modal.setAttribute('style', 'display:block');
};
// modal to pop up in 3 seconds
setTimeout(timer, 3000)
//button function
closeButton.addEventListener("click", function(){
 modal.setAttribute('style', 'display:none');
 modal.style.display = 'none'
});


document.setAttribute('style', 'display:block');

function checkThisModal() {
 var email = document.querySelector("#email").value;
// email validation
 if (true) {
   alert("Enter everyday to increase your chances!");
 } else {
   alert("Invalid Email")
 }
};
