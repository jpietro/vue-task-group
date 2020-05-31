import axios from "axios";

const HOST = 'https://edimossilva-task-manager.herokuapp.com';
const LOGIN_URL = `${HOST}/auth/login`;
const TASKGROUP_URL = `${HOST}/task_lists`;
const TASKITEM_URL = `${HOST}/task_in_lists`;

const TASKITEMCREATE_URL = `${HOST}/task_with_task_list`;

const TASKITEMALTER_URL = `${HOST}/tasks`;



export const getRequestConfig = () =>{
    const token = localStorage.getItem("token");
    const requestConfig = {
        headers: {
            Authorization: `Basic ${token}`
        }
    };
    return requestConfig; 
};

export const doLoginApi = (username, password) => {
    const params = {username, password};

    return axios.post(LOGIN_URL, params);
};

export const createTaskgroupsApi = (name, description, frequence_type) => {
    const params = {name, description, frequence_type};

    return axios.post(TASKGROUP_URL, params, getRequestConfig());
};

export const createTaskitemApi = (name, description, task_list_id) => {
    const params = {name, description, task_list_id};

    return axios.post(TASKITEMCREATE_URL, params, getRequestConfig());
};

export const deleteTaskitemApi = id => {
    const deleteTaskitemApiURL = `${TASKITEM_URL}/${id}`;

    return axios.delete(deleteTaskitemApiURL, getRequestConfig());
};

export const alterTaskitemApi = (name, id) => {
    const alterTaskitemApiURL = `${TASKITEMALTER_URL}/${id}`;
    const params = {name: name};

    return axios.put(alterTaskitemApiURL, params, getRequestConfig());
};

export const deleteTaskgroupApi = id => {
    const deleteTaskgroupApiURL = `${TASKGROUP_URL}/${id}`;

    return axios.delete(deleteTaskgroupApiURL, getRequestConfig());
};

export const getTaskgroupsApi = () => {
    
    return axios.get(TASKGROUP_URL, getRequestConfig());
};

export const getTaskgroupApi = id => {
    const getTaskgroupApiURL = `${TASKGROUP_URL}/${id}`;

    return axios.get(getTaskgroupApiURL, getRequestConfig());
};

export const updateTaskItemApi = taskitem => {
    const getTaskgroupApiURL = `${TASKITEM_URL}/${taskitem.id}`;
    const params = {checked: taskitem.checked};

    return axios.put(getTaskgroupApiURL,params, getRequestConfig());
};
