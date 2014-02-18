Helpscout Chrome Extension
==========================

Chrome extension to notify you of new support emails.

Eventually, this bad boy will make its way to the chrome extension store and be configurable in GUI, but until then, here's what you gotta do to get it working:

1) you have to provide your own API key from Helpscout. See documentation [here](http://developer.helpscout.net/help-desk-api/)

2) you need to provide mailbox id. Again, see api documentation [here](http://developer.helpscout.net/help-desk-api/). TL;DR though, you need to make request to mailboxes endpoint and it'll list the Mailbox ID you'll need to provide.

3) go to <code>chrome://extensions</code>, make sure "Developer mode" is checked, then click and drag folder with extension code... and now you are in business.

If you have time to contribute, definitely do! This is my first extension, and as such I'm probably going to make mistakes. Before submitting feedback, please see the issues list and make sure your idea/issue isn't already there :).
