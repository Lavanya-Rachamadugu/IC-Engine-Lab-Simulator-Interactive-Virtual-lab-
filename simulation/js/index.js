var form1=document.getElementById("form1");
var form2=document.getElementById("form2");
var form3=document.getElementById("form3");
var form4=document.getElementById("form4");
var form5=document.getElementById("form5");


var nextbtn1 =document.getElementById("nextbtn1");
var nextbtn2 =document.getElementById("nextbtn2");
var nextbtn3 =document.getElementById("nextbtn3");
var nextbtn4 =document.getElementById("nextbtn4");
var nextbtn5 =document.getElementById("nextbtn5");


nextbtn1.onclick=function(){
    form1.style.left="80rem";
    form2.style.left="0rem";
}
nextbtn2.onclick=function(){
    form2.style.left="80rem";
    form3.style.left="0rem";
}
nextbtn3.onclick=function(){
    form3.style.left="80rem";
    form4.style.left="0rem";
}
nextbtn4.onclick=function(){
    form4.style.left="80rem";
    form5.style.left="0rem";
}
nextbtn5.onclick=function(){
    form5.style.left="80rem";
    form1.style.left="0rem";
}




// arrows
// form2
var form2arrow1=document.getElementById("form2arrow1");
var form2arrow2=document.getElementById("form2arrow2");
var form2arrow3=document.getElementById("form2arrow3");
var form2fuelindication=document.getElementById("form2fuelindication");
var imageform2fuelength=document.getElementById("imageform2fuelength");
var form2waterindication=document.getElementById("form2waterindication");
var imageform2waterlength1=document.getElementById("imageform2waterlength1");
var imageform2waterlength2=document.getElementById("imageform2waterlength2");
var form2ring1=document.getElementById("form2ring1");
var form2ring2=document.getElementById("form2ring2");
var form2needle2=document.getElementById("form2needle2");
var form2needle1=document.getElementById("form2needle1");
var waterhandle=document.getElementById("waterhandle");
var form2waterlength1=document.getElementById("form2waterlength1");
var form2arrow3=document.getElementById("form2arrow3");
var form2wheel=document.getElementById("form2wheel");
var form2handle=document.getElementById("form2handle");
var form2arrow5=document.getElementById("form2arrow5");
var crankstick=document.getElementById("crankstick");
var form21=document.getElementById("form21");
var form22=document.getElementById("form22");
var form23=document.getElementById("form23");
var form24=document.getElementById("form24");
var form25=document.getElementById("form25");
var form26=document.getElementById("form26");
var form27=document.getElementById("form27");
var directionform21=document.getElementById("directionform21");
var directionform22=document.getElementById("directionform22");
var directionform23=document.getElementById("directionform23");


