import { useState } from "react";
import { type ItemType } from "./useItem";

const MultiSelectList = () => {
    const items: ItemType[] = [
      { id: 1, label: "React" },
      { id: 2, label: "Redux" },
      { id: 3, label: "TypeScript" }
    ];
    
    const [selectedItems, setSelectedItems] = useState<{[id: number]: boolean}>({});
    const count = Object.values(selectedItems).filter(Boolean).length;
    const onChangeHandler = (id: number, checked: boolean) => {
        setSelectedItems(prev => {
            const next = { ...prev };
            if(checked) {
                next[id] = true;
            } else {
                delete next[id];
            }
            return next;
        });
    };


  return (
    <div>
        <p>Selected Items Count: {count}</p>
        {items.map(item => (
            <div key={item.id}>
                <input
                    type="checkbox"
                    onChange={(e) => onChangeHandler(item.id,  e.target.checked)}
                    checked={selectedItems[item.id] || false}/>
                <label>{item?.label}</label>
            </div>
        ))}
    </div>
  )
}

export default MultiSelectList