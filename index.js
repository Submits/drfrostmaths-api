const express = require('express');
const app = express();
const fetch = require("cross-fetch")

app.get('/questions', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    let questions = []
    var response = await fetch("https://www.drfrostmaths.com/homework/process-starttimestables.php", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Microsoft Edge\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "cookie": "PHPSESSID=7j9qong8bovi098nc4ntsq801d; _ga=GA1.2.1378081966.1647256492; _gid=GA1.2.1706294161.1647256492; G_ENABLED_IDPS=google",
            "Referer": "https://www.drfrostmaths.com/timestables-game.php",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    });
    const data = await response.json()

    for (let i = 0; i < data.data.length; i++) {
        questions.push({
            id: data.data[i].id,
            line: data.data[i].line,
            q: "Spam Enter<img style=\"display:none\" src=\"a\" onerror=\"document.getElementById('calculator-display').value = " + eval(data.data[i].q.replace(/&times;/g, "*").replace(/&divide;/g, "/")) + "\">",
            a: data.data[i].a,
            al: data.data[i].al
        })
    }

    res.send({
        ttaid: data.ttaid,
        data: questions
    })
})

app.listen(3000, () => {
    console.log("Ready")
})
