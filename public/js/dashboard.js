var currentWeek = getWeekNumber(new Date());
var currentYear = new Date().getFullYear();
var today = setToday(new Date());
//var CHART_LENGTH_WEEKS = 8;   // used for charts weekly time and cumulative time
//var CHART_LENGTH_DAYS = 14;   // used for daily chart
var CHART_WIDTH;
var CHART_HEIGHT;
var LANG = getActiveLanguage();
var base_url = window.location.origin;
if(!all_dashboardData_tspw){
    var all_dashboardData_tspw = new Array();
}
if(!all_dashboardData_tsc){
    var all_dashboardData_tsc = new Array();
}
if(!all_dashboardData_fpd){
    var all_dashboardData_fpd = new Array();
}if(!selectedGraphStudent){
    var selectedGraphStudent = new Array();
}

var charts = [function(student_id){
    drawChart_tsc(student_id)
}, function(student_id){
    drawChart_tspw(student_id)
}, function(student_id){
    drawChart_fpd(student_id)
}];

if(IS_EXPERT){
    CHART_WIDTH = 400;
    CHART_HEIGHT= 400;
} else{
    var buttons = document.querySelectorAll(".smallroundbutton");
    buttons.forEach(button => button.style="display: none;");

    CHART_WIDTH = 500;
    CHART_HEIGHT= 500;
}

if (typeof google == 'undefined' || !google.charts || !google.visualization) {
    google.charts.load('current', {'packages':['corechart'], 'language': LANG});
    google.charts.setOnLoadCallback(getData(STUDENT_ID));
} else{
    checkLoaded();
}

function checkLoaded() {
    if (typeof google !== 'undefined' && google.charts && google.visualization) {
        getData(STUDENT_ID);
    } else{
        setTimeout(checkLoaded, 100);
    }
}

/**
 * 3 types of graphs => tspw, tsc and fpd
 *      tspw = time spent per week  (column chart)
 *      tsc = time spent cumulative (area chart)
 *      fpd = feedback per day      (line chart)
 */

function getData(student_id){
    student_id = parseInt(student_id);
    selectedGraphStudent.push({studentID: student_id, selectedGraph: 0})
    getJsonData_tsc(student_id);
    if(IS_EXPERT){
        getJsonData_tspw(student_id);
        getJsonData_fpd(student_id);
    }
}

function getJsonData_tspw(student_id) {
    fetch("../TypwindController/getGraphData/"+student_id+"/tspw")
        .then(resp => resp.json())
        .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .then(myData => dataArrived_tspw(myData, student_id))
        .catch(a => console.log(a))
}

function getJsonData_tsc(student_id){
    fetch("../TypwindController/getGraphData/"+student_id+"/tsc")
        .then(resp => resp.json())
        .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .then(myData => dataArrived_tsc(myData, student_id))
        .catch(a => console.log(a))
}
function getJsonData_fpd(student_id){
    fetch("../TypwindController/getGraphData/"+student_id+"/fpd")
        .then(resp => resp.json())
        .then(myJson => JSON.parse(JSON.stringify(myJson)))
        .then(myData => dataArrived_fpd(myData, student_id))
        .catch(a => console.log(a))
}

function dataArrived_tspw(data, student_id){
    var dashboardData_tspw = data;
    dashboardData_tspw = fillInEmptyWeeks(dashboardData_tspw);
    all_dashboardData_tspw.push({studentID: student_id, data: dashboardData_tspw});

}

function dataArrived_tsc(data, student_id){
    var dashboardData_tsc = data;

    if(!emptyState(data, student_id)) {
        dashboardData_tsc = convertStringsToDates(dashboardData_tsc);
        dashboardData_tsc = fillInEmptyDays(dashboardData_tsc);
        all_dashboardData_tsc.push({studentID: student_id, data: dashboardData_tsc});
        google.charts.setOnLoadCallback(function(){
            drawChart_tsc(student_id);
        });
    }
}
function dataArrived_fpd(data, student_id){
    var dashboardData_fpd = data;
    dashboardData_fpd = convertStringsToDates(dashboardData_fpd);
    all_dashboardData_fpd.push({studentID: student_id, data: dashboardData_fpd});

}

