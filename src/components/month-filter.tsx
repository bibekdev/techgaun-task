'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { useFestivalContext } from '@/providers/festival-provider';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const MonthFilter = () => {
  const { selectedMonth, setSelectedMonth } = useFestivalContext();

  return (
    <div className='flex flex-wrap justify-center gap-2'>
      <Button
        variant={selectedMonth === null ? 'default' : 'outline'}
        className='rounded-full'
        onClick={() => setSelectedMonth(null)}>
        All
      </Button>
      {months.map((month, index) => (
        <Button
          key={month}
          variant={selectedMonth === index + 1 ? 'default' : 'outline'}
          className='rounded-full transition-all duration-300'
          onClick={() => setSelectedMonth(index + 1)}>
          {month}
        </Button>
      ))}
    </div>
  );
};
