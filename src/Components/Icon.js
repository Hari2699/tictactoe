import React from 'react'
import { FaRegCircle, FaTimes } from "react-icons/fa";

const Icon = ({choice}) => {

        switch(choice){
            case "Cross":
                return <FaTimes />;
            case "Circle":
                return <FaRegCircle />;
            default :
                return "";
        }
        
            
    
}

export default Icon
