const express = require('express'),
app = express(),
PORT = process.env.PORT || 5100;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get( '/', ( req, res) => {
    res.json({
        "slackUsername": "maiyegbayo",
        "backend": true,
        "age": 24,
        "bio": "A fullstack web developer based in Abuja, who believes his too cool for a bio 😎"
    })
})

app.post( '/', ( req, res) => {
    let op_type = req.body.operation_type,
    x = req.body.x,
    y = req.body.y;
    console.log(req.body)
    switch (op_type) {
        case "addition":
            res.json({
                "slackUsername": "maiyegbayo",
                "operation_type": op_type,
                "result": (x+y)
            })
            break;
        
        case "subtraction":
            res.json({
                "slackUsername": "maiyegbayo",
                "operation_type": op_type,
                "result": (x-y)
            })
            break;

        default:
            res.json({
                "slackUsername": "maiyegbayo",
                "operation_type": op_type,
                "result": x*y
            })
            break;
    }
})

app.listen( PORT, () => {
    console.log(`HNG server started on Port ${PORT}`)
})