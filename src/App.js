import React, { useState } from 'react'
import './style.scss'
import {
	ReplyIcon,
	RetweetIcon,
	LikeIcon,
	ShareIcon,
	VerifiedIcon
} from './icons'

const formatTweet = tweet => tweet

function App() {
	const [name, setName] = useState()
	const [username, setUsername] = useState()
	const [isVerified, setIsVerified] = useState(false)
	const [tweet, setTweet] = useState("This is a #testtweet by @Ynsmrska")
	const [avatar, setAvatar] = useState()
	const [retweets, setRetweets] = useState(0)
	const [quoteTweets, setquoteTweets] = useState(0)
	const [likes, setLikes] = useState(0)

  return (
		<>
			<div class="tweet-settings">
				<h3>Tweet Settings</h3>
				<ul>
					<li>
						<input
							type="text"
							className="input"
							placeholder="Name Surname"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</li>
					<li>
						<input
							type="text"
							className="input"
							placeholder="Username"
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</li>
					<li>
						<textarea
							type="text"
							className="textarea"
							maxLength="290"
							placeholder="Tweet..."
							value={tweet}
							onChange={e => setTweet(e.target.value)}
						/>
					</li>
				</ul>
			</div>
			<div class="tweet-container">
				<div className="tweet">
					<div className="tweet-author">
						<img src="https://pbs.twimg.com/profile_images/1224815494479458307/ni00-6u1_normal.jpg" alt="Profile photo" />
						<div>
							<div className="name">
								{name || "Name Surname"}
								{isVerified && <VerifiedIcon width="19" height="19" />}
							</div>
							<div className="username">@{username || "username"}</div>
						</div>
					</div>
					<div className="tweet-content">
						<p>{tweet && formatTweet(tweet) || "Fake tweet goes here"}</p>
					</div>
					<div className="tweet-stats">
						<span>
							<b>{retweets}</b> Retweets
						</span>
						<span>
							<b>{quoteTweets}</b> Quote Tweets
						</span>
						<span>
							<b>{likes}</b> Likes
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
