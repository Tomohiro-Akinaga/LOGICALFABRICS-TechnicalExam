import { useState } from 'react'
import googleAPI from './api/googleAPI'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/400.css'
import SearchResult from './components/SearchResult/SearchResult'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css'

const App = () => {
  const [searchUrl, setSearchUrl] = useState('')
  const [dataList, setDataList] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const getDataFromApi = async () => {
    if (!searchUrl) return

    setIsLoading(true)
    const data = await googleAPI.getTestData(searchUrl)
    setDataList(data)
    setIsLoading(false)
  }

  return (
    <div className="App">
      <Typography
        variant="h5"
        component="h1"
        sx={{
          marginBottom: '20px',
        }}
      >
        Example App / Exam v2
      </Typography>
      <SearchBar
        setSearchUrl={setSearchUrl}
        isLoading={isLoading}
        getDataFromApi={getDataFromApi}
      />
      {dataList && <SearchResult dataList={dataList} />}
    </div>
  )
}

export default App
