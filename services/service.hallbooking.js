import { client } from '../index.js';

export async function addBookings(data) {
    return await client.db('hall').collection('hallbooking').insertMany(data);
}
export async function getCustomerStatus() {
    return await client.db('hall').collection('hallbooking').aggregate([
        { $lookup: { from: "createroom", localField: "roomno", foreignField: "roomId", as: "RoomDetails" } },
        { $project: { "RoomDetails.roomName": 1, customerName: 1, date: 1, startTime: 1, endTime: 1 } }
    ]).toArray();
}
export async function getBookingStatus() {
    return await client.db('hall').collection('hallbooking').aggregate([
        { $lookup: { from: "createroom", localField: "roomno", foreignField: "roomId", as: "RoomDetails" } },
        { $project: { "RoomDetails.roomName": 1, "RoomDetails.status": 1, customerName: 1, date: 1, startTime: 1, endTime: 1 } }
    ]).toArray();
}
export async function getAllbookings() {
    return await client.db('hall').collection('hallbooking').find().toArray();
}
  
export async function getRoomDetails(date,startTime,endTime) {
    return await client.db('hall').collection('hallbooking').findOne({date:date,startTime:startTime,endTime:endTime});
}
export async function addRoom(data) {
    return await client.db('hall').collection('hallbooking').insertMany(data);
}
export async function getRoom() {
    return await client.db('hall').collection('hallbooking').find().toArray();
}