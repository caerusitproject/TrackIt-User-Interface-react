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
  const handleSelectRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const isSelected = (id) => selected.includes(id);

  const handleRedirect = (id)=>{
    navigate(`/ticket/${id}`)
  }

  return (
  
    <StyledTableContainer component={Paper}>
      <HeaderBar>
        <FolderIcon />
        My Completed Requests
        <span style={{ flex: 1 }} />
        <Button variant="outlined" size="small">
          <RefreshIcon />
        </Button>
        <Button variant="outlined" size="small">
          <SettingsIcon />
        </Button>
          <Button variant="outlined" onClick={()=>{
            setOpen(true)
            // setChecked(true)
          }}
          size="small">
          <FilterAltIcon />
        </Button>
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
          ) : rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <Typography>No data available</Typography>
              </TableCell>
            </TableRow>
          ) : (
            <>
              {/* ✅ Table Header with Select All */}
              <StyledHeaderRow>
                <StyledHeaderCell padding="checkbox">
                  <Checkbox
                    checked={rows.length > 0 && selected.length === rows.length}
                    indeterminate={selected.length > 0 && selected.length < rows.length}
                    onChange={handleSelectAll}
                  />
                </StyledHeaderCell>
                <StyledHeaderCell>ID</StyledHeaderCell>
                <StyledHeaderCell>First Name</StyledHeaderCell>
                <StyledHeaderCell>Last Name</StyledHeaderCell>
              </StyledHeaderRow>

              {/* ✅ Table Data with Row Checkboxes */}
              {rows.map((row) => (
                <StyledRow key={row.id} selected={isSelected(row.id)} onClick={() => handleRedirect(row.id)}>
                  <StyledCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(row.id)}
                      onClick={(e) => e.stopPropagation()}   // Prevent row click
                      onChange={() => handleSelectRow(row.id)}
                    />
                  </StyledCell>
                  <StyledCell>
                    <YellowDot />
                    {row.id}
                  </StyledCell>
                  <StyledCell>{row.firstName}</StyledCell>
                  <StyledCell>{row.lastName}</StyledCell>
                </StyledRow>

              ))}
            </>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={5}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
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
