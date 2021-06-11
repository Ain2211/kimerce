import BaseApi from '../baseApi';
export default {
    list: BaseApi.News + 'News/search/',
    getById: BaseApi.News + 'News/getbyid/',
    createOrUpdate: BaseApi.News + 'News/createorupdate/',
    delete: BaseApi.News + 'News/delete/',
};
