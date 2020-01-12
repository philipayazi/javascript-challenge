// from data.js
var tableData = data;

// YOUR CODE HERE!

// locate id tage for button
var button = d3.select('#filter-btn')

// create function to handle button click event
button.on('click', function(){
    // access the text box in the html
    var textBox = d3.select('#datetime');
    // extract value from text box
    var dataValue = textBox.property('value');

    // check to see if date in text box matches date in data table
    var matchedDate = tableData.filter(date => (date.datetime === dataValue));

    // check to see if I can access the data in data.js
    console.log(tableData);
    // check to see if d3 will get the value typed into the text box
    console.log(dataValue);
    // check to see if data is filtered
    console.log(matchedDate);

    // locate table html tag
    var tbody = d3.select('tbody')

    // clear all data from table before inserting new data
    tbody.html("");

    // place each value on an object into the table
    matchedDate.forEach(date => {
        var row = tbody.append('tr')
        Object.values(date).forEach( value => row.append('td').text(value));
    });

});


