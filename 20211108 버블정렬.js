var arrx =[3,4,1,5,9,8,7,2];

for(var i=0; i<arrx.length; i++){
    for(var j=0;j<arrx.length-i; j++){
        if(arrx[j]>arrx[j+1]){
            var x=arrx[j];
            arrx[j]=arrx[j+1];
            arrx[j+1]=x;
        }
    }
}
//버블정렬
console.log("오름차순 정렬"+arrx);