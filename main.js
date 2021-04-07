var inputs =[];
var inputs2 =[];
function getpara1() {
    for (var i=0;i<7;i++){
        inputs.push(document.getElementById("para1_input"+ i).value);
        document.getElementById("display_para1").innerHTML = inputs.join(". ");
    }
}

function getpara2() {
    for (var j=0;j<7;j++){
        inputs2.push(document.getElementById("para1_input1"+ j).value);
        document.getElementById("display_para2").innerHTML = inputs2.join(". ");
    }
}