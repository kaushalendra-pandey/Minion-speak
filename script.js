inputText = document.getElementById("input-text")
button = document.getElementById("button")
let translatedBox = document.getElementById("translated-text")
alertBox = document.getElementsByClassName("alert")

const getEnteredText = async () => {
    const entered_text = inputText.value
    alertBox[0].innerHTML = ""
    translatedBox.innerHTML = ""
    if(entered_text.length === 0){
        alertBox[0].innerHTML = "Please enter something in the box"
        return
    }
    let translatedText = await getTranslatedText(entered_text)
    addToTranslatedBox(translatedText)
}

const getTranslatedText = async (entered_text) => {
    let data = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${entered_text}`)
    let res = await data.json()
    let fetchedText = res?.contents?.translated
    console.log(fetchedText)
    return fetchedText
}

const addToTranslatedBox = (translatedText) => {
    translatedBox.innerHTML = ""    
    para = document.createElement("p")
    if(translatedText === undefined){
        translatedText = "Please try again after some time.. You might have hit the api so many time."
    }
    para.innerHTML = translatedText
    translatedBox.appendChild(para)
}