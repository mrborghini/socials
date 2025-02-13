import { ReactElement } from "react";
import { SocialInfo } from "../types/SocialInfo";

interface Props {
    socialInfo: SocialInfo;
}

function SocialMedia({ socialInfo }: Props): ReactElement {
    return (
        <>
            <section className="socialMedia d-flex flex-justify-c-center b-secondary-color">
                <a className="text-primary" href={socialInfo.url} target="_blank">
                    <span>{socialInfo.title}</span>
                    <img src={socialInfo.image} alt={socialInfo.alt} />
                </a>
            </section>
        </>
    );
}

export default SocialMedia;