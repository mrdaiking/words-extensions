chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addWord",
      title: "Add to Word List",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "addWord") {
      chrome.storage.local.get({ wordList: [] }, (data) => {
        console.log(info.selectionText);
        const updatedList = [...data.wordList, info.selectionText];
        chrome.storage.local.set({ wordList: updatedList });
      });
    }
  });
  