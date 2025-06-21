import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  avatarUrl: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Agregamos una URL de imagen de ejemplo a cada usuario
        const usersWithAvatars = data.map((user: User) => ({
          ...user,
          avatarUrl: `https://placehold.co/50x50/png?text=${encodeURIComponent(user.username)}`,
        }));
        setUsers(usersWithAvatars);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const avatarTemplate = (rowData: User) => {
    return (
      <img
        src={rowData.avatarUrl}
        alt={rowData.username}
        style={{ width: '50px', borderRadius: '50%' }}
      />
    );
  };

  return (
    <div>
      <h1>Gestion de Usuarios</h1>
      <h3>Arquitectura de Software</h3>
      <p>NRC:23447</p>
      <DataTable value={users}>
        <Column field="id" header="ID" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="username" header="Username" sortable />
        <Column field="email" header="Email" sortable />
        <Column field="avatarUrl" header="Avatar" body={avatarTemplate} />
      </DataTable>
      <p>Desarrollado por: Geovanny Cudco</p>
    </div>
  );
};

export default UserTable;