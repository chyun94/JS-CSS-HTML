var arrx =[9,8,7,6,5,4,3,2,1];

for(var i=0; i<arrx.length; i++){   // 
    console.log("출력: "+arrx);
    for(var j=0;j<arrx.length-i; j++){
        if(arrx[j]>arrx[j+1]){
            var x=arrx[j];
            arrx[j]=arrx[j+1];
            arrx[j+1]=x;
        }
    }
}
//버블정렬
console.log("오름차순 정렬: "+arrx);