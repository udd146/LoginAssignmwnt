import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

const PhoneNumber=()=>{
    
    const [phoneNumber, setPhoneNumber] = useState('');
    
  
    const handleChange = (value) => {
      setPhoneNumber(value);
     };
  
    
    return (
        <div>
          <label>
            Phone Number:
            <PhoneInput
              
              country={'in'}
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </label>
           
        </div>
    )
}
export default PhoneNumber
