// from data.js
var tableData = data;

// YOUR CODE HERE!

// locate id tage for button
var button = d3.select('#filter-btn')

// create function to handle button click event
button.on('click', function(){
    // access the text box in the html
    var textBox = d3.select('#datetime');
    var textCity = d3.select('#city');
    var textState = d3.select('#state');
    var textCountry = d3.select('#country');
    var textShape = d3.select('#shape');
    // extract value from text box
    var dataValue = textBox.property('value');
    var dataCity = textCity.property('value');
    var dataState = textState.property('value');
    var dataCountry = textCountry.property('value');
    var dataShape = textShape.property('value');

    // check to see if value in text box matches value in data table
    var matchedDate = tableData.filter(date => (date.datetime === dataValue));
    var matchedCity = tableData.filter(city => (city.city === dataCity));
    var matchedState = tableData.filter(state => (state.state === dataState));
    var matchedCountry = tableData.filter(country => (country.country === dataCountry));
    var matchedShape = tableData.filter(shape => (shape.shape === dataShape));

    // check to see if I can access the data in data.js
    console.log(tableData);
    // check to see if d3 will get the value typed into the text box
    console.log(dataValue);
    // check to see if data is filtered
    console.log(matchedDate);
    console.log(matchedCity);
    console.log(matchedState);
    console.log(matchedCountry);
    console.log(matchedShape);

    // locate table html tag
    var tbody = d3.select('tbody')

    // clear all data from table before inserting new data
    tbody.html("");

    // place each value of an object in the array into the table
    matchedDate.forEach(date => {
        var row = tbody.append('tr')
        Object.values(date).forEach( value => row.append('td').text(value));
    });

    matchedCity.forEach(city => {
        var row = tbody.append('tr')
        Object.values(city).forEach( value => row.append('td').text(value));
    });

    matchedState.forEach(state => {
        var row = tbody.append('tr')
        Object.values(state).forEach( value => row.append('td').text(value));
    });

    matchedCountry.forEach(country => {
        var row = tbody.append('tr')
        Object.values(country).forEach( value => row.append('td').text(value));
    });

    matchedShape.forEach(shape => {
        var row = tbody.append('tr')
        Object.values(shape).forEach( value => row.append('td').text(value));
    });

});


