'use client';

import { useFestivalContext } from '@/providers/festival-provider';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from './ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import { formatDateRange } from '@/lib/utils';

export const FestivalModal = () => {
  const { modalOpen, setModalOpen, selectedFestival } = useFestivalContext();

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
      </DialogContent>
    </Dialog>
  );
};
