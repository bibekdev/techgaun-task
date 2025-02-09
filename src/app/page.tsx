import { FestivalList } from '@/components/festival-list';
import { MonthFilter } from '@/components/month-filter';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, List } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Nepali Festivals Calendar</h1>
        {/* <SearchBar/> */}
        <div className='flex justify-center mb-4'>
          <Tabs
            defaultValue='list'
            className='w-full'>
            <TabsList className='grid grid-cols-2 w-[400px] mx-auto mb-7'>
              <TabsTrigger value='list'>
                <List className='size-4 mr-2' /> List View
              </TabsTrigger>
              <TabsTrigger value='calendar'>
                <Calendar className='size-4 mr-2' /> Calendar View
              </TabsTrigger>
            </TabsList>

            <TabsContent value='list'>
              <MonthFilter />
              <FestivalList />
            </TabsContent>
            <TabsContent value='calendar'>Calendar</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
