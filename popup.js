document.addEventListener("DOMContentLoaded", () => {
    const wordListElement = document.getElementById("wordList");
    const clearButton = document.getElementById("clearList");
  
    // Load the word list
    chrome.storage.local.get({ wordList: [] }, (data) => {
      data.wordList.forEach((word) => {
        const li = document.createElement("li");
        li.textContent = word;
        wordListElement.appendChild(li);
      });
    });
  
    // Clear the list
    clearButton.addEventListener("click", () => {
      chrome.storage.local.set({ wordList: [] }, () => {
        wordListElement.innerHTML = "";
      });
    });
  });
  