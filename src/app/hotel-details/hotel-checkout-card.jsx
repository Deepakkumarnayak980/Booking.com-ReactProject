import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'; // Ensure correct import

const CancellationPolicy = ({ cancellationPolicy }) => {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger>
        <div className="flex gap-2 text-rose-600 items-center cursor-pointer">
          <span className='text-sm font-medium'>Cancellation Policy</span>
          <Icon icon="info" size="16"/>
        </div>
      </HoverCardTrigger>
      <HoverCardContent align='center' side="left" className="w-[350px] space-y-3 border-border">
        <h3 className='text-base font-semibold'>Cancellation Policy</h3>
        <ul className='pl-4 space-y-3 list-disc'>
          {cancellationPolicy?.length > 0 ? (
            cancellationPolicy.map((policy, index) => (
              <li key={index} className='text-sm leading-relaxed font-medium text-accent-foreground'>
                {policy}
              </li>
            ))
          ) : (
            <li className='text-sm leading-relaxed font-medium text-accent-foreground'>
              No cancellation policy available.
            </li>
          )}
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

function HotelCheckoutCard({ rooms, cancellationPolicy }) {
  const selectedRoom = rooms.find(item => item.isSelected) || {}; // Handle case where no room is selected

  return (
    <div className='space-y-6'>
      <div>
        <div className="flex-1 flex gap-2 items-center">
          <span className="text-lg font-bold">{`₹${selectedRoom.price?.toLocaleString() || 0}`}</span>
          <span className="text-sm text-muted-foreground line-through">
            {`₹${(selectedRoom.price ? selectedRoom.price * 1.5 : 0).toLocaleString()}`}
          </span>
        </div>

        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-sm'>Your savings</span>
            <span className='text-sm font-bold'>
              {`₹${(selectedRoom.price ? selectedRoom.price * 0.5 : 0).toLocaleString()}`}
            </span>
          </div>
        </div>

        <div className='space-y-3'>
          <div className='flex items-center justify-between'>
            <span className='text-sm'>Total Price</span>
            <span className='text-sm font-bold'>
              {`₹${selectedRoom.price?.toLocaleString() || 0}`}
            </span>
          </div>
        </div>

        <Button className="w-full h-12 text-base font-semibold" aria-label="Continue to Book">
          Continue to Book
        </Button>

        <div className="flex gap-1">
          <Icon
            icon="zap"
            size="16"
            className="mt-[3px] shrink-0 fill-rose-600 text-rose-600"
          />
          <p className="text-sm font-medium text-rose-600">
            1k+ people booked this OYO in the last 6 months
          </p>
        </div>

        <CancellationPolicy cancellationPolicy={cancellationPolicy} />
      </div>
    </div>
  );
}

export default HotelCheckoutCard;
