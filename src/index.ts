import express from 'express';
import path from 'path';

//Init 
const app = express();

// Setting
const serverPort = 4000;
app.set('port', process.env.PORT || serverPort);

// Middle
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/', (req, res) => {
    res.send('Hi');
});

// Starting
app.listen(app.get('port'),()=>{
    console.log('Server on port ', app.get('port'));
});