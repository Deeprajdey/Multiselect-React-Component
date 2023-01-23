import React, { useEffect, useState } from "react";
import "./SearchBox.css";
const SearchBox = ({ handleSearchData, selectedUsersArr }) => {
  const [searchVal, setSearchVal] = useState("");
  const [showTags, setShowTags] = useState(false);
  const handleChange = (e) => {
    setSearchVal(e.target.value);
    handleSearchData(e.target.value);
  };
  useEffect(() => {
    const displayNone =
      selectedUsersArr.every((itm) => itm === null) ||
      selectedUsersArr.length === 0;
    displayNone ? setShowTags(false) : setShowTags(true);
  }, [selectedUsersArr]);
  return (
    <div className="searchBox">
      {showTags && (
        <div className="selectedParticipants">
          {selectedUsersArr.map((user) => {
            if (!user) return null;
            const { id, name, avatar } = user;
            return (
              <span key={id}>
                <img src={avatar} alt="avatar" />
                <span>{name}</span>
              </span>
            );
          })}
        </div>
      )}

      <div className="search">
        <input
          type="text"
          val={searchVal}
          onChange={handleChange}
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default SearchBox;
