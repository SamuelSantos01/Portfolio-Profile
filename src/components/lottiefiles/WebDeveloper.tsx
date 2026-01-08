import Lottie from "lottie-react";
import developerAnim from "../../assets/json/Web Development.json";

interface DeveloperAnimationProps {
    width?: number | string;
    height?: number | string;
    loop?: boolean;
    maxWidth?: string;
}

const DeveloperAnimation = ({
    width = "100%",
    height = "auto",
    loop = true,
    maxWidth = "500px"
}: DeveloperAnimationProps) => {
    return (
        <div style={{ 
            width, 
            height, 
            maxWidth, 
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Lottie
                animationData={developerAnim}
                loop={loop}
                autoPlay={true}
                style={{ width: "100%", height: "100%" }} 
            />
        </div>
    );
};

export default DeveloperAnimation;