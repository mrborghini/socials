import { SocialInfo } from "../types/SocialInfo";

interface Props {
    socialInfo: SocialInfo;
}

function SocialMedia({ socialInfo }: Props) {
    return (
        <>
            <section className="socialMedia">
                <a href={socialInfo.url} target="_blank">
                    <h2>{socialInfo.title}</h2>
                    <img src={socialInfo.image} alt="" />
                </a>
            </section>
        </>
    );
}

export default SocialMedia;