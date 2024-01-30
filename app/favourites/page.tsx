import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import getListings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import FavouriteClient from "./FavouriteClient";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavouriteListings();

  if (!currentUser) {
    return <EmptyState title="Unauthorized!" subtitle="Please login." />;
  }

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found!"
        subtitle="Looks like you have no favourite listings."
      />
    );
  }

  return <FavouriteClient currentUser={currentUser} listings={listings} />;
};

export default ListingPage;
