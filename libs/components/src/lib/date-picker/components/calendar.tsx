import React, { useRef } from "react";
import ReactCalendar from "react-infinite-calendar";
import dayjs from 'dayjs';
import 'react-infinite-calendar/styles.css';

import useBlurHandler from '../../employee-dropdown/hooks/useBlurHandler';
import './calendar-overrides.css';

export const defaultCalendar = {
  rowHeight: 38,
  width: 360,
  height: 400,
  minDate: dayjs().subtract(1, 'month').toDate(),
  displayOptions: {
    showTodayHelper: false,
    showHeader: false,
  },
};

interface CalendarProps {
  onSelectDate: (date: Date) => void;
  selectedDate: Date;
  toggleCalendarVisibility: () => void;
}

const Calendar = (props: CalendarProps) => {
  const ref = useRef(null);
  useBlurHandler(ref, props.toggleCalendarVisibility);

  return (
    <ReactCalendar
      ref={ref}
      className="react-calendar"
      selected={props.selectedDate || new Date()}
      onSelect={props.onSelectDate}
      {...defaultCalendar}
    />
  );
};

export default Calendar;
