import React from 'react';
import { useData } from '../../ContextAPI/ContextAPI';

function FormLayout({ children }) {
  const { formRef } = useData();

  return (
    <div className="flex justify-center" ref={formRef}>
      <div className="px-2 bg-gray-200 rounded-4xl">
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
