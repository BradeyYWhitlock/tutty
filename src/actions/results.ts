import { SET_DAN_RESULTS, SET_APOLLO_RESULTS, SET_MALF_RESULTS, SET_RYAN_RESULTS } from '../constants/results';
import Firebase from '../Services/Firebase';
import _ from 'lodash';

export function setDanResults(danResults: any) {
    return { type: SET_DAN_RESULTS, danResults };
}

export function setApolloResults(apolloResults: any) {
    return { type: SET_APOLLO_RESULTS, apolloResults };
}

export function setMalfResults(malfResults: any) {
    return { type: SET_MALF_RESULTS, malfResults };
}

export function setRyanResults(ryanResults: any) {
    return { type: SET_RYAN_RESULTS, ryanResults };
}

export function determineResults(game: string, medal: string, unityMember: string) {
    return async function (dispatch: Function, getState) {
        if (unityMember === 'dan') {
            var danResults = _.clone(getState().results.danResults);
            danResults[game] = medal;
            (Firebase as any).database.ref('tutty/results/0/week2/dan').set(danResults)
            dispatch(setDanResults(danResults))
        } else if (unityMember === 'apollo') {
            var apolloResults = _.clone(getState().results.apolloResults);
            apolloResults[game] = medal;
            (Firebase as any).database.ref('tutty/results/0/week2/apollo').set(apolloResults)
            dispatch(setApolloResults(apolloResults))
        } else if (unityMember === 'malf') {
            var malfResults = _.clone(getState().results.malfResults);
            malfResults[game] = medal;
            (Firebase as any).database.ref('tutty/results/0/week2/malf').set(malfResults)
            dispatch(setMalfResults(malfResults))
        } else if (unityMember === 'ryan') {
            var ryanResults = _.clone(getState().results.ryanResults);
            ryanResults[game] = medal;
            (Firebase as any).database.ref('tutty/results/0/week2/ryan').set(ryanResults)
            dispatch(setRyanResults(ryanResults))
        }
    };
}