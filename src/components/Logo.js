import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({

    logoContainer : {
      width: '300px',
      textAlign: 'center',
      margin: '30px auto 0',

    },
    logo :{
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
        component='div'
        className={classes.logoContainer}
    >

       <Typography 
          component='div'
          className={classes.logo} style={{fontSize : '2rem'}}>
         
            recipe app
       </Typography>
    </Box>
  )
}

export default Logo