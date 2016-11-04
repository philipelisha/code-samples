const input = `Lead Chef, Chipotle, Denver, CO, 10, 15
Stunt Double, Equity, Los Angeles, CA, 15, 25
Manager of Fun, IBM, Albany, NY, 30, 40
Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200
--JSON FORMAT BELOW--
{"name": "Spaceship Repairman", "location": {"city": "Olympus Mons", "state": "Mars"}, "organization": "Interplanetary Enterprises", "pay": {"min": 100, "max": 200}}
{"name": "Lead Cephalopod Caretaker", "location": {"city": "Atlantis", "state": "Oceania"}, "organization": "Deep Adventures", "pay": {"min": 10, "max": 15}}`

const template = 'Title: <title>, Organization: <organization>, Location: <city>, <state>, Pay: <min>-<max>';
const templateKeys = {
	title: 0,
	organization: 1,
	city: 2,
	state: 3,
	min: 4,
	max: 5
};
const fullTemplate = 'All Opportunities\n';
const jsonMarker = '--JSON FORMAT BELOW--';

const splitString = (s) =>  s.split('\n');
const splitEachComponent = (string) => string.split(', ');
const reduceByState = (object, curr) => {
	if ( object[curr[templateKeys.state]] ) {
		object[curr[templateKeys.state]].push(curr);
	} else {
		object[curr[templateKeys.state]] = [curr];
	}
	return object
}
const reduceArrayToTemplate = ( temp, curr ) => {
	const keys = Object.keys(templateKeys);
	return temp += keys.reduce(( tp, k ) => tp.replace(new RegExp(`<${k}>`, 'g'), curr[templateKeys[k]]), template) + '\n';
};

const processInput = function(string, states) {
	const indexOfJsonMarker = string.indexOf(jsonMarker);
	const json = string.slice(indexOfJsonMarker + jsonMarker.length + 1);
	string = string.slice(0, indexOfJsonMarker - 1);
	const parsedJson = JSON.parse(JSON.stringify(json));

	const splitInput = splitString(string).map(splitEachComponent).sort((a,b) => a[templateKeys.title] > b[templateKeys.title]);1
	const inputByState = splitInput.reduce(reduceByState, {})

	var returnTemplate = splitInput.reduce(reduceArrayToTemplate, fullTemplate)

	for ( var i = 0, l = states.length; i < l; i++ ) {
		const state = states[i];
		const stateSpecific = inputByState[state];
		returnTemplate += `\n${state} Opportunities\n`;
		returnTemplate = stateSpecific.reduce(reduceArrayToTemplate, returnTemplate)
	}

	return returnTemplate;
}

console.log(processInput(input, ['NY']));
