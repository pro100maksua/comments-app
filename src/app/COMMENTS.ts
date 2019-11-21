import { Comment } from "./models/comment";

export const COMMENTS: Comment[] = [
  {
    id: 1,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis debitis maxime delectus, ipsam qui pariatur quos cum est dolorum fuga recusandae distinctio neque necessitatibus assumenda laudantium quaerat voluptatem, veritatis culpa accusamus. Laborum vitae, corrupti deleniti voluptas sed nesciunt autem fugiat quos maiores deserunt nulla provident qui ducimus esse aliquid?",
    comments: [
      {
        id: 3,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, libero.",
      },
      {
        id: 4,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione perferendis nesciunt.",
      },
    ],
  },
  {
    id: 2,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestias vitae dignissimos eaque, at ratione.",
    comments: [
      {
        id: 5,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, libero.",
        comments: [
          {
            id: 7,
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, libero.",
          },
          {
            id: 8,
            text:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione perferendis nesciunt.",
          },
        ],
      },
      {
        id: 6,
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione perferendis nesciunt.",
      },
    ],
  },
];
