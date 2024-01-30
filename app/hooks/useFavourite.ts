import { useRouter } from "next/navigation";
import { SafeUser } from "../types";
import { useCallback, useMemo } from "react";
import useLoginModal from "./useLoginModal";
import toast from "react-hot-toast";
import axios from "axios";

interface IUseFavourite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavourite = ({ listingId, currentUser }: IUseFavourite) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const hasFavourited = useMemo(() => {
    const list = currentUser?.favouriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (hasFavourited) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success");
      } catch (error) {
        toast.error("Something went wrong!");
      }
    },
    [currentUser, hasFavourited, listingId, router, loginModal]
  );

  return {
    hasFavourited,
    toggleFavourite,
  };
};

export default useFavourite;
