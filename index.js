const submit = document.getElementById("submit-button");
const errorMsg = document.getElementById("error-message");
submit.addEventListener("click", submitHandler);

// Create submit handler function
async function submitHandler(event) {
  event.preventDefault();

  var fullname = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var rePass = document.getElementById("re-pass").value;

  //   if (fullname == "") {
  //     errorMsg.innerHTML = `
  //                 <div class="alert alert-danger">
  //                     <strong>Error :</strong> Name is Empty !
  //                 </div>
  //             `;
  //   } else if (email == "") {
  //     errorMsg.innerHTML = `
  //           <div class="alert alert-danger">
  //               <strong>Error :</strong> Email is Empty !
  //           </div> `;
  //   } else if (pass == "") {
  //     errorMsg.innerHTML = `
  //           <div class="alert alert-danger">
  //               <strong>Error :</strong> password is Empty !
  //           </div> `;
  //   } else if (rePass == "") {
  //     errorMsg.innerHTML = `
  //           <div class="alert alert-danger">
  //               <strong>Error :</strong> please re-type your password !
  //           </div> `;
  //   } else if (pass !== rePass) {
  //     errorMsg.innerHTML = `
  //           <div class="alert alert-danger">
  //               <strong>Error :</strong> password not matched !
  //           </div> `;
  //   } else if (pass.length < 6) {
  //     errorMsg.innerHTML = `
  //           <div class="alert alert-danger">
  //               <strong>Error :</strong> password must be greater than 6 charecter !
  //           </div> `;
  //   } else if (!email.includes("@")) {
  //     // Message
  //     errorMsg.innerHTML = `
  //           <div class="alert alert-danger">
  //               <strong>Error :</strong> email is invalid !
  //           </div> `;
  //   } else {
  // Form Submit
  const response = await axios.post("http://localhost:3000/add", {
    fullname,
    email,
    pass,
    rePass,
  });

  if (response.data.error == true) {
    errorMsg.innerHTML = `
          <div class="alert alert-danger">
              <strong>Error :</strong> ${response.data.message} !
          </div> `;
  } else {
    console.log("We are Done !");
  }
}
// }

// length

// let phone = "0180505050";

// if (phone.length > 11) {
//   console.log("incorrect phone number invalid");
// } else if (phone.length < 11) {
//   console.log("incorrect phone number invalid");
// } else {
//   console.log("Phone number is valid");
// }

// let startWith = phone.substr(0, 2);
// if (startWith == "01") {
//   console.log("valid");
// } else {
//   console.log("your phone number is invalid");
// }

// let phoneArr = phone.split("");
// let startWith = `${phoneArr[0]}${phoneArr[1]}`;

// if (startWith == "01") {
//   console.log("valid Phone");
// } else {
//   console.log("Invalid");
// }
