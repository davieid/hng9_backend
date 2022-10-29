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

app.listen( PORT, () => {
    console.log(`HNG server started on Port ${PORT}`)
})