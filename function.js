// khoi tao cac thong so
let btn1 = document.querySelector('#btn1');
let img1 = document.querySelector('#dehumidifier');
let btn2 = document.querySelector('#btn2');
// functions nut bam
// const database=firebase.database();
// const deviceRef=database.ref('quan1');

btn1.addEventListener('click', ()=>{
    img1.src = 'image/dehumidifier2.png';    
    firebase.database().ref("thietbi1").set({mayhutam: 1})
})
btn2.addEventListener('click', ()=>{
    img1.src = 'image/dehumidifier1.png';    
    firebase.database().ref("thietbi1").set({mayhutam: 0})
})


// khoi tao cac thong so

let img2 = document.querySelector('#den');
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// Hiển thị giá trị thanh trượt mặc định
output.innerHTML = slider.value;
//Cập nhật giá trị thanh trượt hiện tại (mỗi khi bạn kéo tay cầm thanh trượt)
slider.oninput = function()
{
  output.innerHTML = this.value;  
  if(this.value > 0){
    img2.src = 'image/denon.gif';
    firebase.database().ref("thietbi2").set({den1:this.value})
  }else{
    img2.src = 'image/den1.png';
    firebase.database().ref("thietbi2").set({den1:this.value})
  }
}

// khoi tao cac thong s
let btn5 = document.querySelector('#btn5');
let img3 = document.querySelector('#maylanh');
let btn6 = document.querySelector('#btn6');

// functions nut bam
btn5.addEventListener('click', ()=>{
     img3.src = 'image/maylanh2.jpg' ;
     firebase.database().ref("thietbi3").set({maylanh:1})

})
btn6.addEventListener('click', ()=>{
    img3.src = 'image/maylanh1.jpg';
    firebase.database().ref("thietbi3").set({maylanh: 0})
})


