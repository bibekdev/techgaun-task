'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { useFestivalContext } from '@/providers/festival-provider';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

interface NoteModalProps {
  festivalId: number;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NoteModal = ({ festivalId, isOpen, setIsOpen }: NoteModalProps) => {
  const { notes, setNote } = useFestivalContext();

  const [noteText, setNoteText] = useState(notes[festivalId] || '');

  useEffect(() => {
    setNoteText(notes[festivalId] || '');
  }, [festivalId]);

  const handleSave = () => {
    setNote(festivalId, noteText);
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{notes[festivalId] ? 'Edit Note' : 'Add Note'}</DialogTitle>
          <DialogDescription>You can add/edit your note</DialogDescription>
        </DialogHeader>
        <Textarea
          value={noteText}
          onChange={e => setNoteText(e.target.value)}
          placeholder='Add your personal notes here...'
          className='bg-accent min-h-[80px]'
        />
        <div className='flex items-center justify-between gap-4'>
          <Button
            variant='outline'
            onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>{notes[festivalId] ? 'Edit Note' : 'Add Note'}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
