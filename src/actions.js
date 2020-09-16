// Action creators
export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const random = () => { 
    return {
        type: 'RANDOM', 
        payload: Math.floor(Math.random() * 15) 
    }
};