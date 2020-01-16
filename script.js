var turn = "X";

function subBoxClick(clicked_box){
    if(clicked_box.innerHTML == ""){
        clicked_box.innerHTML = turn;
        if(turn == "X") turn = "O";
        else if(turn == "O") turn = "X";
        checkSubWinCondition(clicked_box);
    }

}

function checkSubWinCondition(clicked_box){
    
}