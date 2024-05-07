import { mySocials } from '../MySocials';
import SocialMedia from '../components/SocialMedia';
import { ReactElement } from 'react';

function Home(): ReactElement {
    const socialMediaElements: ReactElement[] = [];
    for (let i = 0; i < mySocials.length; i++) {
        socialMediaElements.push(<SocialMedia key={mySocials[i].id} socialInfo={mySocials[i]} />);
    }

    return (
        <main className='Home'>
            {socialMediaElements}
        </main>
    );
}

export default Home;
