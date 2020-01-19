// // from data.js
var tableData = data;

// YOUR CODE HERE!



// locate id tage for button
var button = d3.select('#filter-btn')

// create function to handle button click event
button.on('click', function(){
    // access the text box in the html
    var textDate = d3.select('#datetime');
    var textCity = d3.select('#city');
    var textState = d3.select('#state');
    var textCountry = d3.select('#country');
    var textShape = d3.select('#shape');
    // extract value from text box
    var dataDate = textDate.property('value');
    var dataCity = textCity.property('value');
    var dataState = textState.property('value');
    var dataCountry = textCountry.property('value');
    var dataShape = textShape.property('value');



    if (dataDate !== '') {
        // check to see if value in text box matches value in data table
        tableData = tableData.filter(date => (date.datetime === dataDate));
        //firstfilterArr.push(matchedDate);
    }

    if (dataCity !== '') {
    // check to see if value in text box matches value in data table
        tableData = tableData.filter(city => (city.city === dataCity));
       // firstfilterArr.push(matchedCity);
    }

    if (dataState !== '') {
        // check to see if value in text box matches value in data table
        tableData = tableData.filter(state => (state.state === dataState));
        //firstfilterArr.push(matchedState);
    }

    if (dataCountry !== '') {
        // check to see if value in text box matches value in data table
        tableData = tableData.filter(country => (country.country === dataCountry));
        // firstfilterArr.push(matchedCountry);
    }

    if (dataShape !== '') {
        // check to see if value in text box matches value in data table
        tableData = tableData.filter(shape => (shape.shape === dataShape));
        // firstfilterArr.push(matchedShape);
    }

    

    // check to see if I can access the data in data.js
    console.log(tableData);


    // locate table html tag
    var tbody = d3.select('tbody');

    // clear all data from table before inserting new data
    tbody.html("");

    // place each value of an object in the array into the table
    tableData.forEach(element => {
        var row = tbody.append('tr')
        Object.values(element).forEach( value => row.append('td').text(value));
    });

});


