var helpScoutAPIURL = "https://api.helpscout.net/v1/mailboxes";
var conversationRelativeURL = "/conversations.json?status=active"
var helpScoutDashboardURL = "https://secure.helpscout.net/dashboard/";

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}
function getMailboxListAPI()
{
	return helpScoutAPIURL + ".json";
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