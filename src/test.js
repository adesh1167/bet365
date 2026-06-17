(function () {

    function revert() {
        var content = document.getElementsByClassName("pl-PodLoaderModule ")[0] || null;
        if (content) {
            if (content?.children?.length > 5) {
                clearInterval(repeat);
                document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
                setTimeout(()=>{
                    document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
                }, 400)
                setTimeout(()=>{
                    document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
                }, 800)
                setTimeout(()=>{
                    document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
                }, 1200)
                setTimeout(()=>{
                    document.documentElement.scrollTo({top: document.documentElement.scrollHeight, behavior: "smooth"})
                }, 1600)
                setTimeout(()=>{
                    document.documentElement.scrollTo({top: 0, behavior: "smooth"})
                }, 2000)
                setTimeout(() => {
                    const newContent = document.getElementsByClassName("pl-PodLoaderModule ")[0] || null;
                    const style = Array.from(document.getElementsByTagName("style")).map((style) => style.innerHTML).join(" ");
                    // Function to find the first element matching specific text content
                    function getElementByText(selector, text) {
                        const elements = document.querySelectorAll(selector);
                        for (const element of elements) {
                            if (element.textContent.trim() === text.trim()) {
                                return element; // Returns the first matching element
                            }
                        }
                        return null; // No matching element found
                    }

                    let footer = getElementByText(\'div\', \'Settings\') || null;
                    if(footer){
                        footer = footer.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    }

                    // const footer = document.querySelector(\'[class^="frm-"]\') || null;
                    if (newContent) {
                        const styleTag = document.createElement(\'style\');
                        styleTag.innerHTML = style;
                        newContent.appendChild(styleTag);
                        if (footer) {
                            const elem = document.createElement("div");
                            elem.className = "footer";
                            elem.innerHTML = footer.outerHTML;
                            newContent.appendChild(elem);
                        }
                    }
                    window.ReactNativeWebView.postMessage(newContent?.innerHTML);
                }, 5000)
            }
        }
    }
    // document.body.onclick = revert;

    let trials = 0;

    const repeat = setInterval(() => {
        if (trials > 60) {
            clearTimeout(repeat);
            window.ReactNativeWebView.postMessage(null);
        }
        else {
            trials++;
            revert();
        }
    }, 1000)
    // setTimeout(revert, 10000);
})()