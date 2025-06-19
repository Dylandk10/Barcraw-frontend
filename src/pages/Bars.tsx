import React, { useEffect, useState } from "react";
import axios from "../services/axios";

interface Bar {
  name: string;
  address: string;
  website: string;
  tags: string[];
}

export default function BarPage() {
  const [barName, setBarName] = useState("");
  const [radius, setRadius] = useState("");
  const [cards, setCards] = useState<Bar[]>([]);
  const [localBars, setLocalBars] = useState<Bar[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/search/searchNearByPlacesByName", {
        name: barName,
        long: location?.lng,
        lat: location?.lat,
      });
      setCards(response.data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const findLocalBars = async () => {
    if (!location) return;
    try {
      const response = await axios.post("/search/searchNearByPlace", {
        long: location.lng,
        lat: location.lat,
      });
      setLocalBars(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => {
        setError(`Error: ${err.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  useEffect(() => {
    if (location) {
      findLocalBars();
    }
  }, [location]);

  return (
    <div className="pt-20 grid gap-8 p-6 bg-[#f0f4f8] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Column 1 - 70% */}
        <div className="w-full lg:w-[70%]">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-6 space-y-4">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Search for a local bar or restaurant
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Bar Name"
                value={barName}
                onChange={(e) => setBarName(e.target.value)}
                className="border border-blue-900 text-blue-900 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="number"
                placeholder="Radius in miles"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                className="border border-blue-900 text-blue-900 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Search
            </button>
          </form>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="w-10 h-10 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((bar, idx) => (
                <div
                  key={idx}
                  className="border border-blue-800 p-4 rounded shadow hover:shadow-md transition bg-white"
                >
                  {/* Flex row inside the card */}
                  <div className="flex justify-between items-start">
                    {/* Left Side: Card Info */}
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-semibold text-blue-800">
                        {bar.name}
                      </h3>
                      <p className="text-sm text-gray-700">{bar.address}</p>
                      <a
                        href={bar.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {bar.website}
                      </a>
                    </div>

                    {/* Right Side: Categories */}
                    {bar.tags && bar.tags.length > 0 && (
                      <div className="min-w-[100px]">
                        <h4 className="text-sm font-medium text-blue-800 mb-1">
                          Tags
                        </h4>
                        <ul className="space-y-1">
                          {bar.tags.map((tag, tagIdx) => (
                            <li
                              key={tagIdx}
                              className="text-blue-600 text-xs break-words"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Responsive Divider Bar */}
        <div className="bg-blue-900 w-full h-[2px] lg:w-[2px] lg:h-auto rounded"></div>

        {/* Column 2 - 30% */}
        <div className="w-full lg:w-[30%]">
          <h2 className="text-xl font-bold mb-4 text-blue-900">
            Local Suggestions
          </h2>
          <ul className="space-y-4">
            {localBars.map((bar, idx) => (
              <li
                key={idx}
                className="border-l-4 border-blue-900 pl-4 py-2 bg-white shadow-sm rounded hover:bg-blue-50 transition"
              >
                <h4 className="font-semibold text-blue-800">{bar.name}</h4>
                <p className="text-sm text-gray-700">{bar.address}</p>
                <a
                  href={bar.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  {bar.website}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
