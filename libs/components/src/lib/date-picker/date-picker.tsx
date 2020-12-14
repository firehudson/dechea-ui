import React, { useEffect, useRef, useState } from 'react';
import styles from './date-picker.module.css';
import DatePickerInput from './components/date-picker-input';
import Calendar from './components/calendar';

export interface DatePickerProps {
  onChangeDate: (date: Date) => void;
}

const getReadableDate = (date: Date) => {
  if (!date) {
    return 'Pick date';
  }

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const defaultCalendarProps = {
  rowHeight: 38,
  width: 360,
  height: 400,
  min: new Date(),
  autoFocus: true,
  displayOptions: {
    showHeader: false,
    showTodayHelper: false,
  },
};

export function DatePicker(props: DatePickerProps) {
  const [active, setActive] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(null);

  const toggleCalendar = () => {
    setActive(!active);
  };

  const onSelectDate = (date: Date) => {
    setActive(false);
    setDate(date);
    props.onChangeDate?.(date);
  };

  return (
    <div className={styles.container}>
      <DatePickerInput
        date={getReadableDate(date)}
        onClick={toggleCalendar}
      />
      {active && (
        <Calendar
          selectedDate={date || new Date()}
          onSelectDate={onSelectDate}
          toggleCalendarVisibility={toggleCalendar}
          {...defaultCalendarProps}
        />
      )}
    </div>
  );
}

export default DatePicker;
