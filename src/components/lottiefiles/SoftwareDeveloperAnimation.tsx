import Lottie from "lottie-react";
import developerAnim from "../../assets/json/Software developer.json";


interface DeveloperAnimationProps {
    width?: number | string;
    height?: number | string;
    loop?: boolean;
}

const DeveloperAnimation = ({
    width = "100%",
    height = "100%",
    loop = true
}: DeveloperAnimationProps) => {
    return (
        <div style={{ width, height }}>
            <Lottie
                animationData={developerAnim}
                loop={loop}
                autoplay={true}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice"
                }}
            />
        </div>
    );
};

export default DeveloperAnimation;