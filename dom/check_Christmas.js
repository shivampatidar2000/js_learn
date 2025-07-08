let date = new Date();

var cmas = new Date(date.getFullYear(), 11, 25);

if(date.getMonth() == 11 && date.getDate() > 25){
    cmas.setFullYear(cmas.getFullYear() + 1);  
}

var one_date = 1000 * 60 * 60 * 24;

console.log(Math.ceil((cmas.getTime() - date.getTime()) / (one_date)) + " days left until Christmas!")