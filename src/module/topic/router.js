import { LIST_TYPE } from "./store.js";

export const routes = [
  {
    name: LIST_TYPE.TOP,
    path: '/discover/toplist',
    component: () => import("./views/UTopic.vue"),
    props: { type: LIST_TYPE.TOP },
  },
  {
    name: LIST_TYPE.NEW,
    path: `/${LIST_TYPE.NEW}`,
    component: () => import("./views/UTopic.vue"),
    props: { type: LIST_TYPE.NEW },
  },
  {
    name: LIST_TYPE.HOT,
    path: '/discover/hotlist',
    component: () => import("./views/HotTopic.vue"),
    props: { type: LIST_TYPE.HOT },
  },
];
