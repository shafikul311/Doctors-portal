import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date, treatment, service }) => {
   const { _id, name, slots } = treatment;
   // console.log(treatment)

   const handleBooking = (event) => {
      event.preventDefault();
      const slot = event.target.slot.value;
      console.log(slot);
   };
   return (
      <div>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
               <label
                  htmlFor="booking-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
               >
                  ✕
               </label>
               <h3 className="font-bold text-lg text-secondary">
                  Booking for: {name}
               </h3>
               <form
                  onSubmit={handleBooking}
                  className="grid grid-cols-1 gap-3 justify-items-center mt-2"
               >
                  <input
                     type="text"
                     disabled
                     value={format(date, "PP")}
                     className="input input-bordered w-full max-w-xs"
                  />
                  <select
                     name="slot"
                     className="select select-bordered w-full max-w-xs"
                  >
                     {slots.map((slot, index) => (
                        <option key={index} value={slot}>
                           {slot}
                        </option>
                     ))}
                  </select>
                  <input
                     type="text"
                     name="name"
                     placeholder="Name"
                     className="input input-bordered w-full max-w-xs"
                  />
                  <input
                     type="email"
                     name="email"
                     placeholder="test@email.com"
                     className="input input-bordered w-full max-w-xs"
                  />
                  <input
                     type="text"
                     name="phone"
                     placeholder="Phone Number"
                     className="input input-bordered w-full max-w-xs"
                  />
                  <input
                     type="submit"
                     value="Submit"
                     className="btn btn-secondary w-full max-w-xs"
                  />
               </form>
            </div>
         </div>
      </div>
   );
};

export default BookingModal;
