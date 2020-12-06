var site = new Array();
var add = new Array();
var score = 0;
const gridContainer = document.querySelector("grid-container");
const result = document.querySelector("gameOver");
document.querySelector("gameOver").addEventListener("click", function(e){
    e.preventDefault();
    newGame();
});
function newGame(){
    newBoard();
    getRandomNumber();
    getRandomNumber();
    score = 0;
}
function newBoard(){
    document.querySelector("score").innerHTML= score;
    result.style.display="none"//使结果不可见,且用id比较简洁
    for(var i=0;i<4;i++){
        site[i] = new Array();
        for(var j=0;j<4;j++){
            site[i][j] = 0;
        }
    }
    for(var i = 0 ;i<4;i++){
        for(var j = 0;j<4;j++){
            add[i][j]=0;
        }
     }
     init();
}
function init(){
    var numberNode = gridContainer.querySelector("number-cell");
    gridContainer.removeChild(numberNode);//将之前的样式去除
    for(var i=0;i<4;i++){
        site[i] = new Array();
        for(var j=0;j<4;j++){
          gridContainer.appendChild('<div class="number-cell" id="number-cell-'+i+'-'+j+'"></div>');
          var gridNumber= document.querySelector("'grid-cell-'+i+'-'+j");
          if(site[i][j]!=0){
              gridNumber.style.backgroundColor="getNumberBackgroundColor(site[i][j])";//返回
              gridNumber.style.color="getNumberColor(site[i][j])";
              gridNumber.textContent=site[i][j];//改变方块数值
          }
        }
    }
}
function getRandomNumber (){
    var randomNumber = Math.random()>0.5?2:4;
    var randX = parseInt(Math.floor(Math.random*4));
    var randY = parseInt(Math.floor(Math.random()*4));//先提供一个地址
    while(true){            //定义一个死循环,完成生成随机空格子
        if(site[randX][randY]==0){
          break;
        }else{
          randX =parseInt(Math.floor(Math.random()*4));
          randY =parseInt(Math.floor(Math.random()*4));
        }
    }
        site[randX][randY] = randomNumber;
        numberAnimation(randX,randY,randomNumber);//刷新数字
}