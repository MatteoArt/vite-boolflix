export function setLang(str) {
    let ris;
    switch (str) {
        case 'JA':
            ris = 'JP';
            break;
        case 'EN':
            ris = 'GB';
            break;
        case 'ZH':
            ris = 'CN';
            break;
        case 'DA':
            ris = 'DK';
            break;
        case 'FA':
            ris = 'TJ';
            break;
        case 'AR':
            ris = 'SA';
            break;
        case 'KO':
            ris = 'KP';
            break;
        case 'HI':
            ris = 'US';
            break;
        case 'TA':
            ris = 'TH';
            break;
        default:
            ris = str;
    }
    return ris;
}

export function getStarRating(num) {
    
}