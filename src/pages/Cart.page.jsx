import {
  Breadcrumbs,
  Button,
  Container,
  Flex,
  Group,
  Stack,
} from "@mantine/core";
import { HeaderComponent } from "../components";
import { Link } from "react-router-dom";

const CartPage = () => {
  const data = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
  ];
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "My Cart", href: `/cart` },
  ].map((item, index) => (
    <Link className="text-blue-500 " to={item.href} key={index}>
      {item.name}
    </Link>
  ));
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex-grow">
        <HeaderComponent />
        <Container size={"xl"} className="py-3 h-[90%]">
          <Stack className="h-full">
            <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
            <Group justify="center" align="start" className="h-full">
              <Stack className="max-w-[900px] h-full  overflow-y-scroll">
                {data && (
                  <>
                    {data.map((product) => (
                      <Flex
                        gap={"lg"}
                        align="center"
                        key={product.id}
                        className="border border-gray-300 p-2 justify-around"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-w-[80px] "
                        />
                        <Stack
                          gap={"xs"}
                          className="max-w-[300px] md:max-w-full"
                        >
                          <p className="text-md font-semibold ">
                            {product.title}
                          </p>
                          <Group>
                            <p>{"$" + product.price.toFixed(1)}</p>
                            <Group className="ms-auto" gap={"xs"}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                              <span>1</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </Group>
                          </Group>
                        </Stack>
                        <p className="text-md font-semibold">
                          {"$" + product.price.toFixed(1)}
                        </p>
                      </Flex>
                    ))}
                  </>
                )}
              </Stack>
            </Group>
          </Stack>
        </Container>
      </div>
      <Container size="xl" className="py-3 bg-white mt-auto w-full">
        <Stack align="end" gap={"xs"}>
          <h1>Total</h1>
          <p>{"$" + 109.95}</p>
          <Button>Order Now</Button>
        </Stack>
      </Container>
    </div>
  );
};

export default CartPage;
