function calculate1(){
    var opt = document.getElementById('select1').value;
    var M1 = parseFloat(document.getElementById('M1').value);
    var M2 = parseFloat(document.getElementById('M2').value);
    
    //全回流数据//
    var t_D = parseFloat(document.getElementById('t_D').value);
    var t_W = parseFloat(document.getElementById('t_W').value);
    var t_L = parseFloat(document.getElementById('t_L').value);
    var t_F = parseFloat(document.getElementById('t_F').value);
    var pa = document.getElementById('pa');
    var P = document.getElementById('P');
    var Q = document.getElementById('Q');
    var L = document.getElementById('L');
    var D = document.getElementById('D');
    var W = document.getElementById('W');
    var W_D = parseFloat(document.getElementById('w_D').value);
    var W_W = parseFloat(document.getElementById('w_W').value);
    var W_F = parseFloat(document.getElementById('w_F').value);

    var x_D = (W_D / M1) / ((W_D / M1) + ((1 - W_D) / M2)) * 100;//塔顶乙醇的摩尔含量//
    var x_W = (W_W / M1) / ((W_W / M1) + ((1 - W_W) / M2)) * 100;//塔釜乙醇的摩尔含量//
    var x_F = (W_F / M1) / ((W_F / M1) + ((1 - W_F) / M2)) * 100;//进料乙醇的摩尔含量//
    
    if (opt == 'option1') {
        t_BP = 9.1389 * Math.pow(x_F, 2) - 27.861 * x_F + 97.359;//乙醇-正丙醇//
    }
    else if (opt == 'option2') {
        t_BP = 9.4673 * Math.pow(x_F, 2) - 28.012 * x_F + 97.365;//乙醇-水//
    }
    else if (opt == 'option3') {
        t_BP = 11.6317 * Math.pow(x_F, 2) - 42.050 * x_F + 109.467;//苯-甲苯//
    } 
    
    //插值法求r//
    r1 = 134;//乙醇的摩尔汽化热//
    r2 = 142332;//正丙醇的摩尔汽化热//、
    r_m = r1 * M1 * x_F + r2 * M2 * (1 - x_F);//进料在泡点温度的平均温度//

    var L_p = 10.03;
    var W_p = 2.66;
    R = L_p / W_p;//回流比//
    t = (t_F + t_BP) / 2;
    //插值法求Cp//
    Cp1 = 1;//乙醇的定压比热容//
    Cp2 = 1;//正丙醇的定压比热容//
    Cpm = Cp1 * M1 * x_F + Cp2 * M2 * (1 - x_F);
    q = (Cpm * (t_BP - t_F) + r_m) / r_m
    //output//
    document.getElementById('x_D').innerHTML = x_D.toFixed(2);
    document.getElementById('x_W').innerHTML = x_W.toFixed(2);
    document.getElementById('x_F').innerHTML = x_F.toFixed(2);
    document.getElementById('F').innerHTML = R.toFixed(2);
    document.getElementById('t_BP').innerHTML = t_BP.toFixed(2);
    document.getElementById('t').innerHTML = t.toFixed(2);
    document.getElementById('Cpm').innerHTML = Cpm.toFixed(2);
    document.getElementById('r_m').innerHTML = r_m.toFixed(2);
    document.getElementById('q').innerHTML = q.toFixed(2);
}
