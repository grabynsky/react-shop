import { useEffect } from "react";

const Alert = (props) => {
    const { name = '', closeAlert = Function.prototype } = props;
    
useEffect(()=>{
    const timeId = setTimeout(closeAlert, 3000);
    
    return () => {
        clearTimeout(timeId);
    };
//eslint-disable-next-line
},[name])

    return (
        <div id="toast-container">
            <div className="toast">
                {name} add in basket
            </div>
        </div>
    )
}
export default Alert;