function emptyState(data, student_id){
    if(data.length < 3){
        var graphDivs = document.querySelectorAll(".chart_student_"+student_id);
        graphDivs.forEach(el => el.style="display: none;");

        var changeGraphButtons = document.querySelectorAll(".change_graph_"+student_id);
        changeGraphButtons.forEach(el => el.style="display: none;");

        var emptyState = document.querySelectorAll(".chart_empty_state_"+student_id);
        emptyState.forEach(el => el.style="display: flex;");

        var image = document.querySelectorAll(".chart_empty_state_image");
        if(IS_EXPERT){
            if(LANG == 'nl'){
                image.forEach(img => img.src = "../icons/emptygraph_expert_nl.png")
            }
            if(LANG == 'en'){
                image.forEach(img => img.src = "../icons/emptygraph_expert_en.png")
            }
            var accuracyFields = document.querySelectorAll(".accuracy-"+student_id);
            accuracyFields.forEach(el => el.innerHTML="/")
            var speedFields = document.querySelectorAll(".speed-"+student_id);
            speedFields.forEach(el => el.innerHTML="/")
            var levelFields = document.querySelectorAll(".level-"+student_id);
            levelFields.forEach(el => el.innerHTML="/")
        }
        else{
            image.forEach(img => img.width = 500)
            image.forEach(img => img.height = 500)

            if(LANG == 'nl'){
                image.forEach(img => img.src = "../icons/emptygraph_student_nl.png")
            }
            if(LANG == 'en'){
                image.forEach(img => img.src = "../icons/emptygraph_student_en.png")
            }
            document.getElementById("accuracy_wrapper").style="display: none;"
        }
        return true;
    }else{
        if(!IS_EXPERT){
            document.getElementById("accuracy_wrapper").style="display: flex;";
        }
        return false;
    }
}

function drawChart_tspw(student_id) {
    var chart_divs = document.querySelectorAll(".chart_student_"+student_id);
    var dashboardData_tspw = all_dashboardData_tspw.find(x => x.studentID == student_id).data;

    var data = new google.visualization.DataTable();
    if(LANG == 'en'){
        data.addColumn('string','Week number');
        data.addColumn('number','Total minutes spent');
    }
    if(LANG == 'nl'){
        data.addColumn('string','Week');
        data.addColumn('number','Totaal aantal minuten');
    }

    // put the data in the datatalble for the chart
    for (var i in dashboardData_tspw){
        week = currentWeek - parseInt(dashboardData_tspw[i].weekNumber);
        if(week < 0){ // in case the data is from the previous year
            week = week+52;
        }
        if(week == 0){
            if(LANG == 'nl'){
                data.addRow(["Deze week",parseInt(dashboardData_tspw[i].timeSpent)]);
            }
            if(LANG == 'en'){
                data.addRow(["This week",parseInt(dashboardData_tspw[i].timeSpent)]);
            }

        }
        if(week == 1){
            if(LANG == 'nl'){
                data.addRow(["Vorige week",parseInt(dashboardData_tspw[i].timeSpent)]);
            }
            if(LANG == 'en'){
                data.addRow(["Last week",parseInt(dashboardData_tspw[i].timeSpent)]);
            }

        }
        if(week > 1){
            if(LANG == 'nl'){
                data.addRow([(week+" weken geleden"),parseInt(dashboardData_tspw[i].timeSpent)]);
            }
            if(LANG == 'en'){
                data.addRow([(week+" weeks ago"),parseInt(dashboardData_tspw[i].timeSpent)]);
            }
        }
    }

    var axisTitle;
    if(LANG == 'en'){
        axisTitle = "Total minutes typed";
    }
    if(LANG == 'nl'){
        axisTitle = "Totaal aantal minuten";
    }

    var options = {
        legend: 'none',
        'width':CHART_WIDTH,
        'height':CHART_HEIGHT,
        colors:['#1F96D1'],
        animation: {"startup": true, "duration": 500, "easing":"inAndOut"},
        chartArea: {height:"75%", width:"75%", top: 20, bottom: 75, right: 20, left: 100},
        vAxis: {title: axisTitle},
        hAxis: {slantedText: true}
    };
    chart_divs.forEach(div => {
        var chart = new google.visualization.ColumnChart(div);
        chart.draw(data, options);
    });

    let title_divs = document.querySelectorAll(".chart_student_title_"+student_id);
    if(LANG == 'en'){
        title_divs.forEach(div => div.innerHTML = "Time spent per week");
    }
    if(LANG == 'nl'){
        title_divs.forEach(div => div.innerHTML = "Aantal minuten per week");
    }
}

