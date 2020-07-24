import React, { useState } from 'react';

const useCountry = (stateInit, options) => {
    
    const [state, updateState] = useState(stateInit);
    
    const SelectCategory = () => (
        <select
            className="browser-default"
            value={state} 
            onChange={e => updateState(e.target.value)}
        >
           {options.map(op => (
                <option key={op.value} value={op.value}>{op.label}</option> 
           ))}
        </select>);

    return [state, SelectCategory];
}
 
export default useCountry;