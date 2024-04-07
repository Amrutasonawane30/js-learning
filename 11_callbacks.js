

// Jenny : solves homework by own
function jennyHomework(callbacks){// we can give any name to argument ex. callbacks
    console.log(`Jenny started homework....`);
    console.log(`Jenny took sometime let's consider 2 hrs......`);
    console.log(`Finally Jenny completed homework........`);
    callbacks();
}

//Elon : copy homework from Jenny
let elonCopyHomeWork = function(){
console.log(`Playing cricket.....`);
console.log(`Copying homework....`);
console.log(`After 10 mins Elon, copied all homework.....`);
}
jennyHomework(elonCopyHomeWork);