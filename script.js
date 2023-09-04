let app = document.getElementById('app');
let text ='';
let reversedText ='';
let aCount = 0;
let eCount = 0;
let iCount = 0;
let oCount = 0;
let uCount = 0;
let æCount = 0;
let åCount = 0;
let øCount = 0;
let aCounter = '';
let eCounter = '';
let iCounter = '';
let oCounter = '';
let uCounter = '';
let æCounter = '';
let øCounter = '';
let åCounter = '';

updateView()
function updateView() {
    app.innerHTML = /*html*/`
          <div id="textdisplay">${text}</div>
      <input id="textInput" type="text" oninput=" text = this.value" />
      <div id="textOutput">${reversedText}</div>

      <button onclick="reverseText(text)">Reverser teksten</button><br />
      <button onclick="vowelCounter(text)">Tell Vokaler</button><br /><br />

      <div id="aCounter">${aCounter}</div>
      <br />
      <div id="eCounter">${eCounter}</div>
      <br />
      <div id="iCounter">${iCounter}</div>
      <br />
      <div id="oCounter">${oCounter}</div>
      <br />
      <div id="uCounter">${uCounter}</div>
      <br />
      <div id="æCounter">${æCounter}</div>
      <br />
      <div id="øCounter">${øCounter}</div>
      <br />
      <div id="åCounter">${åCounter}</div>   
    `
}



function vowelCounter(text) {

  for (index = 0; index <= text.length; index++) {
    let letter = text.charAt(index);
    if (letter == 'a' || letter == 'A') {
      aCount++;
      aCounter = 'antall a: ' + aCount;
    }
    if (letter == 'e' || letter == 'E') {
      eCount++;
      eCounter = 'antall e: ' + eCount;
    }
    if (letter == 'i' || letter == 'I') {
      iCount++;
      iCounter = 'antall i: ' + iCount;
    }
    if (letter == 'o' || letter == 'O') {
      oCount++;
      oCounter = 'antall o: ' + oCount;
    }
    if (letter == 'u' || letter == 'U') {
      uCount++;
      uCounter = 'antall u: ' + uCount;
    }
    if (letter == 'æ' || letter == 'Æ') {
      æCount++;
      æCounter = 'antall æ: ' + æCount;
    }
    if (letter == 'ø' || letter == 'Ø') {
      øCount++;
      øCounter = 'antall ø: ' + øCount;
    }
    if (letter == 'å' || letter == 'Å') {
      åCount++;
      åCounter = 'antall å: ' + åCount;
    }
  }
aCount = 0;
eCount = 0;
iCount = 0;
oCount = 0;
uCount = 0;
æCount = 0;
øCount = 0;
åCount = 0;
updateView()
}

function reverseText(text) {
  reversedText = '';
  for (index = 0; index <= text.length; index++) {
    let letter = text.charAt(index);
    reversedText = letter + reversedText;
  }
updateView()
}