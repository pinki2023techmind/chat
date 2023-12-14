import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ChatPage() {
    const navigate = useNavigate()
    const {id} = useParams()
    const formData = new FormData();
    const incomingUserId = localStorage.getItem('id')
    const [msg, setMsg] = useState()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        formData.append('id', id)
        formData.append('incomingUserId', incomingUserId)
        formData.append('msg', msg)

        await axios.post(`http://localhost/chat/AdminPanel/addMsg.php`, formData
        )
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    
    return (

        <div className="md:w-full bg-white overflow-y-auto">
            <div class=" p-2 flex flex-col justify-between">
                <div class="flex items-center justify-between gap-2 border-b-2 py-2 px-2 ">
                    <div className="flex items-center justify-start gap-2">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover rounded-full h-10 w-10"
                            alt=""
                        />  <p>Steve Smith</p>
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
                <div class="flex flex-col mt-3 ">
                    <div class="flex items-center justify-end mb-2">
                        <div
                            class="mr-2 text-xs xl:text-sm  py-3 px-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                        >
                            Welcome to group everyone !
                        </div>
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span class="absolute px-3 text-sm text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                            Yesterday
                        </span>
                    </div>
                    <div class="flex justify-start my-2">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            class="ml-2 xl:w-72 w-56 text-xs xl:text-sm text-black py-3 px-2 bg-blue-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl "
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                            at praesentium,   consequatur quas?
                        </div>
                    </div>
                    <div class="flex justify-end mb-2">
                        <div>
                            <div
                                class="mr-2 xl:w-72 w-56  text-xs xl:text-sm  py-3 px-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Magnam, repudiandae.
                            </div>

                            <div
                                class="mt-4 xl:w-72 w-56  text-xs xl:text-sm  mr-2 py-3 px-2 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Debitis, reiciendis!
                            </div>
                        </div>
                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                    <div class="flex justify-start mb-2">
                        <img
                            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                            class="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                        <div
                            class="ml-2 text-xs xl:text-sm text-black py-3 px-2 bg-blue-100 rounded-br-3xl rounded-tr-3xl rounded-tl-xl "
                        >
                            happy holiday guys!
                        </div>
                    </div>
                </div>

            </div>

            <footer class="bg-blue-100 shadow dark:bg-gray-900">
                <div class="w-full max-w-screen-xl mx-auto p-2 md:py-4">
                    <form onSubmit={handleSubmit} className=" flex justify-between gap-4 items-center px-2 ">
                   
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-6 h-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                                </svg>
                            </div>
                            <input type="number" className="hidden" name="id" value={id}/>
                            <input type="number" className="hidden" name="incomingUserId" value={incomingUserId}/>
                            <input type="text" name='msg' onChange={(e)=>setMsg(e.target.value)} class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write Something..." />
                            <div class="absolute inset-y-0 end-0 flex items-center pe-3  pointer-events-none">
                                <a class="h-8  bg-gray-300 w-[0.1rem]"></a>
                                <svg class="w-6 h-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                </svg>
                                <svg class="w-6 h-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                                </svg>
                                <svg class="w-6 h-6 text-blue-500 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                </svg>

                            </div>
                        </div>
                        <button type="submit" className=" rounded-full p-2 bg-blue-400 pe-2">
                            <svg class="w-6 h-6 text-white dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                </div>
            </footer>


        </div>

    );
}
export default ChatPage;