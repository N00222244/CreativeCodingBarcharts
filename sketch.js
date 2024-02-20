let barCharts = [];
let data;
let cleanData=[];
let numRows;

function preload(){
    data = loadTable("data/combined.csv", "csv", "header");
}

function setup(){
    background(50)
    createCanvas(500,500)

    numRows = data.rows.length;
    for(let i=0;i<numRows;i++){
        cleanData.push(data.rows[i].obj)
    }


    let barChart01 = {
        data:cleanData,
        chartHeight:200,
        chartWidth:200,
        xPos:250,
        yPos:450,
        axisLineColour:"#d9d9d9",
        barWidth:10,
        yValue: 'Total',
        xValue:"Age_Group",
        numTicks: 5
    }

    let barChart02 = {
        data:cleanData,
        chartHeight:200,
        chartWidth:200,
        xPos:50,
        yPos:250,
        axisLineColour:"#d9d9d9",
        barWidth:10,
        yValue: 'Total'
    }

    barCharts.push(new BarChart(barChart01))
  



    //barCharts.push(new BarChart(cleanData,80,80,50,350,"#ff0000"));
    //barCharts.push(new BarChart(cleanData,200,200,50,450,"#d9d9d9",10))
    //barCharts.push(new BarChart(cleanData,200,200,250,450,"#d9d9d9",10))
    //barCharts.push(new BarChart(cleanData,400,400,50,450,"#d9d9d9"))
}

function draw() {
    background(50);
    barCharts.forEach(bar => bar.render())
}

