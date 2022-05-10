import { Box } from "@mui/system"
import { useParams } from "react-router"
import Details from "../components/details/Details"
import Trending from '../components/trending/Trending'

const DetailsProduct = ({ data }) => {

  const params = useParams()

  return (
    <Box style={{width : '100%'}}>
      <Details data={data} params={params}/>
      <Trending data={data}/>
    </Box>
  )
}

export default DetailsProduct