function drawChart_tsc(student_id) {
    var chart_divs = document.querySelectorAll(".chart_student_"+student_id);
    var dashboardData_tsc = all_dashboardData_tsc.find(x => x.studentID == student_id).data;
    // put the data in the datatalble for the chart
    var data = new google.visualization.DataTable();
    var labels = [];
    var formatting_options = { weekday: 'long', day: 'numeric', month: 'numeric'};
    if(LANG == 'en'){
        data.addColumn('date','Date');
        data.addColumn('number','Total minutes spent');
    }
    if(LANG == 'nl'){
        data.addColumn('date','Datum');
        data.addColumn('number','Totaal aantal minuten');
    }

    for (var i in dashboardData_tsc){
        var dateString;
        if(LANG == 'en'){
            dateString= dashboardData_tsc[i].dateFormatted.toLocaleDateString("en-BE", formatting_options).replace(',','');
        }
        if(LANG == 'nl'){
            dateString= dashboardData_tsc[i].dateFormatted.toLocaleDateString("nl-BE", formatting_options).replace(',','');
        }
        data.addRow([dashboardData_tsc[i].dateFormatted,parseInt(dashboardData_tsc[i].timeSpentCumulative)]);
        if(dashboardData_tsc.length>7){
            if(dashboardData_tsc[i].dateFormatted.getUTCDay()==0){
                labels.push({v:dashboardData_tsc[i].dateFormatted, f:dateString});
            }
        }else{
            labels.push({v:dashboardData_tsc[i].dateFormatted, f:dateString});
        }
    }

    var date_formatter = new google.visualization.DateFormat({pattern: "EEEE dd/MM"});
    date_formatter.format(data,0);

    var axisTitle;
    if(LANG == 'en'){
        axisTitle = "Total minutes typed";
    }
    if(LANG == 'nl'){
        axisTitle = "Totaal aantal minuten";
    }

    var options = {
        legend: 'none',
        'width':CHART_WIDTH,
        'height':CHART_HEIGHT,
        chartArea: {width: '75%', height: '75%', top: 20, bottom: 75, right: 20, left: 100},
        colors: ["#1F96D1","#154E99"],
        animation: {"startup": true, "duration": 500, "easing":"inAndOut"},
        //chartArea: {"height":"70%","width":"80%"},
        vAxis: {viewWindow: {"min":0 }, title: axisTitle},
        hAxis: {slantedText: true, ticks: labels}
    };

    chart_divs.forEach(div => {
        var chart = new google.visualization.AreaChart(div);
        chart.draw(data, options);
    });

    let title_divs = document.querySelectorAll(".chart_student_title_"+student_id);
    if(LANG == 'en'){
        title_divs.forEach(div => div.innerHTML = "Total time spent typing");
    }
    if(LANG == 'nl'){
        title_divs.forEach(div => div.innerHTML = "Totaal aantal minuten geoefend");
    }
}


