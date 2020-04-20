import React from 'react';
import useResources from './useResources';

const ResourceList = (props) => {
  const resources = useResources(props.resource);

  return (
    <ul className="ui list">
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
}

export default ResourceList;