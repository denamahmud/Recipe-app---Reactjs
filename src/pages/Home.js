import { Box } from '@mui/material'
import ProductsHeader from '../components/productsHeader/ProductsHeader'
import TopHeader from '../components/topHeader/TopHeader'
import Trending from '../components/trending/Trending'
import Foods from '../components/foods/Foods'
import category from '../data.json'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = ({ data }) => {


  const [search] = useState('')
  const [catValue, setCatValue] = useState([])
  const [isCatTrue, setCatTrue] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")

  // pagination //
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const handlePage = (num) => {
      setPage(num)
  }
  // pagination //


 
  useEffect(() => {
     setTotalPages(Math.ceil(data.length / 6))
  }, [data])

  const handleCategory = (e) =>{
      setCatValue(e.target.value)
      setCatTrue(true)
  }

  const handleSearch = (e) => {
    setSearchTitle(e.target.value)
  }
  return (
    <Box>
     
        <TopHeader handleCategory={handleCategory} searchTitle={searchTitle} cat={category.categories} handleSearch={handleSearch}/>
        <ProductsHeader isCatTrue={isCatTrue}  searchTitle={searchTitle} handlePage={handlePage} totalPages={totalPages} catValue={catValue} search={search} data={data} page={page}/>
        <Trending data={data}/>
        <Foods data={data}/>
    </Box>
  )
}

export default Home