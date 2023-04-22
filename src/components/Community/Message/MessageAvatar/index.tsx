import classNames from "classnames";
import { UnreadDot } from "components/Community/UnreadDot";
import { Like } from "components/Svg/Like";
import React from "react";
import { useWindowSize } from "utils/hooks/useWindowSize";
import "./styles.css";

export function MessageAvatar({
  unreadMessages,
}: {
  unreadMessages?: boolean;
}) {
  const [windowWidth] = useWindowSize();
  const voting = true;
  return (
    <div className="h-9 w-9 relative" data-enableselect={false}>
      <div
        className={classNames(
          "relative z-10 h-9 w-9 bg-white squircle flex items-center justify-center",
          {
            "group cursor-pointer": voting,
          }
        )}
      >
        <div className="relative z-10 h-8 w-8 squircle flex items-center justify-center group-hover:bg-none messageAvatar">
          <Like className="w-6 hidden text-black group-hover:block group-active:text-blue-600" />
        </div>
      </div>
      <div className="w-[35px] h-[35px] rounded-lg bg-white shadow-gray-400/30 shadow absolute top-[1px]" />
      {unreadMessages && <UnreadDot className="-top-[4px] -right-[5px]" />}
    </div>
  );
}
