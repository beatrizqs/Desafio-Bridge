import express from "express";

const port = 3001;

const app = express();

app.post("/api/calculate-prime-numbers", (req, res) => {
    const startTime = new Date();
    const {number} = req.body;

    let primeNumbers = []
    for (let num = 1; num < number; num++) {
        let dividers = 0
        for (let divider = 1; divider <= num; divider++) {
            if (num % divider === 0) {
                dividers++;
            }
        }
        if (dividers === 2) {
            primeNumbers.push(num)
        }
    }
    const endTime = new Date();
    const totalTime = endTime - startTime;
    const resData = { number: number, primeNumbers: primeNumbers.length, time: totalTime }
    
    res.json(resData);
});

app.listen(port, () => {
    console.log(`Bridge Challenge Server listening on ${port}`);
});
