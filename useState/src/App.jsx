
import React, { useState } from 'react';
import styled from 'styled-components';


const MyButton = () => {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count +1)}>You clicked {count} times
    </Button>
  )
}

export default MyButton

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    
    align-items: center;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    font-family: Segoe UI, sans-serif;
`;
    
