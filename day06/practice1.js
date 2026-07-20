let html = ' '
for(let i = 1; i <= 10; i++){
    for( let star = 1; star <= i; star++ ){
        html += '★ '
    }html += '<br>'
    }
    for( let i = 9; i >= 1; i--){
        for( let star = 1; star <= i; star++ ){
        html += '★ '
    }html += '<br>'
}
console.log(html)
document.querySelector('.별').innerHTML = html