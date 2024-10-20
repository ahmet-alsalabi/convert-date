
function sabmit() {
    let dateValue = +document.getElementById("dateInp").value.trim();

    (dateValue == "") ? document.getElementById("result").textContent = "Please fill in the field"
        : (dateValue >= 12) ? document.getElementById("result").textContent = `${dateValue - 12} PM ` : document.getElementById("result").textContent = `${dateValue} AM `
}