# Fake Tweet Generator
Fake Tweet Generator is used to create fake tweets with a simple way.

![](https://github.com/ynsmrsk/tweet-maker/blob/main/example.png "Tweet Maker sample")

## Built With
* [React.js](https://reactjs.org/)
* [SASS](https://sass-lang.com/)

## Utilized NPM Packages
* [react-content-loader](https://www.npmjs.com/package/react-content-loader)
* [use-react-screenshot](https://www.npmjs.com/package/use-react-screenshot)

## Project Features
- Tweet hashtags, mentions and links are colored blue.
    ```javascript
	const formatTweet = tweet => {
	  // Select mentions (eg: @elonmusk) and place it in span so we can add styles to it.
	  tweet = tweet
	    .replace(/@([\w]+)/g, "<span>@$1</span>")
	    // Same with hashtags with paying attention to UTF-8 character encoding.
	    .replace(/#([\wşçöüğıİ]+)/gi, "<span>#$1</span>")
	    // And links...
	    .replace(/(https?:\/\/[\w\.\/]+)/, "<span>$1</span>")
	  return tweet
	}
   ``` 
- Fake properties can be adjusted in "Tweet Settings" section.
	```javascript
	<div className="tweet-settings">
	<h3>{langText?.settings}</h3>
	<ul>
	  <li>
	    <label>{langText?.name}</label>
	    <input
	      type="text"
	      className="input"
	      value={name}
	      onChange={e => setName(e.target.value)}
	    />
	  </li>
	  <li>
	    <label>{langText?.username}</label>
	    <input
	      type="text"
	      className="input"
	      value={username}
	      onChange={e => setUsername(e.target.value)}
	    />
	  </li>
	  ...
	```
- There is an avatar loader skeleton image showed until user change. <br><br>
![](https://github.com/ynsmrsk/tweet-maker/blob/main/screenshots/skeleton.png "Skeleton screenshot")
	```javascript
	import ContentLoader from "react-content-loader"

	const AvatarLoader = (props) => (
	  <ContentLoader
	    speed={2}
	    width={60}
	    height={48}
	    viewBox="0 0 60 48"
	    backgroundColor="#333"
	    foregroundColor="#444"
	    {...props}
	  >
	    <circle cx="24" cy="24" r="24" />
	  </ContentLoader>
	)
	```
- Retweets, Quote Tweets and Likes are formatted to show in "[Number,Fraction]K" style when entered number is bigger than a thousand.
    For example: 561,095 -> 561K or 67,826 -> 67.8K
- Generated fake tweets automatically downloaded as image.
    (use-react-screenshot code sample)
- It is possible to import last tweet from entered Twitter account name.

- You can select project language. 
