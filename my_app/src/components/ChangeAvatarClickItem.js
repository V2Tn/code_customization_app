import React from "react";

function ChangeAvatarClickItem({ avatarParts }) {
  return (
    <div id="avatar">
      {Object.keys(avatarParts).map(
        (part) =>
          avatarParts[part] && (
            <img key={part} src={avatarParts[part]} alt={part} />
          )
      )}
    </div>
  );
}
export default ChangeAvatarClickItem;
