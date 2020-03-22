
drawPyramid(5);


/*


function printPyramid(height) {
        for (let i = 1; i <= height; i+=1) {
        console.log(" ".repeat(height-i)+"#".repeat(i+1));
        }
}
 */
function drawPyramid(height) {

        for (let i = 1; i <= height; i+=1) {
                child = document.createElement("p")
                text = document.createTextNode("\u00A0".repeat(height-i)+"#".repeat(i+1))
                child.appendChild(text)
                document.getElementById('pyramid').appendChild(child)
        }
        document.getElementById('construction').remove()
}