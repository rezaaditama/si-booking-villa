import { useState } from 'react';

const DatePicker = ({ idIn, idOut, onDateChange }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleCheckInChange = (event) => {
    const selectedDate = new Date(event.target.value);
    setCheckIn(event.target.value);

    // Hitung tanggal check-out (check-in + 1 hari)
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);

    // Format tanggal check-out ke format 'YYYY-MM-DD'
    const formattedCheckOut = nextDate.toISOString().split('T')[0];
    setCheckOut(formattedCheckOut);

    // Panggil callback untuk mengirim data ke parent
    onDateChange({
      checkIn: event.target.value,
      checkOut: formattedCheckOut,
    });
  };

  return (
    <div className='space-y-2'>
      <div className='flex flex-col'>
        <label htmlFor={idIn}>Check-In:</label>
        <input
          type='date'
          id={idIn}
          name={idIn}
          value={checkIn}
          onChange={handleCheckInChange}
          className={'text-center py-1 rounded text-black'}
          required
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor={idOut}>Check-Out:</label>
        <input
          type='date'
          id={idOut}
          name={idOut}
          value={checkOut}
          className={'text-center py-1 rounded text-black'}
          readOnly // Agar input check-out tidak bisa diubah
          required
        />
      </div>
    </div>
  );
};

export default DatePicker;
