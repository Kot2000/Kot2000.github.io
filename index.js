let counter = 0;

document.querySelector("#nothingo").addEventListener("click", () => {
    counter++;
    document.querySelector("#nothingo-texto").innerHTML = `x${counter}`
})