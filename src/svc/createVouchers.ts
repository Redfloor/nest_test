// create a list with size **n** of unique voucher numbers for an online store

// vouchers should be random and non-deterministic

// all vouchers codes should be alphanumeric

// all vouchers must contain both numbers and letters to be valid

// There may not be more than 2 consecutive repeating letters/ digits in a voucher

// A voucher code must be exactly 10 characters long

// If time permits try the following:

// Expose your API via a NodeJS API. Bonus if you can use NestJS and use some of its features

// The API should be able to produce 1 to 10 million voucher codes in a reasonable amount of time.

//abstracted this logic for legibility.
const randomise = () => {
    const alpha = new RegExp('[a-zA-Z]');
    const numeric = new RegExp('[0-9]');
    //https://regex101.com/r/rK5vZ0/1
    const noRepeating = new RegExp('^(?!.*(\\w)\\1{3,}).+$');
    let out = Math.random().toString(36).slice(2, 12);
    //check if the randomised amount meets criterea. Low but non-zero chance of firing.
    if (!out.match(alpha) || !out.match(numeric) || !out.match(noRepeating)) {
        // Recursion, ew, but fits for the use case. Rerandomise number. Should almost never fire twice, but more random than brute-forcing the string. Other possible approach is exclude nonmatching strings and just while loop it until length is n but will have basically the same iterations
        out = randomise()
    }
    return out;
}


export const createVouchers = (n) => {
    let output = []
    for (let i = 0; i < n; i++) {
        let rando = randomise()
        output.push(rando)
    }
    //Just testing performance. Clocked in at 14.01s for 10 000 000 iterations.
    return output
}
