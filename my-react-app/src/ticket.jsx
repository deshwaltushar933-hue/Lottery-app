import './Ticket.css'
import Ticketnum from "./ticketnum"
export default function Ticket({ticket}){
    return(
        <div className="Ticket">
             <p>Ticket</p>
              {ticket.map((num, i)=>(
              <Ticketnum key={i} num={num} />

             ))}
        </div>
    )}