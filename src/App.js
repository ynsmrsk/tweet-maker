import React from 'react'
import './style.scss'
import {
	ReplyIcon,
	RetweetIcon,
	LikeIcon,
	ShareIcon,
	VerifiedIcon
} from './icons'

function App() {
  return (
		<>
			<div class="tweet-settings">
				settings
			</div>
			<div class="tweet-container">
				<div className="tweet">
					<div className="tweet-author">
						<img src="https://pbs.twimg.com/profile_images/1224815494479458307/ni00-6u1_normal.jpg" alt="Profile photo" />
						<div>
							<div className="name">
								Yunus Emre
								<VerifiedIcon width="19" height="19" />
							</div>
							<div className="username">@Ynsmrsk</div>
						</div>
					</div>
					<div className="tweet-content">
						<p>Lorem ipsum dolor sit amedsporun amk maiores quo sapienisci quo.</p>
					</div>
					<div className="tweet-stats">
						<span>
							<b>24</b> Retweets
						</span>
						<span>
							<b>8</b> Quote Tweets
						</span>
						<span>
							<b>352</b> Likes
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
