import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import EditCompany from './views/EditCompany.vue';
import CompanyDetails from './views/CompanyDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/editCompany/:id',
      name: 'editCompany',
      component: EditCompany
    },
    {
      path: '/details/:id',
      name: 'companyDetails',
      component: CompanyDetails,
    },
  ],
});
