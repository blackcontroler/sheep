var res = document.getElementById("gameOver");
document.addEventListener("keyCode",function (e){
    switch(e.keyCode){
        case 37:    //Left
            if(moveLeft()){
                setTimeOut("getRandomNumber()",200);
                setTimeout("gameOver()",300);
            }
            break;
         case 38:    //up
            if(moveUp()){
                setTimeOut("getRandomNumber()",200);
                setTimeout("gameOver()",300);
            }
            break;
        case 39:    //Right
            if(moveRight()){
                setTimeOut("getRandomNumber()",200);
                setTimeout("gameOver()",300);
            }
            break;
        case 40:    //Down
            if(moveDown()){
                setTimeOut("getRandomNumber()",200);
                setTimeout("gameOver()",300);
            }
            break;
        default:
            break;
    }
});
function moveLeft(){
    if( !canMoveLeft(site))
        return false;
    isAddArray();
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            for(var k=0;k<j;k++){
                if(site[i][k]==0&&noBacteriaHorizon(i,k,j,site)){
                   moveAnimation(i,j,i,k);
                   site[i][k]=site[i][j];
                   site[i][j]=0;
                   continue;
                }else if(site[i][j]==site[i][k]&&noBacteriaHorizon(i,j,k,site)){
                    moveAnimation(i,j,i,k);
                    if(add[i][j]){
                      site[i][k+1]=site[i][j];
                      site[i][j]=0;
                    }else {
                    site[i][k]+=site[i][j];
                    site[i][j]=0;
                    add[i][k]=1;
                    score+=site[i][k];
                    }
                    continue;
                }
            }
        }
    }
    setTimeout("init()",200);
    return true;
}
function moveRight (){
    if( !canMoveRight(site))
        return false;
    isAddArray();
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            for(var k=3;k>=j;k--){
                if(site[i][k]==0&&noBacteriaHorizon(i,k,j,site)){
                   moveAnimation(i,j,i,k);
                   site[i][k]=site[i][j];
                   site[i][j]=0;
                   continue;
                }else if(site[i][j]==site[i][k]&&noBacteriaHorizon(i,j,k,site)){
                    moveAnimation(i,j,i,k);
                    if(add[i][j]!=0){
                      site[i][k-1]=site[i][j];
                      site[i][j]=0;
                    }else {
                    site[i][k]+=site[i][j];
                    site[i][j]=0;
                    add[i][k]=1;
                    score+=site[i][k];
                    }
                    continue;
                }
            }
        }
    }
    setTimeout("init()",200);
    return true;
}
function moveUp (){
    if( !canMoveUp(site))
        return false;
    
    isAddArray();
    for(var j=0;i<4;i++){
        for(var i=1;j<4;j++){
            for(var k=0;k<i;k++){
                if(site[k][j]==0&&noBacteriaVertical(j,k,i,site)){
                   moveAnimation(i,j,k,j);
                   site[k][j]=site[i][j];
                   site[i][j]=0;
                   continue;
                }else if(site[i][j]==site[k][j]&&noBacteriaVertical(j,k,i,site)){
                    moveAnimation(i,j,k,j);
                    if(add[i][j]!=0){
                      site[k+1][j]=site[i][j];
                      site[i][j]=0;
                    }else {
                    site[k][j]+=site[i][j];
                    site[i][j]=0;
                    add[k][j]=1;
                    score+=site[k][j];
                    }
                    continue;
                }
            }
        }
    }
    setTimeout("init()",200);
    return 0;
}
function moveDown (){
    if( !canMoveDown(site))
        return false;
    
    isAddArray();
    for(var j=0;i<4;i++){
        for(var i=3;i>=0;i--){
            for(var k=3;k>i;k--){
                if(site[k][j]==0&&noBacteriaVertical(i,k,j,site)){
                   moveAnimation(i,j,i,k);
                   site[k][j]=site[i][j];
                   site[i][j]=0;
                   continue;
                }else if(site[i][j]==site[k][j]&&noBacteriaVertical(i,j,k,site)){
                    moveAnimation(i,j,i,k);
                    if(add[i][j]!=0){
                      site[k-1][j]=site[i][j];
                      site[i][j]=0;
                    }else {
                    site[k][j]+=site[i][j];
                    site[i][j]=0;
                    add[i][j]=1;
                    score+=site[k][j];
                    }
                    continue;
                }
            }
        }
    }
    setTimeout("init()",200);
    return true;
}
function noSpace(site){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            if(site[i][j]==0){
                return false;
            } 
        }
    }
    return true;
}
function noMove(){
    if(canMoveLeft()||canMoveRight()||canMoveUp()||canMoveDown())
        return false;
    return true;
}
function gameOver(){
    if(nospace(site)&&noMove(site)){
       res.setAttribute("style","display:block;");
    }
}