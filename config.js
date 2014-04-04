//Defining API Key, will get around to setting/getting later.
var APIKey = localStorage.HSAPIKey;
var requestTimeout = 1000 * 2;


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

function showMailboxes(mailboxes)
{
	var mailboxesDiv = document.getElementById(elementID);
	mailboxesDiv.className = "mailbox-list table";
	
	/*    <div class="table-row">
      <div class="table-cell">1</div>
      <div class="table-cell">2</div>
   </div> */
	
	//Populate teh mailbox list
	mailboxes["items"].forEach(function(entry)
	{
		mailboxesDiv.append();
	});
}

function hideMailboxes()
{
	hideDiv("mailbox-list");
}

function getMailBoxes(onSuccess, onFailure)
{
	console.log("called");
    var xhr = new XMLHttpRequest();
    var abortTimerId = window.setTimeout(function() {
      xhr.abort();  // synchronously calls onreadystatechange
    }, requestTimeout);

	xhr.onreadystatechange = function() {
		console.log("response")
	if (xhr.readyState != 4)
	  return;

	var data = JSON.parse(xhr.responseText);
		console.log(data);
		if (onSuccess)
		{
			onSuccess(data);
		}
	};

	xhr.onerror = function(error) {
		if (onFailure)
		{
			onFailure(error);
		}
	};
	console.log(getMailboxListAPI());
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
	getMailBoxes(function(mailboxes)
	{
		hideLoadingBar();
		showMailboxes(mailboxes);
	}, 
	function(error) 
	{
		console.log("failed because " + error);
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