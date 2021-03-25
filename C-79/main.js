studentlist=[];
function submit(){
var temp=document.getElementById("s1").value;
studentlist.push(temp);
var temp=document.getElementById("s2").value;
studentlist.push(temp);
var temp=document.getElementById("s3").value;
studentlist.push(temp);
var temp=document.getElementById("s4").value;
studentlist.push(temp);
document.getElementById("output").innerHTML=studentlist
}
function sorting(){
studentlist.sort();
document.getElementById("output").innerHTML=studentlist
}