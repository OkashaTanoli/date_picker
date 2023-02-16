import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";
import moment from 'moment';


function Datepicker({ control, label }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
                name={label}
                control={control}
                defaultValue={moment(new Date()).format("MM-DD-YYYY")}
                render={({
                    field: { onChange, value },
                    fieldState: { error, invalid }
                }) => (
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={(newvalue) => {
                            onChange(moment(newvalue).format("MM-DD-YYYY"))
                        }}
                        renderInput={(params) => <TextField {...params} style={{ width: '300px', backgroundColor: "white" }} />}
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default Datepicker;