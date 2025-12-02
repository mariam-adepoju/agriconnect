import Paginations from "@/components/Paginations";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { articles, blogCategories } from "@/lib/mockData";
import { getInitials } from "@/lib/utils";
import { useState } from "react";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("tech");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredArticles = articles[activeCategory].filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredArticles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full min-h-screen bg-grany ">
      <div className="py-10 mx-auto pt-20 pb-20 bg-grany px-4 md:px-16 lg:px-24 xl:px-32">
        <Input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search Blog"
          className="bg-white border rounded-full border-secondary focus-visible:ring-secondary/50 h-12 px-6 mb-10"
        />

        {/* Categories */}
        <h2 className="text-xl font-bold text-[#404040] mb-3">
          Top Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-10 gap-4 mb-10">
          {blogCategories.map((cat) => (
            <Card
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`flex flex-row w-9/10 sm:w-full mx-auto items-center gap-20 sm:gap-4 md:gap-10 cursor-pointer transition border p-6 sm:p-3 bg-white shadow-[0px_4px_4px_0px_#00000040] ${
                activeCategory === cat.id
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
              <div>
                <h3 className="font-semibold text-lg text-[#404040]">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#404040]">{cat.count} Articles</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Articles */}
        <h2 className="text-xl font-bold text-[#404040] mb-3">Articles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-4 md:gap-10 ">
          {paginatedArticles.length === 0 ? (
            <div className="col-span-3 flex flex-col items-center py-10 text-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4" />
              <p className="text-lg font-medium">
                No articles in this category
              </p>
              <p className="text-sm mt-1">
                Try another category or search keyword.
              </p>
            </div>
          ) : (
            paginatedArticles.map((article) => (
              <Card
                key={article.title}
                className="overflow-hidden shadow-[0px_4px_4px_0px_#00000040]"
              >
                <div className="w-full h-40 px-4 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>

                <CardContent className="px-4 space-y-2 text-[#404040]">
                  <p className="text-sm">{article.time}</p>
                  <h3 className="font-bold text-lg leading-tight">
                    {article.title}
                  </h3>
                  <p className="line-clamp-3">{article.description}</p>

                  <div className="flex items-center gap-3 pt-3">
                    <Avatar className="text-[#404040] text-base">
                      <AvatarFallback>
                        {getInitials(article.author)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{article.author}</p>
                      <p className="text-sm ">{article.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="mt-10">
          <Paginations
            page={currentPage}
            setPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};
export default Blogs;
