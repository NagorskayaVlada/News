var img1 = new Image();
img1.src = "img/img1.png";
let img2 = new Image();
img2.src = "img/img2.png";
let img3 = new Image();
img3.src = "img/img3.png";
let img4 = new Image();
img4.src = "img/img4.png";
let img5 = new Image();
img5.src = "img/img5.png";
let quest = [img1, img2, img3, img4, img5];
let right_answer = [a2, a3, a4, a3, a1]
let num_img = 0;
let num_ans = 0;
let sum = 0;
document.body.appendChild(quest[num_img]);
btn.addEventListener("click", fnc);
        function fnc(){
            document.body.removeChild(quest[num_img]);
            num_img++;
            document.body.appendChild(quest[num_img]);
        }
btn.addEventListener("click", fnc1);
function fnc1(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    if (right_answer[num_ans].checked){
        alert("Right answer");
        sum++;
    } else {
        alert("Wrong answer");
    }
    num_ans++;
if (num_ans == right_answer.length){
    document.body.remove(table);
    alert("Total points:" + sum);
}
}
