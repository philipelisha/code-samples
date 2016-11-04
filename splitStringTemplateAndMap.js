/* Part 1: Input/Output

Make a library to:

read input from a string literal
print out in the format (See full output below):
Title: <Title>, Organization: <Organization>, Location: <City>, <State>, Pay: <Min>-<Max>
always print out sorted by Title
You should copy the 'Input' section to as a multi-line string literal in your code. When run, the output of your program should match the 'Output' section exactly.

Feel free to use your IDE/Editor of choice. Once you have it working, please copy it to the provided remote coding tool and get it running there.

Input:

Lead Chef, Chipotle, Denver, CO, 10, 15
Stunt Double, Equity, Los Angeles, CA, 15, 25
Manager of Fun, IBM, Albany, NY, 30, 40
Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200
Expected Output:

All Opportunities
Title: Assistant to the Regional Manager, Organization: IBM, Location: Scranton, PA, Pay: 10-15
Title: Associate Tattoo Artist, Organization: Tit 4 Tat, Location: Brooklyn, NY, Pay: 250-275
Title: Lead Chef, Organization: Chipotle, Location: Denver, CO, Pay: 10-15
Title: Lead Guitarist, Organization: Philharmonic, Location: Woodstock, NY, Pay: 100-200
Title: Manager of Fun, Organization: IBM, Location: Albany, NY, Pay: 30-40
Title: Stunt Double, Organization: Equity, Location: Los Angeles, CA, Pay: 15-25 */

const input = `Lead Chef, Chipotle, Denver, CO, 10, 15
Stunt Double, Equity, Los Angeles, CA, 15, 25
Manager of Fun, IBM, Albany, NY, 30, 40
Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200`

const template = 'Title: <title>, Organization: <organization>, Location: <city>, <state>, Pay: <min>-<max>';
const templateKeys = {
	title: 0,
	organization: 1,
	city: 2,
	state: 3,
	min: 4, 
	max: 5
}
const splitString = (s) =>  s.split('\n');
const splitEachComponent = (string) => string.split(', ');
const fullTemplate = 'All Opportunities\n'

const processInput = function(string) {
	const keys = Object.keys(templateKeys);
	const splitInput = splitString(string).map(splitEachComponent).sort((a,b) => a[templateKeys.title] > b[templateKeys.title]);

	return splitInput.reduce(( temp, curr ) => {
	  return temp += keys.reduce(( tp, k ) => tp.replace(new RegExp(`<${k}>`, 'g'), curr[templateKeys[k]]), template) + '\n';
	}, fullTemplate)
}

console.log(processInput(input));





