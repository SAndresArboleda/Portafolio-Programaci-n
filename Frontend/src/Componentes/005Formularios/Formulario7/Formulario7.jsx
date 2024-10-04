import './Formulario7.css'
import { useState } from "react";
/*https://www.facebook.com/reel/485527077359498 */

export const Formulario7 = () => {
    const [isProcessing, setIsProcessing] = useState(false);

    const handleFocus = () => {
      setIsProcessing(true);
    };
  
    const handleBlur = () => {
      setIsProcessing(false);
    };
  
    return (
      <div className={`demo ${isProcessing ? "s--processing" : ""}`}>
        {/* Elemento de entrada */}
        <input
          type="text"
          className={`demo_text ${isProcessing ? "demo_text--step-0" : ""}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Escribe aquí..."
        />
  
        {/* Elemento decorativo con puntos animados */}
        <div className="demo_text-dots">
          <span className="demo_text-dots--before">.</span>
          <span className="demo_text-dots--after">.</span>
        </div>
      </div>
    );
  };