//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//メインイメージpic切り替え
//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const pics_scr = new Array("/image/main1.jpg","/image/main2.jpg","/image/main3.jpg");
let fadeflg = 0;
let num = -1;

//DOM作成後の処理
document.addEventListener('DOMContentLoaded', picChange);


function picChange() {
    num = (num < pics_scr.length-1) ? num+1 : 0;
    fadeflg = (fadeflg == 0) ? 1 : 0;   //opacityの切替

    if (fadeflg == 0) {
        document.getElementById("idshow1").src = pics_scr[num];
        document.getElementById("idshow1").className = "fadein";   
        document.getElementById("idshow2").className = "fadeout";   
    } else {
        document.getElementById("idshow2").src = pics_scr[num];
        document.getElementById("idshow1").className = "fadeout";   
        document.getElementById("idshow2").className = "fadein";
    }

    setTimeout("picChange()" , 7000);
}

//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//WORKSpicスライドボタン
//＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//DOM作成後の処理
window.addEventListener('load', function(){

    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const slidewidth = document.getElementById("slide_item");
    let width = slidewidth.clientWidth;//160px
    const slidelist = document.getElementById("slidelist");
    const slidelist_item = document.getElementsByClassName("slide_item");
    console.log(slidelist_item.length);
    let counter = 0;

    //左ボタンをクリックした時の動き
    prev.addEventListener("click", function() {
        //スライダーボタン連打対策にreturn,if文に当てはまれば処理終了
        if(counter == slidelist_item.length - slidelist_item.length)return;
        next.style.display = "block";
        next.style.opacity = "1"
        counter --;
        slidelist.style.transition = "0.3s";
        slidelist.style.transform = "translateX(" + ( - width * counter) + "px)";
        console.log(counter);
        //cssトランジションが完了した時のイベント
        slidelist.addEventListener("transitionend", function() {
            if(counter == slidelist_item.length - slidelist_item.length) {
                slidelist.style.transition = "none";
                prev.style.opacity = "0";
            }
        })
    })

    //右ボタンをクリックした時の動き
    next.addEventListener("click", function() {
        if(counter == slidelist_item.length - 2)return;
        prev.style.display = "block";
        prev.style.opacity = "1"
        counter ++;
        slidelist.style.transition = "0.3s";
        slidelist.style.transform = "translateX(" + ( - width * counter) + "px)";
        console.log(counter);
        //cssトランジションが完了した時のイベント
        slidelist.addEventListener("transitionend", function(){
            if(counter == slidelist_item.length - 2){
                slidelist.style.transition = "none";
                next.style.opacity = "0";
            }
        })
    })
})


