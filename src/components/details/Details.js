import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Details = ({ data, params }) => {




  return (
    <Box style={{width : '100%'}}>

      <Box style={{marginTop : '50px'}}>
      {
        data.filter(item => item.id == params.id).map(item => (
            <Box key={item.id} style={{display : 'flex', justifyContent : 'center', width : '50%', margin : 'auto'}}>
                <img src={item.img} alt={item.title} style={{ width : '250px', height : '250px', marginRight : '20px', objectFit : 'cover', borderRadius : '10px'}}/>
                <Box style={{ width : '50%'}}>

                  <Typography component='div' style={{ color : '#FF6A97', textTransform : 'capitalize', marginTop : '10px', fontSize : '1.5rem'}}>
                        {item.title}
                  </Typography>
                  <Typography component='div' style={{ marginTop : '10px'}}>
                        {item.category}
                  </Typography>
                  <Typography component='div' style={{ marginTop : '10px'}}>
                        {item.price} $
                  </Typography>
                  <Typography component='div' style={{ marginTop : '10px'}}>
                        {item.desc}
                  </Typography>
                </Box>
            </Box>
        ))

      }
    
    
    
       </Box>
    </Box>
  )
}

export default Details