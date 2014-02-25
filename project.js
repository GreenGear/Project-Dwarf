
// Creates canvas
var canWidth = 600;
var canHeight = 600;
var buttonSpace = 40;

var paper = Raphael(0, buttonSpace, canWidth, canHeight);

// Creates "background"
var rect = paper.rect(0, 0, canWidth, canHeight).attr({fill: "#000" }).attr("stroke", "#fff");
///////////////////////////////////////////////////////////////////////////////////

//sets colors of boxRow boxes
var COLOR_NORMAL = 'black';
var COLOR_HOVER = 'green';
var boxRowStroke = 'white';

var cSpace = 60; //Changes amount of boxes (smaller the # the more boxes)

var group = paper.set();
var boxRow = new Array();
var textChar = new Array();
var textSize = cSpace+9;
var iCurr = 0;
var aCurr = 0;

var doc = "";


for(var i=0; i<canHeight/cSpace; i+=1){
	boxRow[i] = new Array();
	textChar[i] = new Array();
	for(var a=0; a<canWidth/cSpace; a+=1){
		boxRow[i][a] = paper.rect(a*cSpace, i*cSpace, cSpace, cSpace);
		boxRow[i][a].attr({fill: COLOR_NORMAL}).attr({stroke: boxRowStroke}).attr("stroke-width", ".1")

		boxRow[i][a].attr({cursor: 'pointer',}).mouseup(function(e) {
		//alert('new ' + this.data("iVal") + ":" + this.data("aVal"));
		//alert('old ' + iCurr + ":" + aCurr);
		boxRow[iCurr][aCurr].attr('fill', COLOR_NORMAL);
		this.attr('fill', COLOR_HOVER);
		iCurr = this.data("iVal");
		aCurr = this.data("aVal");

		doc=document.getElementById("setValue").value;
		setColor();
		})

		boxRow[i][a].data("iVal", i);
		boxRow[i][a].data("aVal", a);

		textChar[i][a] = paper.text(a*cSpace+cSpace/2, i*cSpace+cSpace/2, textChar[i][a]).attr("font-size",textSize);
		textChar[i][a].attr("text", "").attr("fill", "white"); //Default text character (space)
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
			boxRow[i][a].attr("stroke-width", .1);
		}//end loop "a"
	}//end loop "i"
}//end function "hide"

/*
var set = function(){
	textChar[iCurr][aCurr].attr("text", document.getElementById("setValue").value); //CHANGE TO SET IN CLICK FUNCTION - MOUSEUP//
}
*/

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
