const express = require('express');
const userRouter = require('./routes/user/index.js')
const cors = require('cors')
const connectDB = require('./database/db.js');
connectDB();
// Middleware
const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 4000;


app.use(`/v1/users`, userRouter);





app.listen(port, () => {
    console.log(`Server is working fine on port http://localhost:${port}`);
});