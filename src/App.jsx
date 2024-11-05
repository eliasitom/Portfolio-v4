import './App.css'

import ImageSlider from './assets/components/ImageSlider'
import VideoSlider from './assets/components/VideoSlider';
import SectionSeparator from "./assets/components/SectionSeparator";
import NotificationModal from './assets/components/NotificationModal';

import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function App() {

  return (
    <div className='app'>
      <header className='main-header'>
        <h1>
          Elías Espondaburu
        </h1>
        <h3>
          illustrator & animator
        </h3>
        <div className='contact-methods'>
        <NotificationModal link={"eliasespondaburu@gmail.com"} icon={IoMail} />
        <NotificationModal link={"elias_espondaburu"} icon={FaDiscord} />
        </div>
      </header>
      <div className='main-body'>
        <SectionSeparator title={"Character Illustrations"} />
        <ImageSlider />
        <SectionSeparator title={"Character Animations"} />
        <VideoSlider />
      </div>
    </div>
  )
}

export default App
