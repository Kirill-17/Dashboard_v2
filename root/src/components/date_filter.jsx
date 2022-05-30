import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "../styles/content.module.scss";


export const DateFilter = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={s.datePicker}>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />      
    </div>
  );
};
