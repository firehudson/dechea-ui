
export const getEmployeesByGroup = () => {
  return [
    {
      id: 'all-practitioners',
      label: 'All practitioners',
      options: [
        {
          id: 1,
          avatar: 'assets/dr-xavier.svg',
          displayName: 'Dr. Xavier III',
        },
        {
          id: 2,
          avatar: 'assets/dr-don.svg',
          displayName: 'Dr. Don Health',
        },
        {
          id: 3,
          avatar: 'assets/dr-tausend.svg',
          displayName: 'Dr. Seigfried Tausend',
        },
      ]
    },
    {
      id: 'all-assistants',
      label: 'All assistants',
      options: [
        {
          id: 4,
          avatar: 'assets/dr-xavier.svg',
          displayName: 'Dr. Xavier III',
        },
        {
          id: 5,
          avatar: 'assets/dr-don.svg',
          displayName: 'Dr. Don Health',
        },
        {
          id: 6,
          avatar: 'assets/dr-tausend.svg',
          displayName: 'Dr. Seigfried Tausend',
        },
      ]
    }
  ];
};

export const getPinnedEmployees = () => {
  return [
    {
      id: 7,
      avatar: 'assets/dr-tausend.svg',
      displayName: 'Dr. Seigfried Tausend',
    },
  ];
};
