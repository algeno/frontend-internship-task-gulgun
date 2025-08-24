"use client";

function Header() {
  return (
    <div className='w-full grid grid-cols-4 gap-4 bg-sky-500 h-12'>
      <div className='h-full flex justify-items-center items-center pl-5'>
        <img
          src={"/headerIcon.png"}
          className='w-10'></img>
      </div>
    </div>
  );
}

export default Header;
