import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function List() {
    const [close, setClose] = useState(false)
    const [user, setUser] = useState([])
    const handleLogout = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('jwt')
    }
    useEffect(() => {
        axios.get(`http://localhost/chat/AdminPanel/user.php`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("jwt")
            }
        })
            .then(res => {
                setUser(res.data.data)
                console.log(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div >
            <div class="flex flex-col xl:w-72 h-full sm:w-96  mx-2 overflow-y-auto">
                <div class="flex justify-between border-b-2 items-center py-4 px-2 ">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-72 xl:w-64  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Here..." />

                    </div>

                    <div >
                        <div class="relative inline-block text-left">
                            <div>
                                <a onClick={() => setClose(!close)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="8" viewBox="0 0 128 512">
                                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                                    </svg>
                                </a>
                            </div>

                            {
                                close ? (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <div class="py-1" role="none">
                                        <Link to='/profile' class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Profile</Link>
                                        <Link to="/login" onClick={handleLogout} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Logout</Link>

                                    </div>
                                </div>) : null
                            }

                        </div>


                    </div>

                </div>
                {/* {
                    user?.map((element, index) => {
                        return (
                            <div className="flex flex-row py-2  px-2 items-center">
                                <div class="w-1/4">
                                    <img
                                        src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                                        class="object-cover h-8 w-8 rounded-full"
                                        alt=""
                                    />
                                </div>
                                <div class="w-full">
                                    <Link to={`/chat/`+ element.userId} class=" flex justify-between text-sm font-semibold">{element.user_name}
                                    <p className='text-xs text-gray-500' >9:00 Am</p>
                                </Link>
                                <div class="flex text-xs justify-between text-gray-500">Pick me at
                                    <p className='rounded-full bg-green-400 w-4 h-4 text-xs text-center'>1</p>
                                </div>
                                </div>
                                
                            </div>

                        );
                    })
                } */}
                <div
                    class="flex flex-row py-2  px-2 items-center "
                >

                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>

                    <div class="w-full">
                        <Link to='/chat' class="text-sm font-semibold">Steve Smith</Link>
                        <p class="text-gray-500 text-xs">Lusi : Thanks Everyone</p>
                    </div>
                </div>
                <div
                    class="flex flex-row py-2 px-2 justify-center items-center "
                >
                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="w-full">
                        <div class=" flex justify-between text-sm font-semibold">Luis1994
                            <p className='text-xs text-gray-500' >9:00 Am</p>
                        </div>
                        <div class="flex text-xs justify-between text-gray-500">Pick me at
                            <p className='rounded-full bg-green-400 w-4 h-4 text-xs text-center'>1</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row py-2 px-2 items-center ">
                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/otT2199XwI8/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="w-full">
                        <div class=" flex justify-between text-sm font-semibold">Sam
                            <p className='text-xs text-gray-500' >10:00 Am</p>
                        </div>
                        <div class="flex text-xs justify-between text-gray-500">Hi Sam, Welcome
                            <p className='rounded-full bg-green-400 w-4 h-4 text-xs text-center'>1</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row py-2 px-2 items-center ">
                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="w-full">
                        <div class=" flex justify-between text-sm font-semibold">Henry
                            <p className='text-xs text-gray-500' >10:00 Am</p>
                        </div>
                        <div class="flex text-xs justify-between text-gray-500">Hi Henry, Welcome
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row py-2 px-2 items-center ">
                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="w-full">
                        <div class=" flex justify-between text-sm font-semibold">Evan
                            <p className='text-xs text-gray-500' >10:00 Am</p>
                        </div>
                        <div class="flex text-xs justify-between text-gray-500">Evan : some one can fix this
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row py-2 px-2 items-center ">
                    <div class="w-1/4">
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="w-full">
                        <div class=" flex justify-between text-sm font-semibold">Michel Richard
                            <p className='text-xs text-gray-500' >10:00 Am</p>
                        </div>
                        <div class="flex text-xs justify-between text-gray-500">some one can fix this
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default List;

