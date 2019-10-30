import contactsRouter from './contacts';

export default (router) => {
    router.use('/contacts', contactsRouter());
    
    return router;
};
