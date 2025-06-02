import { Form } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import LocationInput from './location-input';
import DataSelectInput from './data-select-input';
import OccupencyInput from './occupancy-input';
import { Button } from '@/components/ui/button';
import dayjs from 'dayjs';

const SearchIng = () => {
    const form =useForm({
        defaultValues:{
            city: '',
            roomsCount:1,
            bookingDates:{
                from:dayjs().toDate(),
                to:dayjs().add(1,'day').toDate()
            }
        }
    });


    function onSubmit(data) {
        const sendData={
            city:data.city,
            roomsCount:data.roomsCount,
            startDate:dayjs(data.bookingDates.form).format('YYYY-MM-DD'),
            endDate:dayjs(data.bookingDates.to).format('YYYY-MM-DD')
        }
        console.log("Search data", sendData);
    }

    return (
        <section className='container'>
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-row items-center gap-2 p-2 bg-yellow-500 rounded h-15'
                >
                    <LocationInput form={form} />
                    <DataSelectInput form={form} />
                    <OccupencyInput form={form} />
                    <Button type='submit' className="text-lg h-full px-5 py-6.5 "> 
                        Search
                    </Button>
                </form>
            </Form>
        </section>
    );
}

export default SearchIng;
