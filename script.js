    let gridMult = 4;
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
    //const div = document.getElementbyclass
    allDivs.forEach(div => div.addEventListener('mouseover', changeColor));

    function changeColor (d){
        console.log(d.srcElement.div);
      //let divElement = d.srcElement.className;
      // console.log(typeof divElement);
       //this.divElement.setAttribute('style', 'background-color: black');
    }
    