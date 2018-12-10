News of the Universe

News of the Universe is a news feed app in the style of Reddit. This repo contains the front-end of the app which has been made using React.

Here is a link to the live site.

It builds on my hacker-news api. This API is hosted on Heroku and was set up using Express.js and a mongoDB database.

Back-end live link
Back-end repo

User Stories

Users can login with just their username
Users can logout
Users can view the homepage that contains titles of all articles
Users can post a new article
Users can click on an article title on the homepage to view the full article
Users can view all comments made on an article
Users can post a comment on an article
Users can delete a comment they have made on an article
Users can 'like' an article or comment
Users will receive error messages in the following circumstances:
They have entered a non-existent or invalid article id


Getting Started

Installing

Fork this repository to your own GitHub account
Clone it to your local machine and cd into it
$ git clone <your fork's url>
$ cd NC-News
Install all package dependencies
$ npm install
The dependencies that will install are:

@reach/router: ^1.2.1,
    axios: ^0.18.0,
    bootstrap: ^3.3.7,
    react: ^16.6.1,
    react-dom: ^16.6.1,
    react-scripts: 2.1.1


Development

Once everything is installed, you can run the app locally

$ npm start
This will start up the development server and it will open a new browser tab for you with the app running on localhost:3000

To access the full site you will need to login. As there is no way to create a user I have hardcoded a user into the login input box. 

Routes

The following URL paths are available:

PATH /
# Homepage that displays previews of all the available articles (the first 60 words of each article)
PATH /:topic_slug
# Returns all the articles for a certain topic
# e.g: `/football`
PATH /articles/:article_id
# Gets an individual article, displays it and it's comments
# e.g: `/article/5bd335d7209deafb652557e3`

Deployment

My live Northcoders News app has been deployed using Netlify.



Authors

Katie Cannon

