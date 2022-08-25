
const calc = document.querySelector('.calc');
const calculators = document.querySelector(".calculators");
const calculatorsExit = document.querySelector(".calculators-exit");

function renderCalc() {
    calculators.classList.remove("inactive");
    containerWWP.classList.add("inactive");  
    containerWVP.classList.add("inactive");
    containerVVP.classList.add("inactive");
}

function removeCalc() {
    calculators.classList.add("inactive");
}

calc.addEventListener("click", renderCalc);
calculatorsExit.addEventListener("click", removeCalc);



//LAYOUT OF WEIGHT BY WEIGHT PERCENTAGE CALCULATOR
const p1 = document.querySelector(".p1");
const containerWWP = document.querySelector('.WWP');



function calcPPP() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("calculadoraPP");

    const mainContainerCalculator = document.createElement("div");
    mainContainerCalculator.classList.add("container-calculadoraPP");
    
    const containerExit= document.createElement("div");
    containerExit.classList.add("containerExit");

    const returnWWP = document.createElement("i");
    returnWWP.classList.add("fa-solid");
    returnWWP.classList.add("fa-arrow-right-from-bracket");
    returnWWP.classList.add("returnWWP");


    const exitWWP = document.createElement("i");
    exitWWP.classList.add("fa-solid");
    exitWWP.classList.add("fa-xmark");
    exitWWP.classList.add("exit-WWP");

    containerExit.append(returnWWP, exitWWP);

    const title = document.createElement("h3");
    title.innerText = "Calculator\n% weight/weight";
        
    const form = document.createElement("form");

    const label1 = document.createElement("label");
    label1.innerText = 'Mass of solute (grams)';
    const input1 = document.createElement('input');
    input1.classList.add('sto');
    input1.setAttribute('type','number');

    const label2 = document.createElement("label");
    label2.innerText = 'Mass of solvent (grams)';
    const input2 = document.createElement('input');
    input2.classList.add('solvente');
    input2.setAttribute('type','number');

    const label3 = document.createElement("label");
    label3.innerText = 'Mass of solution (grams)';
    const input3 = document.createElement('input');
    input3.classList.add('solucion');
    input3.setAttribute('type','number');

    const label4 = document.createElement("label");
    label4.innerText = '%w/w solute';
    const input4 = document.createElement('input');
    input4.classList.add('porcentajeSoluto');
    input4.setAttribute('type','number');

    const label5 = document.createElement("label");
    label5.innerText = '%w/w solvent';
    const input5 = document.createElement('input');
    input5.classList.add('porcentajeSolvente');
    input5.setAttribute('type','number');    

    const btnContainer = document.createElement('div');
    btnContainer.classList.add("btncontainer");

    const btnCalc = document.createElement('button');
    btnCalc.innerText = 'Calculate';
    btnCalc.classList.add('calcular');
    btnCalc.setAttribute('type', 'button');

    const btnClear = document.createElement('button');
    btnClear.innerText = 'Clear';
    btnClear.classList.add('clear');
    btnClear.setAttribute('type', 'button');

    btnContainer.append(btnCalc, btnClear);
    form.append(label1, input1, label2, input2, label3, input3, label4, input4, label5, input5, btnContainer);
    mainContainerCalculator.append(title, form);
    mainContainer.append(containerExit, mainContainerCalculator);

    containerWWP.appendChild(mainContainer);
}

calcPPP()

function renderCalcWWP() {
    containerWWP.classList.remove("inactive");
    calculators.classList.add("inactive");
}

p1.addEventListener('click', renderCalcWWP);

const returnWWP = document.querySelector(".returnWWP");
const exitWWP = document.querySelector(".exit-WWP");

function removeCalcWWP() {
    containerWWP.classList.add("inactive");
}

returnWWP.addEventListener("click", renderCalc);
exitWWP.addEventListener("click", removeCalcWWP);

//---------------Calculation logic------------------

const btn = document.querySelector(".calcular");

btn.addEventListener("click", calculoPorcentajePP);

