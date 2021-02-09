
    // Functions as parameter

    let successful = () => console.log("Successful!");
    let failed     = () => console.log("Failed!");
    let condition  = false;

    let process = (s,f) => {
        if (condition){
            s();
        }else{
            f();
        }
    }

    process(successful, failed);


    let process2    = new Promise((s,f) => {
        if (condition){
            s();
        }else{
            f();
        }
    });

    process2.then(successful).catch(failed);
