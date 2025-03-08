let name = prompt("Adinizi yazin");
let age = prompt("Yaşinizi yazin");
let hobbies = "";
if (confirm("Do you want to write ur hobies?")) {
    hobbies = prompt("Write your hobies with comma");
}
alert(`Ad: ${name}\nYaş ${age}\nHobbilər: ${hobbies}`);