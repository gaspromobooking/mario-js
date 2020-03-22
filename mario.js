
printPyramid(18);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
        for (let i = 1; i <= height; i+=1) {
        console.log(" ".repeat(height-i)+"#".repeat(i+1));
        }
}
