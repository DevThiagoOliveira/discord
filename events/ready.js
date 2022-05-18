module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Logado em ${client.user.tag}`);
    },
};