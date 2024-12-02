document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString().trim();
    console.log(selectedText);
    if (selectedText) {
      chrome.storage.local.get({ wordList: [] }, (data) => {
        const updatedList = [...data.wordList, selectedText];
        chrome.storage.local.set({ wordList: updatedList });
      });
    }
  });
  