import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const Scanner = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox:{
                width:400,
                height:400
            },
            fps: 1,
        });

        
        const success = (result) => {
            console.log(result)
            setScanResult(result);
        }
        
        const error = (err) => {
            console.warn(err);
        }
        
        scanner.render(success, error);
    },[]);

    return (
        <div id="reader"></div>
    )

    
}

export default Scanner;