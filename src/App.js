import { Container } from '@mui/material';
import Logo from './components/Logo';
import Home from './pages/Home';
import { Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import DetailsProduct from './pages/DetailsProduct';
import food from './data.json'


const theme = createTheme({
  palette: {
      primary: {
        main: '#565656'
      }
  }
})

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Logo/>
        <HashRouter>
          <Routes>
            <Route exact path='/' element={<Home data={food.foods}/>}/>
            <Route exact path='/details/:id' element={<DetailsProduct data={food.foods}/>}/>
          </Routes>
        </HashRouter>
      </Container>
    </ThemeProvider>
   

  )
}

export default App