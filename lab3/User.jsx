'use strict';

import React from 'react';

const User = props => {
    const {user} = props;
    return <tr>
        <td>{user.id}</td>
        <td>{props.user.name}</td>
    </tr>
}

export default User;