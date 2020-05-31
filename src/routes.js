// ./source/routes.js

import Login from './components/login/Login.vue';
import ListTaskgroup from './components/taskgroup/list-taskgroup/ListTaskgroup.vue';
import ShowTaskgroup from './components/taskgroup/show-taskgroup/ShowTaskgroup.vue';
import CreateTaskgroup from './components/taskgroup/create-taskgroup/CreateTaskgroup.vue';
import DeleteTaskgroup from './components/taskgroup/delete-taskgroup/DeleteTaskgroup.vue';

import CreateTaskitem from './components/taskitem/create-taskitem/CreateTaskitem.vue';
import DeleteTaskitem from './components/taskitem/delete-taskitem/DeleteTaskitem.vue';
import AlterTaskitem from './components/taskitem/alter-taskitem/AlterTaskitem.vue';

export const routes = [
    {
        name:'login',
        path:'/login',
        component: Login
    },
    {
        name:'listTaskgroup',
        path:'/taskgroup/list',
        component: ListTaskgroup,
        meta: {
            requiresAuth: true
        }
    },
    {
        name:'createTaskgroup',
        path:'/taskgroup/create',
        component: CreateTaskgroup,
        meta: {
            requiresAuth: true
        }
    },
    {
        name:'showTaskgroup',
        path:'/taskgroup/show/:id',
        component: ShowTaskgroup,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name:'deleteTaskgroup',
        path:'/taskgroup/delete/:id',
        component: DeleteTaskgroup,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name:'createTaskitem',
        path:'/taskitem/create/:id',
        component: CreateTaskitem,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name:'deleteTaskitem',
        path:'/taskitem/delete/:id',
        component: DeleteTaskitem,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        name:'alterTaskitem',
        path:'/taskitem/alter/:id',
        component: AlterTaskitem,
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    { path: "*", component: Login}
];