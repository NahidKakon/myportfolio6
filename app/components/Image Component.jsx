import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image

function Image_Component() {
  return (
    <div>
      <div className="transition-transform duration-300 cursor-pointer hover:-rotate-6">
        <Image
          src="/image1.gif"      // Path to the image
          alt="my-image"          // Alt text for accessibility
          height={500}            // Image height
          width={500}             // Image width
          quality={100}           // Image quality for optimization
        />
      </div>  
    </div>
  );
}

export default Image_Component;






// import React from 'react'






//  function Image_Component() {
//   return (
//     <div>

//         <div className="transition-transform duration-300 cursor-pointer hover:-rotate-6">
//         <Image
//           src="/image1.gif"
//           alt="my-image"
//           height={500}
//           width={500}
//           quality={100}
          
//         />

//       </div>  
    
//     </div>
//   )
// }
// export default Image_Component;