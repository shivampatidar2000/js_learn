let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dat = date.getDate();

if(dat < 10){ dat = "0" + dat}
if(month < 10){month = "0" + month}

date = `${month}-${dat}-${year}`;
console.log(date);
date = `${month}/${dat}/${year}`;
console.log(date)
date = `${dat}-${month}-${year}`;
console.log(date)
date = `${dat}/${month}/${year}`
console.log(date)
