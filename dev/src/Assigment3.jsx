import React, { useMemo, useState } from "react";

const Assigment3 = () => {
  const [items, setitems] = useState([
    { name: "chocolate", value: 10 },
    { name: "biscuit", value: 20 },
    { name: "ice-creame", value: 40 },
    { name: "milk", value: 80 },
    { name: "honey", value: 30 },
    { name: "soap", value: 20 },
  ]);
  const totalValue = useMemo(() => {
    let totalValue = 0;
    for (let i = 0; i < items.length; i++) {
      totalValue = totalValue + items[i].value;
    }
    return totalValue
  }, [items]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total value:{totalValue}</p>
    </div>
  );
};

export default Assigment3;
