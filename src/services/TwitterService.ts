import axios from 'axios';

export class TwitterService {

    static async getLatestTweet() {
        const url = `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Bradeyyw&count=2&exclude_replies=true&include_rts=false`;
        return axios.get(url).then(res =>
            res.data
        );
    }
}

export default new TwitterService();
