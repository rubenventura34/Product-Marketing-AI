import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { InputWithLabel } from "./components/InputWithLabel";
import { TextAreaWithLabel } from "./components/TextAreaWithLabel";
import { TagsInput } from "./components/TagsInput";
import { Button } from "./components/Button";
import { ReviewItem } from "./components/ReviewItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Product Review Generator</h1>
      <InputWithLabel
        label="Product Name"
        placeholder="Enter product name..."
      />
      <TextAreaWithLabel
        label="Product Description"
        placeholder="Enter product description..."
      />
      <TagsInput />
      <Button className="my-4">Generate</Button>
      <ReviewItem user="Juan Pedro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem
        ipsum libero. Praesentium natus vel numquam dicta minima. Numquam
        assumenda libero dolore nostrum. Consectetur itaque officiis, cum
        laboriosam voluptates nam?
      </ReviewItem>
    </div>
  );
}

export default App;
