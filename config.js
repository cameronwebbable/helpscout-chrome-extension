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

function showDiv(elementID)
{
	var APIPrompt = document.getElementById(elementID);
	APIPrompt.className = "shown";
}

function hideDiv(elementID)
{
	var APIPrompt = document.getElementById(elementID);
	APIPrompt.className = "hidden";
}

function showAPIPrompt()
{
	showDiv("api-key-block");
}

function hideAPIPrompt()
{
	hideDiv("api-key-block");
}

function showLoadingBar()
{
	showDiv("loading-bar");
}

function hideLoadingBar()
{
	hideDiv("loading-bar");
}

//Saves key to local storage and initializes request to get mailboxes
function saveAPIKeyAndLoadMailboxes()
{
	hideAPIPrompt();
	showLoadingBar();
}

document.addEventListener('DOMContentLoaded', function () {
	if (!hasAPIKey())
	{
		showAPIPrompt();
		document.getElementById('save-api-key').addEventListener('click', saveAPIKeyAndLoadMailboxes)
	}
});