import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function Header(props)

{
 const id = props.id;
 console.log(id)
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get(`http://localhost/chat/AdminPanel/individualUser.php?id=`+id)
        .then(res => {
            setUser(res.data.data[0])
            console.log(res.data.data[0])
        })
        .catch(err => console.log(err))
}, [])
    return(
        <>
       <div class=" p-2 flex flex-col justify-between">
                <div class="flex items-center justify-between gap-2 border-b-2 py-2 px-2 ">
                    <div className="flex items-center justify-start gap-2">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover rounded-full h-10 w-10"
                            alt=""
                        />  
                        {
                          (id == undefined) ? <p>Raju</p> : <Link to={`/profile/`+id}>{user.user_name}</Link>
                        }
                      
                        <p className='rounded-full bg-green-400 w-4 h-4 text-xs text-center'></p>
                    </div>
                    <div className="flex items-center justify-end gap-2 text-gray-500 dark:text-gray-400">
                        <svg class="w-4 h-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <svg class="w-5 h-5  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                    </div>  
                </div>
                
      </div>
</>
    );
}
export default Header;