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

document.getElementById('username').addEventListener("input", username)
document.getElementById('submitmsg').addEventListener('click', sendMessage)
