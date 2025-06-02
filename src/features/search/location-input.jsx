import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DESTINATIONS } from '@/config/app.config';


import React from 'react';

function LocationInput({ form }) {
    const city=form.watch('city')
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className='flex items-center px-2 py-2 gap-2 rounded bg-background lg:min-w-[360px] cursor-pointer'>
                    <Icon icon="bed" size="24" className="text-muted-foreground shrink-0" />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input
                                        className="w-full h-full px-2 text-sm border-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent placeholder:font-normal placeholder:text-foreground focus:placeholder-muted-foreground"
                                        placeholder="Where are you going?"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button 
                    type="button"
                    variant="ghost" size="icon" className={city ? " ": "opacity-0 pointer-events-none"} >
                        <Icon icon="close"
                        size="18"
                        className="text-muted-foreground shrink"  />
                    </Button>
                </div>
            </PopoverTrigger>

            <PopoverContent 
            sideOffset="1"
            align='start'
            className="w-[420px]"
            onOpenAutoFocus={(e) =>e.preventDefault()}
            >
                <div className='p-3'>
                    <p className="text-sm font-semibold text-black mb-2">Popular destinations nearby</p>
                    <div className="max-h-[300px] overflow-y-auto">
                        {Array.isArray(DESTINATIONS) && DESTINATIONS.length > 0 ? (
                            DESTINATIONS.map((destination, index) => (
                                <div key={index} className="flex items-center gap-3 px-3 py-2 hover:bg-accent cursor-pointer transition-colors duration-200 border-b border-border ">
                                    <Icon icon="location" className="text-primary" />
                                    <div>
                                        <p className="font-medium text-gray-800">{destination.city}</p>
                                        <p className="text-sm text-gray-500">{destination.country}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-sm">No destinations found.</p>
                        )}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default LocationInput;