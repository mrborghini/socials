import { mySocials } from '../MySocials';
import SocialMedia from '../components/SocialMedia';
import { ReactElement } from 'react';
import LoadingScreen from './LoadingScreen';

function Home(): ReactElement {
    const socialMediaElements: ReactElement[] = [];
    for (let i = 0; i < mySocials.length; i++) {
        socialMediaElements.push(<SocialMedia key={mySocials[i].id} socialInfo={mySocials[i]} />);
    }

    return (
        <main className='Home'>
            <LoadingScreen></LoadingScreen>
            {socialMediaElements}
        </main>
    );
}

export default Home;
