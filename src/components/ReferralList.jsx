import React, { useState, useEffect } from 'react';
import DashBoardFooter from './DashBoardFooter';

import { 
  Box, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TablePagination, 
  TableRow, 
  TableSortLabel, 
  Checkbox, 
  Toolbar, 
  Typography, 
  Tooltip, 
  IconButton 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { alpha } from '@mui/material/styles';
import { visuallyHidden } from '@mui/utils';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';
import Side from './Side';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const headCells = [
    { id: 'first_name', numeric: false, disablePadding: false, label: 'First Name' },
    { id: 'last_name', numeric: false, disablePadding: false, label: 'Last Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' }
  ];

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const ReferralList = () => {
  const [referees, setReferees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalBonus, setTotalBonus] = useState('0.00');
  const [totalReferees, setTotalReferees] = useState(0);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('first_name');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const user_id = localStorage.getItem('user_id');

  useEffect(() => {
    const fetchReferral = async () => {
      try {
        const response = await axiosInstance.get(`/management/referrers/${user_id}/`);
        setReferees(response.data.referees);
        setTotalBonus(response.data.referrer_stats.total_bonus);
        setTotalReferees(response.data.referrer_stats.total_referees);
      } catch (error) {
        toast.error('An error occurred.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferral();
  }, [user_id]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = referees
    .sort(getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);


  return (
    
    

      <>
      <div className="container mx-auto px-4 my-8">
          <Side showProfile={false} />
          <Box sx={{ width: '100%', mt: 4, ml: '20px' }}> {/* Add margin on the left */}
            <Paper sx={{ width: '100%', mb: 2, overflowX: 'auto' }}> 
            <Toolbar
              sx={{
                pl: { sm: 2 },
                pr: { xs: 2, sm: 2 },
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {/* Referral List Title */}
              <Typography variant="h6" id="tableTitle" component="div">
                Referral List
              </Typography>

              {/* Total Bonus and Total Referees */}
              <Box>
                <Typography variant="subtitle1" component="span" sx={{ mr: 2 }}>
                  Total Bonus: ${totalBonus}
                </Typography>
                <Typography variant="subtitle1" component="span">
                  Total Referees: {totalReferees}
                </Typography>
              </Box>
              </Toolbar>
              <TableContainer>
                <Table aria-labelledby="tableTitle" size="medium">
                  <EnhancedTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                  />
                  <TableBody>
                    {visibleRows.map((referral, index) => (
                      <TableRow key={index} hover>
                        <TableCell>{referral.referee.first_name}</TableCell>
                        <TableCell>{referral.referee.last_name}</TableCell>
                        <TableCell>{referral.referee.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={referees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
      </div>

      <DashBoardFooter />
    </>
    
  );
};

export default ReferralList;
