"use client"
import React from 'react'
import { useState } from 'react'

const page = () =>{
    const [pag,setPag]=useState(true)
             
    return(
        <div className='h-screen bg-center bg-[url(https://www.kupywrestlingwallpapers.info/wallpapers/2025/john-cena-heel-turn-wallpaper-ultrawide.jpg)] bg-fixed bg-no-repeat bg-contain'>
            <div className='w-1/3'>
            <h1 className='font-bold text-3xl m-5'>
                THE LAST REAL CHAMP
            </h1>
            
            <div className="text-left m-5"> 
            {pag ?(
             <h1>
                <h2 className='font-bold text-3xl m-5'>
                    INICIO
                </h2>
                <p>Sin embargo, lejos de ser un fenómeno de un solo éxito, Cena se instaló en la cima de la montaña y se negó a irse, instaurando una política de desafío abierto para cualquiera que creyera poder derrotarlo: Si quieres algo, ven a buscarlo. Y poco a poco, Cena, predicando una filosofía de "Esfuerzo, Lealtad, Respeto", no solo amasó un batallón de seguidores al que llamó la "Cenation", sino que también acumuló suficiente talento como para llenar un Home Depot.</p>
                <br />
                <p>Cuando parecía que Cena pasaría a la historia como el mayor héroe en la historia de la WWE, sorprendió a todos cuando vendió su alma a The Rock en Elimination Chamber 2025, se alió con The Final Boss y reprendió al Universo WWE por nunca corresponder al amor que les mostró durante su histórica carrera de 20 años.
                Con su nueva actitud y su aliado Travis Scott, Cena se abrió camino a lo bestia para llevarse a casa su 17° título mundial en WrestleMania 41.</p>
            </h1>
            ) : (
                <h1>
                <p>
                    John Cena empezó a entrenar para ser un luchador profesional en 1998, bajo la tutela de Tom Howard en la Ultimate Pro Wrestling (UPW). Una vez allí, comenzó a usar el gimmick de un semi-cyborg conocido como The Prototype. Este período de su carrera fue guardado en el programa de Discovery Channel Inside Pro Wrestling School​ Mientras estuvo en la promoción, logró ganar el Campeonato de Peso pesado de la UPW.
                </p>
                <br />
                <p>
                    En el 2001, John Cena firmó con la World Wrestling Federation (WWF) un contrato de desarrollo, siendo enviado al territorio de desarrollo de entonces, la Ohio Valley Wrestling (OVW), donde continuó entrenando.[15]​ Durante su estancia en la OVW, peleó bajo los nombres de The Prototype y Mr. P. Ahí empezó a luchar junto a Rico, con quien ganó el Campeonato Sureño en Parejas de la OVW al derrotar a Dysciples of Synn. Sin embargo, lo perdieron el 30 de octubre ante Minnesota Stretching Crew (Shelton Benjamin & Brock Lesnar). El 20 de febrero de 2002 ganó el Campeonato Peso Pesado de la OVW al derrotar a Leviathan, el cual retuvo durante tres meses hasta que el 15 de mayo lo perdió ante Nova.
                </p>
                </h1>
            )
            }
            <button style={{backgroundColor:'black', padding:'10px 20px', borderRadius:'5px', cursor:'pointer', margin:'15px'}} onClick={()=>setPag(!pag)}>{pag ? "ir adelante" : "volver" }</button>
            </div>
            </div>
        </div>
    )  
}

export default page