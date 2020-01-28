import bronze from '../../assets/images/bronze.png'
import silver from '../../assets/images/silver.png'
import gold from '../../assets/images/gold.png'

//CREATE NEW WEEK UNTIL FUNCTIONALLITY ADDED
// (Firebase as any).database.ref('tutty/results/0/week2/').set({
//     "apollo": {
//         "game1": "",
//         "game2": "",
//         "game3": "",
//         "game4": ""
//     },
//     "dan": {
//         "game1": "",
//         "game2": "",
//         "game3": "",
//         "game4": ""
//     },
//     "malf": {
//         "game1": "",
//         "game2": "",
//         "game3": "",
//         "game4": ""
//     },
//     "ryan": {
//         "game1": "",
//         "game2": "",
//         "game3": "",
//         "game4": ""
//     }
// })


export const tuttyCode = (document: any, setEditMode: Function) => {
    var allowedKeys = {
        84: 't',
        85: 'u',
        89: 'y'
    };
    var tuttyCode = ['t', 'u', 't', 't', 'y'];
    var tuttyCodePosition = 0;

    document.addEventListener('keydown', function (e) {
        var key = allowedKeys[e.keyCode];
        var requiredKey = tuttyCode[tuttyCodePosition];
        if (key == requiredKey) {
            tuttyCodePosition++;
            if (tuttyCodePosition == tuttyCode.length) {
                setEditMode(true)
                tuttyCodePosition = 0;
            }
        } else {
            tuttyCodePosition = 0;
        }
    });
}

export const getMedal = (type: string) => {
    if (type === 'bronze') {
        return bronze
    } else if (type === 'silver') {
        return silver
    } else if (type === 'gold') {
        return gold
    }
}

export const rotateMedal = (type: string) => {
    switch (type) {
        case 'bronze':
            return 'silver'
        case 'silver':
            return 'gold'
        case 'gold':
            return ''
        default:
            return 'bronze';
    }
}

const medalValue = (medal: string) => {
    switch (medal) {
        case 'bronze':
            return 1
        case 'silver':
            return 2
        case 'gold':
            return 3
        default:
            return 0;
    }
}

export const getTotal = (member: any) => {
    var total = 0;
    total += medalValue(member['game1'])
    total += medalValue(member['game2'])
    total += medalValue(member['game3'])
    total += medalValue(member['game4'])
    return total
}