function username (){
    let newName = document.getElementById('username').value;
    document.getElementById('username1').innerHTML='Welcome ' + newName + '!';
}

// GET is the default method, so we don't need to set it
function sendMessage(message) {
fetch('/hello').then(function (response) {
    return response.text();
}).then(function (text) {
    // Print the greeting as text
    console.log('GET response text:');
    console.log(text);
});
}

// Send the same request
fetch('/hello').then(function (response) {

    // But parse it as JSON this time
    return response.json();
}).then(function (json) {

    // Do anything with it!
    console.log('GET response as JSON:');
    console.log(json);
})

// POST
fetch('/hello', {
    // Specify the method
    method: 'POST',

    // A JSON payload
    body: JSON.stringify({
        "greeting": "Hello from the browser!"
    })
    
}).then(function (response) {
    return response.text();

}).then(function (text) {

    console.log('POST response: ');

    // Should be 'OK' if everything was successful
    console.log(text);
});

let msgList = []

function sendMessage (event){
    //event.preventDefault();  
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

//window.addEventListener("load", init, false);

document.getElementById('username').addEventListener("input", username)
//document.getElementById('submitmsg').addEventListener('click', sendMessage)
