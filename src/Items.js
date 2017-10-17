import React from 'react';

export function Items(props) {

  const items = props.items.map( (animal, index) => {
	   return (
       <li key={index}>{animal}</li>
     );
   });
   return (
     <ol>
       {items}
     </ol>
   );
}
