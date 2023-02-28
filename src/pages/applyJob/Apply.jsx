import React from 'react'
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { jobPageData } from '../../data';

const Apply = () => {
    let { id } = useParams();

    return (
        <div className='w-screen flex items-center justify-center' >
            <div className="w-full max-w-[1400px] container p-5 text-center">
                <h1 className="text-3xl text-primary-500 font-bold mb-10">Apply Now for {jobPageData.jobs[id].title}</h1>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    className='border py-2 rounded-lg'
                    >
                    <div>
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        />
                        <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        />
                    </div>
                    <div>
                        <TextField
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="filled"
                        />
                        <TextField
                        id="filled-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="filled"
                        />
                        <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                        />
                    </div>
                    <div>
                        <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="standard"
                        />
                        <TextField
                        id="standard-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                        />
                        <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="standard"
                        />
                    </div>
                    </Box>
            </div>
        </div>
    )
}

export default Apply