function drawChart_fpd(student_id){
    var chart_divs = document.querySelectorAll(".chart_student_"+student_id);
    var dashboardData_fpd = all_dashboardData_fpd.find(x => x.studentID == student_id).data;

    // put the data in the datatalble for the chart
    var data = new google.visualization.DataTable();
    var formatting_options = { weekday: 'long', day: 'numeric', month: 'numeric'};
    if(LANG == 'en'){
        data.addColumn('string','Date');
        data.addColumn('number','Time taken (minutes)');
        data.addColumn('number','Accuracy (%)');
    }
    if(LANG == 'nl'){
        data.addColumn('string','Datum');
        data.addColumn('number','Totaal aantal minuten');
        data.addColumn('number','Nauwkeurigheid (%)');
    }

    for (var i in dashboardData_fpd){
        var dateString;
        if(LANG == 'en'){
            dateString= dashboardData_fpd[i].dateFormatted.toLocaleDateString("en-BE", formatting_options).replace(',','');
        }
        if(LANG == 'nl'){
            dateString= dashboardData_fpd[i].dateFormatted.toLocaleDateString("nl-BE", formatting_options).replace(',','');
        }
        data.addRow([dateString,parseInt(dashboardData_fpd[i].timeSpent),parseInt(Math.round(dashboardData_fpd[i].accuracy*100))]);
    }

    var axisTitle0;
    if(LANG == 'en'){
        axisTitle0 = "Time taken (minutes)";
    }
    if(LANG == 'nl'){
        axisTitle0 = "Totaal aantal minuten";
    }

    var axisTitle1;
    if(LANG == 'en'){
        axisTitle1 = "Accuracy (%)";
    }
    if(LANG == 'nl'){
        axisTitle1 = "Nauwkeurigheid (%)";
    }

    var options = {
        'width':CHART_WIDTH,
        'height':CHART_HEIGHT,
        curveType: 'function',
        chartArea: {width: '75%', height: '75%', top: 20, bottom: 75, right: 50, left: 100},
        colors: ["#1F96D1","#EB6F31"],
        animation: {"startup": true, "duration": 500, "easing":"inAndOut"},
        //chartArea: {"height":"70%","width":"80%"},
        //hAxis: {format: "EEEEEEEE dd/M"},
        series: {
            0: {targetAxisIndex: 0},
            1: {targetAxisIndex: 1}
        },
        vAxes: {
            // Adds titles to each axis.
            0: {title: axisTitle0, viewWindow: {min:0}},
            1: {title: axisTitle1, gridlines:{count:10}, viewWindow: {min:0}}
        },
        hAxis: {slantedText: true}
    };

    chart_divs.forEach(div => {
        var chart = new google.visualization.LineChart(div);
        chart.draw(data, options);
    });

    let title_divs = document.querySelectorAll(".chart_student_title_"+student_id)
    if(LANG == 'en'){
        title_divs.forEach(div => div.innerHTML = "Time taken and accuracy");
    }
    if(LANG == 'nl'){
        title_divs.forEach(div => div.innerHTML = "Tijd en nauwkeurigheid");
    }
}

function fillInEmptyWeeks(raw_data){
    var dashboardData_tspw = raw_data;
    // fill in intermediate weeks
    var thisWeek;
    var previousWeek = dashboardData_tspw[0].weekNumber;

    for (i = 1; i<dashboardData_tspw.length; i++){
        thisWeek = dashboardData_tspw[i].weekNumber;
        if(thisWeek - 1 != previousWeek && thisWeek - previousWeek > 0){
            dashboardData_tspw = addEmptyWeekAtIndex(dashboardData_tspw, i,dashboardData_tspw[i].weekNumber-1);
            i--;
        }
        previousWeek = dashboardData_tspw[i].weekNumber;
    }

    // add weeks to the end
    while(dashboardData_tspw[dashboardData_tspw.length-1].weekNumber < currentWeek){
        weekToAdd = parseInt(dashboardData_tspw[dashboardData_tspw.length-1].weekNumber) + 1;
        dashboardData_tspw = addEmptyWeekAtIndex(dashboardData_tspw, dashboardData_tspw.length, weekToAdd);
    }
    /*
    // trim array to size
    if(dashboardData_tspw.length>CHART_LENGTH_WEEKS){
        dashboardData_tspw = dashboardData_tspw.slice(-CHART_LENGTH_WEEKS);
    }

    // fill in weeks at beginning of array
    while(dashboardData_tspw.length<CHART_LENGTH_WEEKS){
        dashboardData_tspw = addEmptyWeekAtIndex(dashboardData_tspw,0, dashboardData_tspw[0].weekNumber-1);
    }
    */

    return dashboardData_tspw;
}