function calculoPorcentajePP(){
    let gramoSoluto = document.querySelector(".sto");
    let gramoSolvente = document.querySelector(".solvente");
    let gramoSolucion = document.querySelector(".solucion");
    let porcentajeSoluto = document.querySelector(".porcentajeSoluto");
    let porcentajeSolvente = document.querySelector(".porcentajeSolvente");

    if (porcentajeSoluto.value == "" && porcentajeSolvente != "") {
        porcentajeSoluto.value = 100 - parseFloat(porcentajeSolvente.value);
    }

    if (gramoSolucion.value == "" && gramoSoluto.value != "" && gramoSolvente.value != "") {
        gramoSolucion.value = (parseFloat(gramoSolvente.value) + parseFloat(gramoSoluto.value))
    }

    if (gramoSoluto.value == "" && gramoSolvente.value == "") {
        gramoSoluto.value = (parseFloat(gramoSolucion.value)*parseFloat(porcentajeSoluto.value))/100; 
        gramoSolvente.value = (parseFloat(gramoSolucion.value) - parseFloat(gramoSoluto.value));
    }

    if (gramoSoluto.value == "") {
        gramoSoluto.value = (parseFloat(porcentajeSoluto.value)*parseFloat(gramoSolvente.value))/(100 - parseFloat(porcentajeSoluto.value)); 
    }

    if (gramoSolvente.value == "") {
        gramoSolvente.value = (parseFloat(gramoSoluto.value)*(100/porcentajeSoluto.value))-parseFloat(gramoSoluto.value); 
    }

    if (gramoSolucion.value == "") {
        gramoSolucion.value = (parseFloat(gramoSoluto.value)*100)/parseFloat(porcentajeSoluto.value); 
    }
    
    if (porcentajeSoluto.value == "") {
        porcentajeSoluto.value = (parseFloat(gramoSoluto.value)*100)/parseFloat(gramoSolucion.value);
    }

    if (porcentajeSolvente.value == "") {
        porcentajeSolvente.value = 100 - parseFloat(porcentajeSoluto.value);
    }
}

const btn2 = document.querySelector(".clear");

btn2.addEventListener("click", clear);
function clear() {
    let gramoSoluto = document.querySelector(".sto");
    let gramoSolucion = document.querySelector(".solucion");
    let gramoSolvente = document.querySelector(".solvente");
    let porcentajeSoluto = document.querySelector(".porcentajeSoluto");
    let porcentajeSolvente = document.querySelector(".porcentajeSolvente");

    gramoSoluto.value = "";
    gramoSolvente.value = "";
    gramoSolucion.value = "";
    porcentajeSoluto.value = "";
    porcentajeSolvente.value = ""; 
}



//---------------------------------------LAYOUT OF VOLUME BY VOLUME PERCENTAGE CALCULATOR-------------------------------------
const p3 = document.querySelector(".p3");
const containerVVP = document.querySelector('.VVP');

