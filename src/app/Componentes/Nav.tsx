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
    ]
    
    return(
        <nav>
            {lista.map((item,index) => <Link key={index} href={item.link}>
            {item.texto}
            </Link>)}
        </nav>

    )
  
}

export default Nav