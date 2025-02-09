export interface Festival {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  month: number;
}

export const festivals: Festival[] = [
  {
    id: 1,
    name: 'Maghe Sankranti',
    startDate: '2025-01-14',
    endDate: '2025-01-14',
    description:
      'Maghe Sankranti, also known as Makar Sankranti, is celebrated on the first day of Magh in the Bikram Sambat calendar (typically falls in mid-January).',
    month: 1
  },
  {
    id: 2,
    name: 'Sonam Losar',
    startDate: '2025-01-30',
    endDate: '2025-01-30',
    description:
      "Sonam Lhosar is a New Year's festival celebrated by the Tamang and Hyolmo people of Nepal.",
    month: 1
  },
  {
    id: 3,
    name: 'Maha Shivratri',
    startDate: '2025-02-26',
    endDate: '2025-02-26',
    description:
      'Maha Shivaratri is a Hindu festival celebrated annually in honour of the deity Shiva',
    month: 2
  },
  {
    id: 4,
    name: "International Women's Day",
    startDate: '2025-03-8',
    endDate: '2025-03-8',
    description:
      "International Women's Day is a global day celebrating the social, economic, cultural, and political achievements of women. The day also marks a call to action for accelerating women's equality.",
    month: 3
  },
  {
    id: 5,
    name: 'Holi',
    startDate: '2025-03-14',
    endDate: '2025-03-14',
    description:
      'Holi is a colorful festival celebrating the arrival of spring and the triumph of good over evil.',
    month: 3
  },
  {
    id: 6,
    name: 'New Year',
    startDate: '2025-04-14',
    endDate: '2025-04-14',
    description: 'New year is the first day of the starting year.',
    month: 4
  },
  {
    id: 7,
    name: 'Buddha Jayanti',
    startDate: '2025-05-12',
    endDate: '2025-05-12',
    description: 'Buddha Jayanti celebrates the birth, enlightenment, and death of Gautama Buddha.',
    month: 5
  },
  {
    id: 8,
    name: 'Eid',
    startDate: '2025-06-07',
    endDate: '2025-06-07',
    description:
      'Eid is the festival celebrated by the Muslims community of Nepal and the entire world.',
    month: 6
  },
  {
    id: 9,
    name: 'Teej',
    startDate: '2025-08-26',
    endDate: '2025-08-26',
    description:
      'Teej is a festival celebrated by Hindu women for marital happiness, well-being of spouse and children, and purification of own body and soul.',
    month: 8
  },
  {
    id: 11,
    name: 'Constitution Day',
    startDate: '2025-09-20',
    endDate: '2025-09-20',
    description:
      "Constitution Day is a public holiday in Nepal that commemorates the adoption of the country's constitution.",
    month: 9
  },
  {
    id: 12,
    name: 'Dashain',
    startDate: '2025-09-29',
    endDate: '2025-10-02',
    description:
      'Dashain is the biggest Hindu festival in Nepal, celebrating the victory of good over evil. It spans 10 days with various rituals and family gatherings.',
    month: 9
  },
  {
    id: 13,
    name: 'Tihar',
    startDate: '2025-10-20',
    endDate: '2025-10-22',
    description:
      'Tihar, also known as Deepawali, is a five-day Hindu festival of lights celebrated in Nepal.',
    month: 10
  },
  {
    id: 14,
    name: 'Chaath',
    startDate: '2025-10-26',
    endDate: '2025-10-26',
    description:
      'Chaath is festival native to eastern India and southern Nepal. Lord Sun is worshipped on this day.',
    month: 10
  },
  {
    id: 15,
    name: 'Christmas Day',
    startDate: '2025-12-25',
    endDate: '2025-12-25',
    description:
      'Christmas Day is the birthday of Jesus Christ and a very big ceremony day for Christains.',
    month: 12
  }
];
