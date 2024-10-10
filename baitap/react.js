let mounth = prompt('enter a mounth','')
if (0<mounth <= 12) {
    if (mounth == 1 || mounth == 3 || mounth == 5 || mounth == 7 || mounth == 8 || mounth == 10 || mounth == 12) {
        alert('31 ngay');
    } else if (mounth == 2) {
        alert('28 hoac 29 ngay');
    } else {
        alert('30 ngay');
    }
}else{
    alert('moi nam chi co 12 thang !');
}