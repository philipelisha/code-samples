// Finds the difference between the min and max values in the array
// a is an array of numbers 
// make more efficient
var spread = function(a) {
	return a.sort()[a.length-1] - a.sort()[0];
}

//becomes 
var spread = function(a) {
	let min, max, i, l;
	for ( i = 0, l = a.length; i < l; i++ ) {
		min = a[i] < min ? a[i] : min;
		max = a[i] > max ? a[i] : max;
	}
	
	return Math.abs(max - min);
}

//         10
//      7       13
//    3    8   11
	 
// {value: 10, left: {value:7, left:..., right: ...}, right: {value: 13}}

// 10
// 7
// 13

// 3
// 8
// 11

const tree = {
		value: 10, 
		left: {
				value: 
		}, 
		right: {
		
		}
}

function printTree(tree) {
		let lastNode = false,
				nodeArray = [];
				
		nodeArray.push(tree);
		while( !lastNode ) {
				let nextNode = nodeArray.shift() || {};
				if ( nextNode.value ) {
						console.log(nextNode.value);
				} else {
						lastNode = true;
						break;
				}

				if ( nextNode.left ) {
						nodeArray.push(node.left);
				}
				
				if ( nextNode.right ) {
						nodeArray.push(node.right);
				}
		}
}






function showHelp(help) {
	document.getElementById('help').innerHTML = help;
}

function setupHelp() {
	var helpText = [
			{'id': 'email', 'help': 'Your e-mail address'},
			{'id': 'name', 'help': 'Your full name'},
			{'id': 'age', 'help': 'Your age (you must be over 16)'}
		];

	for (var i = 0; i < helpText.length; i++) {
		var item = helpText[i];
		document.getElementById(item.id).onfocus = function() {
			showHelp.apply(null, item.help);
		}
	}
}

setupHelp();

