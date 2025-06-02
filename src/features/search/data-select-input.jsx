import { Calendar } from '@/components/ui/calendar';
import { FormControl, FormField, FormItem } from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import dayjs from 'dayjs';
import React from 'react';

const DataSelectInput = ({ form }) => {
  return (
    <Popover>
      <FormField
        control={form.control}
        name="bookingDatas"
        render={({ field }) => (
          <>
            <PopoverTrigger asChild>
              <FormItem className="flex items-center justify-between px-4 py-3.5 rounded-lg bg-background border border-border min-w-80 cursor-pointer">
                <FormControl>
                  <div role="button" className="flex items-center">
                    <Icon
                      icon="calendar"
                      size="24"
                      className="text-muted-foreground shrink-0"
                    />
                    <div className="flex items-center flex-1 gap-2 px-2">
                      <p className="text-sm">
                        {field?.value?.from
                          ? dayjs(field.value.from).format('ddd D MMM')
                          : ' Check-in'}
                      </p>
                      <span aria-hidden> - </span>
                      <p className="text-sm">
                        {field?.value?.to
                          ? dayjs(field.value.to).format('ddd D MMM')
                          : ' Check-out '}
                      </p>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            </PopoverTrigger>
            <PopoverContent
              sideOffset={1}
              align="start"
              className="w-[640px]"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <Calendar
                required
                mode="range"
                min={2}
                selected={field.value}
                numberOfMonths={2}
                fromMonth={new Date()}
                disabled={(date) => dayjs(date).isBefore(dayjs(date), 'day')}
                modifiers={{
                  today: dayjs().toDate(),
                  past: (date) => dayjs(date).isBefore(dayjs(), 'day'),
                }}
                modifiersClassNames={{
                  today: 'text-blue-600 font-semibold',
                  past: 'opacity-30 pointer-events-none',
                }}
                onSelect={(value) => {
                  field.onChange(value);
                }}
              />
            </PopoverContent>
          </>
        )}
      />
    </Popover>
  );
};

export default DataSelectInput;
