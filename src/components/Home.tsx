import { mySocials } from '../MySocials';
import SocialMedia from '../components/SocialMedia';
import { ReactElement, useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

function Home(): ReactElement {
    const [socialMediaElements, setSocialMediaElements] = useState<ReactElement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImage = (url: string) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
            });
        };

        const loadImages = async () => {
            const elements: ReactElement[] = [];
            const promises = [];

            for (let i = 0; i < mySocials.length; i++) {
                promises.push(loadImage(mySocials[i].image));
                elements.push(<SocialMedia key={mySocials[i].id} socialInfo={mySocials[i]} />);
            }

            await Promise.all(promises);

            setSocialMediaElements(elements);
            setLoading(false);
        };


        loadImages();
    }, []);

    if (loading) {
        return (
            <main className='Home'>
                <LoadingScreen />
            </main>
        );
    }

    return (
        <main className='Home'>
            {socialMediaElements}
        </main>
    );
}

export default Home;
