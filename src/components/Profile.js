import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <div>
      <p>Email:</p>
      {JSON.stringify(currentUser.email)}
    </div>
  );
}
