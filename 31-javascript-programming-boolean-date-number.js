
    // ***  Boolean Object *** //

    console.log("Boolean Object...")

    var b1 = new Boolean();
    console.log("b1 = " + b1);

    var b2 = new Boolean(NaN);
    console.log("b2 = " + b2);

    var b3 = new Boolean(null);
    console.log("b3 = " + b3);

    var b4 = new Boolean(Infinity);
    console.log("b4 = " + b4);

    var b5 = new Boolean("");
    console.log("b5 = " + b5);

    // ***  Date Object *** //

    console.log("Date Object...")


    var date = new Date();
    console.log("date: " + date);

    var date2 = new Date("1995", "6", "8", "11", "30", "00");
    console.log("date2: " + date2);

    // getDate(): returns an integer between 1 and 31 represents day of the month
    console.log("day of date2 variable: " + date2.getDate());

    // getDay(): returns an integer between 0 (sunday) and 6 (saturday) represents day of the week
    console.log("day of date2 variable on week: " + date2.getDay());

    // getFullYear(): Returns the year of date variable
    console.log("Year of date2 variable: " + date2.getFullYear());

    // getHours(): Returns an integer between 0 and 23 represents the hour
    console.log("Hour of date2 variable: " + date2.getHours());

    // getMinutes(): Returns an integer between 0 and 59 represents the minute
    console.log("Minute of date2 variable: " + date2.getMinutes());

    // getMonth(): Returns an integer between 0 (January) and 11 (December)
    console.log("Month of date2 variable: " + date2.getMonth());

    // getSeconds(): Returns an integer between 0 and 59 represents the second
    console.log("Second of date2 variable: " + date2.getSeconds());

    // getTime(): Returns the time since midnight 1 Jan 1970 as milliseconds
    console.log("Time of date2 variable: " + date2.getTime());

    // getTimezoneOffset(): Returns the local and global hours and returns it as minutes
    console.log("Timezone Offset of date2 variable: " + date2.getTimezoneOffset());

    // Set Methods
    console.log("Set Methods...")

    console.log("date: " + date);

    date.setDate(30);
    console.log("after setDate(30): " + date);

    date.setFullYear(1995, 6, 8); // setFullYears(1995) and setFullYears(1995, 6) are valid aswell
    console.log("after setFullYear(1995,6,8): " + date);

    date.setHours(9, 40, 15, 200); // setHours(9), setHours(9, 40) and setHours(9, 40, 15) are valid aswell
    console.log("after setHours(9,40,15,200): " + date);

    date.setMilliseconds(900); // Integer between 0-999
    console.log("after setMilliseconds(900): " + date);

    date.setMinutes(43); // Integer between 0-59
    console.log("after setMinutes(43): " + date);

    date.setMonth(9, 23); // setMonth(9) is valid aswell
    console.log("after setMonth(9,23): " + date);

    date.setSeconds(56, 400); // setSeconds(56) is valid aswell
    console.log("after setSeconds(56,400): " + date);

    console.log("date toString: " + date.toString());
    console.log("date valueOf: " + date.valueOf());

    // ***  Number Object *** //

    var num = 12.56356;
    var num2 = 4;

    // toFixed(): determines the digit amount after the comma
    console.log("num to fix 3 digits : " + num.toFixed(3));
    console.log("num2 to fix 2 digits : " + num2.toFixed(2));

    // toPrecision(): determines the total digit amount
    console.log("num to precision: " + num.toPrecision(3));
    console.log("num2 to precision: " + num2.toPrecision(2));

