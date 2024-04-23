const express = require("express");

const app = express();

port = 5000;

app.get("/api/:number", (req, res) => {
    const startTime = performance.now();
    const {number} = req.params;

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
    const endTime = performance.now();
    const totalTime = endTime - startTime;
    const resData = { number: number, primeNumbers: primeNumbers.length, time: totalTime }

    res.json(resData);
});

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`);
});
