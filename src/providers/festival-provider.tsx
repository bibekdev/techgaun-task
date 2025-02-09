'use client';

import { Festival, festivals } from '@/lib/festivals';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

interface Note {
  [festivalId: number]: string;
}

interface IFestivalContext {
  festivals: Festival[];
  selectedMonth: number | null;
  searchQuery: string;
  modalOpen: boolean;
  notes: Note;
  selectedFestival: Festival | null;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedFestival: Dispatch<SetStateAction<Festival | null>>;
  filteredFestivals: Festival[];
  setNote: (festivalId: number, note: string) => void;
  setSelectedMonth: Dispatch<SetStateAction<number | null>>;
}

const FestivalContext = createContext<IFestivalContext | undefined>(undefined);

export const FestivalProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [notes, setNotes] = useState<Note>({});

  useEffect(() => {
    const savedNotes = localStorage.getItem('festivalNotes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const setNote = (festivalId: number, note: string) => {
    const updatedNotes = { ...notes, [festivalId]: note };
    setNotes(updatedNotes);
    localStorage.setItem('festivalNotes', JSON.stringify(updatedNotes));
  };

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
    filteredFestivals,
    modalOpen,
    setModalOpen,
    selectedFestival,
    setSelectedFestival,
    notes,
    setNote
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
