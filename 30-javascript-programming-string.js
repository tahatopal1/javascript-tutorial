
    // *** String Object *** ///

    // fromCharCode(): returns a string represents unicode equivalent of parameter
    console.log("fromCharCode example...")
    var str = String.fromCharCode(65); // 65 -> A
    var str1 = String.fromCharCode('\u0041');
    var str2 = String.fromCharCode('\x41');

    console.log("str: " + str);
    console.log("str1: " + str1);
    console.log("str2: " + str2);

    var str3 = String.fromCharCode(65, 66, 67, 68); // ABCD
    console.log("str3: " + str3);

    // charAt(): returns the character at given index
    console.log("charAt example...")

    str = "abcdef";
    console.log("char at ... : " + str.charAt());
    console.log("char at 3: " + str.charAt(3));
    console.log("char at 6: " + str.charAt(6));

    // concat(): adds a new string to another one
    console.log("concat example...")

    str = "string1";
    str1 = "string3";

    var strConcat = str.concat("string2", str1, "string4");
    console.log("result: " + strConcat);

    // indexOf(): returns the first index of given string as a parameter; if not found, returns -1
    console.log("indexOf example...")
    str = "JavaScript JavaScript";
    console.log("indexOf:" + str.indexOf("ript"));

    // manuel indexOf example
    console.log("Manuel indexOf example");
    function indexOf(str, srch, ix){
        var lastIx = str.length - srch.length;
        if (ix > lastIx)
            return -1;

        var firstIx = (ix == undefined) ? 0 : ix;
        var tempStr;

        for (var i = firstIx; i <= lastIx; i++){
            tempStr = "";
            for (var j = i; j < (i + srch.length); j++)
                tempStr += str[j];
            if (srch == tempStr)
                return i;
        }

        return -1;

    }

    console.log("Testing manual indexOf method: " + indexOf(str, "ript", 12));

    // lastIndexOf(): returns the last index of given string as a parameter; if not found, returns -1
    console.log("lastIndexOf example...");
    console.log("indexOf:" + str.indexOf("ript"));

    console.log("Manuel lastIndexOf example");
    function lastIndexOf(str, srch, ix){
        var lastIx = srch.length - 1;
        if (ix < lastIx)
            return -1;

        var firstIx = (ix == undefined) ? str.length - 1 : ix;
        var tempStr;

        for (var i = firstIx; i >= lastIx; i--){
            tempStr = "";
            for (j = i; j > i - srch.length; j--){
                tempStr += str[j]
            }
            if (srch == tempStr)
                return j+1;
        }

        return -1;

    }

    console.log("Testing manual indexOf method: " + indexOf(str, "ript", 2));

    // localeCompare(): Compare two strings
    // 'b' equals 98 in unicode
    // 'e' equals 101 in unicode
    console.log("b compare e: " + 'b'.localeCompare('e')); // will return negative value
    console.log("e compare b: " + 'e'.localeCompare('b')); // will return positive value
    console.log("b compare b: " + 'b'.localeCompare('b')); // values are the same, returns 0

    // slice(): returns a substring
    str = "JavaScript DOM";
    console.log("slice(0): " + str.slice(0));
    console.log("slice(5): " + str.slice(5));
    console.log("slice(6, 10): " + str.slice(6, 10));
    console.log("slice(6, -2): " + str.slice(6, -2));
    console.log("slice(3, 2): " + str.slice(3, 2));
    console.log("slice(-5): " + str.slice(-5));
    console.log("plain text: " + str);

    // manuel slice example
    function slice(str, bgn, end){
        end = (end == undefined) ? str.length : end;

        if (bgn > str.length -1 || end > str.length || str > end)
            return "";

        var strTemp = "";
        for (var i = bgn; i < end; i++){
            strTemp += str[i];
        }

        return strTemp;
    }

    console.log("Test of manual slice: " + slice(str, 0, 5));
    console.log("Test of manual slice: " + slice(str, 0, 20));
    console.log("Test of manual slice: " + slice(str, 4, 2));

    // split(): splits the string into several pieces
    console.log("split() method...");
    str = "JavaScript,DOM,BOM,window,nyp";
    console.log(str.split(","));
    console.log(str.split(",", 3));

    // substring(): almost the same as slice
    console.log("Differences between slice and substring");
    str = "JavaScript DOM";
    console.log("case: beginning = end...");
    console.log("slice(5, 5) = " + str.slice(5, 5));
    console.log("substring(5, 5) = " + str.substring(5, 5));

    console.log("case: beginning > end...");
    console.log("slice(6, 5) = " + str.slice(6, 5));
    console.log("substring(6, 5) = " + str.substring(6, 5));

    console.log("case: beginning is negative");
    console.log("slice(-10, 5) = " + str.slice(-10, 5));
    console.log("substring(-10, 5) = " + str.substring(-10, 5));

    console.log("case: end is negative");
    console.log("slice(-5, 5) = " + str.slice(5, -5));
    console.log("substring(-5, 5) = " + str.substring(5, -5));

    // substr(): just like slice and substring
    console.log("str.substr(5,5) = " + str.substr(5, 5));
    console.log("str.substr(-5,5) = " + str.substr(-5, 5));

    // toLocaleLowerCase(): convert string to lower case
    // toLocaleUpperCase(): convert string to upper case
    str = "JaVaScRiPt EcMaScRiPt";
    console.log("Plain string: " + str);
    console.log("After usering toLocaleLowerCase: " + str.toLocaleLowerCase());
    console.log("After usering toLocaleUpperCase: " + str.toLocaleUpperCase());


