var turn = "X";

function subBoxClick(clicked_box){
    if(clicked_box.innerHTML == ""){
        

        var clicked_id = clicked_box.id;
        var main_R = clicked_id.substring(6, 7);
        var main_K = clicked_id.substring(8, 9);
        if(document.getElementById('main_R'+main_R+'K'+main_K).innerHTML == "")
            clicked_box.innerHTML = turn;
            if(turn == "X") turn = "O";
            else if(turn == "O") turn = "X";
            checkSubWinCondition(clicked_box);
    }

}

function checkSubWinCondition(clicked_box){
    var clicked_id = clicked_box.id;
    console.log(clicked_id);
    var main_R = clicked_id.substring(6, 7);
    var main_K = clicked_id.substring(8, 9);
    console.log(main_R);
    console.log(main_K);
    
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
    }else if(sub_R2K1 == "X" && sub_R2K2 == "X" && sub_R2K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }else if(sub_R3K1 == "X" && sub_R3K2 == "X" && sub_R3K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }else if(sub_R1K1 == "X" && sub_R2K1 == "X" && sub_R3K1 == "X"){ //vertical check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }else if(sub_R1K2 == "X" && sub_R2K2 == "X" && sub_R3K2 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }else if(sub_R1K3 == "X" && sub_R2K3 == "X" && sub_R3K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }else if(sub_R1K1 == "X" && sub_R2K2 == "X" && sub_R3K3 == "X"){ //diagonal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }else if(sub_R3K1 == "X" && sub_R2K2 == "X" && sub_R1K3 == "X"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "X";
    }

    if(sub_R1K1 == "O" && sub_R1K2 == "O" && sub_R1K3 == "O"){ //horizantal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R2K1 == "O" && sub_R2K2 == "O" && sub_R2K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R3K1 == "O" && sub_R3K2 == "O" && sub_R3K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R1K1 == "O" && sub_R2K1 == "O" && sub_R3K1 == "O"){ //vertical check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R1K2 == "O" && sub_R2K2 == "O" && sub_R3K2 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R1K3 == "O" && sub_R2K3 == "O" && sub_R3K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R1K1 == "O" && sub_R2K2 == "O" && sub_R3K3 == "O"){ //diagonal check
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }else if(sub_R3K1 == "O" && sub_R2K2 == "O" && sub_R1K3 == "O"){
        document.getElementById('main_R'+main_R+'K'+main_K).innerHTML = "O";
    }
}