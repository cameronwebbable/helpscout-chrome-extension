//Defining API Key, will get around to setting/getting later.
var APIKey = localStorage.HSAPIKey;

//Sets API Key. CRAZY.
function setAPIKey(apiKey)
{
	localStorage.HSAPIKey = apiKey;
}

//Helper function to see if we need to prompt user to set API Key
function hasAPIKey()
{
	return localStorage.hasOwnProperty('HSAPIKey');
}

function showAPIPrompt()
{
	var APIPrompt = document.getElementById("api-key-block");
	
	APIPrompt.className = "shown";
}

document.addEventListener('DOMContentLoaded', function () {
	if (!hasAPIKey())
	{
		showAPIPrompt();
	}
});