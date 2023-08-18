import { useEffect, useRef } from "react";

const UploadPhotoWidget = () => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dd2jeccca',
            uploadPreset: 'xsodhogu'
        }, function(error, result) {
            console.log(result);
        });
    }, [])

    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadPhotoWidget;