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
    num = parseFloat(num);
    let val1 = (num * 5) / 10;

    //ora val1 contiene il voto in una scala da 1 a 5
    val1 = Math.ceil(val1);

    //in percentuale
    let ris = (val1 * 100) / 5;
    return ris;
}