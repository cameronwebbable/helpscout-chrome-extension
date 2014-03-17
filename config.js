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

function getMailBoxes()
{
    var xhr = new XMLHttpRequest();
    var abortTimerId = window.setTimeout(function() {
      xhr.abort();  // synchronously calls onreadystatechange
    }, requestTimeout);

    function handleSuccess()
	{
		console.log("success");
    }

    function handleError() {
		console.log("some error");
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

      xhr.open("GET", getMailboxAPI(), true);
      xhr.setRequestHeader("Authorization", make_base_auth(helpScoutAPIKey, "X"));
      xhr.send(null);
}

//Saves key to local storage and initializes request to get mailboxes
function saveAPIKeyAndLoadMailboxes()
{	
	var APIKey = document.getElementById("key-field").value;
	setAPIKey(APIKey);
	hideAPIPrompt();
	showLoadingBar();
}

document.addEventListener('DOMContentLoaded', function () {
	delete localStorage.HSAPIKey;
	if (!hasAPIKey())
	{
		showAPIPrompt();
		document.getElementById('save-api-key').addEventListener('click', saveAPIKeyAndLoadMailboxes)
	}
});