form2arrow1.onclick=function(){
    form2arrow1.style.visibility="hidden";
    form2fuelindication.style.visibility="visible";
    imageform2fuelength.style.visibility="visible";
    form2arrow2.style.visibility="visible";
    form22.style.visibility="visible";
    form21.style.visibility="hidden";
    directionform21.style.visibility="visible";
}
form2arrow2.onclick=function(){
    form2arrow2.style.transitionDelay="0s";
    form2arrow2.style.visibility="hidden";
    form22.style.visibility="hidden";
    waterhandle.style.visibility="hidden";
    form2fuelindication.style.visibility="hidden";
    imageform2fuelength.style.visibility="hidden";
    form2waterindication.style.visibility="visible";
    imageform2waterlength1.style.visibility="visible";
    imageform2waterlength2.style.visibility="visible";   
    form2ring1.style.visibility="visible";
    form23.style.visibility="visible";
    directionform21.style.visibility="hidden";
    directionform22.style.visibility="visible";
}
form2ring1.onclick=function(){
    form2ring1.style.visibility="hidden";
    form23.style.visibility="hidden";
    form2ring1.style.transitionDelay="0s";
    form23.style.transitionDelay="0s";
    form2ring2.style.visibility="visible";
    form24.style.visibility="visible";
    form2needle1.style.rotate="20deg";
    imageform2waterlength1.style.height="2.5rem";
    imageform2waterlength1.style.transitionDelay="0s";
    form2waterlength1.style.height="1.5rem";
    directionform23.style.visibility="visible";
}
form2ring2.onclick=function(){
    form2ring2.style.visibility="hidden";
    form24.style.visibility="hidden";
    form2needle2.style.rotate="15deg";
    imageform2waterlength2.style.height="7rem";
    imageform2waterlength2.style.transitionDelay="0s";
    form2waterlength2.style.height="3.5rem";
    form2arrow3.style.visibility="visible";
    form25.style.visibility="visible";
    directionform22.style.visibility="hidden";
    directionform23.style.visibility="hidden";
}
form2arrow3.onclick=function(){
    form2arrow3.style.visibility="hidden";
    form25.style.visibility="hidden";
    form2wheel.style.rotate="30deg";
    form2arrow4.style.visibility="visible";
    form26.style.visibility="visible";
    form2waterindication.style.visibility="hidden";
    imageform2waterlength1.style.visibility="hidden";
    imageform2waterlength2.style.visibility="hidden"; 
    form2waterindication.style.transitionDelay="0s";
    

}
form2arrow4.onclick=function(){
    form2arrow4.style.visibility="hidden";
    form26.style.visibility="hidden";
    form2handle.style.rotate="90deg";
    form2arrow5.style.visibility="visible";    
    form27.style.visibility="visible";
}
form2arrow5.onclick=function(){
    form2arrow5.style.visibility="hidden";
    form27.style.visibility="hidden";
    crankstick.style.animationName="crank";
    nextbtn2.style.visibility="visible";
}

// form3
var form3arrow1=document.getElementById("form3arrow1");
var form3arrow2=document.getElementById("form3arrow2");
var dailstickmover=document.getElementById("dailstickmover");
var form3dailgauge=document.getElementById("form3dailgauge");
var dailindicatorstick=document.getElementById("dailindicatorstick");
var form3wheel=document.getElementById("form3wheel");
var imageform3fuelindication=document.getElementById("imageform3fuelindication");
var imageform3fuellength=document.getElementById("imageform3fuellength");
var form3handle=document.getElementById("form3handle");
var clock=document.getElementById("clock");
var clockneedle=document.getElementById("clockneedle");
var clockneedlemover=document.getElementById("clockneedlemover");
var clock=document.getElementById("clock");
var clockneedle=document.getElementById("clockneedle");
var indicatortemperature=document.getElementById("indicatortemperature");
var form3ring1=document.getElementById("form3ring1");
var form3ring2=document.getElementById("form3ring2");
var form3turnermover=document.getElementById("form3turnermover");
var data=document.getElementById("data");
var form3fuellength=document.getElementById("form3fuellength");
var form31=document.getElementById("form31");
var form32=document.getElementById("form32");
var form33=document.getElementById("form33");
var form34=document.getElementById("form34");
var directionform31=document.getElementById("directionform31");

