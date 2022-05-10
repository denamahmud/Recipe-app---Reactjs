import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({

    logoContainer : {
      width: '300px',
      textAlign: 'center',
      margin: '30px auto 0',

    },
    logo :{
      fontSize: '4rem',
      color: '#FF6A97',
      textTransform : 'capitalize',
      textDecoration: 'none',
      position:'relative',
      zIndex: '2000'
    }
}) 
const Logo = () => {

  const classes = useStyles()

  return (
    <Box
        variant='h5'
        component='h5'
        fontWeight='bold'
        className={classes.logoContainer}
    >

       <Typography 
          component='h3'
          className={classes.logo}>
            recipe app
       </Typography>
    </Box>
  )
}

export default Logo