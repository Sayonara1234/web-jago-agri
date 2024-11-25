import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="max-w-md mx-5 my-10">
            <h2 className="text-gray-800 mb-4 text-xl font-semibold">Pilih Tanggal</h2>
            <Calendar
                onChange={onChange}
                value={value}
                className="rounded-lg shadow-md border border-gray-200 p-5 bg-hijau"
            />
        </div>
    );
}

export default MyCalendar;