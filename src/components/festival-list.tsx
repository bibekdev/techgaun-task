'use client';

import { useFestivalContext } from '@/providers/festival-provider';
import { FestivalCard } from './festival-card';

export const FestivalList = () => {
  const { filteredFestivals } = useFestivalContext();

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
        {filteredFestivals.map(festival => (
          <FestivalCard
            key={festival.id}
            festival={festival}
          />
        ))}
      </div>
      {filteredFestivals.length === 0 && (
        <p className='text-muted-foreground text-center mt-8'>
          No festivals found matching your search criteria.
        </p>
      )}
    </>
  );
};
