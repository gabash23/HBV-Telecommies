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
    
    let username = document.getElementById('username').value;
    let newmsg = document.getElementById('usermsg').value;
    msgList.push(newmsg);
    document.getElementById('messages').innerHTML = '\n' + username + ' : ' + msgList;
    
}

document.getElementById('username').addEventListener("input", username)
document.getElementById('submitmsg').addEventListener('click', sendMessage)
2