function calcVVP() {
    const mainContainer2 = document.createElement("div");
    mainContainer2.classList.add("calculadoraVV");

    const mainContainerCalculator2 = document.createElement("div");
    mainContainerCalculator2.classList.add("container-calculadoraVV");
    
    const containerExit2= document.createElement("div");
    containerExit2.classList.add("containerExit");

    const returnVVP = document.createElement("i");
    returnVVP.classList.add("fa-solid");
    returnVVP.classList.add("fa-arrow-right-from-bracket");
    returnVVP.classList.add("returnVVP");


    const exitVVP = document.createElement("i");
    exitVVP.classList.add("fa-solid");
    exitVVP.classList.add("fa-xmark");
    exitVVP.classList.add("exit-VVP");

    containerExit2.append(returnVVP, exitVVP);

    const title2 = document.createElement("h3");
    title2.innerText = "Calculator\n% volume/volume";
        
    const form2 = document.createElement("form");

    const label6 = document.createElement("label");
    label6.innerText = 'Solute volume (mL)';
    const input6 = document.createElement('input');
    input6.classList.add('stoV');
    input6.setAttribute('type','number');

    const label7 = document.createElement("label");
    label7.innerText = 'Solvent volume (mL)';
    const input7 = document.createElement('input');
    input7.classList.add('solventeV');
    input7.setAttribute('type','number');

    const label8 = document.createElement("label");
    label8.innerText = 'Solution volume (mL)';
    const input8 = document.createElement('input');
    input8.classList.add('solucionV');
    input8.setAttribute('type','number');

    const label9 = document.createElement("label");
    label9.innerText = '%v/v solute';
    const input9 = document.createElement('input');
    input9.classList.add('porcentajeSolutoV');
    input9.setAttribute('type','number');

    const label10 = document.createElement("label");
    label10.innerText = '%v/v solvent';
    const input10 = document.createElement('input');
    input10.classList.add('porcentajeSolventeV');
    input10.setAttribute('type','number');    

    const btnContainer2 = document.createElement('div');
    btnContainer2.classList.add("btncontainer");

    const btnCalc2 = document.createElement('button');
    btnCalc2.innerText = 'Calculate';
    btnCalc2.classList.add('calcularVV');
    btnCalc2.setAttribute('type', 'button');

    const btnClear2 = document.createElement('button');
    btnClear2.innerText = 'Clear';
    btnClear2.classList.add('clearVV');
    btnClear2.setAttribute('type', 'button');

    btnContainer2.append(btnCalc2, btnClear2);
    form2.append(label6, input6, label7, input7, label8, input8, label9, input9, label10, input10, btnContainer2);
    mainContainerCalculator2.append(title2, form2);
    mainContainer2.append(containerExit2, mainContainerCalculator2);

    containerVVP.appendChild(mainContainer2);
}

calcVVP()

function renderCalcVVP() {
    console.log("hola");
    containerVVP.classList.remove("inactive");
    calculators.classList.add("inactive");
}

p3.addEventListener('click', renderCalcVVP);

const returnVVP = document.querySelector(".returnVVP");
const exitVVP = document.querySelector(".exit-VVP");

function removeCalcVVP() {
    containerVVP.classList.add("inactive");
}

returnVVP.addEventListener("click", renderCalc);
exitVVP.addEventListener("click", removeCalcVVP);

const btn3 = document.querySelector(".calcularVV");

btn3.addEventListener("click", calculoPorcentajeVV);

function calculoPorcentajeVV(){
    let volumeSoluto = document.querySelector(".stoV");
    let volumeSolvente = document.querySelector(".solventeV");
    let volumeSolucion = document.querySelector(".solucionV");
    let porcentajeVVSoluto = document.querySelector(".porcentajeSolutoV");
    let porcentajeVVSolvente = document.querySelector(".porcentajeSolventeV");

    if (porcentajeVVSoluto.value == "" && porcentajeVVSolvente != "") {
        porcentajeVVSoluto.value = 100 - parseFloat(porcentajeVVSolvente.value);
    }

    if (volumeSolucion.value == "" && volumeSoluto.value != "" && volumeSolvente.value != "") {
        volumeSolucion.value = (parseFloat(volumeSolvente.value) + parseFloat(volumeSoluto.value))
    }

    if (volumeSoluto.value == "" && volumeSolvente.value == "") {
        volumeSoluto.value = (parseFloat(volumeSolucion.value)*parseFloat(porcentajeVVSoluto.value))/100; 
        volumeSolvente.value = (parseFloat(volumeSolucion.value) - parseFloat(volumeSoluto.value));
    }

    if (volumeSoluto.value == "") {
        volumeSoluto.value = (parseFloat(porcentajeVVSoluto.value)*parseFloat(volumeSolvente.value))/(100 - parseFloat(porcentajeVVSoluto.value)); 
    }

    if (volumeSolvente.value == "") {
        volumeSolvente.value = (parseFloat(volumeSoluto.value)*(100/porcentajeVVSoluto.value))-parseFloat(volumeSoluto.value); 
    }

    if (volumeSolucion.value == "") {
        volumeSolucion.value = (parseFloat(volumeSoluto.value)*100)/parseFloat(porcentajeVVSoluto.value); 
    }
    
    if (porcentajeVVSoluto.value == "") {
        porcentajeVVSoluto.value = (parseFloat(volumeSoluto.value)*100)/parseFloat(volumeSolucion.value);
    }

    if (porcentajeVVSolvente.value == "") {
        porcentajeVVSolvente.value = 100 - parseFloat(porcentajeVVSoluto.value);
    }
    console.log('hola');
}

