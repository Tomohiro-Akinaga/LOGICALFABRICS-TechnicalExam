import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import './searchBar.css'

const SearchBar = (props) => {
  const { setSearchUrl, isLoading, getDataFromApi } = props

  const handleChange = (e) => {
    setSearchUrl(e.currentTarget.value)
  }
  const handleClick = () => {
    getDataFromApi()
  }

  return (
    <div className="searchBar">
      <TextField
        label="Image URL"
        InputLabelProps={{ shrink: true }}
        onChange={handleChange}
        disabled={isLoading}
        sx={{
          marginRight: '10px',
        }}
        inputProps={{
          style: {
            height: '10px',
          },
        }}
      />
      <Button variant="contained" onClick={handleClick} disabled={isLoading}>
        <FindInPageIcon
          sx={{
            marginRight: '8px',
          }}
        />
        {isLoading ? 'ANALYZING...' : 'ANALYZE'}
      </Button>
    </div>
  )
}

export default SearchBar
