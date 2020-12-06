function moveAnimation(fromX,fromY,toX,toY){
    document.querySelector('number-cell-'+fromX+'-'+fromY)
}
function numberAnimation(randX,randY,randomNumber){
    var gridNumber =document.getElementById("#grid-number-"+randX+"-"+randY);
    document.querySelector("grid-cell").style.backgroundColor="getGridNumberBackgroundColor(randomNumber)";
    document.querySelector("grid-cell").style.color="getGridNumberColor(randomNumber)";
    document.querySelector("grid-cell").textContent=randomNumber;
    document.querySelector("grid-cell").animate({width:"100px",height:"100px",top:PosTop(randX,randY),left:PosLeft(randX,randY)},50);
}
function canMoveLeft(site) {
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(site[i][j]!=0&&j!=0){
               if(site[i][j-1]==0||site[i][j-1]==site[i][j])
                  return true;
            }
            return false;            
        }
    }
}
function canMoveRight(site) {
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(site[i][j]!=0&&j!=3){
               if(site[i][j+1]==0||site[i][j+1]==site[i][j])
                  return true;
            }
            return false;            
        }
    }
}         

function canMoveUp(site) {
    for(var j=0;j<4;j++){
        for(var i=0;i<4;i++){
            if(site[i][j]!=0&&i!=0){
               if(site[i-1][j]==0||site[i-1][j]==site[i][j])
                  return true;
            }
            return false;
        }
    }
}
function canMoveDown(site) {
    for(var j=0;j<4;j++){
        for(var i=0;i<4;i++){
            if(site[i][j]!=0&&i!=3){
               if(site[i+1][j]==0||site[i+1][j]==site[i][j])
                  return true;
            }
            return false;            
        }
    }
}
function noBacteriaHorizon (row,col_1,col_2,site){
        for(var i=col_1+1;i<col_2;i++){
            if(site[row][i]!=0)
               return false;
        }
        return true;
}
function noBacteriaVertical(col,row_1,row_2,site){
        for(var i=row_1;i<row_2;i++)
            if(site[col][i]!=0)
                return false;
        return true;
}