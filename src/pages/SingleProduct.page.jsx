import {
  Breadcrumbs,
  Button,
  Container,
  Group,
  SimpleGrid,
  Skeleton,
  Stack,
} from "@mantine/core";
import { HeaderComponent } from "../components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../util/util";
import RenderStars from "../components/RenderStars";

const SingleProductPage = () => {
  const { productTitle } = useParams();
  const { data, isLoading } = useSWR("/api/products", fetcher);
  const product =
    data &&
    data.find(
      (product) =>
        product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === productTitle
    );
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Product", href: `/products/${productTitle}` },
  ].map((item, index) => (
    <Link className="text-blue-500 " to={item.href} key={index}>
      {item.name}
    </Link>
  ));

  return (
    <>
      <HeaderComponent />
      <Container size={"xl"} className="py-3">
        <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
        <Skeleton className="mt-10" height={500} visible={isLoading}>
          {data && (
            <div className="py-10 border border-gray-300">
              <SimpleGrid spacing={0} cols={{ base: 1, sm: 2 }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-[200px] m-auto"
                />
                <Stack className="!w-fit p-5 me-auto max-w-[450px]">
                  <h1 className="text-gray-700 font-bold text-xl text-start">
                    {product.title}
                  </h1>
                  <span className="text-[10px] text-black bg-gray-200 py-1 px-2 rounded-sm w-fit">
                    {product.category}
                  </span>
                  <p className=" text-gray-700 text-start text-[12px]">
                    {product.description.charAt(0).toUpperCase() +
                      product.description.slice(1)}
                  </p>
                  <Group gap="xs">
                    <RenderStars rating={product.rating.rate} />
                  </Group>
                  <Group>
                    <p className="text-gray-700 font-bold text-xl text-start">
                      ${product.price.toFixed(1)}
                    </p>
                    <Button variant="outline" className="w-fit ms-auto">
                      Add to cart
                    </Button>
                  </Group>
                </Stack>
              </SimpleGrid>
            </div>
          )}
        </Skeleton>
      </Container>
    </>
  );
};

export default SingleProductPage;
