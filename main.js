function calculateWeight(){
const earthWeight= document.getElementById( "earthWeight" ).value
const gravity= document.getElementById("planet").value


const planetWeight= earthWeight*gravity


document.getElementById('result').innerHTML=`Your weight on the selected planet is :${planetWeight.toFixed(2)}kg`
}

calculateWeight()

