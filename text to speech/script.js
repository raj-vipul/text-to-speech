
let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", () => {
    let text = document.querySelector("textarea").value;
    
       if (text.trim() === "") {
        alert("Please enter some text.");
        return;
    }

      speech.text = text;

       speech.lang = "en-usa";  
     window.speechSynthesis.cancel();
    
     window.speechSynthesis.speak(speech);
});
theme: jekyll-theme-minimal
