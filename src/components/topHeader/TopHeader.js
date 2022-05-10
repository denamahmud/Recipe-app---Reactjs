import { Search } from "@mui/icons-material"
import { Box, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Modal, Select} from "@mui/material"
import { makeStyles } from '@mui/styles'
import { useState } from "react"



const useStyles = makeStyles(theme => ({
    boxControl : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        outline: 'none',
       
    },
    stack: {
        position: 'relative',
        display : 'flex',
        flexDirection : 'row',
        margin : '10px',
        padding: '50px',
        justifyContent : 'space-around'
    },
    icon: {
      textTransform : 'capitalize',
      cursor: 'pointer'
      
    },
    formControl : {
      width : '300px',
      backgroundColor : '#FF6A97',
      borderRadius : '5px',
      [theme.breakpoints.up('md')] : {
        width : '700px',
        margin : 'auto'
      }
    },
    inputStyle : {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      width: '100%',
      padding : '8px',
    },
  
    formCat : {
        width: '50%',
       
    }

}) 
)

const TopHeader = ({ cat, handleCategory, searchTitle, handleSearch}) => {

    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Box className={classes.stack}>
       
        <Grid item>
            <Box>
                <Search className={classes.icon} onClick={handleOpen}/>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box className={classes.boxControl}>
                        <FormControl className={classes.formControl}>
                            <input type="search" value={searchTitle} onChange={handleSearch} className={classes.inputStyle} placeholder='search ..'/>
                            <FormHelperText/>
                        </FormControl>

                    </Box>
                </Modal>
            </Box>
            
        </Grid>
        <Grid item className={classes.formCat}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Category"
                    onChange={handleCategory}
                >
                {
                    cat.map(item => (
                        
                        <MenuItem value={item.category}>{item.category}</MenuItem>
                     
                    ))
                }
                </Select>
            </FormControl>
        </Grid>
    </Box>
  )
}

export default TopHeader