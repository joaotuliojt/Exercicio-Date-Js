const date = new Date();
const weekDay = date.getDay();
const day = date.getDate();
const mounth = date.getMonth();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const txtDay = getTxtDay(weekDay);
const txtMounth = getTxtMonth(mounth);
const txtHours = formatHours(hours,minutes)

setText(txtDay,day,txtMounth,year,txtHours);

function formatHours(hours,minutes){
    return `${hours}:${minutes}`
}

function getTxtDay(day){
    let txtDay;
    switch(day){
        case 0:
            txtDay = 'Domingo'
            return txtDay;
        case 1:
            txtDay = 'Segunda-Feira'
            return txtDay;
        case 2:
            txtDay = 'Terça-Feira'
            return txtDay;
        case 3:
            txtDay = 'Quarta-Feira'
            return txtDay;
        case 4:
            txtDay = 'Quinta-Feira'
            return txtDay;
        case 5:
            txtDay = 'Sexta-Feira';
            return txtDay;
        case 6:
            txtDay = 'Sábado'
            return txtDay;
        default:
            return txtDay = ' ';
    }
}

function getTxtMonth(month){
    let txtMonth;
    switch(month){
        case 0:
            txtMonth = 'Janeiro'
            return txtMonth;
        case 1:
            txtMonth = 'Fevereiro'
            return txtMonth;
        case 2:
            txtMonth = 'Março'
            return txtMonth;
        case 3:
            txtMonth = 'Abril'
            return txtMonth;
        case 4:
            txtMonth = 'Maio'
            return txtMonth;
        case 5:
            txtMonth = 'Junho'
            return txtMonth;
        case 6:
            txtMonth = 'Julho'
            return txtMonth;
        case 7:
            txtMonth = 'Agosto'
            return txtMonth;
        case 8:
            txtMonth = 'Setembro'
            return txtMonth;
        case 9:
            txtMonth = 'Outubro'
            return txtMonth;
        case 10:
            txtMonth = 'Novembro'
            return txtMonth;
        case 11:
            txtMonth = 'Dezembro'
            return txtMonth;
        default:
            return txtMonth = ''
    }
}

function setText(txtDay,day,month,year,hour){
    const section = document.querySelector('.container');
    section.innerHTML = `<h1> ${txtDay}, ${day} de ${month} de ${year} ${hour} </h1>`
}