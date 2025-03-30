const display=document.getElementById("display");
const buttons=document.querySelectorAll("button");
let calculation='';
buttons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        const value=e.target.innerText;
        if(value==='AC'){
            calculation='';
            display.value='';
        }else if(value==='='){
            try{
                calculation=eval(calculation);
                display.value=calculation;
            }catch{
                display.value='Error!';
            }
        }else if(value==='÷'){
            calculation+='/';
            display.value=calculation;
        }else if(value==='x'){
            calculation+='*';
            display.value=calculation;
        }else if(value==='%'){
            calculation = (parseFloat(calculation) / 100).toString();
            display.value=calculation;
        }
        else if(value==='+/-'){
            calculation=(parseFloat(calculation)* -1).toString();
            display.value=calculation;
        } 
        else{
            calculation+=value;
            display.value=calculation;
        }
        
    });
});  
const menubtn=document.getElementById("menubtn");    
const menu=document.getElementById("menu");
menubtn.addEventListener("click",(event)=>{
    menu.classList.toggle("hidden");
    event.stopPropagation();
});
document.body.addEventListener("click",(event)=>{
    if (!menu.contains(event.target) && !menubtn.contains(event.target)) {
        menu.classList.add("hidden");
    }
});

document.getElementById("calculate").addEventListener("click", function() {
    const dobinput = document.getElementById("dob").value;
    const result = document.getElementById("age-result");
    if (!dobinput) {
        result.textContent = "Please enter your date of birth.";
        return;
    }
    const dob = new Date(dobinput);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();

    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (monthDiff < 0) {
        age--;
        monthDiff += 12;
    }

    result.textContent = `You are ${age} years, ${monthDiff} months, and ${dayDiff} days old.`;
});
document.querySelectorAll("#menu li").forEach(item=>{
    item.addEventListener("click", function(){
        document.getElementById("simple-calculator").classList.add("hidden");
        document.getElementById("age-calculator").classList.add("hidden");
        document.getElementById("bmi-calculator").classList.add("hidden");
        document.getElementById("weight-converter").classList.add("hidden");
        document.getElementById("temperature-converter").classList.add("hidden");
        document.getElementById("decimal-binary-converter").classList.add("hidden");
        document.getElementById("currency-converter").classList.add("hidden");
        document.getElementById("scientific-calculator").classList.add("hidden");
        document.getElementById("sici").classList.add("hidden");
        document.getElementById("areavolume-calculator").classList.add("hidden");
        document.getElementById("Data-Converter").classList.add("hidden");
        document.getElementById("Time-Converter").classList.add("hidden");
            if(this.textContent.trim()==="Age Calculator"){
                document.getElementById("age-calculator").classList.remove("hidden");
            } 
            if (this.textContent.trim() === "Simple Calculator") {
                document.getElementById("simple-calculator").classList.remove("hidden");
            }   
            if (this.textContent.trim() === "BMI Calculator") {
                document.getElementById("bmi-calculator").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Weight Converter") {
                document.getElementById("weight-converter").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Temperature Converter") {
                document.getElementById("temperature-converter").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Decimal to Binary Converter") {
                document.getElementById("decimal-binary-converter").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Currency Converter") {
                document.getElementById("currency-converter").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Scientific Calculator") {
                document.getElementById("scientific-calculator").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Loan Calculator") {
                document.getElementById("sici").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Area and Volume Calculator") {
                document.getElementById("areavolume-calculator").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Data Converter") {
                document.getElementById("Data-Converter").classList.remove("hidden");
            }
            if (this.textContent.trim() === "Time Converter") {
                document.getElementById("Time-Converter").classList.remove("hidden");
            }
            menu.classList.add("hidden");  
     });
    });
