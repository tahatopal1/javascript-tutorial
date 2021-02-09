
    let show1 = new Promise(function (s){
       setTimeout(function (){
           s("Show1!");
       }, 2000)
    });

    let show2 = new Promise(function (s){
       setTimeout(function (){
           s("Show2!");
       }, 1000)
    });

    Promise.all([show1, show2])
        .then((par) => console.log(par))
        .catch((par) => console.log(par)); // prints both

    Promise.race([show1, show2])
        .then((par) => console.log(par))
        .catch((par) => console.log(par)); // prints only one that finished first (show 2)
