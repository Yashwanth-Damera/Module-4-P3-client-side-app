function areaCircle(r) {
    
    if( isNaN(r)){
        throw Error('The given argument is not a number');    
    }
return r*r*Math.PI.toFixed(2)




}

function CalculateArea() {
const radi = parseInt(document.getElementById("radius").value)
localStorage.setItem("radius",radi)
let c = areaCircle(localStorage.getItem("radius"))
document.getElementById("Calc").innerHTML = c
}







// function restoGrandtotal()
// {
//      const first=document.querySelector("#name").value
//      const ans=getlength(first)



//      document.getElementById("namecount").innerHTML = ans  


// }

// const getlength=(mystr)=>{return mystr.length}