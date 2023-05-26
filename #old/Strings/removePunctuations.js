// Given a string, remove the punctuation from the string if the given character is a punctuation character, as classified by the current C locale.

const removePunctuation = (string) => {
	return string.replace(/[^a-zA-Z ]/g, '');
};

const string = 'Welcome???@@##$ to#$% Geeks%$^for$%^&Geeks';
const result = removePunctuation(string);
console.log({ result });
