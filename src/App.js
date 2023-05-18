
import './App.css';
import { Container } from '@mui/material';
import FormSingUPrmSingUPFoault from './componentes/FormSingUP';
import Typography from '@mui/material/Typography';
import FormSingUP from './componentes/FormSingUP';
function App() {

const handleSubmit = ( valores ) => {
  console.log('APPjs: ', valores)
} 

  return (
    <Container component="section" maxWidth="sm">
    <Typography variant='h3' align='center' component="h1">Formulario Registro</Typography>
    <FormSingUP handleSubmit= {handleSubmit}/>
  
    </Container>
  );
}

export default App;
