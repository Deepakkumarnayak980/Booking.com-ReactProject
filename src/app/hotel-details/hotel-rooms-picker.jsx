import { Button } from '@/components/ui/button';
import { Check, Star, CircleCheck } from 'lucide-react'; // Ensure correct icon imports
import React from 'react';

const Room = ({ id, type, amenities = [], price, isSelected, photos = [] }) => {
  return (
    <article>
      {isSelected && (
        <div className="flex items-center gap-1 px-5 py-1 rounded-t-lg bg-brand">
          <Star size={12} className="fill-amber-500 stroke-transparent" />
          <p className="text-xs font-bold text-white uppercase">
            Selected Category
          </p>
        </div>
      )}
      <div className="flex border border-border p-4">
        <div className="flex-1 space-y-4">
          <div className="flex gap-2 items-center">
            <h3 className="text-lg font-semibold">{type}</h3>
            {isSelected && <CircleCheck size={26} className="fill-green-600 text-white" />}
          </div>
          <div>
            <ul className="flex flex-wrap gap-2">
              {amenities.length > 0 ? (
                amenities.map((item, index) => (
                  <li key={index} className="flex gap-2 items-center min-w-[180px]">
                    <Check size={18} className="text-green-600" />
                    <span className="text-sm font-medium text-muted-foreground">{item}</span>
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No amenities listed</p>
              )}
            </ul>
          </div>
        </div>
        {photos.length > 0 && (
          <div className="w-[180px] h-[120px]">
            <img src={photos[0]} alt="Room Image" className="object-cover size-full rounded-lg" />
          </div>
        )}
      </div>
      <div className="flex border-x border-b p-4 rounded-b-lg">
        <div className="flex-1 flex gap-2 items-center">
          <span className="text-lg font-bold">{`₹${price.toLocaleString()}`}</span>
          <span className="text-sm text-muted-foreground line-through">{`₹${(price * 1.5).toLocaleString()}`}</span>
        </div>
        <Button
          disabled={isSelected}
          variant="outline"
          size="lg"
          className={`cursor-pointer h-12 font-semibold gap-1 w-[180px] disabled:opacity-80 uppercase ${
            !isSelected && 'hover:text-destructive text-destructive'
          }`}
        >
          {isSelected && <CircleCheck className="fill-green-600 text-white" />}
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      </div>
    </article>
  );
};

const HotelRoomPicker = ({ rooms = [] }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Choose your room</h2>
      <div className="space-y-4">
        {rooms.length > 0 ? (
          rooms.map((room) => <Room {...room} key={room.id} />)
        ) : (
          <p className="text-gray-500">No rooms available</p>
        )}
      </div>
    </section>
  );
};

export default HotelRoomPicker;

// Pass HOTEL_DATA.rooms to HotelRoomPicker in parent component
