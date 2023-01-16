
import express from "express"; 
import { MongoClient } from "mongodb";
const app = express();
import bookingRouter from './Routes/router.hallbooking.js'
import roomRouter from './Routes/router.room.js'
import * as dotenv from 'dotenv' 
dotenv.config()

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
//data base url from dot env
const client = new MongoClient(MONGO_URL);
//Mongo Connection 
await client.connect();
console.log("Mongo is connected ✌️😊");

app.get("/", function (request, response) {
  response.send("Welcome to hallbooking Api");
});

// const room = [
//   {
//       "id":"1",
//       "roomno":"101",
//       "roomType":"premium",
//       "noOfSeats":"100",
//       "amentities":"AC, Smart TV,  Free Wifi, personalrooms,spa parking",
//       "priceperday":"Rs.60000",
//       "status":"Booked"
//   },
//       {
//         "id":"2",
//         "roomno":"102",
//         "roomType":"economy",
//         "noOfSeats":"200",
//         "amentities":"Fan, Led Tv,parking",
//         "priceForeOneHour":"Rs.30000",
//         "status":"Booked"
//   },
//           {
//             "id":"3",
//             "roomno":"103",
//             "roomType":"lower",
//             "noOfSeats":"300",
//             "amentities":"Fan,parking",
//             "priceForeOneHour":"Rs.20000",
//             "status":"Booked"
//   }
// ]

// For Booking

// const booking = [
//       {
//         "id": "1",
//         "roomID": "101",
//         "customerName":"Ananth",
//         "date":"2023-01-11T18:25:43.511Z",
//         "startTime":"10:00",
//         "endTime":"23:00"
//         },
    // { 
    //   "id": "2",
    //   "roomID": "102",
    //   "customerName":"Ashok",
    //   "date":"2023-01-12T18:25:43.511Z",
    //   "startTime":"11:00",
    //   "endTime":"23:00"
    //   },
    //   {
    //     "id": "3",
    //     "roomID": "103",
    //     "customerName":"Aravind",
    //     "date":"2023-01-13T18:25:43.511Z",
    //     "startTime":"09:00",
    //     "endTime":"18:00"
    //     }
// ]
 


app.use(express.json())
app.use('/hallbooking', bookingRouter)
app.use('/room',roomRouter)


app.listen(PORT, () => console.log(`The server started in: ${PORT} `));

export {client}