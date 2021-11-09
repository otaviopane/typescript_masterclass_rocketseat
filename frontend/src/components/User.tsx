import React, { FunctionComponent } from 'react';

interface IUser {
   name: string;
   email: string;
}

interface Props {
   user: IUser;
}

const User: React.FunctionComponent<Props> = ({ user }) => {
   return (
      <div>
         <strong>Nome: </strong> {user.name} <br />
         <strong>E-mail: </strong> {user.email} <br /><br />
      </div>
   );
};

export default User;
