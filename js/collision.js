/**
 * Created by 14334 on 2017/4/13.
 */
//检测果实碰撞,判断大鱼和果实距离

function momFruitCollison(){
    if(!data.gameOver){
        for(var i = 0; i < fruit.num; i++){
            if(fruit.alive[i]){
                //calculate length
                var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
                if(l < 500){
                    //fruit eaten
                    fruit.dead(i);
                    data.fruitNum++;
                    mom.momBodyCount++;
                    if(mom.momBodyCount > 7){
                        mom.momBodyCount = 7;
                    }
                    if(fruit.fruitType[i] == "blue"){
                        data.double = 2;
                    }
                    wave.born(fruit.x[i], fruit.y[i]);
                }
            }
        }
    }
}

function momBabyCollision(){
    if(data.fruitNum > 0 && !data.gameOver){
        var l = calLength2(mom.x, mom.y, baby.x, baby.y);
        if(l < 500){
            baby.babyBodyCount = 0;
            //data.reset();
            mom.momBodyCount = 0;
            data.addScore();
            halo.born(baby.x,baby.y);
        }
    }
}
