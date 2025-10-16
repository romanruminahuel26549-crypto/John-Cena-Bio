import react from 'react'
import Link from 'next/link'
import { link } from 'fs'

const Nav = () => {
    const lista = [
        
         {
        link:'/',
        texto:'ir a inicio'
        },
         {
        link:'/Actitudes',
        texto:'Actitudes'
        },
                 {
        link:'/Hacia Hollywood',
        texto:'Hacia Hollywood'
        },
    ]
    
    return(
        <nav style={{backgroundColor:'black', padding:'10px 20px', borderRadius:'5px', cursor:'pointer', margin:'15px', display:'flex', justifyContent:'space-between'}}>
            {lista.map((item,index) => <Link key={index} href={item.link}>
            {item.texto}
            </Link>)}
        </nav>

    )
  
}

export default Nav