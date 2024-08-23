import React from "react";
import {
  Button,
  Group,
  Loader,
  SimpleGrid,
  Stack,
  Tooltip,
} from "@mantine/core";
import useSWR from "swr";
import { fetcher } from "../util/data";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data, isLoading } = useSWR("/api/products", fetcher);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);

    return Array.from({ length: totalStars }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke={index < filledStars ? "blue" : "currentColor"}
        className={`w-6 h-6 ${
          index < filledStars
            ? "text-blue-500 fill-current"
            : "text-gray-900 fill-none"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ));
  };

  return (
    <div className={`${isLoading && "flex justify-center items-center"}`}>
      {isLoading && (
        <Loader color="blue" size={75} className="mx-auto h-full my-auto" />
      )}
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing="xl"
        verticalSpacing="xl"
        className={`${
          isLoading && "flex justify-center items-center h-[500px]"
        }`}
      >
        {data &&
          data.map((product) => (
            <div
              className="border p-2 rounded-md border-gray-300"
              key={product.id}
            >
              <Stack gap={"sm"}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[200px] block mx-auto object-center aspect-auto w-fit"
                />
                <Tooltip label={product.title} openDelay={700}>
                  <p className="text-lg font-semibold text-nowrap truncate">
                    {product.title}
                  </p>
                </Tooltip>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {product.description}
                </p>
                <Group>
                  <div className="flex">{renderStars(product.rating.rate)}</div>
                  <Link
                    to={`/products/${product.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}-${product.id}`}
                    className="ms-auto text-[14px] font-semibold text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </Group>
                <Group>
                  <p className="text-lg font-semibold">
                    ${product.price.toFixed(1)}
                  </p>
                  <Button
                    className="ms-auto"
                    onClick={() => addToCart(product)}
                    variant="outline"
                    color="blue"
                  >
                    Add to cart
                  </Button>
                </Group>
              </Stack>
            </div>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default ProductList;
