// import React from 'react';
// import PHtaxe from "./PHtaxe";
// import TTVA from "./TTVA.JSX";

import Res from './Res';
import Buttons from './Buttons';
import Pht from './Pht';
import TVA from './TVA';

function CalculPTTC(){
    return <div style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
      <fieldset>
         <legend align='center'>Calcul de PTTC</legend>
         <Pht/>
         <TVA/>
         <Buttons/> 
         <Res/>
       </fieldset>
       </div>
}

export default CalculPTTC;