const calculateBMI = () => {
    const weight=document.getElementById("weight").value;
    const height=document.getElementById("height").value;
    const result=document.getElementById("bmi-result");
    if(weight===""||height===""||weight<=0||height<=0){
        result.textContent="Please enter valid height and weight";
        return;
    }
    const heightinmetres=height/100;
    const bmi=(weight/(heightinmetres*heightinmetres)).toFixed(2);
    let category="";
    if(bmi<18.5){
        category="Underweight";
    } else if(bmi>=18.5 && bmi<24.9){
        category="Normal weight";
    } else if(bmi>=25 && bmi<29.9){
        category="Overweight";
    } else {
        category="Obese";
    }
    result.textContent=`Your BMI is ${bmi} and you are ${category}`;

}
function convertWeight(){
    let weight=parseFloat(document.getElementById("convert-weight").value);
    let fromunit=document.getElementById("from-unit").value;
    let tounit=document.getElementById("to-unit").value;
    let result=document.getElementById("weight-result");
    if(isNaN(weight)){
        result.innerText="Please enter a valid number!";
        return;
    }
    let convertedweight;
    if(fromunit==="kg"){
        if(tounit==="lb"){
            convertedweight=weight*2.20462;
        }else if(tounit==="oz"){
            convertedweight=weight*35.274;
        }else{
            convertedweight=weight;
        }
    }
        else if(fromunit==="lb"){
            if(tounit==="kg"){
                convertedweight=weight/2.20462;
            }else if(tounit==="oz"){
                convertedweight=weight*16;
            }else{
                convertedweight=weight;
            }
        }
            else if(fromunit==="oz"){
                if(tounit==="kg"){
                    convertedweight=weight/35.274;
                }else if(tounit==="lb"){
                    convertedweight=weight/16;
                }else{
                    convertedweight=weight;
                }
            }
            result.innerText=`${weight} ${fromunit} is equal to ${convertedweight.toFixed(2)} ${tounit}`;
    }
    function convertTemperature(){
        let temperature=parseFloat(document.getElementById("convert-tempe").value);
        let fromunit=document.getElementById("from-tempe").value;
        let tounit=document.getElementById("to-tempe").value;
        let result=document.getElementById("tempe-result");
        if(isNaN(temperature)){
            result.innerText="Please enter a valid number!";
            return;
        }
        let convertedtemperature;
        if(fromunit==="C"){
            if(tounit==="F"){
                convertedtemperature=(temperature*9/5)+32;
            }else if(tounit==="K"){
                convertedtemperature=temperature+273.15;
            }else{
                convertedtemperature=temperature;
            }
        }
        else if(fromunit==="F"){
            if(tounit==="C"){
                convertedtemperature=(temperature-32)*5/9;
            }else if(tounit==="K"){
                convertedtemperature=(temperature-32)*5/9+273.15;
            }else{
                convertedtemperature=temperature;
            }
        }
        else if(fromunit==="K"){
            if(tounit==="C"){
                convertedtemperature=temperature-273.15;
            }else if(tounit==="F"){
                convertedtemperature=(temperature-273.15)*9/5+32;
            }else{
                convertedtemperature=temperature;
            }
        }
        result.innerText=`${temperature} ${fromunit} is equal to ${convertedtemperature.toFixed(2)} ${tounit}`;
    }
    function convertkrtehh() {
        let conversiontype=document.getElementById("decimal-binary").value;
        let inputnumber=document.getElementById("convertkro").value;
        let result=document.getElementById("decimal-result");
        if(inputnumber===""){
            result.innerText="Please enter a number!";
            return;
        }
        let convertednumber;
        if(conversiontype==="decimaltobinary"){
            convertednumber=parseInt(inputnumber).toString(2);
            
        }
        else if(conversiontype==="binarytodecimal"){
            convertednumber=parseInt(inputnumber,2).toString(10);
        }
        result.innerText=`${inputnumber} is equal to ${convertednumber}`;
    }
    function convertCurrency(){
        let amount=document.getElementById("convertkroekbarfir").value;
        let fromcurrency=document.getElementById("from-currency").value;
        let tocurrency=document.getElementById("to-currency").value;
        let result=document.getElementById("currency-result");
        if(isNaN(amount)||amount<=0){
            result.innerText="Please enter a valid number!";
            return;
        }
        let convertedamount;
        if(fromcurrency==="USD"){
            if(tocurrency==="EUR"){
                convertedamount=amount*0.85;
            }else if(tocurrency==="INR"){
                convertedamount=amount*74.57;
                
            }else{
                convertedamount=amount;
            }
        }
        else if(fromcurrency==="EUR"){
            if(tocurrency==="USD"){
                convertedamount=amount/0.85;
            }else if(tocurrency===" INR"){
                convertedamount=amount*88.12;
              
            }else{
                convertedamount=amount;
            }
        }
        else if(fromcurrency==="INR"){
            if(tocurrency==="USD"){
                convertedamount=amount/74.57;}

                else if(tocurrency==="EUR"){
                    convertedamount=amount/88.12;
                }
                else{
                    convertedamount=amount;
                }

           
        }
        result.innerText=`${amount} ${fromcurrency} is equal to ${convertedamount.toFixed(2)} ${tocurrency}`;
    }
    const display1=document.getElementById("display1");
    const buttons1=document.querySelectorAll("button");
    let calculation1='';
    buttons.forEach(button=>{
        button.addEventListener("click",(e)=>{
            const value=e.target.innerText;
            if(value==='AC'){
                calculation1='';
                display1.value='';
            }else if(value==='='){
                try{
                    calculation1=eval(calculation1);
                    display1.value=calculation1;
                }catch{
                    display1.value='Error!';
                }
        } else if (value === 'π') {
            calculation1 += Math.PI.toFixed(8);
            display1.value = calculation1;
        } else if (value === 'e') {
            calculation1 += Math.E.toFixed(8);
            display1.value = calculation1;
        } else if (value === 'sin') {
            if (calculation1 === "") return;
            calculation1 = Math.sin(eval(calculation1)).toFixed(8);
            display1.value = calculation1;
        } else if (value === 'cos') {
            if (calculation1 === "") return;
            calculation1 = Math.cos(eval(calculation1)).toFixed(8);
            display1.value = calculation1;
        } else if (value === 'tan') {
            if (calculation1 === "") return;
            calculation1 = Math.tan(eval(calculation1)).toFixed(8);
            display1.value = calculation1;
        } else if (value === 'ln') {
            if (calculation1 === "") return;
            calculation1 = Math.log(eval(calculation1)).toFixed(8);
            display1.value = calculation1;
        } else if (value === 'log') {
            if (calculation1 === "") return;
            calculation1 = Math.log10(eval(calculation1)).toFixed(8);
            display1.value = calculation1;
        } else if (value === '√') {
            if (calculation1 === "") return;
            calculation1 = Math.sqrt(eval(calculation1)).toFixed(8);
            display1.value = calculation1;
        } else if (value === 'x²') {
            if (calculation1 === "") return;
            calculation1 = Math.pow(eval(calculation1), 2).toFixed(8);
            display1.value = calculation1;
        } else if (value === 'xⁿ') {
            calculation1 += '**';
            display1.value = calculation1;
        } else if (value === '+/-') {
            calculation1 = (parseFloat(calculation1) * -1).toString();
            display1.value = calculation1;
        } else if (value === '%') {
            calculation1 = (parseFloat(calculation1) / 100).toString();
            display1.value = calculation1;
        } else if (value === '÷') {
            calculation1 += '/';
            display1.value = calculation1;
        } else if (value === 'x') {
            calculation1 += '*';
            display1.value = calculation1;
        } else {
            calculation1 += value;
            display1.value = calculation1;
        }
    });
});
function calcusi() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    const result = document.getElementById("siciresult");

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        result.textContent = "Please enter valid inputs for Principal, Rate, and Time.";
        return;
    }

    const simpleInterest = (principal * rate * time) / 100;
    result.textContent = `The Simple Interest is ${simpleInterest.toFixed(2)}`;
}

