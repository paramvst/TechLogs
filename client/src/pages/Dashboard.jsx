import { Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../services/login';
// import { getAuthenticateUser } from '../services/login';

const Dashboard = () => {
  const [showPage, setShowPage] = useState(false);
  const navigate = useNavigate();
  // const [user,setUser] = useState({});
  useEffect(() => {
    authenticate();
  });
  const authenticate = async () => {
    const { status } = await authenticateUser('/dashboard');
    if (status !== 200) navigate('/login');
    else {
      setShowPage(true);
    }
    console.log('Show page: ', showPage);
  };

  return (
    <div>
      {/* call the page */}
      {showPage && <Heading>Dashboard</Heading>}
    </div>
  );
};

export default Dashboard;
