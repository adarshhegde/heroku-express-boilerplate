const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();

// api code

app.get("/", (req, res) => {
    res.send("Hello World")
})



//

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})
