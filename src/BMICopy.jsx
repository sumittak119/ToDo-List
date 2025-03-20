import './App.css';
import React, { useState } from 'react'



export default function BMICopy() {
    const [input, setInput] = useState({
      weight: undefined,
      height: undefined
    });
  
    const [bmi, setBMI] = useState('');
    const [category, setCategory] = useState('');
  
    function calculate(e) {
      e.preventDefault();
  
      if (input.weight && input.height) {
        const heightInMeters = input.height / 100;
        const bmiValue = (input.weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBMI(bmiValue);
        
        // Determine BMI category
        if (bmiValue < 18.5) {
          setCategory('Underweight');
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
          setCategory('Normal weight');
        } else if (bmiValue >= 25 && bmiValue < 30) {
          setCategory('Overweight');
        } else {
          setCategory('Obese');
        }
      } else {
        alert('Input Must be Required');
      }
    }
    
    return (
      <>
        <div className='m-0 font-[Poppins,sans-serif] bg-[url(https://4kwallpapers.com/images/wallpapers/gradient-background-1280x1280-10974.jpg)] flex justify-center bg-cover bg-no-repeat items-center min-h-screen w-full p-4 md:p-6'>
          
          <div className="bg-white/20 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg backdrop-blur-md border border-white/20 text-center w-full max-w-xs sm:max-w-sm md:max-w-md text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 md:mb-5 text-black font-bold">BMI Calculator</h2>
            <form className="mb-4">
              <div className="mb-4">
                <label className="block mb-1 text-gray-100 text-sm sm:text-base">
                  Weight (kg) 
                </label>
                <input 
                  type='number' 
                  placeholder='Enter Weight' 
                  name='weight' 
                  value={input.weight || ''} 
                  onChange={(event) => setInput({...input, weight: event.target.valueAsNumber})} 
                  className="w-full py-2 sm:py-2.5 px-3 border-none rounded-lg text-sm sm:text-base bg-white/30 text-black outline-none placeholder:text-gray-200"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-1 text-gray-100 text-sm sm:text-base">
                  Height (cm)
                </label>
                <input 
                  type='number' 
                  placeholder='Enter Height' 
                  name='height' 
                  value={input.height || ''} 
                  onChange={(event) => setInput({...input, height: event.target.valueAsNumber})} 
                  className="w-full py-2 sm:py-2.5 px-3 border-none rounded-lg text-sm sm:text-base bg-white/30 text-black outline-none placeholder:text-gray-200"
                />
              </div>
              
              <button 
                onClick={calculate} 
                className="mt-3 sm:mt-4 md:mt-5 bg-gradient-to-r from-[#ff8a00] to-[#e52e71] text-white border-none py-3 sm:py-3.5 md:py-4 px-4 sm:px-4.5 md:px-5 rounded-full text-sm sm:text-base cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#e52e71] hover:to-[#ff8a00] w-full sm:w-auto"
              >
                Calculate BMI
              </button>
            </form>
  
            {bmi && (
              <div className="my-4 sm:my-6 md:my-8 p-3 sm:p-4 bg-white/30 rounded-xl">
                <h3 className="text-lg sm:text-xl text-[#032cfc] font-semibold">Your BMI: {bmi}</h3>
                {category && (
                  <p className="mt-2 text-sm sm:text-base text-black font-medium">
                    Category: <span className={`font-bold ${
                      category === 'Normal weight' ? 'text-green-600' : 
                      category === 'Underweight' ? 'text-blue-600' : 
                      category === 'Overweight' ? 'text-orange-600' : 'text-red-600'
                    }`}>{category}</span>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
       
      </>
    );
  }
  
  