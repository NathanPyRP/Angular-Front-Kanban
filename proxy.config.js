[cc, lang='javascript']
const proxy = [
{
context: '/api',
target: 'https://dashboard.render.com/web/srv-coj7t021hbls738e2j80',
pathRewrite: { '^/api': '' }
}
];
module.exports = proxy;
[cc]