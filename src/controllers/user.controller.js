

module.exports = {
    index: async (req, res, next) => {
        res.status(200).json({ status: true, user: 'TEts' });
    },
}