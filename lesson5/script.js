/**
 * Created by lol on 4/25/16.
 */
function sumTo(n){
    if (n == 1) return 1;

    return n + sumTo(n-1);

};