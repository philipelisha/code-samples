/*

Find length of largest substring with M-distinct characters in a string

Example: aaabbccccdccbbbbbeeff
M: 3
Return: 14

*/

//aaaabbaaaccccdccbbbbbeeff

//	[b,b,a,a,a,c,c,c,c]
var findLargestM(str, mLength) {
	if ( str === "" )
	return;

	var strArray = str.split(),
		largestSubstring = 0,
		keepLooping = true,
		substringLngth = 0,
		currentIndex = 0,
		currentUniqueSubstring = [];

	while( keepLooping ) {
		for ( var i = 0; i < strArray.length; i++ ) {
			if ( currentUniqueSubstring.indexOf(strArray[i]) !== -1 ) {
				currentUniqueSubstring.push(strArray[i]);
			}

			if ( currentUniqueSubstring.length > mLength ) {
				substringLngth =  i - currentIndex - 1;
			}
		}

		if ( largestSubstring <= substringLngth ) {
			largestSubstring = substringLngth;
			currentUniqueSubstring = [];
		} else {
			keepLooping = false;
		}
	}

	return largestSubstring;
}

// findLargestM("", 3);

// O(n ^ 2)
