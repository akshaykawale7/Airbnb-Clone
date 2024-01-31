import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import EmptyState from "../components/EmptyState";
import FavouriteClient from "./FavouriteClient";

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavouriteListings();

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
