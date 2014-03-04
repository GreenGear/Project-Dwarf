
var power = 1;//0=Hide JavaScript ~ 1=Show JavaScript

if(power===1){

//CONTROLS IF "STARTUP"!!!!!!!!!!!!!!!!!!!!!!
var startUp = 1;

// Creates canvas and background variables
var canWidth = 600;
var canHeight = 600;
var buttonSpace = 40;
var bgColor = 'black';

//creates raphael canvas 0 and 1
if(startUp===1){
	var paper = Raphael(0, buttonSpace, canWidth, canHeight);
}
if(startUp===0){
	var paper = Raphael(0, 0, canWidth, canHeight+buttonSpace);
}

if(startUp===1){
// Creates background 1
var rect = paper.rect(0, 0, canWidth, canHeight+buttonSpace).attr({fill: "bgColor" }).attr("stroke", "#fff");
}
///////////////////////////////////////////////////////////////////////////////////

if(startUp===0){

	//Draws Background 0
	//paper.rect(0, 0, canWidth, canHeight+buttonSpace).attr({fill: bgColor }).attr("stroke", bgColor);


	var logoX = canWidth/2.4;//to get it centered
	var logoY = canHeight/2.4;//to get it centered
	var center0 = logoX;//250

	var midBoxSize = 80;
	var outerBoxSize = 50;

	var loopRun = 10;

//////

	var raphaelLogo = paper.image("http://mirdita.de/web_viz/resources/raphael.png", logoX, logoY, midBoxSize, midBoxSize);

		//////////////SECTION A/////////////////
	paper.rect(center0, center0, 80, 80).attr({stroke: 'white'});
	//var rectA = paper.rect(center0+80, center0-50, outerBoxSize, outerBoxSize).attr({stroke: 'white'});//TOP RIGHT
	var rectB = paper.rect(center0-50, center0-50, outerBoxSize, outerBoxSize).attr({stroke: 'black'});//TOP LEFT
	//var rectC = paper.rect(center0+80, center0+80, outerBoxSize, outerBoxSize).attr({stroke: 'white'});//BOTTOM RIGHT
	//var rectD = paper.rect(center0-50, center0+80, outerBoxSize, outerBoxSize).attr({stroke: 'white'});//BOTTOM LEFT
//////									     //////

	/*var rightB = function(){
		rectB.animate({cx: center0-100},3000,'bounce');
	}
	var leftB = function(){
		rectB.animate({cx: center0-50},3000,'bounce');
	}
	rightA();*/

	var rectBAnim = function(){
		rectB.animate({cx: 150},3000,'linear');
		//alert('help!');
	}
	var rectBAnim2 = function(){
		rectB.animate({cx: 200}, 3000, 'linear');
	}
	rectBAnim();

}



	









///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////GAME CODE////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////










if(startUp===1){


	//sets colors of boxRow boxes
	var COLOR_NORMAL = 'black';
	var COLOR_HOVER = 'red';
	var boxRowStroke = 'white';

	var cSpace = 60; //Changes amount of boxes (smaller the # the more boxes)

	var group = paper.set();
	var boxRow = new Array();
	var textChar = new Array();
	var textSize = cSpace+9;
	var swNor = .1;
	var swHov = 1;
	var iCurr = 0;
	var aCurr = 0;

	var doc = "";

	var conk = "";


	for(var i=0; i<canHeight/cSpace; i+=1){
		textChar[i] = new Array();
		boxRow[i] = new Array();
		for(var a=0; a<canWidth/cSpace; a+=1){

			textChar[i][a] = paper.text(a*cSpace+cSpace/2, i*cSpace+cSpace/2, textChar[i][a]).attr("font-size",textSize);
			textChar[i][a].attr("text", " ").attr("fill", "white"); //Default text character (blank unit)

			boxRow[i][a] = paper.rect(a*cSpace, i*cSpace, cSpace, cSpace);
			boxRow[i][a].attr({fill: COLOR_NORMAL}).attr({stroke: boxRowStroke}).attr("stroke-width", swNor).attr("fill-opacity", 0)

			boxRow[i][a].attr({cursor: 'pointer',}).mouseup(function(e) {
			//alert('new ' + this.data("iVal") + ":" + this.data("aVal"));
			//alert('old ' + iCurr + ":" + aCurr);
			boxRow[iCurr][aCurr].attr('stroke', boxRowStroke).attr("stroke-width", swNor);
			this.attr('stroke', COLOR_HOVER).attr("stroke-width", swHov);
			iCurr = this.data("iVal");
			aCurr = this.data("aVal");

			doc=document.getElementById("setValue").value;
			setColor();
			})

			boxRow[i][a].data("iVal", i);
			boxRow[i][a].data("aVal", a);

		}//end loop "a"
	}//end loop "i"

	var hide = function(){
		for(var i=0; i<canHeight/cSpace; i+=1){

			for(var a=0; a<canWidth/cSpace; a+=1){
				boxRow[i][a].attr("stroke-width", 0);
			}//end loop "a"
		}//end loop "i"
	}//end function "hide"

	var show = function(){
		for(var i=0; i<canHeight/cSpace; i+=1){

			for(var a=0; a<canWidth/cSpace; a+=1){
				boxRow[i][a].attr("stroke-width", swNor);
			}//end loop "a"
		}//end loop "i"
	}//end function "hide"

	var save = function(){
		conk="";
		for(var i=0; i<canHeight/cSpace; i+=1){

			for(var a=0; a<canWidth/cSpace; a+=1){
				conk=conk+textChar[i][a].attr('text');
			}//ends for a
		}//ends for i
		//alert(conk);
		localStorage.setItem(document.getElementById("setName").value, conk);
	}//ends save fucntion
	var load = function(){

		conk = localStorage.getItem(document.getElementById("setName").value);
		//alert(conk.charAt(0));
		for(var i=0; i<canHeight/cSpace; i+=1){

			for(var a=0; a<canWidth/cSpace; a+=1){
				doc = conk.charAt(i*10+a);
				iCurr = i;
				aCurr = a;
				setColor();
			}//ends for a
		}//ends for i
	}
////////////////////////////////////Color - if statements//////////////////////////
	var setColor = function(){

		textChar[iCurr][aCurr].attr("text", doc);

		if(doc==="~"){
			textChar[iCurr][aCurr].attr("fill","blue");//water
		}
		if(doc==="T"||doc==="Y"||doc==="t"){
			textChar[iCurr][aCurr].attr("fill","lime");//tree species (3x)
		}
		if(doc==="B"){
			textChar[iCurr][aCurr].attr("fill","red");//pillars
		}
		if(doc==="^"||doc==="^^"){
			textChar[iCurr][aCurr].attr("fill","peru");//mountains
		}
		if(doc==="P"){
			textChar[iCurr][aCurr].attr("fill","peachpuff");//NPC
		}

	}
}//ENDS STARTUP IF STATMENT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



}//ENDS POWER CODE
//////////////////////////////end of color ifs/////////////////////////////////////


//FOR REFERENCE FOR HOW TO MOUSEOVER/OUT
/*svar group = paper.set();
var COLOR_NORMAL = 'green';
var COLOR_HOVER = 'red';
var background = paper.rect(10, 10, 50, 50,10).attr({
    fill: COLOR_NORMAL
});
//var label = paper.text(35, 35, "Hello");

group.push(background);
//group.push(label);

group.attr({cursor: 'pointer',}).mouseover(function(e) {
    background.attr('fill', COLOR_HOVER);
}).mouseout(function(e) {
    background.attr('fill', COLOR_NORMAL);
}).mouseup(function(e) {
    alert("clicked");
});*/
