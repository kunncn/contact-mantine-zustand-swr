import { Container, Group, Skeleton, Stack } from "@mantine/core";
import useSWR from "swr";
import { fetcher } from "../util/data";

const CategoryComponent = () => {
  const { data, isLoading } = useSWR("/api/categories", fetcher);

  return (
    <Container size="xl" className="py-3">
      <Stack align="flex-start" justify="flex-start" gap="sm">
        <h1 className="text-gray-700">Product Categories</h1>
        <Group gap="sm" wrap="nowrap" className="w-full overflow-x-auto">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  height={40}
                  radius={5}
                  width={100}
                  className="flex-shrink-0 border border-gray-300"
                />
              ))
            : data?.categories.map((category) => (
                <p
                  key={category.id}
                  className="border border-gray-300 p-2 rounded-md hover:bg-gray-200 duration-300 cursor-pointer text-nowrap"
                >
                  {category.title}
                </p>
              ))}
        </Group>
      </Stack>
    </Container>
  );
};

export default CategoryComponent;
