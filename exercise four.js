var timeOfDay = {
'morning' : 'breakfast',
'noon': 'lunch',
'evening' : 'dinner'
};
var mealType = {
'breakfast' : 'eggs and toast',
'lunch': 'a salad',
'dinner' : 'chicken and rice'
};

while (true) {
var userInput = prompt('What time of day is it?');
}

var mealSuggestion = mealType[timeOfDay];

var output = 'Since it is ' + timeOfDay + ',' +  'you should be eating ' + mealType + '. We suggest' + mealSuggestion + '.';

console.log(output);
