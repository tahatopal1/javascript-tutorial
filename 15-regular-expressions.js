
    // Defining a RegExp object
    var reg = new RegExp("pattern", "gi");

    // Some methods on RegExp object

    // test(): Searches a String in another one; if found returns false, otherwise returns false
    var str = "JavaScript EcmaScript";
    var dEx = new RegExp("ri", "g");

    // if flag g is true, lastIndex changes

    console.log("lastIndex initial value: " + dEx.lastIndex);

    while (dEx.test(str))
        console.log('lastIndex: ' + dEx.lastIndex);

    // exec(): Searches a String in another one; if found, returns it

    console.log(dEx.exec(str));
    dEx.lastIndex = 0;

    // Printing every match
    console.log("Printing every match...")
    while((result = dEx.exec(str)) !== null)
        console.log(result);

    // String methods for using RegEx

    // String.match(): Finds every string pieces and returns them as an array
    str = "abcAbc";
    dEx = new RegExp('a', "gi");
    result = str.match(dEx);
    console.log("Match result: " + result);

    // String.replace(): Finds determined string pieces, replaces it with new one and returns it
    console.log("Before replace: " + str);
    str = str.replace(dEx, 'd');
    console.log("After replace: " + str);

    // String.search(): Searches the string piece and returns first index of first character, if not found returns -1
    str = "JavaScript";
    dEx = new RegExp("sc", "gi");
    result = str.search(dEx);
    console.log("Found index: " + result);

    // A regular expression sample:
    console.log("A regular expression example: ")
    str = "Javas8cript ders9leri";
    dEx = /\D+\d\D+\d\D+/g; // this also could be like: dEx = /\D+(\d)\D+(\d)\D+/g;
    console.log(dEx.exec(str));