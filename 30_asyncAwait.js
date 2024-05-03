
async function data(){
    return "Hello - This is data"
}
const result = data();
result.then(function(success){
    console.log(success);
});

async function main(){  
    try {
        const result = await getData();
        console.log(result);  
    } catch (error) {
        console.log(error);
    }

    // result.then(function(success){
    //     console.log(success);
    // }).catch(function(reject){
    //     console.log(reject);
    // });

}

main();