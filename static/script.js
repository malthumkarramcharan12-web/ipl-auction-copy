var socket = io();

function bid(amount){
    socket.emit("bid", {amount: amount});
}

socket.on("update_bid", function(data){
    document.getElementById("bid").innerText = "Bid: " + data.bid;
});

function nextPlayer(){
    socket.emit("next_player");
}

socket.on("new_player", function(player){
    document.getElementById("player-name").innerText = player.name;
});
