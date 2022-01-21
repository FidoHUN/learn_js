//Basic async function returns a promise
async function myFunc(){
    return 'Hello';
}

console.log(myFunc());

myFunc()
    .then(res => console.log(res));


//using await inside async function
async function myFunc(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 3000);
    });

    const error = false;

    if (!error){
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong... :('))
    }
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));