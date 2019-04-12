
$(function() {
    //no cheating
    var flag = $.ajax({type: "GET", url: "https://raw.githubusercontent.com/JoeManto/BarcodeCTF/master/answer.txt", async: false}).responseText;

    let c = s2(s1(350))- Math.sqrt(Infinity);
    let v = config(c,"0",1,0,0);
    $('p:first').text(function() {return v});
    $( "#check" ).click(function() {
       if(flag === $("#input").val()){
           console.log("good job");
       }else{
           console.log("nope");
       }
    });
});



function config(n,seq,x0,x1,temp){
    if(n<=1) n = s2(s1(350))-s1(999)+6;
    while (n >= 0){
        temp = x0;
        seq+= temp.toString(10);
        x0 = x0 + x1;
        x1 = temp;
        n--;
    }
    return seq;
}

function checkFlag(flag,input) {

}

function s1(num){
    for(;num>=8;num--){num = num<<num;}return Math.abs(num);
}
function s2(num){
    for(;num<=8;num++){num = num>>num;}return num;
}


