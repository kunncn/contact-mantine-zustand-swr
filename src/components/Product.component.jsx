import { Container, Stack } from "@mantine/core";
import ProductList from "./ProductList";

const ProductComponent = () => {
  return (
    <>
      <Container size={"xl"} className="py-3">
        <Stack gap={"sm"}>
          <h1 className="text-gray-700">Available Products</h1>
          <ProductList />
        </Stack>
      </Container>
    </>
  );
};

export default ProductComponent;
