import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from "./Pagenation.jsx";
import axios from "axios";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {IconButton} from "@mui/material";

function createData(id, createdBy, priority,todo,completed,createdAt) {
    return { id, createdBy, priority,todo,completed ,createdAt};
}

const initialRows = [];

export default function CustomPaginationActionsTable() {
    const [tableData, setTableData] = useState(initialRows); //
const [isClick,setIsClick] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
    const [rowsPerPage, setRowsPerPage] = useState(2);
    const getData = async () => {
        setIsLoading(true); // Set loading to true before API call
        try {
            const response = await axios.get("https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do");
            const data = await response.data;
            setTableData(data);
        } catch (err) {
            console.error('Error fetching data:', err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);
const handleClick = ()=>{
    setIsClick(!isClick);
}
    const notificationIconStyles = {
        color: isClick ? 'red' : 'inherit',
    };
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentTableData = tableData.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
    };
    return (

        <TableContainer component={Paper}>
            <Table sx={{ width: 500, marginLeft: '10%', height: 100, marginTop: '8%', position: 'absolute', top: '20%' }}>
                <TableBody>
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={2} align="center">
                                Loading...
                            </TableCell>
                        </TableRow>
                    ) : (
                        currentTableData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell style={{ width: 50 }} align="right">
                                    <IconButton onClick={handleClick}>
                                        <NotificationsIcon style={notificationIconStyles} />
                                        <br />
                                        <h6 style={{ fontSize: '12px' }}>Make Done</h6>
                                    </IconButton>
                                </TableCell>
                                <TableCell style={{ width: "100%" }} align="right">
                                    {row.todo}
                                </TableCell>
                                <TableCell style={{ width: 50 }} align="right">
                                    <h5 style={{ background: 'yellow', textAlign: 'center' }}>
                                        In progress
                                    </h5>
                                </TableCell>
                                <TableCell style={{ width: 50 }} align="right">
                                    {row.createdAt}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>
                        <Pagination  count={tableData.length} // Total number of items for pagination
                                     page={currentPage} // Current page number
                                     onChangePage={handlePageChange}
                                     rowsPerPage={rowsPerPage} // Items per page
                                     onChangeRowsPerPage={handleRowsPerPageChange}/>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
