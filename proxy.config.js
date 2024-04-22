[cc, lang='javascript']
const proxy = [
{
context: '/api',
target: 'https://backend-kanban.onrender.com:10000',
pathRewrite: { '^/api': '' }
}
];
module.exports = proxy;
[cc]