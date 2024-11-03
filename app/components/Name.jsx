import React, { useState } from 'react';
import Image from 'next/image';

function Name() {
  const [isOn, setIsOn] = useState(false);

  const toggleImage = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex flex-col items-left justify-center min-h-4">
    {/* min-h-screen bg-gray-100"> */} 
      <Image
        src="/name.svg"
        alt="logo"
        width={200}
        height={150}
        className="cursor-pointer transition-transform duration-200 transform hover:scale-110"
        onClick={toggleImage}
      />

         
{/*       
      <img
        src={isOn ? "/pic_bulbon.gif" : "/pic_bulboff.gif"}
        alt="Light bulb"
        width={100}
        height={180}
        className="cursor-pointer transition-transform duration-200 transform hover:scale-110"
        onClick={toggleImage}
      /> */}
      {/* <p className="mt-4 text-gray-700">
        Click the light bulb to turn on/off the light.
      </p> */}
    </div>
  );
}

export default Name;



// import React from 'react';
// import Image from 'next/image';


// function Name() {
//   return (
//     <div className="h-20">
//       <div
//         className="transform hover:rotate-y-180 transition-transform duration-5"
//         id="rotate3D"
//       >
//       <Image
//         src="/name.svg"
//         alt="logo"
//         width={200}
//         height={150}
//       />
       
//       </div>
   
     
//     </div>
//   );
// }

// export default Name;




// import React from 'react'
// import Image from 'next/image';


// function Name() {
//   return (
//     <div style="height:80px;">
//       <div onmouseover="rotateDIV()" id="rotate3D" style="transform:rotateY(189deg);">3D rotate</div>
      
//          <Image
          
//           src="/name.svg"
//           alt="logo"
        
//           width={200}
//           height={150}
        
//         />
      
//     </div>
//   )
// }
// export default Name;
