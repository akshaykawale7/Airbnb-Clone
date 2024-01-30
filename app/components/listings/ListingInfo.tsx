"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});
interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      {/* element edit */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row items-center gap-4">
          <Avatar height={50} width={50} src={user?.image} />
          <div className="flex flex-col gap-1">
            <div
              className="text-xl
                    font-semibold"
            >
              Hosted by {user?.name}
            </div>
            <div className="text-neutral-500 font-light flex flex-row items-center gap-4">
              <div>{guestCount} guests</div>
              <div>{roomCount} rooms</div>
              <div>{bathroomCount} bathrooms</div>
            </div>
          </div>
        </div>
      </div>
      {/* ..... */}
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
