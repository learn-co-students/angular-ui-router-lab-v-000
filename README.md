# Integrate uiRouter

## Objectives

- Setup ui-view with our application
- Fetch data from the stubbed API
- Change view using ui-router

## Instructions

Run `npm install` in your console to install dependencies, and then run `node server.js` to run the local web server. In another console, run `stubby -d config.yml` (this will run our mocked backend).

Our mocked backend has three URLs -

http://0.0.0.0:8882/rest/user/liam
http://0.0.0.0:8882/rest/user/jayden
http://0.0.0.0:8882/rest/user/mary

This will return data on the given user.

Add `ui.router` to our app and then configure the route for `/user/:name`, using `views/user.html` for the view, and `UserController` for the user.

Use the resolve property to fetch data from the URLs above to receive data.

Change over the URLs to use the `uiSref` directive instead. Make sure you put the view directive in the HTML!

**Bonus**: use `uiSrefActive` to add an active class to the hyperlink and color the link in a different color when active!
