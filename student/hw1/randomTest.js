function f (x,y) { return x*x-2*x+y*y+2*y-8 }

function randomCatch(){
    //x
    if(Math.floor(Math.random()*2)){           
        x = 10*Math.random()       
    }else{
        x = -10*Math.random()      
    }
    //y
    if(Math.floor(Math.random()*2)){            
        y = 10*Math.random()       
    }else{
        y = -10*Math.random()      
    }
}

lx=0.0
ly=0.0
for(var i =0 ;i<=1000000;i++){
    randomCatch()
    if(f(x,y)<f(lx,ly)){
        lx =x
        ly =y
        console.log('f(%s,%s)=%s',lx.toFixed(4), ly.toFixed(4), f(lx,ly).toFixed(4))
    } 
}