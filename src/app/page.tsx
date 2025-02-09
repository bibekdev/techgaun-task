import { FestivalList } from '@/components/festival-list';
import { MonthFilter } from '@/components/month-filter';
import { SearchBar } from '@/components/search-bar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, List } from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen py-8'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Nepali Festivals Calendar</h1>
        <div className='flex justify-center mb-4'>
          <Tabs
            defaultValue='list'
            className='w-full'>
            <div className='flex mb-8 gap-5 flex-col md:flex-row w-full items-center justify-between'>
              <SearchBar />
              <TabsList className='w-full md:w-[400px]'>
                <TabsTrigger
                  value='list'
                  className='w-1/2'>
                  <List className='size-4 mr-2' /> List View
                </TabsTrigger>
                <TabsTrigger
                  value='calendar'
                  className='w-1/2'>
                  <Calendar className='size-4 mr-2' /> Calendar View
                </TabsTrigger>
              </TabsList>
            </div>
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
