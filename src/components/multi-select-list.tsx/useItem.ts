export interface ItemType {
    id: number;
    label: string;
    selected?: boolean;
}

export const useItems = () => {
    const items: ItemType[] = [
      { id: 1, label: "React" },
      { id: 2, label: "Redux" },
      { id: 3, label: "TypeScript" }
    ];

    let itemMap: {[id: string]: ItemType} = {};
    items.forEach(item => {
        itemMap[item.id] = item;
    });

    return { items, itemMap };
}