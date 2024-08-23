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
import { fetcher } from "../util/util";
import { Link } from "react-router-dom";
import RenderStars from "./RenderStars";

const ProductList = () => {
  const { data, isLoading } = useSWR("/api/products", fetcher);

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
              className="border py-8 px-6 rounded-md border-gray-300"
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
                  <div className="flex">
                    {<RenderStars rating={product.rating.rate} />}
                  </div>
                  <Link
                    to={`/products/${product.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
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
