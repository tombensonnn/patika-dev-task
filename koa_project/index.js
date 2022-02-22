const router = require('@koa/router')();

const Koa = require('koa');
const app = new Koa();

async function indexPage(ctx){
    ctx.status = 200;
    ctx.body = '<h1>WELCOME TO INDEX PAGE</h1>';
}

router.get('/', indexPage);
router.get('/index', indexPage);

async function aboutPage(ctx) {
    ctx.status = 200;
    ctx.body = '<h1>WELCOME TO ABOUT PAGE</h1>';
}

router.get('/about', aboutPage);

async function contactPage(ctx) {
    ctx.status = 200;
    ctx.body = '<h1>WELCOME TO CONTACT PAGE</h1>';
}

router.get('/contact', contactPage);

app.use(router.routes());



const port = 3000;

app.listen(port);