function calcuci() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    const result = document.getElementById("siciresult");

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        result.textContent = "Please enter valid inputs for Principal, Rate, and Time.";
        return;
    }

    const compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
    result.textContent = `The Compound Interest is ${compoundInterest.toFixed(2)}`;
}
function updateinputs() {
    const shape=document.getElementById("shape").value;
    const paramd=document.getElementById("parameters");
    paramd.innerHTML="";
    let inputfields="";
    if(shape==="circle"){
        inputfields=`<label for="radius" style="display: block;">Radius:</label>
        <input type="number" id="radius" required style="background-color: pink; display: block;">`;
    }
    else if(shape==="rectangle"){
        inputfields=`<label for="length" style="display: block;">Length:</label>
        <input type="number" id="length" required style="background-color: pink; display: block;">
        <label for="width" style="display: block;">Width:</label>
        <input type="number" id="width" required style="background-color: pink; display: block;">`;
        
    }
    else if(shape==="triangle"){
        inputfields=`<label for="base" style="display: block;">Base:</label>
        <input type="number" id="base" required style="background-color: pink; display: block;">
        <label for="height" style="display: block;">Height:</label>
        <input type="number" id="height" required style="background-color: pink; display: block;">`;
    }
    else if(shape==="square"){
        inputfields=`<label for="side" style="display: block;">Side:</label>
        <input type="number" id="side" required style="background-color: pink; display: block;">`;
    }
    else if(shape==="cuboid"){
        inputfields=`<label for="length" style="display: block;">Length:</label>
        <input type="number" id="length" required style="background-color: pink; display: block;">
        <label for="width" style="display: block;">Width:</label>
        <input type="number" id="width" required style="background-color: pink; display: block;">
        <label for="height" style="display: block;">Height:</label>
        <input type="number" id="height" required style="background-color: pink; display: block;">`;
    }
    else if(shape==="sphere"){
        inputfields=`<label for="radius" style="display: block;">Radius:</label>
        <input type="number" id="radius" required style="background-color: pink; display: block;">`;
    }
    else if(shape==="cylinder"){
        inputfields=`<label for="radius" style="display: block;">Radius:</label>
        <input type="number" id="radius" required style="background-color: pink; display: block;">
        <label for="height" style="display: block;">Height:</label>
        <input type="number" id="height" required style="background-color: pink; display: block;">`;
    }
    else if(shape==="cone"){
        inputfields=`<label for="radius" style="display: block;">Radius:</label>
        <input type="number" id="radius" required style="background-color: pink; display: block;">
        <label for="height" style="display: block;">Height:</label>
        <input type="number" id="height" required style="background-color: pink; display: block;">`;
    }

    paramd.innerHTML=inputfields;
}
    function calcArea(){
        const shape=document.getElementById("shape").value;
        let area=0;
        if(shape==="circle"){
            const radius=document.getElementById("radius").value;
            area=Math.PI*radius*radius;
        }
        else if(shape==="rectangle"){
            const length=document.getElementById("length").value;
            const width=document.getElementById("width").value;
            area=length*width;
        }
        else if(shape==="triangle"){
            const base=document.getElementById("base").value;
            const height=document.getElementById("height").value;
            area=(base*height)/2;
        }
        else if(shape==="square"){
            const side=document.getElementById("side").value;
            area=side*side;
        }
        else if(shape==="cuboid"){
            const length=document.getElementById("length").value;
            const width=document.getElementById("width").value;
            const height=document.getElementById("height").value;
            area=2*(length*width+width*height+length*height);
        }
        
        else if(shape==="sphere"){
            const radius=document.getElementById("radius").value;
            area=4*Math.PI*radius*radius;
        }
        else if(shape==="cylinder"){
            const radius=document.getElementById("radius").value;
            const height=document.getElementById("height").value;
            area=2*Math.PI*radius*(radius+height);
        }
        else if(shape==="cone"){
            const radius=document.getElementById("radius").value;
            const height=document.getElementById("height").value;
            area=Math.PI*radius*(radius+Math.sqrt(height*height+radius*radius));
        }
        document.getElementById("arearesult").innerText=`Area: ${area.toFixed(2)}`;

    }
    function calcVolume(){
        const shape=document.getElementById("shape").value;
        let volume=0;
        if(shape==="circle"){
            const radius=document.getElementById("radius").value;
            volume=(4/3)*Math.PI*radius*radius*radius;
        }
        else if(shape==="rectangle"){
            document.getElementById("volumeresult").innerText = "Please select a 3D shape for volume calculation.";
            return;
        }
        else if(shape==="triangle"){
            document.getElementById("volumeresult").innerText = "Please select a 3D shape for volume calculation.";
            return;
        }
        else if(shape==="square"){
            const side=document.getElementById("side").value;
            volume=side*side*side;
        }
        else if(shape==="cuboid"){
            const length=document.getElementById("length").value;
            const width=document.getElementById("width").value;
            const height=document.getElementById("height").value;
            volume=length*width*height;
        }
        
        else if(shape==="sphere"){
            const radius=document.getElementById("radius").value;
            volume=(4/3)*Math.PI*radius*radius*radius;
        }
        else if(shape==="cylinder"){
            const radius=document.getElementById("radius").value;
            const height=document.getElementById("height").value;
            volume=Math.PI*radius*radius*height;
        }
        else if(shape==="cone"){
            const radius=document.getElementById("radius").value;
            const height=document.getElementById("height").value;
            volume=(1/3)*Math.PI*radius*radius*height;
        }
        document.getElementById("volumeresult").innerText=`Volume: ${volume.toFixed(2)}`;

    
  
}

