import React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'

const SearchResult = (props) => {
  const { dataList } = props
  return (
    <Table
      sx={{
        maxWidth: '320px',
      }}
    >
      <TableHead>
        <TableRow>
          <TableCell
            sx={{
              fontWeight: '500',
            }}
          >
            Label
          </TableCell>
          <TableCell align="right">Score</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {dataList.map((item) => (
          <TableRow key={item.mid}>
            <TableCell>{item.description}</TableCell>
            <TableCell align="right">
              {Math.round(item.score * 100 * 10000) / 10000 + '%'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default SearchResult
