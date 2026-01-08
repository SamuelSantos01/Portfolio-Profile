import Lottie from "lottie-react";
import gradientInfiniteAnim from "../../assets/json/Gradient Infinite Sign.json";

interface GradientInfiniteSignProps {
    width?: number | string;
    height?: number | string;
    loop?: boolean;
    autoplay?: boolean;
    speed?: number;
    className?: string;
}

const GradientInfiniteSign = ({
    width = "100%",
    height = "auto",
    loop = true,
    autoplay = true,
    className = ""
}: GradientInfiniteSignProps) => {
    return (
        <div 
            className={className}
            style={{ 
                width, 
                height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Lottie
                animationData={gradientInfiniteAnim}
                loop={loop}
                autoplay={autoplay}
                style={{ 
                    width: "100%", 
                    height: "100%"
                }}
            />
        </div>
    );
};

export default GradientInfiniteSign;