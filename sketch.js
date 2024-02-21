let data;
let cleanData = [];
let barCharts = [];
let scatterplotCharts = [];
let HorizontalBarCharts = [];

let canvasWidth = 2000;
let canvasHeight = 2000;

// Colours
let backgroundColour = "#000000";



function preload() {
	data = loadTable("data/Combined.csv", "csv", "header");
    
}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
    angleMode(DEGREES);

	for (let i = 0; i < data.rows.length; i++) {
		cleanData.push(data.rows[i].obj);
	}

	numBars = cleanData.length;

    let barChart01 = {
       x: 70,
       y: 350,
       w: 250,
       h:250,

       data: cleanData,
       yAxisValue: "Total",
       xAxisLabel: "Age_Group",
       axisLineColour: "#FFFFFF",
       axisLineThickness: 1,

       barWidth: 15,
       barColour: "#db1818",
       barStrokeThickness: 1,
       barStrokeColour: "#FFFFFF",

       titleText: "Total Road Death Cases by Age Group",
       titleXOffset: -30,
       titleYOffset: 50,
       titleWidth: 300,
       titleSize: 20,
       titlecolour:"#fafafa",
       tickColour:"#fafafa",
       tickStrokeWeight: 1,
       tickStrokeLength: 10,
       tickPadding: 10,
       numTicks:5,
       tickTextColour: "#00FF00",
       tickTextSize: 14,
       tickDecimals: 0,

       labelPadding: 11,
       labelRotation: 60,
       labelTextSixe: 12,
       labelColour: "#fafafa",

    };

    let barChart02 = {
        x: 400,
        y: 350,
        w: 250,
        h:250,
 
        data: cleanData,
        yAxisValue: "Total",
        xAxisLabel: "Age_Group",
        axisLineColour: "#FFFFFF",
        axisLineThickness: 1,
 
        barWidth: 15,
        barColour: "#db1818",
        barStrokeThickness: 1,
        barStrokeColour: "#FFFFFF",
 
        titleText: "Total Road Death Cases by Age Group",
        titleXOffset: -30,
        titleYOffset: 50,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#fafafa",
        tickColour:"#fafafa",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:5,
        tickTextColour: "#00FF00",
        tickTextSize: 14,
        tickDecimals: 0,
 
        labelPadding: 11,
        labelRotation: 60,
        labelTextSixe: 12,
        labelColour: "#fafafa",
 
     };

     let scatterPlotChart01 = {
        x: 800,
        y: 350,
        w: 250,
        h:250,
 
        data: cleanData,
        yAxisValue: "Total",
        xAxisLabel: "Age_Group",
        axisLineColour: "#FFFFFF",
        axisLineThickness: 1,
 
        plotWidth: 5,
        plotHeight: 5,
        plotColour: "#db1818",
        plotStrokeThickness: 1,
        plotStrokeColour: "#FFFFFF",
 
        titleText: "Total Road Death Cases by Age Group",
        titleXOffset: -30,
        titleYOffset: 50,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#fafafa",
        tickColour:"#fafafa",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:5,
        tickTextColour: "#00FF00",
        tickTextSize: 14,
        tickDecimals: 0,
 
        labelPadding: 11,
        labelRotation: 60,
        labelTextSixe: 12,
        labelColour: "#fafafa",
 
     };


     let horizontalBarChart01 = {
        x: 70,
        y: 700,
        w: 250,
        h:250,
 
        data: cleanData,
        yAxisValue: "Total",
        xAxisLabel: "Age_Group",
        axisLineColour: "#FFFFFF",
        axisLineThickness: 1,
 
        barWidth: 15,
        barColour: "#db1818",
        barStrokeThickness: 1,
        barStrokeColour: "#FFFFFF",
 
        titleText: "Total Road Death Cases by Age Group",
        titleXOffset: -30,
        titleYOffset: 50,
        titleWidth: 300,
        titleSize: 20,
        titlecolour:"#fafafa",
        tickColour:"#fafafa",
        tickStrokeWeight: 1,
        tickStrokeLength: 10,
        tickPadding: 10,
        numTicks:5,
        tickTextColour: "#00FF00",
        tickTextSize: 14,
        tickDecimals: 0,
 
        labelPadding: 11,
        labelRotation: 60,
        labelTextSixe: 12,
        labelColour: "#fafafa",
 
     };



    

	barCharts.push(new BarChart(barChart01));
    barCharts.push(new BarChart(barChart02));
    scatterplotCharts.push(new ScatterPlotChart(scatterPlotChart01));
    HorizontalBarCharts.push(new HorizontalBarChart(horizontalBarChart01))
    
}

function draw() {
	background(backgroundColour);
	barCharts.forEach((barChart) => barChart.render());
    scatterplotCharts.forEach((scatterPlotChart) => scatterPlotChart.render());
    HorizontalBarCharts.forEach((horizontalBarChart) => horizontalBarChart.render());
}
