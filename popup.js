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