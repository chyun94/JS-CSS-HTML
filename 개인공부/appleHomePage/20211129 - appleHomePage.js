var appleimg = document.querySelector('#img1');
var tick = 1500;    // 1000 = 1s
var imgIndex = -1;
var stop_img = setInterval(img1,tick);
    //  자동 슬라이드 시작
    function img1(){
        if(imgIndex<2){
            imgIndex++;
        }else{
            imgIndex= 0;
        }
        appleimg.style.left = imgIndex*-500+"px";
        // console.log(imgIndex);
    }
    //  이전 페이지
    function prev(){
        clearInterval(stop_img);
        if(imgIndex==0){
            imgIndex=2;
        }else{
            imgIndex--;
        }
        appleimg.style.left = imgIndex*-500+"px";
        // console.log(imgIndex);
    }
    
    //  다음 페이지
    function next(){
        clearInterval(stop_img);
        if(imgIndex<2){
            imgIndex++;
        }else{
            imgIndex= 0;
        }
        appleimg.style.left = imgIndex*-500+"px";
        // console.log(imgIndex);
    }