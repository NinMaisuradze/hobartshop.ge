import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q") || "";

  return (
    <section
      className="search-results px-6 py-16 max-w-4xl mx-auto text-center"
      aria-labelledby="search-heading"
    >
      <h2 id="search-heading" className="text-3xl font-semibold mb-4 text-[#00032c]">
        Search results for “{query}”
      </h2>
      <p className="text-gray-700 text-lg">
        Currently this is a placeholder. You can wire an actual search backend or filter local data here.
      </p>

      {/* Example placeholder for future results */}
      <div className="mt-8">
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Example static items */}
          <li className="bg-white shadow rounded p-4">Result 1</li>
          <li className="bg-white shadow rounded p-4">Result 2</li>
          <li className="bg-white shadow rounded p-4">Result 3</li>
        </ul>
      </div>
    </section>
  );
}
