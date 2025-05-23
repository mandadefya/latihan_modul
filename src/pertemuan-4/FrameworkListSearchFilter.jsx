import { useState } from "react";
import frameworkData from "./products.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.title.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-violet-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-violet-300 rounded mb-4"
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      {filteredFrameworks.map((item) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((item) => (
            <div key={item.id} className="border rounded p-4 shadow bg-pink-50">
              <h2 className="text-xl font-semibold mb-2 text-pink-900">{item.title}</h2>
              <p className="mb-2 text-gray-700">{item.description}</p>
              <p className="text-sm text-gray-500 mb-1">Brand: {item.brand}</p>
              <p className="text-sm text-red-500 mb-1">Price: ${item.price}</p>
              <p className="text-sm text-gray-500 mb-1">
                Discount: {item.discountPercentage}%
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Rating: {item.rating}
              </p>
              <p className="text-sm text-gray-500 mb-1">Stock: {item.stock}</p>
              <p className="text-sm text-gray-500 mb-1">
                Dimensions: {item.dimensions.width}cm x {item.dimensions.height}
                cm x {item.dimensions.depth}cm
              </p>
              <div className="flex flex-wrap gap-2 mt-2 bg" >
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-200 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
