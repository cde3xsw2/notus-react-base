import * as React from 'react';
import { styled } from '@mui/material/styles';

import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton,{iconButtonClasses} from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';



const StyledIconButton = styled(IconButton)`
  color: ${({ theme, defaultColor }) => theme.palette[defaultColor] || 'black'};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({theme, hoverColor }) => theme.palette[hoverColor]?.dark  || hoverColor || 'red'};
  }
`;


const renderRoles=(params)=>{
  console.log('mil',params.value)
  const roles = params.value?.map(r=><><Chip
    label={r}
  />
  &nbsp;
  </>)
  return <>{roles}</>;
}

const renderActionsCell = (params) => {
  const iconData = params.row?.iconValue;
  return (
    <>
    <Tooltip title="Editar">
      <StyledIconButton hoverColor='primary' onClick={(e)=>{e.stopPropagation();}}>
        <EditIcon ></EditIcon>
      </StyledIconButton>
    </Tooltip>
    <Tooltip title="Eliminar">
      <StyledIconButton  hoverColor="warning" onClick={(e)=>{e.preventDefault();}}>
        <DeleteIcon></DeleteIcon>
      </StyledIconButton>
    </Tooltip>
    </>
  );
};


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'roles',
    headerName: 'Roles',
    description: 'Roles.',
    sortable: false,
    width: 200,
    renderCell: renderRoles
  },
  { field: 'iconValue', headerName: 'Actions', width: 100, textAling:'center',
  renderCell: renderActionsCell },

];




const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,roles:['admin']},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,roles:['superuser','POS'] },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,roles:['guest'] },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
          /*filter: {
            filterModel: {
              items: [],
              quickFilterValues: ['quick', 'filter'],
            },
          },*/
      
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        pagination={true}
        onPaginationMetaChange={(paginationMeta)=>{
          console.log(paginationMeta)
        }}
        onPaginationModelChange={(model,details)=>{
          console.log(model,details)
        }}
        _filterModel={{
          //items: rows,
          //ickFilterValues: [''],
          //quickFilterValues: ['quick', 'filter'],
        }}
         
      />
    </div>
  );
}
