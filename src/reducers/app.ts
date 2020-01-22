import * as Constants from '../constants/store/app';
import { AppState } from '../types/app'

export const appState: AppState = {
    latestTweet: null,
    isMobile: false,
    emailSender: '',
    emailMessage: '',
    emailResponse: null,
    projectSelected: ''
};

export default function app(state = appState, action) {
    switch (action.type) {
        case Constants.SET_LATEST_TWEET:
            return Object.assign({}, state, {
                latestTweet: action.latestTweet
            });
        case Constants.SET_IS_MOBILE:
            return Object.assign({}, state, {
                isMobile: action.isMobile
            });
        case Constants.SET_EMAIL_SENDER:
            return Object.assign({}, state, {
                emailSender: action.sender
            });
        case Constants.SET_EMAIL_MESSAGE:
            return Object.assign({}, state, {
                emailMessage: action.message
            });
        case Constants.SET_EMAIL_RESPONSE:
            return Object.assign({}, state, {
                emailResponse: action.response
            });
        case Constants.SET_PROJECT_ANIMATION:
            return Object.assign({}, state, {
                projectSelected: action.projectSelected
            });
        default:
            return state;
    }
}
