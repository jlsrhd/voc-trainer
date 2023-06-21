let dictionarySpan = JSON.parse(localStorage.getItem("dictionarySpan")) || {
    "Hallo": "hola",
}; 

function addVocabSpan () {
    dictionarySpan[germanText.value] = spanText.value;

    germanText.value = "";
    spanText.value = "";

    localStorage.setItem("dictionarySpan", JSON.stringify(dictionarySpan));
    renderSpan();
}

function renderSpan() {
    vocabularyListSpan.innerHTML = " ";
    for(let key in dictionarySpan) {
        vocabularyListSpan.innerHTML += `<li>${key} - ${dictionarySpan[key]}</li>`;
    }
}

function nextVocabularySpan() {
    let obj_keys = Object.keys(dictionarySpan);
    let ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    wordSpan.innerHTML = `${dictionarySpan[ran_key]}?`;
}

function compareSpan(){
    if(germanText.value == ran_key){
        textSpan.innerHTML = "Richtig!";
    }
    else{
        textSpan.innerHTML = "Falsch";
    }
    germanText.value = "";
    nextVocabularySpan();
}
