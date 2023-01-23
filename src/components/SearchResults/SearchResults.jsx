import React, { useEffect, useState } from "react";
import "./SearchResults.css";
const SearchResults = ({ usersData, handleSelectedUser, usersGroup }) => {
  const [selectedUsers, setSelectedUsers] = useState({});
  const [showMembers, setShowMembers] = useState(false);
  const handleClick = (user) => {
    if (selectedUsers[user.id]) {
      setSelectedUsers({ ...selectedUsers, [user.id]: null });
    } else {
      setSelectedUsers({ ...selectedUsers, [user.id]: user });
    }
  };
  const handleShowMembers = () => {
    setShowMembers(!showMembers);
  };
  useEffect(() => {
    handleSelectedUser(selectedUsers);
  }, [selectedUsers]);

  return (
    <div className="search-results">
      {usersData.map((user) => (
        <div key={user.id} onClick={() => handleClick(user)}>
          {selectedUsers[user.id] ? (
            <ion-icon name="checkbox"></ion-icon>
          ) : (
            <ion-icon name="checkbox-outline"></ion-icon>
          )}
          <img src={user.avatar} alt="avatar" />
          <h3>{user.name}</h3>
        </div>
      ))}
      {usersGroup.map((user) => {
        return (
          <div key={user.id}>
            {selectedUsers[user.id] ? (
              <ion-icon
                name="checkbox"
                onClick={() => handleClick(user)}
              ></ion-icon>
            ) : (
              <ion-icon
                name="checkbox-outline"
                onClick={() => handleClick(user)}
              ></ion-icon>
            )}
            <img src={user.avatar} alt="avatar" />
            <div className="group-names">
              <h3>{user.name}</h3>
              {showMembers &&
                usersGroup.map((group) => (
                  <div key={group.id} className="group-members">
                    {group.members.map((id) => {
                      return usersData
                        .filter((user) => user.id === id)
                        .map((user) => (
                          <div className="user-box" key={user.id}>
                            <img src={user.avatar} alt="avatar" />
                            <h3 key={user.id}>{user.name}</h3>
                          </div>
                        ));
                    })}
                  </div>
                ))}
            </div>
            <button onClick={handleShowMembers} className="showBtn">
              {user.members.length} Members
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
