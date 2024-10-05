import { useState, useEffect } from "react"
import axios from "axios"

const Usuarios = () => {
    const [error, setError] = useState("")
    const [usuarios, Setusuarios] = useState([])
    const [loading, setLoading] = useState(true)

   
    useEffect(() => {
        setTimeout( async () => {
            try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/users');
              Setusuarios(response.data) 
            } catch(error) {
                setError("Erro inesperado.")
            }
        
            finally{setLoading(false)}
           
        }, 1000)

    },[])

    if(loading){
        return(
            <p>carregando...</p>
        )
    }
    
    if (error) {
        return <p>{error}</p>; 
    }

  return (
    <div>
        <h1>Lista de usuarios</h1>
        <ul>
            {usuarios.map((user, index) => (
            <li key={index}>{user.name}, {" "}{user.email}</li>
            ))}
        </ul>
    </div>
  )
}

export default Usuarios
