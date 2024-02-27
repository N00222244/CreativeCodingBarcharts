class ScatterPlotChart {
	constructor(obj) {

        //Position and Size propeties
        this.x = obj.x;
        this.y = obj.y;
        this.w = obj.w;
        this.h = obj.h;

        //Data Properties
        this.data = obj.data,
        this.yAxisValue = obj.yAxisValue;
        this.xAxisLabel = obj.xAxisLabel;

        //Title Properties
        this.titleXOffset = obj.titleXOffset;
        this.titleYOffset = obj.titleYOffset;
        this.titleSize = obj.titleSize;
        this.titleColour = obj.titleColour;
        this.titleText = obj.titleText;
        this.titleWidth = obj.titleWidth;

        //Axis Properties

        this.axisLineColour = obj.axisLineColour;
        this.axisLineThickness = obj.axisLineThickness;

        //Tick Properties

        this.tickColour = obj.tickColour;
        this.tickStrokeWeight = obj.tickStrokeWeight;
        this.tickStrokeLength = obj.tickStrokeLength;
        this.tickPadding = obj.tickPadding;
        this.numTicks = obj.numTicks;
        this.tickTextColour = obj.tickTextColour;
        this.tickTextsize = obj.tickTextsize;
        this.tickDecimals = obj.tickDecimals;

        //plot Properties
        this.plotWidth = obj.plotWidth;
        this.plotHeight = obj.plotHeight;
        this.plotColour = obj.plotColour;
        this.plotStrokeThickness = obj.plotStrokeThickness;
        this.plotStrokeColour = obj.plotStrokeColour;
        this.numPlots = this.data.length;
        this.maxVal = obj.maxVal;
        this.minVal = obj.minVal;

        //label properties
        this.labelPadding = obj.labelPadding;
        this.labelRotation = obj.labelRotation;
        this.labelTextsize = obj.labelTextsize;
        this.labelColour = obj.labelColour;
        this.yLabelYOffset = obj.yLabelYOffset;
        this.xLabelYOffset = obj.xLabelYOffset;
        this.xLabelXOffset = obj.yLabelXOffset;
        this.yLabelXOffset = obj.yLabelXOffset;




	}

    

	render() {
        
        push();

        //translation of the point of orgin for the axis(based of parameters passed through the instance of the barchart class) + axis design 

		translate(this.x, this.y);

		noFill();
		stroke(this.axisLineColour);
		strokeWeight(this.axisLineThickness);
      
        //Debugging - axis lines werent showing up spell mistake :(
        // console.log(this.axisLineColour);
        //console.log(this.axisLineThickness);

		line(0, 0, this.w, 0);
		line(0, 0, 0, -this.h);

        text(this.titleText, this.titleXOffset,this.titleYOffset);


            

        // Design for plotted points

		

        
		//plotgap is calculated using the number of bars * by the bar width which is then dived by the the number of bars +1, this is then taken away from the width of the chartwidth or w in this case
		let plotGap = (this.w - (this.numPlots * this.plotWidth)) / (this.numPlots + 1);


        let maxValue = max(this.data.map((x) => x.Total)) 
        //let minValue = min(this.data.map((x)=> x.Total))
        let scale = this.h / max(this.data.map((x) => x.Total));

        //console.log(plotGap);
        
        //console.log(scale)
		// console.log(barGap);


		for (let i = 0; i < this.numPlots; i++) {


            stroke(this.plotStrokeColour);
        strokeWeight(this.plotStrokeThickness);
		fill(this.plotColour);


			//prettier-ignore

            // jump caluclates where the next plot will be placed taking into account the bar gap and the plot with with the iteration and i 
			let jump = (plotGap * (i+1)) + (this.plotWidth * i);
			let plotHeight = this.data[i][this.yAxisValue] * scale;
            
            //first parameter  calculates the begining postion of the ellipse using jump
            //Second parameter calcualtes the plotheight which is used to move the plots on the yaxis based upon their values
            //plot width/height are paramter passed in from user to determine how big the ellipse looks(keeping these last two parameter equal to one another makes it round perfectly)
			
            push();
            
            ellipse(jump, -plotHeight, this.plotWidth, this.plotHeight);
            //Tried ading lines to make it line chart but didnt work
            //line(this.plotWidth / 2, -this.data[i][this.yAxisValue * this.scale], this.plotWidth / 2 + this.plotGap +this.plotWidth, -this.data[i+1] )
            
            translate(plotGap + this.plotWidth, 0);

            pop();

            


            noStroke();
            fill(this.labelColour);
            textAlign(LEFT, CENTER)
            let labels = this.data.map((x) => x[this.xAxisLabel])
            push();
            
            translate(jump + this.plotWidth / 2, this.labelPadding )
            rotate(this.labelRotation);
            text(labels[i], 0, 0); 
            pop();
        }

        
        //Draw Ticks 
        stroke(this.tickColour);
        
        // tickgap is calculated bt dividing the height by the number of ticks

        let tickGap = this.h / this.numTicks;

        // for Each instance i is less than or equal to  numTicks draw a tick with values. <= is used to ensure an extra tick is placed at the top 

        for(let i = 0; i <= this.numTicks; i ++){
            line(0,-i * tickGap, -this.tickStrokeLength, -i * tickGap)
            
            //Drawing Ticks along y axis

            stroke(this.tickColour);
            strokeWeight(this.tickStrokeWeight);

            // xpos based off 0 (axis origin) 
            // ypos based of tickGap(how high each tick is placed in relation to i in the loops instances of numticks)
            // w value based off of parameter for tick length in instance of barchart
            // h value is based upon the instances of i in the upward direction multiplied by tickgap)
            
            line(0, -i * tickGap, this.w, -i * tickGap);

            //Design and positioning of values on y axis

            noStroke();
            fill(this.tickTextColour);
            textAlign(RIGHT, CENTER);
            textSize(15);

            // value is calculated by taking the max value and dividing it by the number of ticks then multiplying it by the instances of i 

            let value = (maxValue / this.numTicks) * i;

            

            //first parameter sets the values on the yaxis to a certain decimal point based on parameter passed through 
            //second and third parameters  are design for the values
            //Last paramter is used to calculate the spacing between the values and their postion based ont the y axis
            //this is done through multiplying each instance of i in an upward direction by the gaps between the ticks

            text(value.toFixed(this.tickDecimals),-this.tickPadding - this.tickStrokeLength , -i * tickGap);
            
            
        }
        
        pop();
	}
}