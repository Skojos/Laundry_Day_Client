import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col whitespace-nowrap items-center cursor-pointer group w-12 sm:w-20">
      <Icon className="h-8 mb-1 group-hover:animate-bounce text-white" />
      <p className="sm:opacity-0 text-blue-100 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
