
    import {PI, sum} from './12-modules';
    import * as lib from  '12-modules'; // Takes them all
    document.getElementById('#par').innerHTML += sum(10, 5);

    // Usage with lib
    document.getElementById('#par').innerText += lib.square(5);