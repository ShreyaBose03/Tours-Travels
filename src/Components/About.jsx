// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const About = () => {
//   const [email, setEmail] = useState("");
//   const location = useLocation();

//   useEffect(() => {

//     setEmail(location.state?.email);
//   }, []);

//   return (
//     <div>
//       {email && (
//         <div>
//           <h1><font color="black">Email: {email}</font></h1> //Displaying fields

//         </div>
//       )}
//     </div>
//   );
// }

// export default About;


//using SEARCHPARAMS

// import React, { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

// const About = () => {

//   const [searchParams,setSearchParams] = useSearchParams();

//   useEffect(() => {
//     setEmail(searchParams.get("email"));
//   }, []); 

//   return (
//     <div>
//       {email && (
//         <div>
//           <h1>Email: {email}</h1>
//         </div>
//       )}
//     </div>
//   );
// }

// export default About;


//using USEPARAMS

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const About = () => {
  const [email, setEmail] = useState("");
  const params = useParams();
  console.log("email : ",params.email);


  useEffect(() => {
    setEmail(params.email);
  }, []);
  
  return (
    <div>
      <div>
        {email && (
          <div>
            <h1>Email: {email}</h1>
          </div>
        )}
      </div>

    </div>
  )
}

export default About;



