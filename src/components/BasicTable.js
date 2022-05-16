import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import '../styles/BasicTable.css'


const BasicTable = () => {
    const [institutionSymbol, setInstitutionSymbol] = useState('0');
    const [selectedInstitution, setSelectedInstitution] = useState( { 'name': '', 'institutionSymbol':'', 'fat': '', 'carbs': '', 'protein':'' });
    const [rows, setRows] = useState([
        { 'name': 'Frozen yoghurt', 'institutionSymbol': 159, 'fat': 6.0, 'carbs': 24, 'protein': 4.0 },
        { 'name': 'Ice cream sandwich', 'institutionSymbol': 237, 'fat': 9.0, 'carbs': 37, 'protein': 4.3 },
        { 'name': 'Eclair', 'institutionSymbol': 262, 'fat': 16.0, 'carbs': 24, 'protein': 6.0 },
        { 'name': 'Cupcake', 'institutionSymbol': 305, 'fat': 3.7, 'carbs': 67, 'protein': 4.3 },
        { 'name': 'Gingerbread', 'institutionSymbol': 356, 'fat': 16.0, 'carbs': 49, 'protein': 3.9 }
    ]
    )
    const handleChange = (e) => {
        if (institutionSymbol.length < 3) {
            setInstitutionSymbol(e.target.value)
        }

    }
 
    useEffect(() => {
        console.log(institutionSymbol);
        if (institutionSymbol.length >= 3) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].institutionSymbol == institutionSymbol) {
                    setSelectedInstitution(rows[i])
                    setInstitutionSymbol('') 
                    return;
                }
            }
            
        }

    }, [institutionSymbol])


    return (
        <div className='one'>
            <TextField id="standard-basic" label="Standard" variant="standard" onChange={handleChange} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">InstitutionSymbol</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            key={selectedInstitution.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {selectedInstitution.name}
                            </TableCell>
                            <TableCell align="right">{selectedInstitution.institutionSymbol}</TableCell>
                            <TableCell align="right">{selectedInstitution.fat}</TableCell>
                            <TableCell align="right">{selectedInstitution.carbs}</TableCell>
                            <TableCell align="right">{selectedInstitution.protein}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
export default BasicTable