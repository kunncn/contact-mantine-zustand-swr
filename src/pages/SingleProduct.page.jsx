import { Breadcrumbs, Container, Group, Loader, Skeleton } from "@mantine/core";
import { HeaderComponent } from "../components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../util/data";

const SingleProductPage = () => {
  const params = useParams();
  const productId = Number(params.productId[params.productId.length - 1]);
  const { data, isLoading } = useSWR("/api/products", fetcher);
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Product", href: `/products/${params.productId}` },
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
            <div className="py-3 px-10 border border-gray-300">
              <Group>
                <img
                  src={data.find((product) => product.id === productId).image}
                  alt={data.find((product) => product.id === productId).title}
                  className="h-[350px]"
                />
              </Group>
            </div>
          )}
        </Skeleton>
      </Container>
    </>
  );
};

export default SingleProductPage;
