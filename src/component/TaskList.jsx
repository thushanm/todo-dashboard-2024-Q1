import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from "./Pagenation.jsx";
import axios from "axios"; // Assuming Pagination component exists

function createData(id, createdBy, priority,todo,completed,createdAt) {
    return { id, createdBy, priority,todo,completed ,createdAt};
}

const initialRows = []; // Provide initial data if needed, otherwise empty

export default function CustomPaginationActionsTable() {
    const [tableData, setTableData] = useState(initialRows); // State for table data
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    const getData = async () => {
        setIsLoading(true); // Set loading to true before API call
        try {
            const response = await axios.get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do");
            const data = await response.data;
            setTableData(data);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setIsLoading(false); // Set loading to false after API call
        }
    };

    useEffect(() => {
        getData(); // Fetch data on component mount
    }, []); // Empty dependency array ensures it runs only once

    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: 500, marginLeft: '10%', height: 300, marginTop: '8%', position: 'absolute', top: '30%' }}>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                Loading...
                            </TableCell>
                        </TableRow>
                    ) : (
                        tableData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell style={{ width: 100 }} align="right">
                                    {row.id}
                                </TableCell>
                                <TableCell style={{ width: 100 }} align="right">
                                    {row.createdBy}
                                </TableCell>
                                <TableCell style={{ width: 100 }} align="right">
                                    {row.priority}
                                </TableCell><TableCell style={{ width: 100 }} align="right">
                                    {row.todo}
                                </TableCell><TableCell style={{ width: 100 }} align="right">
                                    {row.completed}
                                </TableCell><TableCell style={{ width: 100 }} align="right">
                                    {row.createdAt}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <Pagination />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
