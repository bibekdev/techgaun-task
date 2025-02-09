'use client';

import { useFestivalContext } from '@/providers/festival-provider';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { formatDateRange } from '@/lib/utils';
import { NoteModal } from './note-modal';
import { useState } from 'react';
import { Button } from './ui/button';

export const FestivalModal = () => {
  const { modalOpen, setModalOpen, selectedFestival, notes } = useFestivalContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog
      open={modalOpen}
      onOpenChange={setModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{selectedFestival?.name}</DialogTitle>
          <DialogDescription>
            {formatDateRange(`${selectedFestival?.startDate}`, `${selectedFestival?.endDate}`)}
          </DialogDescription>
        </DialogHeader>
        <p className='text-muted-foreground'>{selectedFestival?.description}</p>

        <Button onClick={() => setIsOpen(true)}>
          {notes[Number(selectedFestival?.id)] ? 'Edit Note' : 'Add Note'}
        </Button>
      </DialogContent>

      <NoteModal
        festivalId={Number(selectedFestival?.id)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Dialog>
  );
};
