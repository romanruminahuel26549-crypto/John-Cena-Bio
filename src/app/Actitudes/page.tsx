"use client"
import React from 'react'
import { useState } from 'react'

const page = () =>{
    const [pag,setPag]=useState(1)
        
   

    return(
        <div className='h-screen bg-center bg-[url(https://www.kupywrestlingwallpapers.info/wallpapers/2025/john-cena-heel-turn-wallpaper-ultrawide.jpg)] bg-fixed bg-no-repeat bg-contain'>
            <div className='w-1/3'>
                <h1 className='font-bold text-3xl m-5'>
                THE LAST REAL CHAMP
            </h1>
            
            <div className="text-left m-5">
                {pag==1 && <p>Sin embargo, lejos de ser un fenómeno de un solo éxito, Cena se instaló en la cima de la montaña y se negó a irse, instaurando una política de desafío abierto para cualquiera que creyera poder derrotarlo: Si quieres algo, ven a buscarlo. Y poco a poco, Cena, predicando una filosofía de "Esfuerzo, Lealtad, Respeto", no solo amasó un batallón de seguidores al que llamó la "Cenation", sino que también acumuló suficiente talento como para llenar un Home Depot.</p>}
            
            <br />
            <p>Cuando parecía que Cena pasaría a la historia como el mayor héroe en la historia de la WWE, sorprendió a todos cuando vendió su alma a The Rock en Elimination Chamber 2025, se alió con The Final Boss y reprendió al Universo WWE por nunca corresponder al amor que les mostró durante su histórica carrera de 20 años.
                Con su nueva actitud y su aliado Travis Scott, Cena se abrió camino a lo bestia para llevarse a casa su 17° título mundial en WrestleMania 41.</p>
            </div>
            </div>
            <button onClick={()=>setPag(pag + 1)}>{pag}</button>
        </div>
    )  
}

export default page