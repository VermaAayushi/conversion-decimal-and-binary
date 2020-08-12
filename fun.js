function convert1(){
    var x = document.getElementById("deci").value;
    var len=x.toString().length;
    var num=Number(x);
    var b="";
    var rem=Number(0);
    while(num>0){
        rem=(num%2);
        if(rem == 0)b=b.concat(0);
        else b=b.concat(1);
        num=(num/2);
        num=parseInt(num);
    }
    b=b.split("").reverse().join("");
    document.getElementById("ans").innerHTML = "Binary Equivalent is "+b;
    console.log(b);
}
function convert2(){
    var x = document.getElementById("bi").value;
    var len=x.toString().length-1;
    var sum=0;
    console.log(x);
    // while(len>=0){
    //     var val=parseInt(x.charAt(len));
    //     sum=sum+(val*Math.pow(2,len));
    //     len=len-1;
    // }
    sum=parseInt(x,2);
    console.log(sum);
    document.getElementById("ans2").innerHTML = "Decimal Equivalent is "+sum;
}