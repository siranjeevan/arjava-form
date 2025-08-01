import { useRef } from "react";
import { toPng } from 'html-to-image';
function FormLayout({children}){
    const formRef = useRef(null);

    const handlePhoto = async () => {
    try {
      const dataUrl = await toPng(formRef.current, {
        cacheBust: true,
        quality: 1,
      });

      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'form-screenshot.png';
      link.click();
    }
    catch (e) {
      console.error('Screenshot failed', e);
      setError('Screenshot failed. Open console for details.');
    }
  };

    return(
        <>
         <div className="flex justify-center mb-4">
            <button
            onClick={handlePhoto}
            className="px-4 py-2 bg-blue-600 text-white rounded-full disabled:opacity-50"
            >
                Screenshot
            </button>
        </div>

            <div className="flex justify-center" ref={formRef}>
                <div className=" px-2 bg-gray-200 rounded-4xl">
                    {children}
                </div>
            </div>
        </>
    )

}
export default FormLayout;