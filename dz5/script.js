function outputText() {
    const inputText = document.getElementById("textInput").value;
    const text = document.getElementById("hash1");
    text.textContent = inputText;
}



let count = 0;
    const counterElement = document.getElementById('counter');

    function updateCounter() {
        counterElement.textContent = count;
    }

    function increment() {
        if (count < 50) {
            count++;
            updateCounter();
        }
    }

    function decrement() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    }