function convertData() {
    const inputValue = document.getElementById("convert-data").value;
    const yay1 = document.getElementById("from-data").value;
    const yay2 = document.getElementById("to-data").value;
    const yay3= document.getElementById("data-result");
    if (isNaN(inputValue) || inputValue <= 0) {
        result.innerText = "Please enter a valid number!";
        return;
    }
    let bytes;
    switch (yay1) {
        case "bytes":
            bytes = parseFloat(inputValue);
            break;
        case "kilobytes":
            bytes = parseFloat(inputValue)*1024;
            break;
        case "megabytes":
            bytes = parseFloat(inputValue) *1024 * 1024;
            break;
        case "gigabytes":
            bytes = parseFloat(inputValue) *1024 * 1024 * 1024;
            break;
        case "terabytes":
            bytes = parseFloat(inputValue) *1024 * 1024 * 1024 * 1024;
            break;
        default:
            result.innerText = "Invalid input unit!";
            return;
    }
   let outputValue;
    switch (yay2) {
       

        case "bytes":
            outputValue = bytes;
            break;
        case "kilobytes":
            outputValue = bytes / 1024;
            break;
        case "megabytes":
            outputValue = bytes / (1024 * 1024);
            break;
        case "gigabytes":
            outputValue = bytes / (1024 * 1024 * 1024);
            break;
        case "terabytes":
            outputValue = bytes/ (1024* 1024 * 1024 * 1024);
            break;
        default:
            result.innerText = "Invalid output unit!";
            return;
    }
    yay3.innerText = `${inputValue} ${yay1} is equal to ${outputValue.toFixed(2)} ${yay2}`;

}

function convertTime(){
    const timeInput = document.getElementById("convert-time").value;
    const fromUnit = document.getElementById("from-time").value;
    const toUnit = document.getElementById("to-time").value;
    const result = document.getElementById("time-result");
    if (isNaN(timeInput) || timeInput <= 0) {
        result.innerText = "Please enter a valid number!";
        return;
    }
    let seconds;
    switch (fromUnit) {
        case "seconds":
            seconds = parseFloat(timeInput);
            break;
        case "minutes":
            seconds = parseFloat(timeInput) * 60;
            break;
        case "hours":
            seconds = parseFloat(timeInput) * 3600;
            break;
        case "days":
            seconds = parseFloat(timeInput) * 86400;
            break;
        default:
            result.innerText = "Invalid input unit!";
            return;
    }
    
    switch (toUnit) {
        case "seconds":
            outputValue = seconds;
            break;
        case "minutes":
            outputValue = seconds / 60;
            break;
        case "hours":
            outputValue = seconds / 3600;
            break;
        case "days":
            outputValue = seconds / 86400;
            break;
        default:
            result.innerText = "Invalid output unit!";
            return;
    }
    result.innerText = `${timeInput} ${fromUnit} is equal to ${outputValue.toFixed(2)} ${toUnit}`;
}
