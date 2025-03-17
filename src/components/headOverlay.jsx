import { useApp } from "../contexts/appContext";

const HeadOverlay = () => {

  const {setPopup} = useApp();

  
    return (
      <>
        {/* Full-screen overlay */}
        <div
          onClick={()=>setPopup(null)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "90px",
            zIndex: 100, // Ensure it's above other content
            // backgroundColor: "rgba(255, 0, 0, 0.5)", // Semi-transparent black background
          }}
        />
      </>
    );
  };
  
  export default HeadOverlay;
  