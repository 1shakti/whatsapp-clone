var x = "Dormitory";
var y = "Dirty room"

function angram(x,y){

    var newarrx = x.trim(" ").split("");
    var newarry = y.trim(" ").split("");
    var res = "";

    if(newarrx.length === newarry.length) return false;

    for(var i = 0; i < newarrx.length; i++ ){
        newarrx.forEach((element) =>{
            if(newarry.includes(element)){   
                res += element;      
            }
        })
    }

    if(res === newarrx){
        console.log("angram");
        return "angram";
    }

}

angram(x,y)