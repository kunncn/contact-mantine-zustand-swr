import { Breadcrumbs, Container, Group, Stack } from "@mantine/core";
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
    <>
      <HeaderComponent />
      <Container size={"xl"} className="py-3">
        <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
        <Stack>
          {data && (
            <>
              {data.map((product) => (
                <Group key={product.id} className="border  border-gray-300 p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-w-[80px] "
                  />
                </Group>
              ))}
            </>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default CartPage;
