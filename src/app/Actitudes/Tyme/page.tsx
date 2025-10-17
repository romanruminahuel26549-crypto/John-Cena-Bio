import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div className='h-screen bg-center bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b58fa450-6d82-4598-be4f-4fdd84e4d9ec/dhrp8o7-ce344738-381d-454a-a676-fefbdb8dd425.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iNThmYTQ1MC02ZDgyLTQ1OTgtYmU0Zi00ZmRkODRlNGQ5ZWMvZGhycDhvNy1jZTM0NDczOC0zODFkLTQ1NGEtYTY3Ni1mZWZiZGI4ZGQ0MjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.53JhDRDo4D2bXfrgpNW7F0zp3h8_ZXmNIh6Pv62wOKE)] bg-fixed bg-no-repeat bg-contain'>
    <div className='w-1/3'>
    <div className="text-left m-5">
        <h1>
            <h2 className='font-bold text-3xl m-5'>
                THE LAST TIME IS NOW. . .
            </h2>
        </h1>
        <Link href="/Actitudes">Volver</Link>
    </div>    
    </div>
    </div>
  )
}

export default page
