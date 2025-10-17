import React from 'react'

const page = () =>{
return(
    <div className='h-screen bg-center bg-[url(https://images.alphacoders.com/140/thumb-1920-1401899.jpg)] bg-fixed bg-no-repeat bg-contain'>
        <div className='w-1/3'>
        <div className="text-left m-5">
            <h1>
            <h2 className='font-bold text-3xl m-5'>
                MY TIME IS NOW
            </h2>
            <p>
                John Cena inicio su carrera actoral en producciones vinculadas a la WWE cómo "The Marine (2006)" y "12 rounds (2009)". Sin embargo, fue en la comedia donde encontro su verdadero nicho, destacando en peliculas:
                <li className="text-left m-5">
                    <ul>
                        Trainwreck (2018)
                    </ul>
                    <ul>
                        Blockers (2018)
                    </ul>
                    <ul>
                        Playing with fire (2019)
                    </ul>
                </li>
            </p>
            
        </h1>
        </div>
        </div>
        
    </div>
)
}

export default page