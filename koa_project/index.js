const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {

    const url = ctx.url;

    if(url === '/'){
        ctx.body = 'INDEX PAGE';
    }
    else if(url === '/about'){
        ctx.body = 'ABOUT PAGE';
    }
    else if(url === '/contact'){
        ctx.body = 'CONTACT PAGE';
    }
});

app.listen(3000);