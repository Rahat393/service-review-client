import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Physics Zone`;
    }, [title])
};

export default useTitle;