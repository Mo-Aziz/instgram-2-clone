import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-colo-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Left Section */}
      <section className="col-span-2">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      {/* Right Section */}
      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}

export default Feed;
