let dictionaryRus = JSON.parse(localStorage.getItem("dictionaryRus")) || {
    "": "",
}; 
let ran_key;

function addVocabRus () {
    dictionaryRus[germanText.value] = rusText.value;

    germanText.value = "";
    rusText.value = "";

    localStorage.setItem("dictionaryRus", JSON.stringify(dictionaryRus));
    renderRus();
}

function renderRus() {
    vocabularyListRus.innerHTML = " ";
    for(let key in dictionaryRus) {
        vocabularyListRus.innerHTML += `<li>${key} - ${dictionaryRus[key]}</li>`;
    }
}

function nextVocabularyRus() {
    let obj_keys = Object.keys(dictionaryRus);
    let ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    wordRus.innerHTML = `${dictionaryRus[ran_key]}?`;
}

function compareRus(){
    if(germanText.value == ran_key){
        textRus.innerHTML = "Richtig!";
    }
    else{
        textRus.innerHTML = "Falsch";
    }
    germanText.value = "";
    nextVocabularyRus();
}
