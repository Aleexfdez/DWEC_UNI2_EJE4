

function transformarATipos(cosas){
    var arrayTipos=[]; 

for (var i = 0; i < array.length; i++) {
    
arrayTipos[i]=typeof(cosas[i]);
}
return arrayTipos
}
console.log(transformarATipos([23,"Alex",true]));