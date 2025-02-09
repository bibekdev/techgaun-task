'use client';

import { useFestivalContext } from '@/providers/festival-provider';
import moment from 'moment';
import { useState } from 'react';
import { Calendar, momentLocalizer, Views, type Components } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-US');
const localizer = momentLocalizer(moment);

export const CalendarView = () => {
  const [view] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const { festivals } = useFestivalContext();

  const events = festivals.map(festival => {
    const startDate = new Date(festival.startDate);
    const endDate = new Date(festival.endDate);

    return {
      title: festival.name,
      start: startDate,
      end: endDate,
      allDay: true,
      resource: festival
    };
  });

  const eventStyleGetter = (event: any, start: Date, end: Date, isSelected: boolean) => {
    const style: React.CSSProperties = {
      backgroundColor: '#E02424',
      display: 'block'
    };

    return { style };
  };

  const EventComponent = ({ event }: { event: any }) => (
    <div className='flex flex-col h-full justify-center'>
      <div className='font-semibold'>{event.title}</div>
    </div>
  );

  const components: Components = {
    event: EventComponent
  };

  return (
    <div className='h-[600px] p-4 rounded-lg shadow bg-accent'>
      <Calendar
        localizer={localizer}
        defaultView={view}
        view={view}
        date={date}
        onNavigate={date => setDate(new Date(date))}
        events={events}
        startAccessor='start'
        endAccessor='end'
        eventPropGetter={eventStyleGetter}
        style={{ height: '100%' }}
        popup
        views={['month']}
        components={components}
      />
    </div>
  );
};
