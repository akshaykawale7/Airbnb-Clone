import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";

interface FavouriteClientProps {
  currentUser?: SafeUser | null;
  listings: SafeListing[];
}

const FavouriteClient: React.FC<FavouriteClientProps> = ({
  currentUser,
  listings,
}) => {
  return (
    <Container>
      <Heading
        title="Favourites"
        subtitle="List of places you have favourited!"
      />
      <div
        className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-8
            "
      >
        {listings.map((listing) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavouriteClient;
