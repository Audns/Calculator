function calculate(){
    const g = parseFloat(document.getElementById('g').value);
    const Z = parseFloat(document.getElementById('Z').value);
    const T = parseFloat(document.getElementById('T').value);
    const opt = document.getElementById('select_rho').value;
    if (opt == 'option1'){
        var rho = 1.2916 - 0.0045 * T + 1.05828 * Math.pow(10, -5) * Math.pow(T, 2);
    }//need to be corrected//
    else if (opt == 'option2'){
        var rho = 1000.0;
    }
    let h = parseFloat(document.getElementById('delta_h').value);
    h = h / 100; //convert m to cm//
    let Q = parseFloat(document.getElementById('Q').value);
    Q = Q / 3600; //convert m^3/h to m^3/s//

    const D = parseFloat(document.getElementById('D').value); 

    u = Q / (Math.PI / 4 * Math.pow(D, 2));

    const delta_P = rho * g * h;
    
    const delta_P_unit = delta_P / Z;
    
    
    document.getElementById('delta_P').innerHTML = delta_P.toFixed(2);
    document.getElementById('delta_P_unit').innerHTML = delta_P_unit.toFixed(2);
}

function calculate2(){
    //空气体积矫正//
    const M_w = 18;//水的相对分子质量//
    const p0 = 101325;
    const E = parseFloat(document.getElementById('E').value);
    const M1 = parseFloat(document.getElementById('M1').value);
    const R = parseFloat(document.getElementById('R').value);
    const c_Ba = parseFloat(document.getElementById('c_Ba'));
    const c_HCl = parseFloat(document.getElementById('c_HCl'));
    const V_Ba = parseFloat(document.getElementById('V_Ba'));
    const V_HCl = parseFloat(document.getElementById('V_HCl'));
    const T1 = 25 + 273.15; 
    const Vq = parseFloat(document.getElementById('Q2').value);
    const rho_w = 1000;//根据温度调整，需添加公式//
    const rho_1 = 101325 * M1 / R / T1 / 1000;
    const rho_0 = 1.205;//to be corrected//
    const V1q = Vq * Math.sqrt(rho_0 / rho_1);
    const V = V1q / 22.4;
    
    document.getElementById('V2').innerHTML = V.toFixed(2);
    document.getElementById('rho_kq').innerHTML = rho_1.toFixed(2);
    //co2体积校正
    const rho_2 = 101325 * 44 / R / T1;
    const V2q = V2 * Math.sqrt(rho_0 / rho_2);
    
    const Y1 = V2q / V1q;
    const y1 = Y1 / (1 + Y1);
    const C_A2 = (2 * c_Ba * V_Ba - c_HCl * V_HCl) / (2 * V_r);
    const C_A1 = (2 * c_Ba * V_Ba - c_HCl * V_HCl) / (2 * V_r);
    const X1 = (2 * c_Ba * V_Ba - c_HCl * V_HCl) * 18 / 1000;
    const X2 = C_A2 * 18 / 1000;
    const Y2 = Y1 - L * (X1 - X2);
    const y2 = Y2 / (1 + Y2);
    const H = rho_w / M_w / E;//CO2的溶解度常数
    const C_A1s = H * y1 * p0;
    const C_A2s = H * y2 * p0;
    
}
