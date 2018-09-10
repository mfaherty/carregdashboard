queue()
    .defer(d3.csv, "/vehicle-registration.csv")
    .await(makeGraphs);
    
function makeGraphs(error, salaryData) {

    
}