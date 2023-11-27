// Promise object representes the eventual success/failure of an async func
// Async Func returns a promise to supply the value at some point in the future
/* State of Promise are
          pending: initial #not_fulfilled #not_rejected
          fulfilled: operation completed successfully
          rejected: operation failled with an error
*/

const promise = new Promise((resolve, reject)=>{
                        setTimeout( () => {
                            if (getRandomBool()){
                                resolve('resolved')
                            } else {
                                reject('refused!')
                                console.error('Failure!!!!!');
                            }
                        }, 2000)
                    }   
                )
console.log(
    promise.then(mess=>{
        console.log('Finally, promise is ' + mess)
        }
    ).catch((mess)=> {
        console.log('Unfortunately, promise is ' + mess)
    })
)
function getRandomBool(){return Math.random() < .5} // fifty % 