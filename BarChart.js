class BarChart{
    constructor(obj){
        this.data = obj.data;
        this.chartWidth = obj.chartWidth;
        this.chartHeight = obj.chartHeight;
        this.xPos = obj.xPos;
        this.yPos = obj.yPos;
        this.axisLineColour = obj.axisLineColour;
        this.barWidth = obj.barWidth;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.numTicks = obj.numTicks;

        this.maxValue = max(this.data.map(d => d.Total))
        this.scale = this.chartHeight / this.maxValue;


       

    }

    render(){
        push ();
        translate (this.xPos,this.yPos);
        stroke(this.axisLineColour)
        line (0,0,0,-this.chartHeight);
        line (0,0,this.chartWidth,0);

        // This is drawing ticks on y axis
        for(let i=0; i<=this.numTicks;i++){
            line(0,i*(-this.chartHeight/this.numTicks),-5,i*(-this.chartHeight/this.numTicks))
        }


        



        noStroke();
        fill ("#55ccc33")
        textAlign(RIGHT,CENTER)
        text("john,-10,0")

        let gap = (this.chartWidth - (this.data.length * this.barWidth))/(this.data.length +1)
      
        push()
        translate(gap,0);
        for(let i=0; i<this.data.length; i++){
      
            rect (0,0,this.barWidth, -this.data[i][this.yValue] * this.scale);
            translate(gap+this.barWidth,0)

            
        }
        pop()
        
        
        pop ();
    }
}