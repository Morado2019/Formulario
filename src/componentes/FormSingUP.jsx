import { useState  } from "react";
import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import Switch from '@mui/material/Switch';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSingUP({handleSubmit}) {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setPromo] = useState(true)
    const [nov, setNov] = useState(false)

    const [ errors, setErrors] = useState({
        name: {
            error: false,
            mesagge: 
            "pone la madre " 
        }

    })

    function validarNombre(nombre){
       if(nombre.length >= 3){
        return { name: { error: false, mesagge: "" }}
       }else {
        return { name: { error: true, mesagge: "pone la madre "}}
       }

    }

return (
<form onSubmit={(e) =>{
   e.preventDefault()
   handleSubmit
   ({name,lastName,email,nov,prom,})
}}>
< TextField 
        id = "name"
        label = "Nombre"
        variant = "outlined" 
        fullWidth={true}
        margin="normal"
         onChange={(e) => {
            console.log(e.target.value)
            setName(e.target.value)
        }}  
        value={ name }
        error={ errors.name.error}
        helperText={ errors.name.error ? errors.name.mesagge: ""}

        onBlur={(e) =>{
           setErrors(validarNombre(e.target.value))

        }
        
        }

        />

    <TextField 
        id="lastName" 
        label="Apellido" 
        variant="outlined"
        fullWidth 
        margin="normal"
        value={lastName}
        onChange={(e) =>
             setLastName(e.target.value)}
    />

    <TextField 
        id="Email" 
        label="Email" 
        variant="outlined" 
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) =>
             setEmail(e.target.value)}
        
    />

   <FormGroup> 
   <FormControlLabel control={
    <Switch 
    checked={prom} 
     onChange={(e)=>
    setPromo
    (e.target.checked)}
     /> 
   }  
   label="promociones" />
    
   <FormControlLabel 
   control={<Switch
     checked={nov} 
     onChange={(e)=> setNov
    (e.target.checked)}
    />
}
   label="novedades"
   />

    </FormGroup>

<Button 
variant="contained" type="sudmit">
    Registrarse online</Button>
    </form>
) 
}
  

export default FormSingUP