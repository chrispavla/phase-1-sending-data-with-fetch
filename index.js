// function submitData(userName, userEmail) {

//     const formData = {
//         name: userName,
//         email: userEmail,
//     }

//     const configurations = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(formData)
//     }

//     return fetch("http://localhost:300/users", configurations)
//     .then(response => response.json())
//     .then(data => {
//         document.querySelector('body').append(data.id)
//     })
//     .catch(function (error) {
//         alert("Oh no! Seems like there is an error.");
//         console.log(error.message);
//         document.querySelector('body').append(error)
//     })

// }

// submitData("dsfsf", "jsnusicn")
function submitData(userName, userEmail) {
  const dataObj = {
    name: userName,
    email: userEmail,
  };

  const congif = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(dataObj),
  };

  return fetch("http://localhost:3000/users", congif)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("body").append(data.id);
    })
    .catch((err) => {
      alert("Oh no! Seems like there is an error.");
      document.querySelector("body").append(err);
    });
}
