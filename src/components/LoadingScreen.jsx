import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const LoadingScreen = ({ onComplete }) => {  
    const [text, setText] = useState(""); 
    const fullText = "< Hello, My name is Shade /> ";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) { // this is the condition to stop the interval
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 1000);
                }   
            }, 100);

            return () => clearInterval(interval);
        }, [ onComplete ]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-grey-100 flex flex-col items-center justifty-center"> 
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}<span className="animate-blink ml-1"> | </span> 
            </div>
        </div>
    );
};

LoadingScreen.propTypes = {
    onComplete: PropTypes.func.isRequired,
};