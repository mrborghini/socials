import SocialMedia from '../components/SocialMedia';
import { SocialInfo } from '../types/SocialInfo';
import Twitter from '../assets/twitter.svg';
import Youtube from '../assets/youtube.svg';
import { ReactElement } from 'react';

function Home(): ReactElement {
    const info: SocialInfo[] = [{
        id: 1,
        title: "mrborghini_",
        url: "https://twitter.com/mrborghini_",
        image: Twitter,
        alt: "twitter-logo"
    },
    {
        id: 2,
        title: "mrborghini",
        url: "https://www.youtube.com/channel/UCnRW7gN7dpmD7rCixHKHXfw",
        image: Youtube,
        alt: "youtube-logo"
    }];

    const socialMediaElements: ReactElement[] = [];
    for (let i = 0; i < info.length; i++) {
        socialMediaElements.push(<SocialMedia key={info[i].id} socialInfo={info[i]} />);
    }

    return (
        <main className='Home'>
            {socialMediaElements}
        </main>
    );
}

export default Home;
