let answer = document.getElementById('print');

function display(num){
    answer.value += num;
}
function calc(){
    try {
        answer.value = eval(answer.value);
    } 
    catch(err) {
        alert("Invalid");
    }
}
function ac(){
    answer.value = "";
}
function del(){
    answer.value = answer.value.slice(0,-1)
}