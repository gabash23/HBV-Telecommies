class Chat {
	constructor() {
		this.update = updateChat;
		this.send = sendChat;
		this.getState = getStateOfChat;
	}
}

var instance = false;
var state;
var file;

//gets the state of the chat
function getStateOfChat() {
	//if(!instance){
		instance = true;
		$.ajax({
			type: "POST",
			url: "process.php",
			data: {'function': 'getState', 'file': file},
			dataType: "json",	
			success: function(data) {state = data.state; instance = false;}
		});
	//}	
}

getStateOfChat();

//Updates the chat
function updateChat() {
	//if(!instance){
		instance = true;
		$.ajax({
			type: "POST",
			url: "process.php",
			data: {'function': 'update','state': state,'file': file},
			dataType: "json",
			success: function(data) {
				if(data.text){
					for (var i = 0; i < data.text.length; i++) {
						$('#chat-area').append($(" "+ data.text[i] +" "));
					}	
				}
				document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
				instance = false;
				state = data.state;
			}
		});
	//}
	//else {
		setTimeout(updateChat, 1500);
	//}
}

//send the message
//function sendChat(message, nickname) { 
function sendChat() { 
	let message = document.getElementById('usermsg').value;
	let nickname = document.getElementById('username').value;
	console.log("Message: " + message + " Nickname: " + nickname);
	updateChat();
	$.ajax({
		type: "POST",
		url: "process.php",
		data: {'function': 'send','message': message,'nickname': nickname,'file': file},
		dataType: "json",
		success: function(data){
			updateChat();
		}
	});
}

