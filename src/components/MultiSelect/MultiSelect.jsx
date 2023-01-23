import React, { useEffect, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import SearchResults from "../SearchResults/SearchResults";
import "./MultiSelect.css";

const MultiSelect = ({ data, group }) => {
  const [usersData, setUsersData] = useState(data);
  const [usersGroup, setUsersGroup] = useState(group);
  const [selectedUsersArr, setSelectedUsersArr] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const handleSearchData = (searchVal) => {
    const filteredUsers = data.filter((user) =>
      user.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    const filteredGroup = group.filter((data) =>
      data.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    if (filteredUsers.length === 0 && filteredGroup.length === 0) {
      setUsersData(data);
      setUsersGroup(group);
      return;
    }

    setUsersData(filteredUsers);
    setUsersGroup(filteredGroup);
  };
  const handleSelectedUser = (selectedUsersObj) => {
    setSelectedUsersArr(Object.values(selectedUsersObj));
  };
  useEffect(() => {
    const userArr = [];
    const groupArr = [];
    selectedUsersArr.forEach((itm) => {
      if (itm === null) return;
      if (itm.members) groupArr.push(itm.id);
      else userArr.push(itm.id);
    });
    setSelectedData({ userArr, groupArr });
  }, [selectedUsersArr]);
  return (
    <div>
      <h1>Participants</h1>
      <SearchBox
        handleSearchData={handleSearchData}
        selectedUsersArr={selectedUsersArr}
      />
      <SearchResults
        handleSelectedUser={handleSelectedUser}
        usersData={usersData}
        usersGroup={usersGroup}
      />
      <div className="selected-data">
        <h3>Selected Data</h3>
        <p>users {JSON.stringify(selectedData["userArr"])}</p>
        <p>groups {JSON.stringify(selectedData["groupArr"])}</p>
      </div>
    </div>
  );
};

export default MultiSelect;
