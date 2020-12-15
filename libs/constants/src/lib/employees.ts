
export const getEmployeesByGroup = () => {
  return [
    {
      id: 'all-practitioners',
      label: 'All practitioners',
      options: [
        {
          id: 1,
          avatar: 'assets/dr-xavier.png',
          displayName: 'Dr. Xavier III',
        },
        {
          id: 2,
          avatar: 'assets/dr-don.png',
          displayName: 'Dr. Don Health',
        },
        {
          id: 3,
          avatar: 'assets/dr-tausend.png',
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
          avatar: 'assets/dr-xavier.png',
          displayName: 'Dr. Xavier III assistant',
        },
        {
          id: 5,
          avatar: 'assets/dr-don.png',
          displayName: 'Dr. Don Health assistant',
        },
        {
          id: 6,
          avatar: 'assets/dr-tausend.png',
          displayName: 'Dr. Seigfried Tausend assistant',
        },
      ]
    }
  ];
};

export const getPinnedEmployees = () => {
  return [
    {
      id: 7,
      avatar: 'assets/dr-tausend.png',
      displayName: 'Dr. Seigfried Tausend',
    },
  ];
};
