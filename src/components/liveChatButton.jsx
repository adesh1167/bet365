const LiveChatButton = () => {

    return (
        <a
            data-v-cc31a385=""
            aria-current="page"
            href="/sport/soccer?livechat=true"
            className="router-link-active router-link-exact-active flex justify-center items-center flex-col z-30 cursor-pointer fixed right-3 bottom-14 md:bottom-3"
        >
            <div className="bg-identity rounded-full w-10 h-10 flex justify-center items-center shadow-[0_4px_8px_0_rgba(0,0,0,0.15);]">
            <svg
                className="fill-light-50 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                className=""
                d="M15,4V11H5.17L4,12.17V4H15M16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12V3A1,1 0 0,0 16,2M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"
                strokeLinecap="square"
                />
            </svg>
            </div>
        </a>
    )
}

export default LiveChatButton;