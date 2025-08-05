import React from 'react';
import { useData } from '../ContextAPI/ContextAPI';
import { toPng } from 'html-to-image';
import FormLayout from '../Components/Form/FormLayout';

function ButtonClick() {
  const { formRef } = useData();

  const handleScreenshot = async () => {
    try {
      const dataUrl = await toPng(formRef.current, { cacheBust: true });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'form-screenshot.png';
      link.click();
    } catch (e) {
      console.error('Screenshot failed', e);
    }
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <button
          onClick={handleScreenshot}
          className="px-4 py-2 bg-blue-600 text-white rounded-full disabled:opacity-50"
        >
          Screenshot
        </button>
      </div>
    </>
  );
}
export default ButtonClick;
