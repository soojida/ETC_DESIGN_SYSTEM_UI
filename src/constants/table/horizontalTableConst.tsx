export const horizontalTableHeader = [
  {
    key: "first",
    value: "1",
  },
  {
    key: "second",
    value: "2",
  },
  {
    key: "third",
    value: "3",
  },
];

export const horizontalTableChilrenHeader = [
  {
    key: "first",
    value: "1",
    children: [
      { key: "first_children", value: "1-1" },
      {
        key: "second_children",
        value: "1-2",
      },
    ],
  },
  {
    key: "second",
    value: "2",
  },
  {
    key: "third",
    value: "3",
  },
];

export const horizontalTableGrandHeader = [
  {
    key: "first",
    value: "1",
    children: [
      { key: "first_children", value: "1-1" },
      {
        key: "second_children",
        value: "1-2",
        grandChild: [
          { key: "first_grandchild", value: "1-2-1" },
          { key: "second_grandchild", value: "1-2-2" },
        ],
      },
    ],
  },
  {
    key: "second",
    value: "2",
  },
  {
    key: "third",
    value: "3",
  },
];

export const horizontalTableBody = [
  {
    first_children: "1-1",
    second_children: "1-2",
    first_grandchild: "1-2-1",
    second_grandchild: "1-2-2",
    first: "1",
    second: "2",
    third: "3",
  },
];
