var helpScoutAPIURL = "https://api.helpscout.net/v1/mailboxes/";
var conversationRelativeURL = "/conversations.json?status=active"
var helpScoutDashboardURL = "https://secure.helpscout.net/dashboard/";

function getMailboxListAPI()
{
	return helpScoutAPIURL + storedHelpScoutAPIKey();
}
function getMailboxAPI(mailboxID)
{
	//Need to add API key here
	return helpScoutAPIURL + mailboxID + conversationRelativeURL;
}

function storedHelpScoutAPIKey()
{
	return localStorage.HSAPIKey;
}