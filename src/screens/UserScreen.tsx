"use client";

import SearchInput from "@/components/SearchInput";
import UserCard from "@/components/UserCard";
import { UserType } from "@/constants/Types";
import { genericSearch } from "@/utils/genericSearch";
import { useEffect, useState } from "react";

function UserScreen() {
  const [data, setData] = useState<UserType[] | null>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>Failed to load data</p>;
  if (data.length === 0) return <p>No profiles found</p>;

  const resultWidgets = data ? genericSearch(query, data) : [];

  return (
    <>
      <div className='flex w-full pb-5'>
        <SearchInput onChangeSearchQuery={(query) => setQuery(query)} />
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-2 gap-y-2 w-full'>
        {resultWidgets.map((user) => (
          <UserCard
            key={user.id + `-` + user.name}
            {...user}></UserCard>
        ))}
      </div>
    </>
  );
}

export default UserScreen;
