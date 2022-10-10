var stompClient = null;
var name = null;
function displayChat(chat) {
    let leftText = "";
    let rightText = chat.message;
    let displayName = "";
    if (chat.name != name) {
        rightText = "";
        leftText = chat.message;
        displayName = "(" + chat.name + ")";
    }

    $("#chat-table-container").prepend(`<tr> <td> <p style="text-align: left;">${displayName}${leftText}</p><p style="text-align: right;">${rightText}</p></td></tr>`);
}

function connect() {
    let socket = new SockJS("/connect");
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log(frame);
        $("#name-form").addClass('d-none');
        $("#chat-page").removeClass('d-none');

        stompClient.subscribe("/receive/chat", function (response) {
            displayChat(JSON.parse(response.body));
        })
    })
}


function sendMessage() {
    let text = $("#chat-field").val();
    let msg = {
        message: text,
        timestamp: Date.now(),
        sender: name,
        name: name,
        receiver: "all"
    }
    stompClient.send("/send/chat", {}, JSON.stringify(msg));
    $("#chat-field").val = "";
}


$(document).ready((e) => {

    name = localStorage.getItem("name");
    console.log("ready " + name);
    if (name != "null" && name != null) connect();

    $("#login").click(() => {

        name = $("#name-field").val();
        localStorage.setItem("name", name);
        connect();
    });

    $("#send").click(() => sendMessage());

    $("#logout").click(() => {
        stompClient.disconnect();
        localStorage.removeItem("name");
        $("#name-form").removeClass('d-none');
        $("#chat-page").addClass('d-none');
        console.log("Disconnected");






        var tableHeaderRowCount = 1;
        var table = document.getElementById('#chat-table-container');
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
    });
})