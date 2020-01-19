// // from data.js
var tableData = data;

var tbody = d3.select('tbody');

function tableGen(record){

    tbody.html("");

    record.forEach((recordRow) => {
        var row = tbody.append('tr');
        Object.values(recordRow).forEach((value) => {var cell = row.append('td');
        cell.text(value);
    });

});
}

var fitleredValues = {};

function filterUpdate(){
    var element = d3.select(this).select("input");
    var reference = element.property("value");
    var id = element.attr("id");


if (reference){
    fitleredValues[id] = reference;
}

else {
    delete fitleredValues[id];
}

tableValues();

}

function tableValues(){
    var filterdata = tableData;
    Object.entries(fitleredValues).forEach(( [key, value] ) => {
        filterdata = filterdata.filter(row => row[key] === value);
    });

    tableGen(filterdata);

}

d3.selectAll(".filter").on("change", filterUpdate);

tableGen(tableData);