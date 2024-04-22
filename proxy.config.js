[cc, lang='javascript']
const proxy = [
{
context: '/api',
target: 'https://backend-kanban.onrender.com',
pathRewrite: { '^/api': '' }
}
];
module.exports = proxy;
[cc]