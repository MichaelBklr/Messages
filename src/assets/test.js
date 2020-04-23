

$(document).ready(function(){
	console.log(document.readyState, new Date(), new Date().getMilliseconds(), me, document.querySelector("#target"));
});

var me = {
	name: "mike"
};

console.log(document.readyState, new Date(), new Date().getMilliseconds(), "middle of the js file");

function logDate()
{
	console.log(logDate.name, new Date())
}