[project logo]

# Fake Tweet Generator
Fake Tweet Generator is used to create fake tweets with a simple way.

[project photo]

## Built With
* [React.js](https://reactjs.org/)
* [SASS](https://sass-lang.com/)

## Helper Packages
* [react-content-loader](https://www.npmjs.com/package/react-content-loader)
* [use-react-screenshot](https://www.npmjs.com/package/use-react-screenshot)

## Project Utilities
- Tweet hashtags, mentions and links are colored blue.
    (formatTweet code sample)
- Name, Surname, Nickname, Tweet, Profile Photo, Retweets, Quote Tweets and Likes can be adjusted in "Tweet Settings" section.
- There is a profile photo skeleton showed until user select from locale file.
    (skeleton photo and code sample)
- Retweets, Quote Tweets and Likes are formatted to show in "[Number,Fraction]K" style when entered number is bigger than a thousand.
    For example: 561,095 -> 561K or 67,826 -> 67.8K
- Generated fake tweets automatically downloaded as image.
    (use-react-screenshot code sample)
- It is possible to import last tweet from entered Twitter account name.
