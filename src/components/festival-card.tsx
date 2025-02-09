import { Festival } from '@/lib/festivals';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { formatDateRange } from '@/lib/utils';

interface FestivalCardProps {
  festival: Festival;
}

export const FestivalCard = ({ festival }: FestivalCardProps) => {
  return (
    <Card className='rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow'>
      <CardHeader>
        <CardTitle>{festival.name}</CardTitle>
        <CardDescription>{formatDateRange(festival.startDate, festival.endDate)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='line-clamp-2 text-muted-foreground'>{festival.description}</p>
      </CardContent>
    </Card>
  );
};
