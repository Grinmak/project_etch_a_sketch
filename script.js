    let gridMult = 0;
    let gridItems; 
    let gridWidth;
    //button
    const btnSection = document.createElement('section');
    const gridBtn = document.createElement('button');
    gridBtn.classList.add('button');
    // new grid area
    const mainArea = document.createElement('div');
    const body = document.querySelector('body');
    gridBtn.textContent = 'Create grid!';
    //button placement
    btnSection.appendChild(gridBtn); 
    body.appendChild(btnSection);
    body.appendChild(mainArea);
   
    mainArea.setAttribute('id', 'grid')
    mainArea.setAttribute('class', 'mainArea');


    function removeGrid () {
        const gridRemove = document.getElementById('grid').querySelectorAll('div');
        for (let i = 0; i < gridRemove.length; i++){
            gridRemove[i].remove();
        }
    }

    function userInput() {
        gridBtn.addEventListener('click', function askUser() {
            if (gridMult > 0) {
                    removeGrid();
                };
            let input =  prompt('Choose grid size');
            if (input <= 100){
                gridMult = Number(input);
                gridItems = Math.pow(gridMult, 2);
                gridWidth = Number((100/gridMult).toFixed(2) - 0.01);
                grid16();
            }else alert('Try number less than 100');
        });
        
    } 

    userInput();

    function grid16 (){
        for(let i=0; i<gridItems; i++){
            const onePiece = document.createElement('div');
            onePiece.setAttribute('class', 'gridDivs');
            onePiece.setAttribute('style', `min-width: ${gridWidth}%`);
            mainArea.appendChild(onePiece);
            //console.log(gridWidth);
        } 
        const allDivs = document.getElementById('grid').querySelectorAll('div');
        allDivs.forEach(div => div.addEventListener('mouseover', changeColor));
    }
  


    function changeColor (a){ 
        let b = a.target; 
        let colorPreFix = 'rgb';
        let colorR = Math.floor(Math.random()*256) + ',';
        let colorG = Math.floor(Math.random()*256) + ',';
        let colorB = Math.floor(Math.random()*256);
        let colorRGB = colorR + colorG + colorB;
        //let colorPerc = 100;
        
        if (b.style.backgroundColor){
         //  colorPerc = 60;
        // b.style.backgroundColor = colorPreFix + '(' + colorRGB + ')' ; //change color in fired cells
        }else { 
         b.style.backgroundColor = colorPreFix + '(' + colorRGB + ')' ;
        }

    };
