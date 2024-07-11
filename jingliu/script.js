//页面功能------------------------------------//
const calbutton = document.getElementById('calbutton');
const backbutton = document.getElementById('backbutton');
const choosepage = document.getElementById('choosepage');
const mainselect = document.getElementById('mainselect');
const inputpage2 = document.getElementById('inputpage2');
const basicdatainput = document.getElementById('basicdatainput');
inputstyle = document.getElementById('inputpage');
outputstyle = document.getElementById("outputpage");

function showq () {
    inputstyle.style.display = 'block';
    outputstyle.style.display = 'none';
    choosepage.style.display = 'block';
    basicdatainput.style.display = 'block';
};

function showa () {
    inputstyle.style.display = 'none';
    outputstyle.style.display = 'block';
    choosepage.style.display = 'none';
    basicdatainput.style.display = 'none';
};

calbutton.addEventListener('click', function() {
    showa();
    calculate();
});
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        showa();
        calculate();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        showq();
    }
});

backbutton.addEventListener("click", function() {
    showq();
});

function choose(pageopt) {
    if (pageopt == 'option1') {
        showpage1();
    } else if (pageopt == 'option2') {
        showpage2();
    }
}
function showpage1() {
    inputstyle.style.display = 'block';
    outputstyle.style.display = 'none';
    inputpage2.style.display = 'none';
}
function showpage2() {
    inputstyle.style.display = 'none';
    outputstyle.style.display = 'none';
    inputpage2.style.display = 'block';
}
mainselect.addEventListener('change', function() {
    var pageopt = document.getElementById('mainselect').value;
    choose(pageopt);
})

//-----------------------------------------------------//


//选择求取t_BP----------------------------------------------//
function chooset_BP(opt, x_F) {
    var output = 9.1389 * Math.pow(x_F, 2) - 27.861 * x_F + 97.359;//默认值//
    if (opt == 'option1') {
        output = 9.1389 * Math.pow(x_F, 2) - 27.861 * x_F + 97.359;
        return output;//乙醇-正丙醇//
    } else if (opt == 'option2') {
        output = 9.4673 * Math.pow(x_F, 2) - 28.012 * x_F + 97.365;
        return output;//乙醇-水//
    } else if (opt == 'option3') {
        output = 11.6317 * Math.pow(x_F, 2) - 42.050 * x_F + 109.467;
        return output;//苯-甲苯/
    }
}
//------------------------------------------------------//




//总计算------------->>>><<<<<----------------//
function calculate (){
    //待获取数据//
    var N = parseFloat(document.getElementById('N').value);
    var M1 = parseFloat(document.getElementById('M1').value);
    var M2 = parseFloat(document.getElementById('M2').value);
    //全回流数据//
    var t_D = parseFloat(document.getElementById('t_D').value);
    var t_W = parseFloat(document.getElementById('t_W').value);
    var t_L = parseFloat(document.getElementById('t_L').value);
    var t_F = parseFloat(document.getElementById('t_F').value);
    var pa = parseFloat(document.getElementById('kpa').value);
    var P = parseFloat(document.getElementById('P').value);
    var Q = parseFloat(document.getElementById('Q').value);
    var L = parseFloat(document.getElementById('L').value);
    var D = parseFloat(document.getElementById('D').value);
    var W = parseFloat(document.getElementById('W').value);
    var W_D = parseFloat(document.getElementById('w_D').value);
    var W_W = parseFloat(document.getElementById('w_W').value);
    var W_F = parseFloat(document.getElementById('w_F').value);
    var x_D = (W_D / M1) / ((W_D / M1) + ((1 - W_D) / M2)) * 100;//塔顶乙醇的摩尔含量//
    var x_W = (W_W / M1) / ((W_W / M1) + ((1 - W_W) / M2)) * 100;//塔釜乙醇的摩尔含量//
    var x_F = (W_F / M1) / ((W_F / M1) + ((1 - W_F) / M2)) * 100;//进料乙醇的摩尔含量//

    var opt = document.getElementById("select1").value;//获取选项//
    t_BP = chooset_BP(opt, x_F);//代入选项和必须值求取t_BP//

    //插值法求r//
    r1 = 134;//乙醇的摩尔汽化热//
    r2 = 142332;//正丙醇的摩尔汽化热//、
    r_m = r1 * M1 * x_F + r2 * M2 * (1 - x_F);//进料在泡点温度的平均温度//

    var L_p = 10.03;
    var W_p = 2.66;
    R = L_p / W_p;//回流比//
    t = (t_F + t_BP) / 2;
    var F = 3.76;
    //插值法求Cp//
    Cp1 = 1;//乙醇的定压比热容//
    Cp2 = 1;//正丙醇的定压比热容//
    Cpm = Cp1 * M1 * x_F + Cp2 * M2 * (1 - x_F);
    var q = (Cpm * (t_BP - t_F) + r_m) / r_m;
    var r_m = 1;


    //输出--------//
    document.getElementById('x_D').innerHTML = x_D.toFixed(2);
    document.getElementById('x_W').innerHTML = x_W.toFixed(2);
    document.getElementById('x_F').innerHTML = x_F.toFixed(2);
    document.getElementById('F').innerHTML = F.toFixed(2);
    document.getElementById('t_BP').innerHTML = t_BP.toFixed(2);
    document.getElementById('t').innerHTML = t.toFixed(2);
    document.getElementById('Cpm').innerHTML = Cpm.toFixed(2);
    document.getElementById('r_m').innerHTML = r_m.toFixed(2);
    document.getElementById('q').innerHTML = q.toFixed(2);
}

