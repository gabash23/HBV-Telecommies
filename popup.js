function username (){
    let newName = document.getElementById('username').value;
    document.getElementById('username1').innerHTML='Welcome ' + newName + '!';
}

let msgList = []

function sendMessage (event){
    event.preventDefault();  
    var form = document.getElementById("submitmsg");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    console.log("test");
    document.getElementById('messages').innerHTML = 'hentai';
    /*
    var currentText = document.getElementById('usermsg').value
    msgList.push(currentText)
    document.getElementById("messages")    */
}

var wsUri = "wss://echo.websocket.org/";
var output;

function init()
{
  output = document.getElementById("chatbox");
  testWebSocket();
}

function testWebSocket()
{
  websocket = new WebSocket(wsUri);
  websocket.onopen = function(evt) { onOpen(evt) };
  websocket.onclose = function(evt) { onClose(evt) };
  websocket.onmessage = function(evt) { onMessage(evt) };
  websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
  writeToScreen("CONNECTED");
  doSend("WebSocket rocks");
}

function onClose(evt)
{
  writeToScreen("DISCONNECTED");
}

function onMessage(evt)
{
  writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
  websocket.close();
}

function onError(evt)
{
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}

function doSend(message)
{
  writeToScreen("SENT: " + message);
  websocket.send(message);
}

function sendMessage()
{
    message = document.getElementById("usermsg").innerText;
    console.log("Message:" + message)
    doSend(message);
}

function writeToScreen(message)
{
  var pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

window.addEventListener("load", init, false);

document.getElementById('username').addEventListener("input", username)
//document.getElementById('submitmsg').addEventListener('click', sendMessage)
