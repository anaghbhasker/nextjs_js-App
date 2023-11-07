import React, { useState } from 'react'


type  ChildComponentProps = {
    selectAll: boolean;
  }
export default function ChildComponent({ selectAll }: ChildComponentProps) {
    const [checkboxes, setCheckboxes] = useState([
        // Your array of data and checkboxes
        { id: 1, checked: false },
        { id: 2, checked: false },
        // Add more rows as needed
      ]);
    
      // Update checkboxes when the selectAll prop changes
      React.useEffect(() => {
        setCheckboxes((prevCheckboxes: any[]) =>
          prevCheckboxes.map((checkbox) => ({
            ...checkbox,
            checked: selectAll,
          }))
        );
      }, [selectAll]);
    
      const handleCheckboxChange = (id: number) => {
        setCheckboxes((prevCheckboxes: any[]) =>
          prevCheckboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          )
        );
      };
  return (
    <div>
        <table>
      <tbody>
        {checkboxes.map((checkbox) => (
          <tr key={checkbox.id}>
            <td>
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(checkbox.id)}
              />
            </td>
            <td>Row Data</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
