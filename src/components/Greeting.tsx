import { useEffect, useState } from "react";

function Greeting() {
    const [greeting, setGreeting] = useState("");
    const generalMessage = "Welcome to mrborghini's website! Feel free to look around.";


    useEffect(() => {
        const updateMessage = (() => {
            const hour = new Date().getHours();

            switch (true) {
                case hour > 17:
                    setGreeting("Good evening!");
                    break;
                case hour > 12:
                    setGreeting("Good afternoon!");
                    break;
                case hour > 11:
                    setGreeting("Good noon!");
                    break;
                case hour < 6:
                    setGreeting("Good night!");
                    break;
                case hour >= 6:
                    setGreeting("Good morning!");
                    break;
                default:
                    setGreeting("Hi!")
                    break;
            }
        });

        const interval = setInterval(() => {
            updateMessage();
        }, 1000);

        updateMessage();

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <section className="Greeting">
            <p>{`${greeting} ${generalMessage}`}</p>
        </section>
    );
}

export default Greeting;