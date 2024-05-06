import './App.css';
import SocialMedia from './components/SocialMedia';
import { SocialInfo } from './types/SocialInfo';
import Twitter from './assets/twitter.svg';

function App() {
  const info: SocialInfo = {
    id: 1,
    title: "Twitter",
    url: "https://twitter.com/mrborghini_",
    image: Twitter,
  }
  return (
    <>
      <main>
        <SocialMedia socialInfo={info}></SocialMedia>
      </main>
    </>
  )
}

export default App
