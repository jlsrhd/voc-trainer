let dictionaryIt = JSON.parse(localStorage.getItem("dictionaryIt")) || {
    "Hallo": "Ciao",
}; 
let ran_key;

function addVocabIt () {
    dictionaryIt[germanText.value] = itText.value;

    germanText.value = "";
    itText.value = "";

    localStorage.setItem("dictionaryIt", JSON.stringify(dictionaryIt));
    renderIt();
}

function renderIt() {
    vocabularyListIt.innerHTML = " ";
    for(let key in dictionaryIt) {
        vocabularyListIt.innerHTML += `<li>${key} - ${dictionaryIt[key]}</li>`;
    }
}

function nextVocabularyIt() {
    let obj_keys = Object.keys(dictionaryIt);
    let ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    wordIt.innerHTML = `${dictionaryIt[ran_key]}?`;
}
function compareIt(){
    if(germanText.value == ran_key){
        textIt.innerHTML = "Richtig!";
    }
    else{
        textIt.innerHTML = "Falsch";
    }
    germanText.value = "";
    nextVocabularyIt();
}