form3arrow1.onclick=function(){
    form3arrow1.style.visibility="hidden";
    form31.style.visibility="hidden";
    form3dailgauge.style.visibility="visible";
    dailstickmover.style.rotate="30deg";
    dailindicatorstick.style.visibility="visible";
    form3wheel.style.rotate="60deg";
    form3arrow2.style.visibility="visible";
    form32.style.visibility="visible";
}
form3arrow2.onclick=function(){
    form3arrow2.style.visibility="hidden";
    form32.style.visibility="hidden";
    imageform3fuelindication.style.visibility="visible";
    imageform3fuellength.style.visibility="visible";
    dailindicatorstick.style.visibility="hidden";
    form3dailgauge.style.visibility="hidden";
    form3handle.style.rotate="90deg";
    form3arrow3.style.visibility="visible";
    form33.style.visibility="visible";
    imageform3fuellength.style.animationName="form3fuel";
    imageform3fuellength.style.height="7rem"; 
    clock.style.visibility="visible";
    clockneedle.style.visibility="visible"; 
    clockneedlemover.style.animationName="timer";
    clock.style.visibility="visible";
    clockneedle.style.visibility="visible";
    form3fuellength.style.animationName="form3actualfuel";
    form3fuellength.style.height="3.5rem";
    directionform31.style.visibility="visible";
}
form3arrow3.onclick=function(){
    form3arrow3.style.visibility="hidden";
    form33.style.visibility="hidden";
    form3handle.style.rotate="0deg";
    nextbtn3.style.visibility="visible";
    form3ring1.style.visibility="visible";
    form34.style.visibility="visible";
    indicatortemperature.style.visibility="visible";
    imageform3fuelindication.style.visibility="hidden";
    imageform3fuellength.style.visibility="hidden";
    clock.style.visibility="hidden";
    clockneedle.style.visibility="hidden";
    form3arrow3.style.transitionDelay="0s";
    form33.style.transitionDelay="0s";
    directionform31.style.visibility="hidden";
}
form3ring1.onclick=function(){
    form3ring1.style.visibility="hidden";
    form34.style.visibility="hidden";
    form3turnermover.style.rotate="0deg";
    form3ring2.style.visibility="visible";
    indicatortemperature.innerText="36";
    
}
form3ring2.onclick=function(){
    form3ring2.style.visibility="hidden";
    form3turnermover.style.rotate="90deg";
    nextbtn1.style.visibility="visible";
    indicatortemperature.innerText="170";
    data.style.visibility="visible"
}

// form4
var check1=document.getElementById("check1");
var check2=document.getElementById("check2");
var check3=document.getElementById("check3");
var check4=document.getElementById("check4");
var input1bp=document.getElementById("input1bp");
var input2bp=document.getElementById("input2bp");
var input3bp=document.getElementById("input3bp");
var input4bp=document.getElementById("input4bp");
var input1tfc=document.getElementById("input1tfc");
var input2tfc=document.getElementById("input2tfc");
var input3tfc=document.getElementById("input3tfc");
var input4tfc=document.getElementById("input4tfc");
var bptfcgraph=document.getElementById("bptfcgraph");
var finaldata=document.getElementById("finaldata");
var tf=document.getElementById("tf");
var fp1=document.getElementById("fp1");
var fp2=document.getElementById("fp2");
var fp3=document.getElementById("fp3");
var fp4=document.getElementById("fp4");
var bmep1=document.getElementById("bmep1");
var bmep2=document.getElementById("bmep2");
var bmep3=document.getElementById("bmep3");
var bmep4=document.getElementById("bmep4");
var mechanicalefficiency1=document.getElementById("mechanicalefficiency1");
var mechanicalefficiency2=document.getElementById("mechanicalefficiency2");
var mechanicalefficiency3=document.getElementById("mechanicalefficiency3");
var mechanicalefficiency4=document.getElementById("mechanicalefficiency4");
var indicatorefficiency1=document.getElementById("indicatorefficiency1");
var indicatorefficiency2=document.getElementById("indicatorefficiency2");
var indicatorefficiency3=document.getElementById("indicatorefficiency3");
var indicatorefficiency4=document.getElementById("indicatorefficiency4");
var brakeefficiency1=document.getElementById("brakeefficiency1");
var brakeefficiency2=document.getElementById("brakeefficiency2");
var brakeefficiency3=document.getElementById("brakeefficiency3");
var brakeefficiency4=document.getElementById("brakeefficiency4");
var check11=document.getElementById("check11");
var check12=document.getElementById("check12");
var check13=document.getElementById("check13");
var check14=document.getElementById("check14");
var efficiencygraph=document.getElementById("efficiencygraph");
var x=0;
var y=0;
var i=0;
var k=0;



