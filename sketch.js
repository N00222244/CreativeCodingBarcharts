let data;
let cleanData = [];
let barCharts = [];
let scatterplotCharts = [];
let HorizontalBarCharts = [];
let StackedBarCharts = [];

let canvasWidth = 2000;
let canvasHeight = 1000;

// Colours
let backgroundColour = "#D3D3D3";



function preload() {
	data = loadTable("data/AirSeaTravel 2010-2023.csv", "csv", "header");
    
    
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
    angleMode(DEGREES);

	for (let i = 0; i < data.rows.length; i++) {
		cleanData.push(data.rows[i].obj);
	}

	numBars = cleanData.length;

    let barChart01 = {
       x: 120,
       y: 350,
       w: 250,
       h:250,

       data: cleanData,
       yAxisValue: "Total",
       xAxisLabel: "Year",
       axisLineColour: "#000000",
       axisLineThickness: 1,
       

       barWidth: 15,
       barColour: "#89CFF0",
       barStrokeThickness: 1,
       barStrokeColour: "#000000",
       maxValue: 20625.6,

       titleText: "Air Travel (In thousands)",
       titleXOffset: 30,
       titleYOffset: -300,
       titleWidth: 300,
       titleSize: 20,
       titlecolour:"#000000",
       tickColour:"#000000",
       tickStrokeWeight: 1,
       tickStrokeLength: 10,
       tickPadding: 10,
       numTicks:5,
       tickTextColour: "#000000",
       tickTextSize: 14,
       tickDecimals: 0,

       labelPadding: 11,
       labelRotation: 60,
       labelTextSixe: 12,
       labelColour: "#000000",
       labelX:"Year",
       labelY:"Trips Taken",
       yLabelYOffset:-90,
       xLabelYOffset:150,
       yLabelXOffset:50,
       xLabelXOffset:600,


    };

    let barChart02 = {
        x: 500,
        y: 350,
        w: 250,
        h:250,
 
        data: cleanData,
        yAxisValue: "Sea",
        xAxisLabel: "Year",
        axisLineColour: "#000000",
        axisLineThickness: 1,
        maxValue: 1323.3,
 
        barWidth: 15,
        barColour: "#C8A2C8",
        barStrokeThickness: 1,
        barStrokeColour: "#000000",
 
        titleText: "Sea Travel (In Thousands)",
        titleXOffset: 30,
        titleYOffset: -300,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#000000",
        tickColour:"#000000",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:5,
        tickTextColour: "#000000",
        tickTextSize: 14,
        tickDecimals: 0,
 
        labelPadding: 11,
        labelRotation: 60,
        labelTextSixe: 12,
        labelColour: "#000000",
        labelX:"Year",
        labelY:"Trips Taken",
        yLabelYOffset:-90,
        xLabelYOffset:150,
        yLabelXOffset:50,
        xLabelXOffset:600,
 
     };

     let scatterPlotChart01 = {
        x: 900,
        y: 350,
        w: 250,
        h:250,
 
        data: cleanData,
        yAxisValue: "Total",
        xAxisLabel: "Year",
        axisLineColour: "#000000",
        axisLineThickness: 1,
 
        plotWidth: 10,
        plotHeight: 10,
        plotColour: "#89CFF0",
        plotStrokeThickness: 1,
        plotStrokeColour: "#000000",
        minVal:0,
        maxVal:32,
 
        titleText: "Total Air/Boat Travel(In Thousands)",
        titleXOffset: 30,
        titleYOffset: -300,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#000000",
        tickColour:"#000000",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:10,
        tickTextColour: "#000000",
        tickTextSize: 14,
        tickDecimals: 0,
 
        labelPadding: 11,
        labelRotation: 60,
        labelTextSixe: 12,
        labelColour: "#000000",
        yLabelYOffset:-90,
        xLabelYOffset:150,
        yLabelXOffset:50,
        xLabelXOffset:600,
 
     };


     let horizontalBarChart01 = {
        x: 120,
        y: 750,
        w: 300,
        h:300,
 
        data: cleanData,
        yAxisValue: "Total",
        xAxisLabel: "Year",
        axisLineColour: "#000000",
        axisLineThickness: 1,
        maxValue: 20625.6,
 
        barWidth: 15,
        barColour: "#C8A2C8",
        barStrokeThickness: 1,
        barStrokeColour: "#000000",
 
        titleText: "Air Travel (In Thousands)",
        titleXOffset: 30,
        titleYOffset: -280,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#000000",
        tickColour:"#000000",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:5,
        tickTextColour: "#000000",
        tickTextSize: 14,
        tickDecimals: 0,
        tickRotation:180,
 
        labelPadding: 11,
        labelRotation: 0,
        labelTextSixe: 12,
        labelColour: "#000000",
        labelPadding: 25,
        yLabelYOffset:-90,
        xLabelYOffset:150,
        yLabelXOffset:50,
        xLabelXOffset:600,
        
 
     };

     let horizontalBarChart02 = {
        x: 500,
        y: 750,
        w: 300,
        h:300,
 
        data: cleanData,
        yAxisValue: "Sea",
        xAxisLabel: "Year",
        axisLineColour: "#000000",
        axisLineThickness: 1,
        maxValue:1323.3,
 
        barWidth: 15,
        barColour: "#89CFF0",
        barStrokeThickness: 1,
        barStrokeColour: "#000000",
 
        titleText: "Sea Travel (in Thousands)",
        titleXOffset: 30,
        titleYOffset: -280,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#000000",
        tickColour:"#000000",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:5,
        tickTextColour: "#000000",
        tickTextSize: 14,
        tickDecimals: 0,
        tickRotation:180,
 
        labelPadding: 5,
        labelRotation: 0,
        labelTextSixe: 12,
        labelColour: "#000000",
        labelPadding: 20,
        yLabelYOffset:-90,
        xLabelYOffset:150,
        yLabelXOffset:50,
        xLabelXOffset:600,
 
     };


     let stackedBarChart01 = {
        x: 900,
        y: 750,
        w: 250,
        h:250,
 
        data: cleanData,
        yAxisValue: ["Sea","Air"],
        xAxisLabel: "Year",
        axisLineColour: "#000000",
        axisLineThickness: 1,
 
        barWidth: 15,
        barColour: ["#89CFF0", "#C8A2C8"],
        barStrokeThickness: 1,
        barStrokeColour: "#000000",
 
        titleText: "Air and Sea Travel(In Thousands)",
        titleXOffset: 30,
        titleYOffset: -280,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#000000",
        tickColour:"#000000",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:15,
        tickTextColour: "#000000",
        tickTextSize: 14,
        tickDecimals: 0,
 
        labelPadding: 11,
        labelRotation: 60,
        labelTextSixe: 12,
        labelColour: "#000000",
        yLabelYOffset:-90,
        xLabelYOffset:150,
        yLabelXOffset:50,
        xLabelXOffset:600,
 
     };

     


    

	barCharts.push(new BarChart(barChart01));
    barCharts.push(new BarChart(barChart02));
    scatterplotCharts.push(new ScatterPlotChart(scatterPlotChart01));
    HorizontalBarCharts.push(new HorizontalBarChart(horizontalBarChart01));
    HorizontalBarCharts.push(new HorizontalBarChart(horizontalBarChart02));
    StackedBarCharts.push(new StackedBarChart(stackedBarChart01));
    
}

function draw() {
	background(backgroundColour);
	barCharts.forEach((barChart) => barChart.render());
    scatterplotCharts.forEach((scatterPlotChart) => scatterPlotChart.render());
    HorizontalBarCharts.forEach((horizontalBarChart) => horizontalBarChart.render());
    StackedBarCharts.forEach((stackedBarChart)=> stackedBarChart.render());
}
