import { Header } from "../../components/Header"
import courseImage from "../../Images/courses3.jpg";
import { useState , useEffect } from "react";
export const Course4 = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
    return (
        <div>
            <Header  backgroundImage={courseImage}
        title="Course1"
        isMounted={isMounted} />
            <text>Unenbat</text>
        </div>
    )
}