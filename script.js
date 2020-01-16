var turn = "X";
var start = true;

function subBoxClick(clicked_box){
    if(clicked_box.innerHTML == ""){
        

        var clicked_id = clicked_box.id;
        var main_R = clicked_id.substring(6, 7);
        var main_K = clicked_id.substring(8, 9);
        var sub_R = clicked_id.substring(15, 16);
        var sub_K = clicked_id.substring(17, 18);
        if(document.getElementById('main_R'+main_R+'K'+main_K).innerHTML == ""){
            if(start || clicked_box.style.backgroundColor == "lightblue"){
                start = false;
                clicked_box.innerHTML = turn;
                if(turn == "X"){
                    clicked_box.style.color = "blue";
                    turn = "O"
                }
                else if(turn == "O") {
                    clicked_box.style.color = "red";
                    turn = "X"
                }
                checkSubWinCondition(clicked_box);
                if(document.getElementById('main_R'+sub_R+'K'+sub_K).innerHTML == ""){
                    setMainBackgroundColor(clicked_box);
                }else{
                    setMainBackgroundColor2(clicked_box);
                    start = true;
                }
                checkMainWinCondition();
            }
        }
    }

}

function checkSubWinCondition(clicked_box){
    var clicked_id = clicked_box.id;
    var main_R = clicked_id.substring(6, 7);
    var main_K = clicked_id.substring(8, 9);
    
    var sub_R1K1 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R1K1').innerHTML;
    var sub_R1K2 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R1K2').innerHTML;
    var sub_R1K3 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R1K3').innerHTML;

    var sub_R2K1 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R2K1').innerHTML;
    var sub_R2K2 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R2K2').innerHTML;
    var sub_R2K3 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R2K3').innerHTML;

    var sub_R3K1 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R3K1').innerHTML;
    var sub_R3K2 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R3K2').innerHTML;
    var sub_R3K3 = document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R3K3').innerHTML;

    if(sub_R1K1 == "X" && sub_R1K2 == "X" && sub_R1K3 == "X"){ //horizantal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R2K1 == "X" && sub_R2K2 == "X" && sub_R2K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R3K1 == "X" && sub_R3K2 == "X" && sub_R3K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R1K1 == "X" && sub_R2K1 == "X" && sub_R3K1 == "X"){ //vertical check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R1K2 == "X" && sub_R2K2 == "X" && sub_R3K2 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R1K3 == "X" && sub_R2K3 == "X" && sub_R3K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R1K1 == "X" && sub_R2K2 == "X" && sub_R3K3 == "X"){ //diagonal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }else if(sub_R3K1 == "X" && sub_R2K2 == "X" && sub_R1K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "blue";
    }

    if(sub_R1K1 == "O" && sub_R1K2 == "O" && sub_R1K3 == "O"){ //horizantal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R2K1 == "O" && sub_R2K2 == "O" && sub_R2K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R3K1 == "O" && sub_R3K2 == "O" && sub_R3K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R1K1 == "O" && sub_R2K1 == "O" && sub_R3K1 == "O"){ //vertical check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R1K2 == "O" && sub_R2K2 == "O" && sub_R3K2 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R1K3 == "O" && sub_R2K3 == "O" && sub_R3K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R1K1 == "O" && sub_R2K2 == "O" && sub_R3K3 == "O"){ //diagonal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }else if(sub_R3K1 == "O" && sub_R2K2 == "O" && sub_R1K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
        document.getElementById('main_R'+main_R+'K'+main_K).style.color = "red";
    }
}

function checkMainWinCondition(){

    var main_R1K1 = document.getElementById('main_R1K1').innerHTML;
    var main_R1K2 = document.getElementById('main_R1K2').innerHTML;
    var main_R1K3 = document.getElementById('main_R1K3').innerHTML;

    var main_R2K1 = document.getElementById('main_R2K1').innerHTML;
    var main_R2K2 = document.getElementById('main_R2K2').innerHTML;
    var main_R2K3 = document.getElementById('main_R2K3').innerHTML;

    var main_R3K1 = document.getElementById('main_R3K1').innerHTML;
    var main_R3K2 = document.getElementById('main_R3K2').innerHTML;
    var main_R3K3 = document.getElementById('main_R3K3').innerHTML;

    if(main_R1K1 == "X" && main_R1K2 == "X" && main_R1K3 == "X"){ //horizantal check
        alert("X has won!");
    }else if(main_R2K1 == "X" && main_R2K2 == "X" && main_R2K3 == "X"){
        alert("X has won!");
    }else if(main_R3K1 == "X" && main_R3K2 == "X" && main_R3K3 == "X"){
        alert("X has won!");
    }else if(main_R1K1 == "X" && main_R2K1 == "X" && main_R3K1 == "X"){ //vertical check
        alert("X has won!");
    }else if(main_R1K2 == "X" && main_R2K2 == "X" && main_R3K2 == "X"){
        alert("X has won!");
    }else if(main_R1K3 == "X" && main_R2K3 == "X" && main_R3K3 == "X"){
        alert("X has won!");
    }else if(main_R1K1 == "X" && main_R2K2 == "X" && main_R3K3 == "X"){ //diagonal check
        alert("X has won!");
    }else if(main_R3K1 == "X" && main_R2K2 == "X" && main_R1K3 == "X"){
        alert("X has won!");
    }

    if(main_R1K1 == "O" && main_R1K2 == "O" && main_R1K3 == "O"){ //horizantal check
        alert("O has won!");
    }else if(main_R2K1 == "O" && main_R2K2 == "O" && main_R2K3 == "O"){
        alert("O has won!");
    }else if(main_R3K1 == "O" && main_R3K2 == "O" && main_R3K3 == "O"){
        alert("O has won!");
    }else if(main_R1K1 == "O" && main_R2K1 == "O" && main_R3K1 == "O"){ //vertical check
        alert("O has won!");
    }else if(main_R1K2 == "O" && main_R2K2 == "O" && main_R3K2 == "O"){
        alert("O has won!");
    }else if(main_R1K3 == "O" && main_R2K3 == "O" && main_R3K3 == "O"){
        alert("O has won!");
    }else if(main_R1K1 == "O" && main_R2K2 == "O" && main_R3K3 == "O"){ //diagonal check
        alert("O has won!");
    }else if(main_R3K1 == "O" && main_R2K2 == "O" && main_R1K3 == "O"){
        alert("O has won!");
    }
}

function setMainBackgroundColor(clicked_box){
    var clicked_id = clicked_box.id;
    var main_R = clicked_id.substring(6, 7);
    var main_K = clicked_id.substring(8, 9);
    var sub_R = clicked_id.substring(15, 16);
    var sub_K = clicked_id.substring(17, 18);

    for(var r = 1;r<=3;r++){
        for(var k = 1;k<=3;k++){
            document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R'+r+'K'+k).style.backgroundColor = "transparent";
            document.getElementById('main_R'+sub_R+'K'+sub_K+'_sub_R'+r+'K'+k).style.backgroundColor = "lightblue";
        }
    }
}
function setMainBackgroundColor2(clicked_box){
    var clicked_id = clicked_box.id;
    var main_R = clicked_id.substring(6, 7);
    var main_K = clicked_id.substring(8, 9);
    var sub_R = clicked_id.substring(15, 16);
    var sub_K = clicked_id.substring(17, 18);

    for(var r = 1;r<=3;r++){
        for(var k = 1;k<=3;k++){
            document.getElementById('main_R'+main_R+'K'+main_K+'_sub_R'+r+'K'+k).style.backgroundColor = "transparent";
        }
    }
}