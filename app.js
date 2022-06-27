var ROWS = 6;
var COLUMNS = 7;


// make 7 columns
function createBoard() {
    var boardDiv = document.querySelector("#game-board");
    boardDiv.innerHTML = "";

    for (var i = 0; i < ROWS; i += 1) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.innerHTML = "";
        boardDiv.appendChild(rowDiv);

        for (var j = 0; j < COLUMNS; j+=1) {
            var slotDiv = document.createElement("div");
            slotDiv.classList.add("slot");
            slotDiv.classList.add(`row${i}`,`col${j}`);
            rowDiv.appendChild(slotDiv);
            
            
        }

    }
    
};
//make 6 rows


createBoard();