const btn4 = document.querySelector(".clearVV");

btn4.addEventListener("click", clearVV);
function clearVV() {
    let volumeSoluto = document.querySelector(".stoV");
    let volumeSolvente = document.querySelector(".solventeV");
    let volumeSolucion = document.querySelector(".solucionV");
    let porcentajeVVSoluto = document.querySelector(".porcentajeSolutoV");
    let porcentajeVVSolvente = document.querySelector(".porcentajeSolventeV");

    volumeSoluto.value = "";
    volumeSolvente.value = "";
    volumeSolucion.value = "";
    porcentajeVVSoluto.value = "";
    porcentajeVVSolvente.value = ""; 
}

//---------------------------------------LAYOUT OF VOLUME BY VOLUME PERCENTAGE CALCULATOR-------------------------------------
const p2 = document.querySelector(".p2");
const containerWVP = document.querySelector('.WVP');

function calcWVP() {
    const mainContainer3 = document.createElement("div");
    mainContainer3.classList.add("calculadoraWV");

    const mainContainerCalculator3 = document.createElement("div");
    mainContainerCalculator3.classList.add("container-calculadoraWV");
    
    const containerExit3= document.createElement("div");
    containerExit3.classList.add("containerExit");

    const returnWVP = document.createElement("i");
    returnWVP.classList.add("fa-solid");
    returnWVP.classList.add("fa-arrow-right-from-bracket");
    returnWVP.classList.add("returnWVP");


    const exitWVP = document.createElement("i");
    exitWVP.classList.add("fa-solid");
    exitWVP.classList.add("fa-xmark");
    exitWVP.classList.add("exit-WVP");

    containerExit3.append(returnWVP, exitWVP);

    const title3 = document.createElement("h3");
    title3.innerText = "Calculator\n% weight/volume";
        
    const form3 = document.createElement("form");

    const label11 = document.createElement("label");
    label11.innerText = 'Solute mass (g)';
    const input11 = document.createElement('input');
    input11.classList.add('solute');
    input11.setAttribute('type','number');

    const label12 = document.createElement("label");
    label12.innerText = 'Solvent volume (mL)';
    const input12 = document.createElement('input');
    input12.classList.add('solvent');
    input12.setAttribute('type','number');

    const label13 = document.createElement("label");
    label13.innerText = 'Solvent density (g/mL)';
    const input13 = document.createElement('input');
    input13.classList.add('d-solvent');
    input13.setAttribute('type','number');
    input13.setAttribute('placeholder','default value 1');
    
    const label14 =document.createElement("label");
    label14.innerText = 'Solution volume (mL)';
    const input14 = document.createElement('input');
    input14.classList.add('solution');
    input14.setAttribute('type','number');

    const label15 = document.createElement("label");
    label15.innerText = 'Solution density (g/mL)';
    const input15 = document.createElement('input');
    input15.classList.add('d-solution');
    input15.setAttribute('type','number');
    input15.setAttribute('placeholder','default value 1');

    const label16 = document.createElement("label");
    label16.innerText = '%w/v solute';
    const input16 = document.createElement('input');
    input16.classList.add('solute-percentage');
    input16.setAttribute('type','number');

    const label17 = document.createElement("label");
    label17.innerText = '%w/v solvent';
    const input17 = document.createElement('input');
    input17.classList.add('solvent-percentage');
    input17.setAttribute('type','number');    

    const btnContainer3 = document.createElement('div');
    btnContainer3.classList.add("btncontainer");

    const btnCalc3 = document.createElement('button');
    btnCalc3.innerText = 'Calculate';
    btnCalc3.classList.add('btn-calculate');
    btnCalc3.setAttribute('type', 'button');

    const btnClear3 = document.createElement('button');
    btnClear3.innerText = 'Clear';
    btnClear3.classList.add('btn-clear');
    btnClear3.setAttribute('type', 'button');

    btnContainer3.append(btnCalc3, btnClear3);
    form3.append(label11, input11, label12, input12, label13, input13, label14, input14, label15, input15, label16, input16, label17, input17, btnContainer3);
    mainContainerCalculator3.append(title3, form3);
    mainContainer3.append(containerExit3, mainContainerCalculator3);

    containerWVP.appendChild(mainContainer3);
}

