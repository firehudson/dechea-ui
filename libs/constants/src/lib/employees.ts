
export const getEmployeesByGroup = () => {
  return [
    {
      label: 'All practitioners',
      options: [
        {
          id: 1,
          avatar: 'dr-xavier.svg',
          displayName: 'Dr. Xavier III',
        },
        {
          id: 2,
          avatar: 'dr-don.svg',
          displayName: 'Dr. Don Health',
        },
        {
          id: 3,
          avatar: 'dr-tausend.svg',
          displayName: 'Dr. Seigfried Tausend',
        },
      ]
    },
    {
      label: 'All assistants',
      options: [
        {
          id: 4,
          avatar: 'dr-xavier.svg',
          displayName: 'Dr. Xavier III',
        },
        {
          id: 5,
          avatar: 'dr-don.svg',
          displayName: 'Dr. Don Health',
        },
        {
          id: 6,
          avatar: 'dr-tausend.svg',
          displayName: 'Dr. Seigfried Tausend',
        },
      ]
    }
  ];
};

export const getPinnedEmployees = () => {
  return [
    {
      label: 'Pinned employees',
      pinnedOptions: [
        {
          id: 7,
          avatar: 'dr-tausend.svg',
          displayName: 'Dr. Seigfried Tausend',
        }
      ]
    },
  ];
};
