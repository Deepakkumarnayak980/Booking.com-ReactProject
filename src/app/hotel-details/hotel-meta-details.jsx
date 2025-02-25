import Icon from '@/components/ui/icon';
import { Gem, Star, Check } from 'lucide-react';
import React from 'react';

const HotelMetaDetails = ({ hotel,info }) => {
    return (
        <>
            <section className='space-y-4'>
                <div className='flex'>
                    <div className='flex-1 space-y-1'>
                        <h1 className='text-2xl font-bold'>{hotel.name}</h1>
                        <p className='text-muted-foreground'>{`${hotel.contactInfo.address}, ${hotel.city}`}</p>
                    </div>
                    <div>
                        <div className='flex gap-2 items-center bg-brand px-2 py-1 rounded-t-sm text-white'>
                            <span className='text-base font-bold'>4.5</span>
                            <Star className="w-5 h-5 text-white fill-white" />
                        </div>
                        <div className='bg-secondary rounded-b-sm px-2 py-2 flex items-center justify-center'>
                            <span className='text-xs'>663+ Rating</span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-1.5 px-1.5 py-1 rounded bg-gray-100 w-fit font-semibold'>
                    <Gem size={14} className="text-blue-500" />
                    <span className='text-xs'>Company-Service</span>
                </div>

                <div className='flex items-center gap-2 px-2'>
                    <Icon icon='curve' className="-mt-4 stroke-gray-400" />
                    <p className="text-sm text-gray-700">
                        5.0 . Check-in rating &gt;Delightful experience
                    </p>
                </div>

                <div className='text-orange-500 bg-orange-50 flex gap-1 p-2 items-center border rounded-sm'>
                    <Icon className=" fill-amber-500" icon='heart' size="16" />
                    <p className='text-sm font-medium'>Location Less Than 5Km From Gotv.Hospital | Located 3 Kms From OMaxe Celebration Mall</p>
                </div>
            </section>

            <section className='space-y-4 my-8'>
                <h2 className='text-xl font-bold'>Amenities</h2>
                <ul className='flex flex-wrap gap-2'>
                    {hotel?.amenities?.length > 0 ? (
                        hotel.amenities.map((item, index) => (
                            <li key={item || index} className='flex gap-2 items-center min-w-[180px]'>
                                <Check size={18} className="text-green-600" />
                                <span>{item}</span>
                            </li>
                        ))
                    ) : (
                        <p className="text-gray-500">No amenities available</p>
                    )}
                </ul>
            </section>

            <section className='space-y-4 my-8'>
            <h2 className='text-xl font-bold'>About This Property</h2>
            <p className='text-sm leading-relaxed tracking-wide text-muted-foreground'>{info.description}</p>

            </section>



        </>
    );
};

export default HotelMetaDetails;
