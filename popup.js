function username (event){
    var form = document.getElementById("subUN");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    let newName = document.getElementById('username').value;
    if (newName === '') {
        
    } else {
        document.getElementById('username1').innerHTML='Welcome ' + newName + '!';
        var element = document.getElementById('subUN')
        element.parentNode.removeChild(element);
    }
}

function callPy(data1) {
    $.ajax({
      type: "POST",
      url:"/test",
      data:{data1: data1},
      success:callbackFunc
    });
}

function callbackFunc(response) {
  $('#result').html('<li>'+response.x+'</li>');
}

function sendPythonMessage(message) {
  console.log("sendPythonMessage ran");
  callPy(message);
}

function sendMessage2() {
  document.getElementById('chatbox').innerHTML = "yes";
  console.log("sendMessage2 ran");
  sendPythonMessage("testing");
}

let msgList = [];

function sendMessage (event) {
    //event.preventDefault();  
    var form = document.getElementById("submitmsg");
    //function handleForm(event) { event.preventDefault(); } 
    //form.addEventListener('submit', handleForm);
    //document.getElementById('messages').innerHTML = 'hentai';
    let message = document.getElementById('usermsg').value;
    sendPythonMessage(message);
    /*
    var currentText = document.getElementById('usermsg').value
    msgList.push(currentText)
    document.getElementById("messages")    */
}

var msgList = []

function sendMessage (event){
    event.preventDefault();  
    var form = document.getElementById("submitmsg");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    let username = document.getElementById('username').value;
    let newmsg = document.getElementById('usermsg').value;
    msgList.push(username + ' : ' + newmsg);
    var newLine = msgList.join('<br>')
    document.getElementById('messages').innerHTML = newLine;
}

document.getElementById('subUN').addEventListener("click", username)
document.getElementById('submitmsg').addEventListener('click', sendMessage)