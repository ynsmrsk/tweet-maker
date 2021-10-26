# Fake Tweet Generator
Fake Tweet Generator is used to create fake tweets with a simple way.

![](https://github.com/ynsmrsk/tweet-maker/blob/main/example.png "Tweet Maker Sample Image")

## Built With
* [React.js](https://reactjs.org/)
* [SASS](https://sass-lang.com/)

## Used Packages
* [react-content-loader](https://www.npmjs.com/package/react-content-loader)
* [use-react-screenshot](https://www.npmjs.com/package/use-react-screenshot)

## Project Utilities
- Tweet hashtags, mentions and links are colored blue.
    ```
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
    
- Name, Surname, Nickname, Tweet, Profile Photo, Retweets, Quote Tweets and Likes can be adjusted in "Tweet Settings" section.
- 
- There is a profile photo skeleton showed until user select from locale file.
    (skeleton photo and code sample)
    
- Retweets, Quote Tweets and Likes are formatted to show in "[Number,Fraction]K" style when entered number is bigger than a thousand.
    For example: 561,095 -> 561K or 67,826 -> 67.8K
    
- Generated fake tweets automatically downloaded as image.
    (use-react-screenshot code sample)
    
- It is possible to import last tweet from entered Twitter account name.

- You can select project language. 
