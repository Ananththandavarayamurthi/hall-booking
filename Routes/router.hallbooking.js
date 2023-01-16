const router  = express.Router()
import express from 'express'
import { getAllbookings, getBookingStatus, getCustomerStatus, addBookings, getRoomDetails } from '../services/service.hallbooking.js'


router.get("/", async function(request,response){
    const result = await getAllbookings()
    response.send(result)
})

router.get("/status", async function(request,response){
    const res = await getBookingStatus()
      console.log(res)
    response.send(res)
})

router.get("/customerstatus", async function(request,response){
    const res = await getCustomerStatus()
      console.log(res)
    response.send(res)
})

router.post("/book", async function (request, response) {

    const {id,roomID,customerName,date,startTime,endTime} =  request.body;
    const roomDetails = await getRoomDetails(date,startTime,endTime)
    console.log(roomDetails)
    if(roomDetails){
        response.send({msg:"Already Booked"})
    }else{
        const result = await addBookings([{
            id:id,
            roomID:roomID,
            customerName:customerName,
            date:date,
            startTime:startTime,
            endTime:endTime
        }]);
        response.send(result);
    }

  });


export default router