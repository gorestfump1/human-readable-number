const first = [' ','one','two','three','four','five','six','seven','eight','nine'];
    const teen = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = [' ',' ','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

module.exports = function toReadable (number) {
    let result = []
    if ( number === 0 ) { return 'zero'}
    if ( number > 99 && number < 1000 ) { let num = (number / 100 ^ 0); result.push(first[num]); result.push('hundred'); number -= (num*100) }
    if ( number > 19 && number < 100 ) { let num = (number / 10 ^ 0); result.push(tens[num]); number -= (num*10)}
    if ( number > 9 && number < 20 ) { result.push(teen[(number-10)]) }
    if ( number > 0 && number < 10 ) { result.push(first[number]) }
    return result.join(' ')
}
