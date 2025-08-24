"use client";

import {
  BriefCaseIcon,
  HeartIcon,
  LocationIcon,
  PersonIcon,
  PuzzleIcon,
  RocketIcon,
} from "@/constants/Icons";
import { UserType } from "@/constants/Types";
import StatusBadge from "./StatusBadge";

function UserCard({
  age,
  gender,
  hobbies,
  isOnline,
  jobTitle,
  location,
  name,
  profile_image,
  favoriteFood
}: UserType) {
  return (
    <div className='shadow-md shadow-stone-500/30 rounded p-5'>
      <div className='grid grid-cols-5 pb-5 w-full'>
        <img
          className='rounded-full w-15 col-span-1'
          alt='profile_name'
          src={profile_image}
        />
        <div className='col-span-3 flex flex-col pl-5'>
          <div className='text-base font-semibold text-neutral-800 '>
            {name}
          </div>
          <div className='flex justify-between pt-2'>
            <div
              className='flex justify-between text-xs
 text-neutral-500'>
              <span className='pr-2'>{BriefCaseIcon}</span> {jobTitle}
            </div>
            <div
              className='flex justify-between pl-5 text-xs
 text-neutral-500'>
              <span className='pr-2'>{LocationIcon}</span> {location}
            </div>
          </div>
        </div>
        <div className='flex justify-start items-start'>
          <StatusBadge isOnline={isOnline}></StatusBadge>
        </div>
      </div>
      <div className='grid grid-cols-5 w-full'>
         <div className='col-span-2 flex items-center text-neutral-700'>
          <span className='pr-2'>{HeartIcon}</span>
          <span>Favorite Food</span>
        </div>
        <div className='col-span-3 flex items-center text-neutral-700'>
          <span>{favoriteFood}</span>
        </div>
        <div className='col-span-2 flex items-center text-neutral-700'>
          <span className='pr-2'>{PersonIcon}</span>
          <span>Gender</span>
        </div>
        <div className='col-span-3 flex items-center text-neutral-700'>
          <span>{gender}</span>
        </div>

        <div className='col-span-2 flex items-center text-neutral-700'>
          <span className='pr-2'>{RocketIcon}</span>
          <span>Age</span>
        </div>
        <div className='col-span-3 flex items-center text-neutral-700'>
          <span>{+age}</span>
        </div>
        <div className='col-span-2 flex items-start text-neutral-700'>
          <span className='pr-2'>{PuzzleIcon}</span>
          <span>Hobbies</span>
        </div>
        <div className='col-span-3 flex items-start text-neutral-700'>
          <div className='flex flex-wrap '>
            {hobbies.length > 0 ? hobbies.map((hobbie, index) => (
              <div
                className={`flex items-center justify-center text-center  border rounded-sm border-cyan-500 font-semibold text-[12px] px-2 text-cyan-500 ml-1 my-1`}
                key={index + `-` + hobbie}>
                {hobbie}
              </div>
            )) : <div className="flex w-full ml-1 my-1 ">No Hobbies </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
