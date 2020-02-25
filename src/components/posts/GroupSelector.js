import React from 'react';

const GroupSelector = (props) => {
  const options = props.groups.map(group => {
    return <option value={group.name} key={group.id}>{group.name}</option>
  })

  function handleChange(event) {
    props.onGroupSelected(event.target.value);
  }

  return (
    <select id="group-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a group...</option>
      {options}
    </select>
  )
}

export default GroupSelector;
