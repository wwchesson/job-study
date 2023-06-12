//any time there's >1 piece of info needed, likely need to create a new class

import { MaxPriorityQueue } from "@datastructures-js/priority-queue"

class Tweet {
    constructor(userId, tweetId, tweetCount) {
        this.userId = userId
        this.tweetId = tweetId
        //serves as timestamp
        this.tweetCount = tweetCount
    }
}

//we want the list of people that the user follows
class Twitter {
    constructor() {
        //key = userId, value = set of people user follows
        this.followersMap = new Map()
        //global tweetCount aka timestamp
        this.tweetCount = 0

        //could actually just use a regular queue and stay with linear time
        //PQ sort in O(n log n)
        this.tweets = new MaxPriorityQueue()
    }

    //what happens when post tweet?
    //need to store all tweets somewhere - priority queue
    postTweet(userId, tweetId) {
        //line 31 refers to global tweet count
        const tweet = new Tweet(userId, tweetId, this.tweetCount++)
        
        //accessing tweetCount from the Tweet instance, not the global tweetCount
        this.tweets.enqueue(tweet, tweet.tweetCount)
    }

    //need to funnel in tweets based on timestamps
    //most recent first
    //only want user's tweet and user's followers' tweets
    getNewsFeed(userId) {
        const newsFeed = []
        const tweetsToAddBack = []

        let count = 0
        while(count < 10 && this.tweets.size() > 0) {
            //pull out tweets from PQ
            //can't just increment count every time pull out a tweet, has to be tweet we care about
            const currentTweet = this.tweets.dequeue()
            if(currentTweet.userId === userId || (this.followersMap[userId] && this.followersMap[userId].has(currentTweet.userId))) {
                newsFeed.push(currentTweet.tweetId)
                count++
            }
            //don't care about this tweet for this user, but need to keep the tweet for other users
            //can't just add it to the PQ because haven't changed the timestamp
            //need to add the currentTweet back no matter what
            tweetsToAddBack.push(currentTweet)
        }

        //add back all the tweets to PQ

        while(tweetsToAddBack.length > 0) {
            const elementToAdd = tweetsToAddBack.pop()
            this.tweets.enqueue(elementToAdd, elementToAdd.tweetCount)
        }

        return newsFeed
    }

    follow(followerId, followeeId) {
        //check to see if key already exists in followers Map
        //follower is going to be the key
        if(!this.followersMap[followerId]) {
            this.followersMap[followerId] = new Set()
        }
        //need to add the followeeId whether the user has followers or not
        this.followersMap[followerId].add(followeeId)
    }

    unfollow(followerId, followeeId) {
        //make sure this person is actually following followee
        if(this.followersMap[followerId] && this.followersMap[followerId].has(followeeId)) {
            this.followersMap[followerId].delete(followeeId)
        }
    }
}


