//Defining API Key, will get around to setting/getting later.
var APIKey = localStorage.HSAPIKey;

//Sets API Key. CRAZY.
function setAPIKey(apiKey)
{
	localStorage.HSAPIKey = apiKey;
}

//Helper function to see if we need to prompt user to set API Key
function checkForAPIKey()
{
	return localStorage.hasOwnProperty('HSAPIKey');
}

function show