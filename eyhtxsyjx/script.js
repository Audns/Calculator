const h = document.getElementById('h').value;//萃取塔高//
const c_naoh = document.getElementById("c_naoh").value;//NaOH浓度//
const M_bch3 = document.getElementById('M1').value;//苯甲酸分子量//
const V_my = document.getElementById('V').value;//取样煤油体积//
const T = document.getElementById('T').value;//获取环境温度//

//根据温度获取水的密度，可以选择水的密度是1000//
function getrho (T){
    var option = document.getElementById('select_rho').value;
    var rho;
    if (option == 'option1') {
        return rho = T + 1;
    } else if (option == 'option2') {
        return rho = 1000;
    }
};
const rho = getrho(T);


//根据温度获取油的密度，可以选择油的密度是799.000//
function getoil(T) {
    var option = document.getElementById('select_rho_oil').value;
    var rho;
    if (option == 'option1') {
        return rho = T + 1;
    } else if (option == 'option2') {
        return rho = 799;
    }
};
const rho_oil = getoil(T);

//获取转子密度,或者选择7850.000//
function getzhuanzi(T) {
    var option = document.getElementById('select_rho_zhuanzi');
    if (option == 'option1') {
        return rho = T + 1;
    } else if (option == 'option2') {
        return rho = 7850.000;
    }
};
const rho_zhuanzi = getzhuanzi(T);
const amp = document.getElementById('amp');//获取筛板振幅//



//页面功能//
function hideq() {
    var inputpage = document.getElementById('inputpage');
    var outputpage = document.getElementById('outputpage');
    inputpage.style.display = 'none';
    outputpage.style.display = 'block';
};

function showq() {
    var inputpage = document.getElementById('inputpage');
    var outputpage = document.getElementById('outputpage');
    inputpage.style.display = 'block';
    outputpage.style.display = 'none';
};

function calculate(){
    
};
const button = document.getElementById('calbutton');
const backbutton = document.getElementById('backbutton');
button.addEventListener('click', hideq);
backbutton.addEventListener('click', function(){
    showq();
});

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        hideq();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        showq();
    }
}) 
//-------//