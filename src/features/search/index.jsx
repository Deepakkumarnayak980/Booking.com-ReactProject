import { Form } from '@/components/ui/form';
import React from 'react';
import { useForm } from 'react-hook-form';
import LocationInput from './location-input';
import DataSelectInput from './data-select-input';
import OccupencyInput from './occupancy-input';
import { Button } from '@/components/ui/button';

const SearchIng = () => {
    const form =useForm();

    function onSubmit(data) {
        console.log("Search data", data);
    }

    return (
        <section className='container'>
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='flex flex-row items-center gap-2 p-2 bg-yellow-500 rounded h-14'
                >
                    <LocationInput form={form} />
                    <DataSelectInput form={form} />
                    <OccupencyInput form={form} />
                    <Button type='submit' className="text-lg h-10 px-4">
                        Search
                    </Button>
                </form>
            </Form>
        </section>
    );
}

export default SearchIng;