check1.onclick=function validate(){
    if ((input1bp.value=="0.974")&&(input1tfc.value=="0.8315")){
        check1.style.borderColor="lightgreen";
        check2.removeAttribute("disabled");
        check1.innerHTML="RESULT";
        check1.style.visibility="hidden";
    }
    else if((input1bp.value!="0.974")&&(input1tfc.value!="0.8315")){
        x=x+1;
        check1.style.borderColor="red";
        input1bp.value="";
        input1tfc.value="";
        if(x==3){
          input1bp.value="0.974";
          input1tfc.value="0.8315";
          check2.removeAttribute("disabled");
          check1.style.borderColor="lightgreen";
          check1.style.visibility="hidden";
          x=0;
        }
        else if(x==2){
            check1.innerHTML="RESULT";
        }
    }
}
check2.onclick=function validate(){
    if ((input2bp.value=="1.905")&&(input2tfc.value=="1.047")){
        check2.style.borderColor="lightgreen";
        check3.removeAttribute("disabled");
        check2.innerHTML="RESULT";
        check2.style.visibility="hidden";
    }
    else if((input2bp.value!="1.905")&&(input2tfc.value!="1.047")){
        y=y+1;
        check2.style.borderColor="red";
        input2bp.value="";
        input2tfc.value="";
        if(y==3){
          input2bp.value="1.905";
          input2tfc.value="1.047";
          check3.removeAttribute("disabled");
          check2.style.borderColor="lightgreen";
          y=0;
          check2.style.visibility="hidden";
        }
        else if(y==2){
            check2.innerHTML="RESULT";
        }
    }
}
check3.onclick=function validate(){
    if ((input3bp.value=="2.823")&&(input3tfc.value=="1.195")){
        check3.style.borderColor="lightgreen";
        check4.removeAttribute("disabled");
        check3.innerHTML="RESULT";
        check3.style.visibility="hidden";
    }
    else if ((input3bp.value!="2.823")&&(input3tfc.value!="1.195")) {
        i=i+1;
        check3.style.borderColor="red";
        input3bp.value="";
        input3tfc.value="";
        if(i==3){
          input3bp.value="2.823";
          input3tfc.value="1.195";
          check4.removeAttribute("disabled");
          check3.style.borderColor="lightgreen";
          i=0;
          check3.style.visibility="hidden";
        }
        else if(i==2){
            check3.innerHTML="RESULT";
        }
    } 
}
check4.onclick=function  validatevalidate(){
    if ((input4bp.value=="3.7199")&&(input4tfc.value=="1.443")){
        check4.style.borderColor="lightgreen";
        check1.innerHTML="RESULT";
        nextbtn4.style.visibility="visible";
        bptfcgraph.style.visibility="visible";
        finaldata.style.visibility="hidden";
        nextbtn4.style.transitionDelay="8s";
        tf.style.visibility="visible";
        check4.style.visibility="hidden";
    }
    else if((input4bp.value!="3.7199")&&(input4tfc.value!="1.443")){
        k=k+1;
        check4.style.borderColor="red";
        input4bp.value="";
        input4tfc.value="";
        if(k==3){
          input4bp.value="3.7199";
          input4tfc.value="1.443";
          check4.style.borderColor="lightgreen";
          nextbtn4.style.visibility="visible";
          nextbtn4.style.transitionDelay="8s";
          bptfcgraph.style.visibility="visible";
          finaldata.style.visibility="hidden";
          tf.style.visibility="visible";
          k=0;
          check4.style.visibility="hidden";
        }
        else if(k==2){
            check4.innerHTML="RESULT";
            
        }
    }
}
x=0;
y=0;
i=0;
k=0;
check11.onclick=function validate(){
    if((fp1.value=="4.07")&&(bmep1.value=="1.11")&&(mechanicalefficiency1=="23.91")&&(brakeefficiency1=="9.59")&&(indicatorefficiency1=="40.12")){
        check11.style.borderColor="lightgreen";
        check12.removeAttribute("disabled");
        check11.style.visibility="hidden";
    }
    else{
        x=x+1;
        check11.style.borderColor="red";
        fp1.value="";
        bmep1.value="";
        mechanicalefficiency1.value="";
        brakeefficiency1.value="";
        if(x==3){
           fp1.value="4.07";
           bmep1.value="1.11";
           mechanicalefficiency1.value="23.91";
           brakeefficiency1.value="9.59";
           indicatorefficiency1.value="40.12";
           check12.removeAttribute("disabled");
           check11.style.visibility="hidden";
           x=0;
        }
        else if(x==2){
            check11.innerHTML="RESULT";
        }
    }
}

