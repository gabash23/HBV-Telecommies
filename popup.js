function username (){
    let newName = document.getElementById('username').value;
    document.getElementById('username1').innerHTML='Welcome ' + newName + '!';
}

let msgList = []

function sendMessage (){
    document.getElementById('messages').innerHTML = 'hentai';
    /*
    var currentText = document.getElementById('usermsg').value
    msgList.push(currentText)
    document.getElementById("messages")    */
}


document.getElementById('username').addEventListener("input", username)
document.getElementById('submitmsg').addEventListener('click', sendMessage)
