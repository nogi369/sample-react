import { useState } from "react";

export const ChildComponent = ({ data }) => {
  return (
    <div>
      <p>子コンポーネント</p>
      <p>親から受け取ったデータ: {data}</p>
    </div>
  );
};

export const ParentComponent = () => {
  const [data, setData] = useState("これは親からのデータです");

  return (
    <div>
      <p>親コンポーネント</p>
      <p>データ: {data}</p>
      {/* 子コンポーネントにデータを渡す */}
      <ChildComponent data={data} />
    </div>
  );
};
