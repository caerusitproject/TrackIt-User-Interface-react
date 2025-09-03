import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  TablePagination,
  TableFooter,
  Typography,
  CircularProgress,
  Checkbox
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { useTheme } from "@mui/material/styles";
import {
  Box
} from "@mui/material";
import {
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@mui/icons-material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Button,Paper } from "@mui/material";
import {
HeaderBar,
Toolbar,
StyledTableContainer,
StyledHeaderRow,
StyledHeaderCell,
StyledRow,
StyledCell,
YellowDot
} from "../../styled_components/requesttable.styled"
import { useNavigate } from "react-router-dom";
import FilterDialogue from "./FilterDialogue";
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import SummarizeIcon from '@mui/icons-material/Summarize';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'mailIcon',
    numeric: true,
    disablePadding: false,
    // label: <MailIcon fontSize="small" />,   // put icon in header
  },
  {
    id: 'editIcon',
    numeric: true,
    disablePadding: false,
    // label: <EditIcon fontSize="small" />,
  },
  {
    id: 'noteIcon',
    numeric: true,
    disablePadding: false,
    // label: <SummarizeIcon fontSize="small" />,
  },
  {
    id: 'Id',
    numeric: true,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'firstName',
    numeric: true,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'lastName',
    numeric: true,
    disablePadding: false,
    label: 'Last Name',
  }
];
function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirst = (e) => onPageChange(e, 0);
  const handleBack = (e) => onPageChange(e, page - 1);
  const handleNext = (e) => onPageChange(e, page + 1);
  const handleLast = (e) => {
    const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1);
    onPageChange(e, lastPage);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton onClick={handleFirst} disabled={page === 0}>
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBack} disabled={page === 0}>
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNext}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLast}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
  <TableRow sx={{background:'#eff0f0ff'}}>
    <TableCell >
      <Checkbox
        color="primary" 
        indeterminate={numSelected > 0 && numSelected < rowCount}
        checked={rowCount > 0 && numSelected === rowCount}
        onChange={onSelectAllClick}
        inputProps={{
          'aria-label': 'select all rows',
        }}
      />
    </TableCell>

    {/* Dynamic headCells */}
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.align || (headCell.numeric ? "left" : "right")}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                <b>{headCell.label}</b>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>

    // <TableHead>
    //   <TableRow>
    //     <TableCell padding="checkbox">
    //       <Checkbox
    //         color="primary"
    //         indeterminate={numSelected > 0 && numSelected < rowCount}
    //         checked={rowCount > 0 && numSelected === rowCount}
    //         onChange={onSelectAllClick}
    //         inputProps={{
    //           'aria-label': 'select all desserts',
    //         }}
    //       />
    //     </TableCell>
    //     {headCells.map((headCell) => (
    //       <TableCell
    //         key={headCell.id}
    //         align={headCell.numeric ? 'left' : 'right'}
    //         // padding={headCell.disablePadding ? 'none' : 'normal'}
    //         // padding="none"
    //         sortDirection={orderBy === headCell.id ? order : false}
    //       >
    //         <TableSortLabel
    //           active={orderBy === headCell.id}
    //           direction={orderBy === headCell.id ? order : 'asc'}
    //           onClick={createSortHandler(headCell.id)}
    //         >
    //           {headCell.label}
    //           {orderBy === headCell.id ? (
    //             <Box component="span" sx={visuallyHidden}>
    //               {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
    //             </Box>
    //           ) : null}
    //         </TableSortLabel>
    //       </TableCell>
    //     ))}
    //   </TableRow>
    // </TableHead>
  );
}


