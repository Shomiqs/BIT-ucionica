// console.log("Zdravo svete!");

// var body = document.body;

// console.log(body);

var button = document.getElementById("dog-button");
var dogImage = document.getElementById("dog-image");

var API_URL = "https://dog.ceo/api/breeds/image/random";

// var button2 = document.querySelector("#dog-button");

// console.log(button);

// button.onclick = function () {
//   console.log("Kliknuto je dugme");
// };

button.addEventListener("click", function () {
  console.log("Dugme je kliknuto!");
  var fetchReturn = fetch(API_URL);
  console.log(fetchReturn);

  var response = fetchReturn.then(function (value) {
    return value.json();
  });
  //  response.then((data) => console.log(data));
  response.then(function (data) {
    console.log(response);
    dogImage.src = data.message;
  });
});
