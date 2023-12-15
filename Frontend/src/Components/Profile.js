import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Profile() {
    const {id} = useParams()
    const [user, setUser] = useState([])
    useEffect(() => {
      axios.get(`http://localhost/chat/AdminPanel/individualUser.php?id=`+id)
          .then(res => {
              setUser(res.data.data[0])
              console.log(res.data.data[0])
          })
          .catch(err => console.log(err))
  }, [])
    return (
        <div>
            <div class="xl:w-72 bg-gray-100 px-5">
                <div class="border-b-2 py-4 px-2 ">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Here..." />

                    </div>
                </div>
                <div class="flex flex-col items-center">

                    <img
                        src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                        class="object-cover rounded-full mt-2 h-28 w-28"
                        alt=""
                    />
                    {
                        id== undefined ? <div class="font-semibold text-xl">Raju</div>
                        : <div class="font-semibold text-xl">{user.user_name}</div>
                    }
                    
                    <div className="font-semibold"><p >Junior Developer</p></div>
                    <div class="flex justify-center items-center gap-8 font-light py-4">
                        <a >
                            <svg class='' xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="rgb(96, 165, 250)" viewBox="0 0 512 512">
                                <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                            </svg>                        
                            <p className="text-sm ">Chat</p>
                        </a>

                        <a class="h-8 bg-gray-300 w-[0.1rem]"></a>
                        <a >
                            <svg class='pl-2 w-10 h-8' xmlns="http://www.w3.org/2000/svg" height="28" width="28" fill="rgb(96, 165, 250)" viewBox="0 0 576 512">
                                <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                            </svg>
                            <p className="text-sm text-center">Vedio Call</p>
                        </a>
                    </div>

                    <div class="flex justify-center items-center gap-4 font-light py-2">
                        <a className="flex justify-between gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                            </svg>
                            <p className="text-sm">View Friends</p>
                        </a>
                        <a className="flex gap-2 justify-between items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                            </svg>
                            <p className="text-sm">Add to Favourites</p>
                        </a>
                    </div>

                    <div className="py-4">
                        <p className="flex justify-start">Attachments</p>
                        <div class="flex justify-center text-center items-center gap-4 font-light py-2">
                            <a className="bg-blue-200 w-10 h-10 items-center rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="rgb(96, 165, 250)" viewBox="0 0 512 512">
                                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                                </svg>
                                <p className="text-[0.5rem] text-blue-400">PDF</p>
                            </a>
                            <a className="bg-blue-200 w-10 h-10 items-center rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="rgb(96, 165, 250)" viewBox="0 0 512 512">
                                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
                                </svg>
                                <p className="text-[0.5rem] text-blue-400">VEDIO</p>
                            </a>

                            <a className="bg-blue-200 w-10 h-10 items-center rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="rgb(96, 165, 250)" viewBox="0 0 512 512">
                                    <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
                                </svg>
                                <p className="text-[0.5rem] text-blue-400">MP3</p>
                            </a>

                            <a className="bg-blue-200 w-10 h-10 items-center rounded p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="rgb(96, 165, 250)" viewBox="0 0 512 512">
                                    <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                                </svg>
                                <p className="text-[0.5rem] text-blue-400">IMAGE</p>
                            </a>
                        </div>
                        <p className="flex mx-16 justify-center text-blue-400 border border-blue-400 text-xs rounded-full">View All</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;