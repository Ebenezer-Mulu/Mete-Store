"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/components/ui/pagination";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10); // Default mobile
  const pathname = usePathname();
  const category = pathname.split("/").pop();

  // Fetch products
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`/api/product/${category}`);
      const data = await res.json();
      setProducts(data);
    }
    if (category) fetchProducts();
  }, [category]);

  // Responsive product count per page
  useEffect(() => {
    const updateProductsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setProductsPerPage(12);
      } else {
        setProductsPerPage(10);
      }
    };

    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);

    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white pt-10">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Products for {category}
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6">
          {paginatedProducts.map((product: any) => (
            <div key={product.id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square w-full shadow-sm overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-4 flex flex-col ml-2 gap-2 justify-between">
                  <h3 className="text-sm text-gray-400">
                    {product.name.split(" ").slice(0, 3).join(" ")}
                  </h3>
                  <p className="text-sm font-bold text-gray-900">
                    ETB {product.price} Birr
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-10">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => goToPage(currentPage - 1)}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                const isVisible =
                  Math.abs(currentPage - page) <= 2 ||
                  page === 1 ||
                  page === totalPages;
                if (!isVisible && page !== 2 && page !== totalPages - 1) {
                  if (index === 1 || index === totalPages - 2) {
                    return (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                }
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  onClick={() => goToPage(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
