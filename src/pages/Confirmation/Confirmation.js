import React, { useState, useEffect } from 'react';
import Success from '../../components/ConfirmationComponents/Success';
import Failed from '../../components/ConfirmationComponents/Failed';

const Confirmation = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setStatus(true);
  }, []);

  return <div>{status ? <Success /> : <Failed />}</div>;
};

export default Confirmation;
