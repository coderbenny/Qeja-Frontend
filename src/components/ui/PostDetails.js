import React from "react";

function PostDetails() {
  return (
    <div className="p-10">
      <h1 className="font-bold text-2xl mt-20">PostDetails</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <h3 className="">Post Usernname</h3>
          <h3 className="">Post TItle</h3>
          <div className="">
            <div className=""></div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2">Comments</h3>
          <div className="">
            <p className="">Comment 1</p>
            <p className="">Comment 2</p>
            <p className="">Comment 3</p>
            <p className="">Comment 4</p>
          </div>
          {/* Commenting */}
          <div className="">
            <textarea className="resize-none h-[100px w-full]"></textarea>
            <button type="button">Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
