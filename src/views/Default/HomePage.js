import React from 'react';
import MaterialTable from 'material-table';
// Id
// Code                 
// Description
// Status


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Id', field: 'Id' ,editable: 'never'},
      { title: 'Code', field: 'Code' , type: 'numeric'   },
      { title: 'Description', field: 'Description', type:"text" },
      {
        title: 'Status',
        field: 'Status',
        lookup: { "A": 'Aktif', "I": 'Pasif ' },
      },
    ],
    data: [
      { Id: 1, Code: 1987, Description:'Baran', Status:'A' },
     
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                newData['Id']=5
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
           
          }),
      }}
    />
  );
}
