import ChatPage from "./ChatPage";
import List from "./List";
import Profile from "./Profile";
import {isMobile} from 'react-device-detect';

function Home() {
  return (

      <div class=" shadow-lg ">
        <div class="xl:flex flex-row justify-between  bg-gray-100">
            <List/>
            <ChatPage/>
            <Profile/>
        </div> 

        {/* {
            (isMobile) ? (<div class="flex flex-row justify-between bg-gray-100">
            <List/>
           
        </div>) : (  <div class="xl:flex flex-row justify-between bg-gray-100">
            <List/>
            <ChatPage/>
            <Profile/>
        </div>  )
        }        */}

      </div>
  );
}

export default Home;
