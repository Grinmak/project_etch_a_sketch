    let gridMult = 100;
    let gridItems = Math.pow(gridMult, 2);
    let gridWidth = Number((100/gridMult).toFixed(2));

    const mainArea = document.createElement('div');
    const body = document.querySelector('body');
    

    function grid16 (){
        for(let i=0; i<gridItems; i++){
            const onePiece = document.createElement('div');
            body.appendChild(onePiece);
        } 
    }
    grid16();

    const allDivs = document.querySelectorAll('div');
    
    body.setAttribute('class', 'mainArea');
    
    allDivs.forEach(div => div.setAttribute('class', 'divs'));
    allDivs.forEach(div => div.setAttribute('style', `min-width: ${gridWidth}%`));
    allDivs.forEach(div => div.addEventListener('mouseover', changeColor));

    function changeColor (){
        this.classList.add('changeColor');
    };
    