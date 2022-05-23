import { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function DateTimePickerComponent() {
  //const newTestDate = "";
  const [datetime_picker, setDatetime_picker] = useState(new Date);

  return (
    <div>
      <DateTimePicker onChange={setDatetime_picker} value={datetime_picker} />
    </div>
  );
}

export default DateTimePickerComponent;
