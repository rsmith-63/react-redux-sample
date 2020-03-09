import React from 'react';
import Button from './button';
import UserItem from './userItem';


class Users extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { data, fetchUsers, setUser } = this.props;
        //const searchP = this.props.location.query;
        return (
            <div className='container' >
                <Button onClick={fetchUsers} text={'Fetch users'} className={'btn btn-blue' } />
                <div id={'users'}>
                    {data.users.map((user, i) => {
                        return <UserItem
                            key={i}
                            user={user}
                            onClick={() => setUser(user)}
                            query={user.login.username}
                        />
                    })}
                </div>
            </div>

        )
    }
}

export default Users;