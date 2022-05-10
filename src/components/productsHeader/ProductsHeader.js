import { Box, Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';


const useStyles = makeStyles(theme => ({
    cardContainer : {
       display : 'grid',
       gridTemplateColumns : '1fr',
       [theme.breakpoints.up('md')] : {
        gridTemplateColumns : '1fr 1fr 1fr',
        gridGap : '5px',
      
       }
    },
    colorFont:{
        color: '#FF6A97'
    },
    card: {
        fontSize: '2rem',
        color: '#FF6A97',
        textTransform : 'capitalize',
        textDecoration: 'none'
    }
})
)
const ProductsHeader = ({searchTitle, totalPages, data, catValue, isCatTrue, page, handlePage}) => {

    // pagination //
    const startIndex = ( page - 1 ) * 6
    const selectedFood = data.slice(startIndex, startIndex + 6)
    // pagination //


  const vCat = catValue

  
  const classes = useStyles()

  return (
    <>
    <Box className={classes.cardContainer} style={{ textAlign : 'center'}}>
     
       {
          isCatTrue ? selectedFood.filter(item => item.category === vCat).map(item => (
            <Grid item>
                <Link to={`/details/${item.id}`} className={classes.card}>
                    <Card style={{ background: '#fff', boxShadow: '#FF6A97 0px 1px 3px, #EE5B86 0px 1px 2px', margin : '10px'}} key={item.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.img} 
                            alt='image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: '#FF6A97', textTransform: 'capitalize'}}>
                                {item.title}
                            </Typography>
                            <Typography component="p" color="text.secondary">
                                {item.category}
                            </Typography>
                            <Typography component="p" color="text.secondary">
                                {item.price}$
                            </Typography>
                        </CardContent>
                    </Card>
                
                </Link>
            </Grid> 
         )) :  selectedFood.filter(val => {
            if(searchTitle == ""){
                return val
            }else if(val.title.toLowerCase().includes(searchTitle.toLowerCase())){
                return val
            }
        }).map(item => (
            <Grid item>
               <Link to={`/details/${item.id}`} className={classes.card}>
                    <Card style={{ background: '#fff', boxShadow: '#FF6A97 0px 1px 3px, #EE5B86 0px 1px 2px', margin : '10px'}} key={item.id}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.img} 
                            alt='image'
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ color: '#FF6A97', textTransform: 'capitalize'}}>
                                {item.title}
                            </Typography>
                            <Typography component="p" color="text.secondary">
                                {item.category}
                            </Typography>
                            <Typography component="p" color="text.secondary">
                                {item.price}$
                            </Typography>
                        </CardContent>
                    </Card>
                
                </Link>
            </Grid> 
         ))
      }

   
    </Box>
    <Stack spacing={2} direction='row' justifyContent='center' style={{margin: '50px 0'}}>
       <Pagination totalPages={totalPages} handlePage={handlePage}/>
    </Stack>
    </>
   
   
  )
}

export default ProductsHeader