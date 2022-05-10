import { CardMedia, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { createRef } from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({

    boxText: {
        padding: '20px 0',
        width: '300px',
        margin: '20px auto'
    },
    styleFont: {
        color: '#FF6A97',
        borderWidth: '0 2px',
        borderColor: '#FF6A97',
        borderStyle: 'solid',
        textAlign: 'center',
        width: '100%',
        textTransform: 'capitalize'
       
    },
    styleCircle: {
        backgroundColor: '#FF6A97',
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        textAlign: 'center',
        margin: '20px',
        lineHeight: '3.5',
        cursor: 'pointer'
    },
    styleIcon: {
        color: '#fff',
    },
    sliding: {
        overflow: 'hidden',
        width:'100%'
    },
    imgSlide: {
        objectFit : 'cover',
        height: '200px',
        width: '200px',
        borderRadius : '10px'
    }
})

const Foods = ({ data }) => {

    const myRef = createRef()
  
    const clickLeft = () => {
  
      const slide = myRef.current
      slide.scrollLeft -= slide.offsetWidth
      if(slide.scrollLeft <= 0){
          slide.scrollLeft = slide.scrollWidth
      }
      
    }
    const clickRight = () => {
      const slide = myRef.current
      slide.scrollLeft += slide.offsetWidth
      if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)){
          slide.scrollLeft = 0
      }
    }
    const classes = useStyles()

  return (
    <Box className={classes.styleBox}>
        <Box className={classes.boxText}>
        <Typography className={classes.styleFont}>food</Typography>
        </Box>
        <Stack direction='row' spacing={4} className={classes.sliding} ref={myRef}>
            {
            data.map(item => (
                <Link to={`/details/${item.id}`} className={classes.card} key={item.id}>
                   <img src={item.img} alt={item.title} className={classes.imgSlide}/>
                </Link>
                
                ))
            }
    </Stack>

    <Stack direction='row' justifyContent='center'>
        <Box className={classes.styleCircle} onClick={clickLeft}>
            <ArrowLeftIcon className={classes.styleIcon}/>
        </Box>
        <Box className={classes.styleCircle} onClick={clickRight}>
            <ArrowRightIcon className={classes.styleIcon}/>
        </Box>
        

    </Stack>
    </Box>
  )
}

export default Foods