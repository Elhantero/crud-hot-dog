module.exports = {
    showHotDogs: (req, res) => {
        const hotDogs = [
            {
                name: '1',
                recipe: '11',
            },
            {
                name: '222',
                recipe: '2222',
            },
            {
                name: '333',
                recipe: '3333',
            },
        ];
        res.render('pages/hotDogs', { hotDogs });
    },
};
