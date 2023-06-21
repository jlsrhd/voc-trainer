let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {
    "Hallo": "Terve",
    "Willkommen": "Tervetuloa",
}; 
let ran_key;

function addVocab () {
    dictionary[germanText.value] = finText.value;

    germanText.value = "";
    finText.value = "";

    localStorage.setItem("dictionary", JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = " ";
    for(let key in dictionary) {
        vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary() {
    let obj_keys = Object.keys(dictionary);
    let ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    word.innerHTML = `${dictionary[ran_key]}?`;
}

function compare(){
    if(germanText.value == ran_key){
        text.innerHTML = "Richtig!";
    }
    else{
        text.innerHTML = "Falsch";
    }
    germanText.value = "";
    nextVocabulary();
}