class StackedBarChart {
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

        //Bar Properties
        this.barWidth = obj.barWidth;
        this.barColour = obj.barColour;
        this.barStrokeThickness = obj.barStrokeThickness;
        this.barStrokeColour = obj.barStrokeColour;
        this.numBars = this.data.length;

        //label properties
        this.labelPadding = obj.labelPadding;
        this.labelRotation = obj.labelRotation;
        this.labelTextsize = obj.labelTextsize;
        this.labelColour = obj.labelColour;
        this.yLabelYOffset = obj.yLabelYOffset;





	}



	render() {
        //Axis
        push();
		translate(this.x, this.y);
		noFill();
		stroke(this.axisLineColour);
		strokeWeight(this.axisLineThickness);
		line(0, 0, this.w, 0);
		line(0, 0, 0, -this.h);

        
        text(this.titleText, this.titleXOffset,this.titleYOffset);

        
        push();
        
        rect(300,-180,200,125);
        text("Key", 350, -160);
        noStroke();
        fill('#000000');
        text("Sea Travel",380,-125);
        fill('#89CFF0');
        rect(325,-140,25,25);
        
        
        
        fill('#C8A2C8');        
        rect(325,-100,25,25);
        noStroke();
        fill('#000000');
        text("Air Travel",380,-85);


        pop();        

        


        
        

        

        // bar chart
		
		let barGap = (this.w - (this.numBars * this.barWidth)) / (this.numBars + 1);
        let maxValue = max(this.data.map((x) => x.Total)) 
        let scale = this.h / max(this.data.map((x) => x.Total));
        
        
        push()
        translate(barGap,0);


		for (let i = 0; i < this.numBars; i++) {

            stroke(this.barStrokeColour);
            strokeWeight(this.barStrokeThickness);
			
			//let jump = (barGap * (i+1)) + (this.barWidth * i);
			//let colHeight = this.data[i][this.yAxisValue] * scale;
			//rect(jump, 0, this.barWidth, -colHeight);


            //drawing lables
            noStroke();
            fill(this.labelColour);
            textAlign(LEFT, CENTER)
            let labels = this.data.map((x) => x[this.xAxisLabel])
            push();
            translate(this.barWidth / 2, this.labelPadding )
            rotate(this.labelRotation);
            text(labels[i], 0, 0);
            pop();


            
            
            
        



            

            push();
            for(let j = 0; j < this.yAxisValue.length; j++){
                let barHeight = -this.data[i][this.yAxisValue[j]] * scale;
                fill(this.barColour[j%this.barColour.length]);
                noStroke();
                rect(0,0 ,this.barWidth,barHeight);

                translate(0,barHeight)
                //console.log(this.yAxisValue);
            }
            pop();

            translate(this.barWidth + barGap,0);


        }

        pop();

        //Tick Gap
        let tickGap = this.h / this.numTicks;

        for(let i = 0; i <= this.numTicks; i ++){
            line(0,-i * tickGap, -this.tickStrokeLength, -i * tickGap)
            stroke(this.tickColour);
            strokeWeight(this.tickStrokeWeight);
            line(0, -i * tickGap, -this.tickStrokeLength, -i * tickGap);
            noStroke();
            fill(this.tickTextColour);
            textAlign(RIGHT, CENTER);
            textSize(15);
            let value = (maxValue / this.numTicks) * i;
            text(value.toFixed(this.tickDecimals),-this.tickPadding - this.tickStrokeLength , -i * tickGap);
            
            
        }
        
        pop();
	}
}