calcWVP()

function renderCalcWVP() {
    containerWVP.classList.remove("inactive");
    calculators.classList.add("inactive");
}

p2.addEventListener('click', renderCalcWVP);

const returnWVP = document.querySelector(".returnWVP");
const exitWVP = document.querySelector(".exit-WVP");

function removeCalcWVP() {
    containerWVP.classList.add("inactive");
}

returnWVP.addEventListener("click", renderCalc);
exitWVP.addEventListener("click", removeCalcWVP);

const calculate = document.querySelector(".btn-calculate");
const buttonClear = document.querySelector(".btn-clear");

function logicWVP(){
    const solute = document.querySelector(".solute");
    const solvent = document.querySelector(".solvent");
    const dSolvent = document.querySelector(".d-solvent");
    const solution = document.querySelector(".solution");
    const dSolution = document.querySelector(".d-solution");
    const solutePercentage = document.querySelector(".solute-percentage");
    const solventPercentage =document.querySelector(".solvent-percentage");
    while (solute.value=="" || solution.value=="" || solvent.value=="" || solutePercentage.value=="" || solventPercentage.value=="") {
        if (solutePercentage.value=="" && solventPercentage.value!="") {
            solutePercentage.value = 100 - parseFloat(solventPercentage.value);
        }

        if (solute.value==""){
            solute.value = parseFloat(solutePercentage.value)*parseFloat(solution.value)/100 || parseFloat(solutePercentage.value)*parseFloat(solution.value)/100;
        }

        if (dSolvent.value=="") {
            dSolvent.value = (parseFloat(solution.value)*parseFloat(dSolution.value)-parseFloat(solute.value))/parseFloat(solvent.value) || 1;
        }

        if (dSolution.value=="") {
            dSolution.value = (parseFloat(solvent.value)*parseFloat(dSolvent.value) + parseFloat(solute.value))/parseFloat(solution.value) || 1;
        }

        if (solvent.value==""){
            solvent.value = parseFloat(solution.value)*((parseFloat(dSolution.value)/(parseFloat(dSolvent.value)))-(parseFloat(solutePercentage.value)/100)) || (parseFloat(solution.value)*parseFloat(dSolution.value)-parseFloat(solute.value))/parseFloat(dSolvent.value);
        }
     
        if (solution.value==""){
            solution.value = (parseFloat(solvent.value)*parseFloat(dSolvent.value) + parseFloat(solute.value))/parseFloat(dSolution.value) || parseFloat(solute.value)*100/parseFloat(solutePercentage.value) || parseFloat(solvent.value)/((parseFloat(dSolution.value)/parseFloat(dSolvent.value))-(parseFloat(solutePercentage.value)/100));
        }

        if (solutePercentage.value=="") {
            solutePercentage.value = parseFloat(solute.value)*100/parseFloat(solution.value);
        }

        if (solventPercentage.value=="") {
            solventPercentage.value =  parseFloat(dSolvent.value)*parseFloat(solvent.value)*100/parseFloat(solution.value) || 100 - parseFloat(solutePercentage.value);
        }
    }
    console.log("hola");
}

calculate.addEventListener("click", logicWVP);

function clearWV() {
    const solute = document.querySelector(".solute");
    const solvent = document.querySelector(".solvent");
    const dSolvent = document.querySelector(".d-solvent");
    const solution = document.querySelector(".solution");
    const dSolution = document.querySelector(".d-solution");
    const solutePercentage = document.querySelector(".solute-percentage");
    const solventPercentage =document.querySelector(".solvent-percentage");
    
    solute.value = "",
    solvent.value="";
    solution.value="";
    solutePercentage.value="";
    solventPercentage.value="";
    dSolvent.value="";
    dSolution.value="";
}

buttonClear.addEventListener("click", clearWV);