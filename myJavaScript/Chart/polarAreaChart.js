/**
 * Created by xi4737 on 6/24/2015.
 */
var polarData = [
    {
        value: 150,
        color:"#F7464A", // red
        highlight: "#FF5A5E", // brighter red.. same for rest "brighter (color)"
        label: "Severe"
    },
    {
        value: 100,
        color: "#DF7401", // orange
        highlight: "#FF8000",
        label: "High"
    },
    {
        value: 40,
        color: "#CFD212", // yellow
        highlight: "#F2F54B",
        label: "Medium"
    },
    {
        value: 50,
        color: "#A636F1", //purple
        highlight: "#AD49F0",
        label: "Low"
    },
    {
        value: 100,
        color: "#67F52F", // green
        highlight: "#76F245",
        label: "Remediated"
    }

];

    function showPolarChart(){
    var ctx = document.getElementById("VulnSeveritySummaryPolarChartCanvas").getContext("2d");
    window.myPolarArea = new Chart(ctx).PolarArea(polarData, {
        responsive:true
    });


}