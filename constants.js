var helpScoutAPIURL = "https://api.helpscout.net/v1/mailboxes/";
var conversationRelativeURL = "/conversations.json?status=active"
var helpScoutDashboardURL = "https://secure.helpscout.net/dashboard/";

function getMailboxAPI()
{
	//Need to add API key here
	return helpScoutAPIURL + storedHelpScoutAPIKey() + conversationRelativeURL;
}

function storedHelpScoutAPIKey()
{
	return localStorage.HSAPIKey;
}