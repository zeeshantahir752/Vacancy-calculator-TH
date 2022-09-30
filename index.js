//the below variables are the one that are calculating the values
// const gross = document.getElementById("gross");
// const working_days = document.getElementById('working_days');
// const importance = document.getElementById("importance");
// const average_time = document.getElementById("average_time");
// const salary_working_day = document.getElementById("salary_working_day");
const btn = document.getElementById("btn");
const out1= document.getElementById("output");
var recruiting_time;
const missing = document.getElementById("missing");


//below variables are for styling the form fields
var form1=document.getElementById("form1");
var form2=document.getElementById("form2");
var form3=document.getElementById("form3");
var form4=document.getElementById("form4");
var form5=document.getElementById("form5");
var form6=document.getElementById("form6");

var next1=document.getElementById("next1");
var next2=document.getElementById("next2");
var next3=document.getElementById("next3");
var next4=document.getElementById("next4");
var back2=document.getElementById("back2");
var back3=document.getElementById("back3");
var back4=document.getElementById("back4");
var back5=document.getElementById("back5");
var back6=document.getElementById("back6");

var gross;
var working_days;
var importance;
var average_time;
var dailywage=document.getElementById("dailywage");


next1.onclick=function(){
    form1.style.left="1550px";
    form2.style.left="-20px";
    gross = document.getElementById("gross").value;
    console.log("hello ",gross);
};
// back2.onclick=function(){
//     form1.style.top="-20px";
//     form2.style.left="1550px";
//     console.log("hello ");
// };
next2.onclick=function(){
    form2.style.left="1550px";
    form3.style.left="-20px";
    working_days = document.getElementById("working_days").value;
};
back2.onclick=function(){
    form1.style.left="-20px";
    form2.style.left="1550px";
    console.log('back clicked');
};
next3.onclick=function(){
    form3.style.left="1550px";
    form4.style.left="-20px";
    importance = document.getElementById("importance").value;
};
back3.onclick=function(){
    form2.style.left="-20px";
    form3.style.left="1550px";
};
next4.onclick=function(){
    form4.style.left="1550px";
    form5.style.left="-20px";
    dailywage.innerHTML=gross/working_days;
    dailywage=document.getElementById("dailywage");
    recruiting_time=document.getElementById("average_time").value;
    
    console.log("hello mother")
};
back4.onclick=function(){
    form3.style.left="-20px";
    form4.style.left="1550px";
};
back5.onclick=function(){
    form5.style.left="1550px";
    form4.style.left="-20px";
    console.log("back5 is clicked");
};
btn.onclick=function(){
    form5.style.left="1550px";
    form6.style.left="-20px";
    // wage= document.getElementById("dailywage").value;
    // salary_working_day = document.getElementById("salary_working_day").value;
};
back6.onclick=function(){
    form6.style.left="1550px";
    form1.style.left="-20px";
};


function missing_share(){
    missing.innerHTML=((Math.ceil(gross/working_days))*importance*recruiting_time)-((Math.ceil(gross/working_days))*recruiting_time);
    console.log("heelo missing");
}

function annual_salary() {
    out1.innerHTML = importance * (gross/working_days) * recruiting_time;
    console.log("hELLOW ANNAUL SALARY");
    
}

btn.addEventListener("click", annual_salary);
btn.addEventListener("click", missing_share);



























//here the progressbar starts
// var i = 0;
// function move() {
//     if (i == 0) {
//         i = 1;
//         var elem = document.getElementById("myBar");
//         var width = 10;
//         var id = setInterval(frame, 10);
//         function frame() {
//             if (width >= 100) {
//                 clearInterval(id);
//                 i = 0;
//             } else {
//                 width++;
//                 elem.style.width = width + "%";
//                 elem.innerHTML = width + "%";
//             }
//         }
//     }
// }