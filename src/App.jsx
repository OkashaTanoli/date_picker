import './App.css';
import Container from '@mui/material/Container';
import { Controller, useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Datepicker from './components/datepicker';
import Button from '@mui/material/Button';




function App() {

    const { handleSubmit, control } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#ededed', padding: '20px' }}>
            <h1>Leave Application</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className='input_div'>
                    <p className='label'>Staff Name</p>
                    <Controller
                        name='Staff Name'
                        control={control}
                        defaultValue=''
                        render={({
                            field: { onChange, value },
                            fieldState: { error, invalid }
                        }) => (
                            <TextField id="outlined-basic" required value={value} onChange={(newValue)=>onChange(newValue)} label="Staff Name" style={{ backgroundColor: 'white', width: '300px' }} variant="outlined" />
                        )}
                    />
                </div>
                <div className='input_div'>
                    <p className='label'>Leave From</p>
                    <Datepicker control={control} label='Leave From' />
                </div>
                <div className='input_div'>
                    <p className='label'>Leave To</p>
                    <Datepicker control={control} label='Leave To' />
                </div>

                <Button variant="contained" size="large" type='submit'>Submit</Button>


            </form>
        </Container>
    );
}

export default App;
