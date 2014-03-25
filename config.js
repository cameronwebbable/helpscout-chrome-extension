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

function getMailBoxes(onSuccess, onFailure)
{
    var xhr = new XMLHttpRequest();
    var abortTimerId = window.setTimeout(function() {
      xhr.abort();  // synchronously calls onreadystatechange
    }, requestTimeout);

    function handleSuccess(e)
	{
		console.log("success");
		if (onSuccess)
		{
			onSuccess(e);
		}
    }

    function handleError(e) {
		console.log("some error");
		if (onError)
		{
			onError(e);
		}
    }

	xhr.onreadystatechange = function() {
	if (xhr.readyState != 4)
	  return;

	var data = JSON.parse(xhr.responseText);
	  var inboxItems = data["items"];
	var count = 0;
	console.log(inboxItems);
	onSuccess(count);
	};

	xhr.onerror = function(error) {
	handleError();
	};

	xhr.open("GET", getMailboxListAPI(), true);
	xhr.setRequestHeader("Authorization", make_base_auth(storedHelpScoutAPIKey(), "X"));
	xhr.send(null);
}

//Saves key to local storage and initializes request to get mailboxes
function saveAPIKeyAndLoadMailboxes()
{	
	var APIKey = document.getElementById("key-field").value;
	setAPIKey(APIKey);
	hideAPIPrompt();
	showLoadingBar();
	getMailBoxes(function(mailBoxes) {
      //mailbox succeeded
	  console.log(mailboxes);
    }, function(mailBoxes) {
  	  console.log("crap... mail boxes failed");
    });
}

document.addEventListener('DOMContentLoaded', function () {
	delete localStorage.HSAPIKey;
	if (!hasAPIKey())
	{
		showAPIPrompt();
		document.getElementById('save-api-key').addEventListener('click', saveAPIKeyAndLoadMailboxes)
	}
});