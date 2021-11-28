# Fake Tweet Generator
Fake Tweet Generator is used to create fake tweets with a simple way.

![](https://github.com/ynsmrsk/tweet-maker/blob/main/screenshots/example.png "Tweet Maker sample")

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
	  tweet = tweet
	    .replace(/@([\w]+)/g, "<span>@$1</span>")
	    .replace(/#([\wşçöüğıİ]+)/gi, "<span>#$1</span>")
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
	  
	  {...}
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
- Retweets, Quote Tweets and Likes are formatted to show in "[Number,Fraction]K" style if entered number is bigger than thousand. <br>
**eg: 561,095 => 561K | 67,826 => 67.8K**
	```javascript
	const formatNumber = number => {
	  if (!number)
	    number = 0
	  if (number < 1000)
	    return number
	  number /= 1000
	  number = String(number).split('.')
	  return (
	    number[0] + (number[1] > 100 ? ',' + number[1].slice(0, 1) + ' K' : ' K')
	  )
	}
	```
- Generated fake tweets automatically downloaded as image.
	```javascript
	import {
	  useScreenshot
	} from 'use-react-screenshot'

	const [image, takeScreenshot] = useScreenshot()
	const getImage = () => takeScreenshot(tweetRef.current)

	useEffect(() => {
	  if (image)
	    downloadRef.current.click()
	}, [image])
	
	{...}

	<button onClick={getImage}>Generate</button>
	{image &&
	(
	<div className="download-url">
	  <a href={image} download="tweet.png" ref={downloadRef}>
	  Download Tweet
	  </a>
	</div>
	)}
	
	{...}
	```
    
- It is possible to import last tweet from entered Twitter account name.
	```javascript
	const fetchLastTweet = () => {
	  fetch(`https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search?q=${username}`)
	    .then(res => res.json())
	    .then(data => {
	      const twitter = data[0]
	      convertImgToBase64(twitter.profile_image_url_https, function (base64Image) {
		setAvatar(base64Image)
	      })
	      setName(twitter.name)
	      setUsername(twitter.screen_name)
	      setTweet(twitter.status.text)
	      setRetweets(twitter.status.retweet_count)
	      setLikes(twitter.status.favorite_count)
	    })
	}
	
	{...}
	
	<button onClick={fetchLastTweet}>{langText?.fetchLastTweet}</button>
	```

- You can select project language.

**language.js**
```javascript
const en = {
  settings: "Tweet Settings",
  name: "Name Surname",
  ...
}

const tr = {
  settings: "Tweet Ayarları",
  name: "Ad Soyad",
  ...
}

const language = {
  en,
  tr
}

export {
  language
}
```
<br>
**app.js**
```javascript
import {
  language
} from './language'

const [lang, setLang] = useState("en")
const [langText, setLangText] = useState()

useEffect(() => {
  setLangText(language[lang])
}, [lang])

{...}

<h3>{langText?.settings}</h3>
<ul>
<li>
  <label>{langText?.name}</label>
  
  {...}
```
