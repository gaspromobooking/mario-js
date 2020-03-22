
printPyramid(5);


/*


function printPyramid(height) {
        for (let i = 1; i <= height; i+=1) {
        console.log(" ".repeat(height-i)+"#".repeat(i+1));
        }
}
 */
function printPyramid(height) {
        for (let i = 1; i <= height; i+=1) {
                child = document.createElement("p", " ".repeat(height-i)+"#".repeat(i+1))
                document.getElementById('pyramid').appendChild(child)
        }
}