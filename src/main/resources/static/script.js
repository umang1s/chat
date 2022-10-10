var stompClient=null;

function displayChat(chat){
    console.log(chat);
    $("#chat-table-container").prepend('<tr> <td> <b> ${chat.name} : </b> ${chat.message} </td></tr>')
}

function connect(){
    let socket=new SockJS("/connect");
    stompClient=Stomp.over(socket);

    stompClient.connect({},function(frame){
        console.log(frame);
        $("#name-form").addClass('d-none');
        $("#chat-page").removeClass('d-none');

        stompClient.subscribe("/receive/chat",function(response){
            displayChat(JSON.parse(response.body));
        })
    })
}


function sendMessage(){
    let text=$("#chat-field").val();
    let name=localStorage.getItem("name");
    let msg={
        name :name,
        sender : name,
        receiver : "all",
        timestamp : Date.now(),
        message : text
    }
    stompClient.send("/send/chat",{},JSON.stringify(msg));
}


$(document).ready((e)=>{

    $("#login").click(()=>{

        let name=$("#name-field").val();
        localStorage.setItem("name",name);
        connect();
    });

    $("#send").click(()=>sendMessage());

    $("#logout").click(()=>{
        stompClient.disconnect();
        $("#name-form").removeClass('d-none');
        $("#chat-page").addClass('d-none');
        console.log("Disconnected");
    });
})