export default function RequestsTable() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open,setOpen] = useState(false);
  const [checked, setChecked] = React.useState(false);

  // ✅ Selection State
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [dense, setDense] = React.useState(false);

  const fetchPage = async (page, limit) => {
    setLoading(true);
    setError(null);
    try {
      const offset = page * limit;
      const resp = await fetch(`http://localhost:3000/posts?_start=${offset}&_limit=${limit}`);
      if (!resp.ok) throw new Error("Failed to fetch data");

      const json = await resp.json();
      setRows(json);

      const total = resp.headers.get("X-Total-Count") || json.total || 15;
      setTotalCount(Number(total));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  // ✅ Handle Select All
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const allIds = rows.map((row) => row.id);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  // ✅ Handle Individual Row Selection
  const handleSelectRow = (isChecked,indiVidualId) => {
    if(isChecked){
      let array= [...selected];
      array.push(indiVidualId);
      setSelected([...array])
    }else{
       let array= [...selected];
       let index = array.findIndex(x => x == indiVidualId);
       array.splice(index, 1);
       setSelected([...array]);
    }
  };
  console.log('selected array__',selected)

  const isSelected = (id) => selected.includes(id);

  const handleRedirect = (id)=>{
    navigate(`/request/ticket/${id}`)
  }

    const handleSelectAllClick = (event) => {
       if (event.target.checked) {
      const allIds = rows.map((row) => row.id);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

const visibleRows = React.useMemo(() => {
  return rows.length > 0
    ? [...rows].sort(getComparator(order, orderBy))
    : [];
}, [rows, order, orderBy]);


  
  console.log('visble rows__',visibleRows,rows)
  return (
  
    <StyledTableContainer component={Paper}>

      <HeaderBar>
        <FolderIcon />
        My Completed Requests
         <span style={{ flex: 1 }} />
            <TablePagination
              component="div"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
              sx={{
                ml: 2, // small margin to separate from buttons
                "& .MuiTablePagination-toolbar": {
                  padding: 0,
                  minHeight: "40px",
                },
                "& .MuiTablePagination-displayedRows": {
                  margin: 0,
                },
              }}
            />

             <IconButton
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "8px",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                },
              }}
              onClick={() => window.open("https://github.com", "_blank")}
              >
                <RefreshIcon sx={{ color: "#000000" }} />
              </IconButton>

              <IconButton
                sx={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "8px",
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
                onClick={() => window.open("https://github.com", "_blank")}
                >
                  <SettingsIcon sx={{ color: "#000000" }} />
                </IconButton>

                 <IconButton
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      padding: "8px",
                      backgroundColor: "white",
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                      },
                    }}
                    onClick={()=>{setOpen(true)// setChecked(true)
                    }}
                >
                  <FilterAltIcon sx={{ color: "#000000" }} />
                </IconButton>
          
      </HeaderBar>

      <Toolbar>
        <input type="text" placeholder="Search..." style={{ width: 170 }} />
        <select style={{ width: 95 }}>
          <option>All</option>
          <option>Open</option>
          <option>Closed</option>
        </select>
        <span style={{ flex: 1 }} />
      </Toolbar>

      <Table aria-label="completed requests table" style={{ width: "100%" }}>
            {/* ✅ Table Head */}
            <EnhancedTableHead
              sx={{background:'#e5e6e7'}}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />

            {/* ✅ Table Body */}
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ color: "error.main" }}>
                    {error}
                  </TableCell>
                </TableRow>
              ) : visibleRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography>No data available</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledRow
                      key={row.id}
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      selected={isItemSelected}
                      onClick={() => handleRedirect(row.id)}
                    >
                      <StyledCell>
                        <Checkbox
                          checked={isItemSelected}
                          onClick={(e) => e.stopPropagation()} // prevent row redirect when clicking checkbox
                          onChange={(e, isChecked) => handleSelectRow(isChecked, row.id)}
                          inputProps={{ "aria-labelledby": labelId }}
                        />

                      </StyledCell>
                      <StyledCell onClick={(e) =>{e.stopPropagation()}
                      } fontSize="small" align="center"><IconButton><MailIcon /></IconButton></StyledCell>
                      <StyledCell  onClick={(e) => e.stopPropagation()} fontSize="small" align="center"><IconButton><EditIcon /></IconButton></StyledCell>
                      <StyledCell  onClick={(e) => e.stopPropagation()} fontSize="small" align="center"><IconButton><SummarizeIcon /></IconButton></StyledCell>

                      {/* <StyledCell padding="checkbox"></StyledCell> */}
                      <StyledCell component="th" id={labelId} scope="row">
                        <YellowDot />
                        {row.id}
                      </StyledCell>
                      <StyledCell>{row.firstName}</StyledCell>
                      <StyledCell>{row.lastName}</StyledCell>
                    </StyledRow>
                  );
                })
              )}
            </TableBody>
          </Table>

      <FilterDialogue
        open={open}
        setOpen={setOpen}
        checked={checked}
        setChecked={setChecked}
      />
    </StyledTableContainer>
  );
}
