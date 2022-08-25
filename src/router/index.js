import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Page-Home.vue";
import Sobre from "@/views/Page-Sobre.vue";
import Servicos from "@/views/Page-Servicos.vue";
import Produtos from "@/views/Page-Produtos.vue";
import Contato from "@/views/Page-Contato.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "Sobre",
    component: Sobre,
  },
  {
    path: "/servicos",
    name: "Servicos",
    component: Servicos,
  },
  {
    path: "/produtos",
    name: "Produtos",
    component: Produtos,
  },
  {
    path: "/contato",
    name: "Contato",
    component: Contato,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;