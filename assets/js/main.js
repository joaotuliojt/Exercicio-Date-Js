const date = new Date();

const txtHours = formatHours()
const day = getDate()
setText(day,txtHours);


function formatHours(){
    const hours = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
 
    return `${hours}:${minutes}`
}

function zeroLeft(num){
    return num >= 10 ? num : `0${num}`
}
function getDate(){
    let dayWeek = date.getDay();
    let day = zeroLeft(date.getDate());
    let mounth = date.getMonth();
    let year = date.getFullYear();
    
    dayWeek = getTxtDay(dayWeek);
    mounth = getTxtMonth(mounth);

    return ` ${dayWeek}, ${day} de ${mounth} de ${year}`
}
function getTxtDay(day){
    let txtDay = ['Domingo','Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira','Sexta-Feira','Sábado']
    return txtDay[day];
}

function getTxtMonth(month){
    txtMonth =['Janeiro', 'Fevereiro', 'Março', 
    'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return txtMonth[month]
}

function setText(day,hour){
    const h1 = document.querySelector('.container h1');
    h1.innerHTML = `${day} ${hour}`
}



const data = new Date();
const h2 = document.querySelector('.container h2');
h2.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full',timeStyle:'short'})