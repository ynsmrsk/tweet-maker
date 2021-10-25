import React, { useState, useEffect, createRef } from 'react'
import './style.scss'
import { AvatarLoader } from './loaders'
import { useScreenshot } from 'use-react-screenshot'
import {
	ReplyIcon,
	RetweetIcon,
	LikeIcon,
	ShareIcon,
	VerifiedIcon
} from './icons'

// use-react-screenshot can't get the profile image URL when fetched from an account.
// So we need to convert this image URL to base64
function convertImgToBase64(url, callback, outputFormat){
	var canvas = document.createElement('CANVAS');
	var ctx = canvas.getContext('2d');
	var img = new Image;
	img.crossOrigin = 'Anonymous';
	img.onload = function(){
		canvas.height = img.height;
		canvas.width = img.width;
	  	ctx.drawImage(img,0,0);
	  	var dataURL = canvas.toDataURL(outputFormat || 'image/png');
	  	callback.call(this, dataURL);
        // Clean up
	  	canvas = null;
	};
	img.src = url;
}

const formatTweet = tweet => {
	// Select mentions (eg: @Ynsmrska) and place it in span so we can add styles to it.
	tweet = tweet
		.replace(/@([\w]+)/g, "<span>@$1</span>")
	// Same with hashtags with paying attention to Turkish characters.
		.replace(/#([\wşçöüğıİ]+)/gi, "<span>#$1</span>")
	// And links.
		.replace(/(https?:\/\/[\w\.\/]+)/, "<span>$1</span>")
	return tweet
}

const formatNumber = number => {
	if (!number)
		number = 0
	if (number < 1000)
		return number
	number /= 1000
	// Tweets has not "." but "," so we turn this number into a string and replace "." with ","
	// First we need to split this number into two from "."
	number = String(number).split('.')

	// After here a number like 1478 is now an array and the first element is thousand part and second
	// element is decimal part (eg: 1478 -> 1.478 -> 1 and 478 => (number[0] is 1 and number[1] is 478))

	// Then we return this array as needed.
	//return number[0] + ',' + number[1]
	return (
		number[0] + (number[1] > 100 ? ',' + number[1].slice(0, 1) + ' B' : ' B')
	)
}

function App() {
	const tweetRef = createRef(null)
	const downloadRef = createRef(null)

	const [name, setName] = useState()
	const [username, setUsername] = useState()
	const [isVerified, setIsVerified] = useState(false)
	const [tweet, setTweet] = useState("Sample fake tweet.")
	const [avatar, setAvatar] = useState()
	const [retweets, setRetweets] = useState(0)
	const [quoteTweets, setQuoteTweets] = useState(0)
	const [likes, setLikes] = useState(0)
  const [image, takeScreenshot] = useScreenshot()

	const getImage = () => takeScreenshot(tweetRef.current)

	useEffect(() => {
		if (image)
			downloadRef.current.click()
	}, [image])

	const handleAvatar = e => {
		// const file = document.getElementById('input').files[0]
		const file = e.target.files[0]
		/* we establish the FileReader to handle asynchronously
		loading the image and attaching it to the img element. */
		const reader = new FileReader()
		reader.addEventListener('load', function() {
			setAvatar(this.result)
		})
		/* After creating the new FileReader object, we set up its onload function
		and then call readAsDataURL() to start the read operation in the background. */
		reader.readAsDataURL(file)
	}

  return (
		<>
			<div className="tweet-settings">
				<h3>Tweet Settings</h3>
				<ul>
					<li>
						<label>Name Surname</label>
						<input
							type="text"
							className="input"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</li>
					<li>
						<label>Username</label>
						<input
							type="text"
							className="input"
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</li>
					<li>
						<label>Tweet</label>
						<textarea
							type="text"
							className="textarea"
							maxLength="290"
							value={tweet}
							onChange={e => setTweet(e.target.value)}
						/>
					</li>
					<li>
						<label>Avatar</label>
						<input
							type="file"
							className="input"
							onChange={handleAvatar}
						/>
					</li>
					<li>
						<label>Retweets</label>
						<input
							type="number"
							className="input"
							value={retweets}
							onChange={e => setRetweets(e.target.value)}
						/>
					</li>
					<li>
						<label>Quote Tweets</label>
						<input
							type="number"
							className="input"
							value={quoteTweets}
							onChange={e => setQuoteTweets(e.target.value)}
						/>
					</li>
					<li>
						<label>Likes</label>
						<input
							type="number"
							className="input"
							value={likes}
							onChange={e => setLikes(e.target.value)}
						/>
					</li>
					<button onClick={getImage}>Generate</button>
					{image &&
						(<div className="download-url">
							<a href={image} download="tweet.png" ref={downloadRef}>
								Download Tweet
							</a>
						</div>)}
				</ul>
			</div>
			<div className="tweet-container">
				<div className="tweet" ref={tweetRef}>
					<div className="tweet-author">
						{avatar ? <img src={avatar} alt="Profile photo" /> : <AvatarLoader />}
						<div>
							<div className="name">
								{name || "Name Surname"}
								{isVerified && <VerifiedIcon width="19" height="19" />}
							</div>
							<div className="username">@{username || "username"}</div>
						</div>
					</div>
					<div className="tweet-content">
						{/* After putting string inside of a <span> element in regex (formatTweet)
						we need to tell to react, the span text is not string but an HTML element.
						*/}
						{/* Inject HTML element */}
						<p
							dangerouslySetInnerHTML={{
								__html:
									tweet && formatTweet(tweet) || "Fake tweet goes here..."
							}}
						/>
					</div>
					<div className="tweet-stats">
						<span>
							<b>{formatNumber(retweets)}</b> Retweets
						</span>
						<span>
							<b>{formatNumber(quoteTweets)}</b> Quote Tweets
						</span>
						<span>
							<b>{formatNumber(likes)}</b> Likes
						</span>
					</div>
					<div className="tweet-actions">
						<span><ReplyIcon /></span>
						<span><RetweetIcon /></span>
						<span><LikeIcon /></span>
						<span><ShareIcon /></span>
					</div>
				</div>
			</div>
		</>
		)
}

export default App
