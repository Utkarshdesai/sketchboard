import { io } from "socket.io-client"; 
const URL = process.env.NODE_ENV === 'production' ? 'https://sketchbook-backend-bkho.onrender.com' : 'http://localhost:8000'
export const socket = io (URL)