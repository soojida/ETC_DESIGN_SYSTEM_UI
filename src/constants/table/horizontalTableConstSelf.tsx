export const horizontalTableSelfHeader = [
  {
    key: "first",
    value: "1",
    children: [
      { key: "first_children", value: "1-1", rowspan: 2 },
      {
        key: "second_children",
        value: "1-2",
        colspan: 2,
        grandChild: [
          { key: "first_grandchild", value: "1-2-1" },
          { key: "second_grandchild", value: "1-2-2" },
        ],
      },
    ],
    colspan: 3,
    rowspan: 3,
  },
  {
    key: "second",
    value: "2",
    rowspan: 3,
  },
  {
    key: "third",
    value: "3",
    rowspan: 3,
  },
];

export const horizontalTableSelfBody = [
  {
    first_children: "1-1",
    second_children: "1-2",
    first_grandchild: "1-2-1",
    second_grandchild: "1-2-2",
    second: "2",
    third: "3",
  },
];
