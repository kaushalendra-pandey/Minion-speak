inputText = document.getElementById("input-text")
button = document.getElementById("button")
let translatedBox = document.getElementById("translated-text")

const getEnteredText = async () => {
    const entered_text = inputText.value
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
    para.innerHTML = translatedText
    translatedBox.appendChild(para)
}