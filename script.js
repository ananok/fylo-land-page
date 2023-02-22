let inputText=document.querySelector("#email");
let butt=document.querySelector(".btn");
let error=document.querySelector(".error");

let inputTextTwo=document.querySelector("#email2");
let buttTwo=document.querySelector(".buttTwo");
let errorTwo=document.querySelector(".error2");

let  seeWork=document.querySelector(".see-work");
let  seeWorkA=document.querySelector(".see-work-a");
let  seeWorkImg=document.querySelector(".see-work-img");
let  seeWorkLine=document.querySelector(".line");

butt.addEventListener("click",function(e){
    e.preventDefault()
    if (inputText.value==="" || !inputText.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        error.style.display="block"
        error.textContent="Please check your email"
        error.style.width="143px"
        error.style.height="16px";
        error.style.fontSize="12px";
        error.style.color="#EF4877";
        inputText.style.borderColor="#EF4877"
    }else{
        error.style.display="none"
    }

})

buttTwo.addEventListener("click",function(e){
    e.preventDefault()
    if (inputTextTwo.value==="" || !inputTextTwo.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        errorTwo.style.display="block"
        errorTwo.textContent="Please check your email"
        errorTwo.style.width="143px"
        errorTwo.style.height="16px";
        errorTwo.style.fontSize="12px";
        errorTwo.style.color="#FFFFFF";
        inputTextTwo.style.borderColor="#EF4877";
    }else{
        errorTwo.style.display="none"
    }

})

seeWork.addEventListener("pointerover", function(){
    seeWorkA.style.color="#71DFCC";
    seeWorkLine.style.backgroundColor="#71DFCC";
    seeWorkImg.src="./images/Group\ 10.svg"    
})

seeWork.addEventListener("pointerout", function(){
    seeWorkA.style.color="#3da08f";
    seeWorkLine.style.backgroundColor="#3da08f";
    seeWorkImg.src="./images/icon-arrow.svg"    
})