
    
    let gridMult;

    let gridItems; 
    let gridWidth;

    const btnSection = document.createElement('section');
    const gridBtn = document.createElement('button');
    gridBtn.classList.add('button');
    
    const mainArea = document.createElement('div');
    const body = document.querySelector('body');
    gridBtn.textContent = 'Create grid!';
    
    btnSection.appendChild(gridBtn); 
    body.appendChild(btnSection);
    body.appendChild(mainArea);
   
    mainArea.setAttribute('id', 'grid')
    mainArea.setAttribute('class', 'mainArea');

    function userInput() {
        gridBtn.addEventListener('click', function askUser() {
            let input =  prompt('Choose grid size');
            if (input <= 100){
                gridMult = Number(input);
                gridItems = Math.pow(gridMult, 2);
                gridWidth = Number((100/gridMult).toFixed(2));
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
        } 
        const allDivs = document.getElementById('grid').querySelectorAll('div');
        allDivs.forEach(div => div.addEventListener('mouseover', changeColor));
    }
  


    function changeColor (){
        this.classList.add('changeColor');
    };
    