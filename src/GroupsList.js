import React, { useState, useEffect } from 'react';
const GroupsList = () => {
  const [groups, setGroups] = useState([]) 
  const [hasErrors, setErrors] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/groups', { mode: 'cors' })
      .then(response => response.json())
      .then(response => setGroups(response))
      .catch(() => setErrors(true));
  }, []);

  return (
    <div>
    {
      !hasErrors ? groups.map(group =>
        <div key={ group.id }>
          { group.name }
        </div>
      )
      : JSON.stringify(hasErrors)
    }
    </div>
  )
}
export default GroupsList;

