var a = new Array();
var b = new Array();

for (var i =1; i <= 4; i++){
    b[i] = new Array;
}

var k, soni;


for (var i =1; i <= 15; i++){
    do{
soni = 0;
k = Math.round(Math.random()*14 + 1);
for (var j = 1; j < i; j++)
    if (a[j] == k){
        soni = 1;   
    }

    } while (soni != 0);
    a[i] = k;
}
a[16] = 16;

k = 1;
for (let i = 1; i<= 4; i++)
for (let j = 1; j<= 4; j++){
    b [i][j] = a[k];
    k++;
}
for (let i = 1; i<= 4; i++)
    for (let j = 1; j<= 4; j++)
document.getElementById('btn'+i+"_"+j).innerHTML = b[i][j];

document.getElementById('btn4_4').classList.add('fon');
       function tekshir(x, y){
        if ((x != 4) && (b[x + 1][y] == 16)) { almashtir(x, y, x + 1, y); return 0; }
        if ((x != 1) && (b[x - 1][y] == 16)) { almashtir(x, y, x - 1, y); return 0; }
           
        if ((y != 4) && (b[x][y+1] == 16)) { almashtir(x, y, x, y + 1); return 0; }
        if ((y != 1) && (b[x][y-1] == 16)) { almashtir(x, y, x, y - 1); return 0; }
           
       } 

       function almashtir(x1, y1, x2, y2){
          let k;
          k = b[x1][y1];
          b[x1][y1] = b[x2][y2];
          b[x2][y2] = k;

        document.getElementById('btn'+x1+"_"+y1).innerHTML = '16';
        document.getElementById('btn'+x1+"_"+y1).classList.add('fon');

        document.getElementById('btn'+x2+"_"+y2).innerHTML = b[x2][y2];
        document.getElementById('btn'+x2+"_"+y2).classList.remove('fon')
        var buttons = document.getElementsByClassName('button');
        for (let i = 0; i < buttons.length; i++){
            let button = buttons[i]

            button.classList.add('green');
            button.disabled = true;
        }
       }
       function tugadimi(){
        let x = b[1][1];
        for (let i = 1; j <= 4; i++)
            for (let j = 1; j <= 4; j++){
        if (x > b[i][j]) return false;
        x = b[i][j];
        }
        return true;
       }
        
    

console.log(b);