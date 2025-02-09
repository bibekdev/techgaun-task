'use client';

import { useFestivalContext } from '@/providers/festival-provider';
import { Input } from './ui/input';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useFestivalContext();

  return (
    <div>
      <Input
        placeholder='Search festivals by name'
        className='bg-accent w-full md:w-[400px]'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
