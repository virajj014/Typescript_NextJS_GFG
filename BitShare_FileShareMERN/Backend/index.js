// kakw vytc cmkr awhq
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const PORT = process.env.PORT || 8000;

const socketIO = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes')
const fileShareRoutes = require('./routes/fileShareRoutes');
const dotenv = require('dotenv');
const { createServer } = require('node:http');

dotenv.config();


require('./db');
require('./models/userModel');
require('./models/verificationModel');



const app = express();
const server = createServer(app);




// const io = new Server(server, {
//     cors: {
//         origin: process.env.FRONTEND_URL
//     }
// })



const allowedOrigins = [process.env.FRONTEND_URL]; // Add more origins as needed
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Allow credentials
    })
);

app.use(bodyParser.json());
app.use(cookieParser({
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    signed: true,
}));
app.use('/public', express.static('public'));



// io.on('connection', (socket) => {
//     console.log('new connection', socket.id);
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     })


//     socket.on('joinself', (data) => {
//         console.log('joining self', data);
//         socket.join(data);
//     })


//     socket.on('uploaded',(data)=>{
//         let sender = data.from;
//         let receiver = data.to;

//         console.log('uploaded', data);


//         socket.to(receiver).emit('notify', {
//             from: sender,
//             message: 'New file shared'
//         })
//     })
// })       
app.use('/auth', authRoutes);
app.use('/file', fileShareRoutes);


app.get('/', (req, res) => {
    res.send('API is running....'); 
});


server.listen(PORT, () => {
    console.log('server running at ' + PORT);
});