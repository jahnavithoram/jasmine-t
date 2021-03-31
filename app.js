var add = (x, y) => {
    return x + y;
}

var product = (x, y) => {
    return x * y;
}

var sub = (x, y) => {
    return x - y;
}
 var prime = (x)=>{
     if(i==0||i==1)
     return false;
     for(var i =2;i*i<=x;i++)
     if(x%i==0)
     return false;
     return true;
 }

module.exports = {add:add,product :product,sub:sub ,prime:prime};