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
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
<<<<<<< HEAD
    msgList.push(username + (' ('+time+')').fontcolor("Gray") + ' : ' + newmsg);
=======
    msgList.push(username + (' ('+time+')').fontcolor('grey') + ' : ' + newmsg);
>>>>>>> 4db0e1aaf27f0ee0aa5f3ebbfa63d4263045c44a
    var newLine = msgList.join('<br>')
    document.getElementById('messages').innerHTML = newLine;
    document.getElementById('usermsg').innerHTML='';
}

document.getElementById('subUN').addEventListener("click", username)
document.getElementById('submitmsg').addEventListener('click', sendMessage)