import React, { useState } from 'react';

const useCategory = (stateInit, options) => {
    
    const [state, updateState] = useState(stateInit);
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state} 
            onChange={e => updateState(e.target.value)}
        >
           {options.map(op => (
                <option key={op.value} value={op.value}>{op.label}</option> 
           ))}
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useCategory;