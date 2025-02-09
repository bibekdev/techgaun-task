'use client';

import { Festival, festivals } from '@/lib/festivals';
import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface Note {
  [festivalId: number]: string;
}

interface IFestivalContext {
  festivals: Festival[];
  selectedMonth: number | null;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  filteredFestivals: Festival[];
  setSelectedMonth: Dispatch<SetStateAction<number | null>>;
}

const FestivalContext = createContext<IFestivalContext | undefined>(undefined);

export const FestivalProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFestivals = festivals.filter(festival => {
    const matchesMonth = selectedMonth
      ? new Date(festival.startDate).getMonth() + 1 === selectedMonth ||
        new Date(festival.endDate).getMonth() + 1 === selectedMonth
      : true;
    const matchesSearch =
      festival.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      festival.startDate.includes(searchQuery) ||
      festival.endDate.includes(searchQuery);
    return matchesMonth && matchesSearch;
  });

  const value = {
    festivals,
    selectedMonth,
    setSelectedMonth,
    searchQuery,
    setSearchQuery,
    filteredFestivals
  };

  return <FestivalContext.Provider value={value}>{children}</FestivalContext.Provider>;
};

export const useFestivalContext = () => {
  const context = useContext(FestivalContext);
  if (context === undefined) {
    throw new Error('useFestivalContext must be used within a FestivalProvider');
  }
  return context;
};