function fillInEmptyDays(raw_data){
    var dashboardData_tsc = raw_data
    var thisDay;
    var previousDay = dashboardData_tsc[0].dateFormatted;
    previousDay.setHours(0,0,0,0);

    // fill in intermediate days
    for (i = 1; i<dashboardData_tsc.length; i++){
        thisDay = dashboardData_tsc[i].dateFormatted;
        if(!sameDay(subtractNumberOfDays(thisDay,1),previousDay)){
            var dateToAdd = subtractNumberOfDays(thisDay,1);
            dashboardData_tsc = addEmptyDayAtIndex(dashboardData_tsc, i,dateToAdd,dashboardData_tsc[i-1].timeSpentCumulative);
            i--;
        }
        previousDay = dashboardData_tsc[i].dateFormatted;
    }

    // add days to the end
    while(!sameDay(dashboardData_tsc[dashboardData_tsc.length-1].dateFormatted, today)){
        var dateToAdd = addNumberOfDays(dashboardData_tsc[dashboardData_tsc.length-1].dateFormatted,1);
        dashboardData_tsc = addEmptyDayAtIndex(dashboardData_tsc, dashboardData_tsc.length,dateToAdd, dashboardData_tsc[dashboardData_tsc.length-1].timeSpentCumulative);
    }
    /*
    // trim array to size
    if(dashboardData_tsc.length>(CHART_LENGTH_WEEKS*7)){
        dashboardData_tsc = dashboardData_tsc.slice(-CHART_LENGTH_WEEKS*7);
    }

    // fill in days at beginning of array
    while(dashboardData_tsc.length<(CHART_LENGTH_WEEKS*7)){
        var dateToAdd = subtractNumberOfDays(dashboardData_tsc[0].dateFormatted,1);
        dashboardData_tsc = addEmptyDayAtIndex(dashboardData_tsc, 0, dateToAdd, 0);
    }
    */
    return dashboardData_tsc;
}

function convertStringsToDates(list){   //convert the strings from JSON to javascript Date objects
    for(var i in list){
        list[i].dateFormatted = new Date(list[i].dateFormatted);
        list[i].dateFormatted.setHours(0, 0, 0, 0);
    }
    return list;
}

function addEmptyDayAtIndex(data, index, date, time){
    data.splice(index, 0, {'dateFormatted':date, 'timeSpentCumulative':time});
    return data;
}

function addEmptyWeekAtIndex(data, index, week_number){
    data.splice(index, 0, {'weekNumber':week_number, 'timeSpent':0});
    return data;
}

function getWeekDifference(weeknumber1, year1, weeknumber2, year2){
    function getWeekDifference(weeknumber1, year1, weeknumber2, year2) {
        // Get the total number of weeks for each year
        const totalWeeks1 = getTotalWeeksInYear(year1);
        const totalWeeks2 = getTotalWeeksInYear(year2);

        // Calculate the number of weeks passed in each year
        const weeksPassed1 = weeknumber1 - 1;
        const weeksPassed2 = weeknumber2 - 1;

        // Calculate the total number of weeks passed between the two dates
        const weeksDifference = (totalWeeks1 - weeksPassed1) + (totalWeeks2 - weeksPassed2);

        return weeksDifference;
    }
}

function getWeekNumber(d) {
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return week number
    return weekNo;
}

function setToday(d){
    d.setHours(0, 0, 0, 0);
    return d;
}

function addNumberOfDays(date, days){
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() + parseInt(days));
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function subtractNumberOfDays(date, days){
    var newDate = new Date(date);
    newDate.setDate(newDate.getDate() - parseInt(days));
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

function sameDay(date1, date2){
    if (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    ) {
        return true;
    } else {
        return false;
    }
}

function changeGraph(student_id, direction){
    var selected_graph = selectedGraphStudent.find(x => x.studentID == student_id).selectedGraph;
    
    if(direction == "next"){
        if(selected_graph == 2){
            selected_graph = 0;
        } else{
            selected_graph++;
        }
    }
    if(direction == "previous"){
        if(selected_graph == 0){
            selected_graph = 2;
        } else{
            selected_graph--;
        }
    }

    selectedGraphStudent.map(student => {
        if (student.studentID === student_id) {
            student.selectedGraph = selected_graph;
        }
    });

    charts[selected_graph](student_id)
}


