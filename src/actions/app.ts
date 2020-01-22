import * as Constants from '../constants/store/app';
import { TwitterService } from '../services/TwitterService';

export function setLatestTweet(test: string) {
    return { type: Constants.SET_LATEST_TWEET, test };
}

export function setIsMobile(isMobile: boolean) {
    return { type: Constants.SET_IS_MOBILE, isMobile }
}

export function setEmailSender(sender: string) {
    return { type: Constants.SET_EMAIL_SENDER, sender }
}

export function setEmailMessage(message: string) {
    return { type: Constants.SET_EMAIL_MESSAGE, message }
}

export function setEmailResponse(response: Record<string, any>) {
    return { type: Constants.SET_EMAIL_RESPONSE, response }
}

export function setProjectAnimationClass(projectSelected: string) {
    return { type: Constants.SET_PROJECT_ANIMATION, projectSelected }
}

export function getLatestTweet() {
    return async function (dispatch: Function) {
        TwitterService.getLatestTweet().then(res => {
            console.log(res)
        })
    }
}