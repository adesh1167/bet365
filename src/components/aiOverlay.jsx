import "./styles/aiOverlay.css";
import aiSvg from "./../assets/ai.svg";

const AiOverlay = ({active, blocking}) => {
    return (
        <div className={`ai-overlay ${active ? "active" : ""} ${blocking ? "blocking" : ""}`} role="status" aria-hidden="true" aria-label="AI working">
            <div className="ai-overlay__panel">
                <span className="ai-overlay__icon" aria-hidden="true"><img src={aiSvg}/></span>
                <span className="ai-overlay__text">AI Working<span className="ai-overlay__dots" aria-hidden="true"></span></span>
            </div>
        </div>
    )
}

export default AiOverlay;
