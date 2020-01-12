
//TODO require cowsay
const cowsay = require("./node_modules/cowsay");
const getargs = require("./modules/get-args")
//TODO require getargs

// get first string from command line
let textArg = getargs.getStringArg()

// if use entered a string cowsay it with
// default eyes and tail
if (textArg != null) {
  console.log(/node_modules/cowsay.say({
    text: textArg,
    e: "oO",
    T: "U "
  }));
}