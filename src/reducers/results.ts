import { SET_DAN_RESULTS, SET_APOLLO_RESULTS, SET_MALF_RESULTS, SET_RYAN_RESULTS } from '../constants/results';

export const resultsState = {
    danResults: { game1: '', game2: '', game3: '', game4: '' },
    apolloResults: { game1: '', game2: '', game3: '', game4: '' },
    malfResults: { game1: '', game2: '', game3: '', game4: '' },
    ryanResults: { game1: '', game2: '', game3: '', game4: '' }
};

export default function results(state = resultsState, action) {
    switch (action.type) {
        case SET_DAN_RESULTS:
            return Object.assign({}, state, {
                danResults: action.danResults
            });
        case SET_APOLLO_RESULTS:
            return Object.assign({}, state, {
                apolloResults: action.apolloResults
            });
        case SET_MALF_RESULTS:
            return Object.assign({}, state, {
                malfResults: action.malfResults
            });
        case SET_RYAN_RESULTS:
            return Object.assign({}, state, {
                ryanResults: action.ryanResults
            });
        default:
            return state;
    }
}