check12.onclick=function validate(){
    if((fp2.value=="5.00")&&(bmep2.value=="2.23")&&(mechanicalefficiency2=="38.06")&&(brakeefficiency=="14.88")&&(indicatorefficiency=="39.1")){
        check12.style.borderColor="lightgreen";
        check13.removeAttribute("disabled");
        check12.style.visibility="hidden";
    }
    else{
        y=y+1;
        check12.style.borderColor="red";
        fp2.value="";
        bmep2.value="";
        mechanicalefficiency2.value="";
        brakeefficiency2.value="";
        if(y==3){
           fp2.value="5.00";
           bmep2.value="2.23";
           mechanicalefficiency2.value="38.06";
           brakeefficiency2.value="14.88";
           indicatorefficiency2.value="39.1";
           check13.removeAttribute("disabled");
           check12.style.visibility="hidden";
        }
        else if(y==2){
            check12.innerHTML="RESULT";
        }
    }
}
check13.onclick=function validate(){
    if((fp3.value=="5.92")&&(bmep3.value=="3.35")&&(mechanicalefficiency3=="47.65")&&(brakeefficiency3=="19.03")&&(indicatorefficiency3=="39.93")){
        check13.style.borderColor="lightgreen";
        check14.removeAttribute("disabled");
        check13.style.visibility="hidden";
    }
    else{
        i=i+1;
        check13.style.borderColor="red";
        fp3.value="";
        bmep3.value="";
        mechanicalefficiency3.value="";
        brakeefficiency3.value="";
        if(i==3){
           fp3.value="5.92";
           bmep3.value="3.35";
           mechanicalefficiency3.value="47.65";
           brakeefficiency3.value="19.03";
           indicatorefficiency3.value="39.93";
           check14.removeAttribute("disabled");
           check13.style.visibility="hidden";
        }
        else if(i==2){
            check13.innerHTML="RESULT";
        }
    }
}

check14.onclick=function validate(){
    if((fp4.value=="6.81")&&(bmep4.value=="4.47")&&(mechanicalefficiency4=="54.51")&&(brakeefficiency4=="21.08")&&(indicatorefficiency4=="38.66")){
        check14.style.borderColor="lightgreen";
        nextbtn5.style.visibility="visible";
        nextbtn5.style.transitionDelay="7s";
        efficiencygraph.style.visibility="visible";
        check14.style.visibility="hidden";
    }
    else{
        k=k+1;
        check14.style.borderColor="red";
        fp4.value="";
        bmep4.value="";
        mechanicalefficiency4.value="";
        brakeefficiency4.value="";
        if(k==3){
           fp4.value="6.81";
           bmep4.value="4.47";
           mechanicalefficiency4.value="54.51";
           brakeefficiency4.value="21.08";
           indicatorefficiency4.value="38.66";
           nextbtn5.style.visibility="visible";
           nextbtn5.style.transitionDelay="7s";
           efficiencygraph.style.visibility="visible";
           check14.style.visibility="hidden";
        }
        else if(k==2){
            check14.innerHTML="RESULT";
        }
    }
}