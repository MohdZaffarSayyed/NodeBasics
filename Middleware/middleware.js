const middlewareFilter = (req, res, next) => {

    if (!req.query.age) {
        res.send('Please provide your age');
    } else if (req.query.age < 18) {
        res.send('Age should be above 18');
    } else {
        next();
    }

};

module.exports = middlewareFilter;