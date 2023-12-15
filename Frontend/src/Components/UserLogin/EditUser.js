import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function EditUser() {
    const navigate = useNavigate();
    const {id} = useParams()
    const formData = new FormData();
    const [userdata, setUserdata] = useState({
        user_name: '',
        user_profile: ''
    })

    useEffect(() => {
        axios.get(`http://localhost/chat/AdminPanel/individualUser.php?id=`+id)
            .then(res => {
                setUserdata(res.data.data[0])
                console.log(res.data.data[0])
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        formData.append('user_name', userdata.user_name)
        formData.append('user_profile', userdata.user_profile)

        await axios.post(`http://localhost/chat/AdminPanel/EditUser.php?id=`+id, formData
        )
            .then(res => {
                console.log(res)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>

            <div class="min-h-screen flex flex-col items-center px-64 justify-center bg-gray-300">
                <div class="flex flex-col bg-white shadow-md px-8 py-8 rounded-md w-full ">
                    <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Update Your Account</div>
                  
                    <div class="mt-10">
                        <form onSubmit={handleSubmit} encType="multipart/form-data" method='post'>
                        <div class="flex flex-col mb-6">
                                <label for="name" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Full Name:</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                    <input id="name" type="text" name="user_name" class="text-sm sm:text-base text-gray-500 placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                        placeholder="Full Name" 
                                        value={userdata.user_name} 
                                        onChange={(e) => setUserdata({ ...userdata, user_name: e.target.value })} />
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Email:</label>
                                <div class="relative">
                                    <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>

                                    <input id="email" type="email" disabled name="email" value={userdata.user_email} onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                                     class="text-sm sm:text-base text-gray-500 placeholder-gray-500 pl-10 pr-4 bg-gray-300 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                                </div>
                            </div>
                            <div class="flex flex-col mb-6">
                                <label for="file" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                                    Choose your profile photo:</label>
                                <input id="file" type="file" name="user_profile" 
                                onChange={(e) => setUserdata({ ...userdata, user_profile: e.target.files[0] })}
                                     class="text-sm text-gray-500 sm:text-base placeholder-gray-500 pl-2 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                                
                            </div>
                          

                            <div class="flex w-full">
                                <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                    <span class="mr-2 uppercase">Update</span>
                                    <span>
                                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="flex justify-center items-center mt-6">
                        <Link to="/home"  class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>
                                <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </span>
                            <span class="ml-2">Go to Home Page</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EditUser;

