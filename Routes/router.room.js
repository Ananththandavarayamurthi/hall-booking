const router  = express.Router()
import express from 'express'
import { getRoom, addRoom } from '../services/servivce.room.js'

router.get("/getroom", async function(request,response){
    const result = await getRoom()
    response.send(result)
})

router.post("/createroom", async function (request, response) {
    const data =  request.body;
    console.log(data)
    const result = await addRoom(data)
    response.send(result);
  });

  export default router