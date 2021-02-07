exports.getToilet = (req, res, next) => {
    res.status(200).send()
}

exports.addNewToilet = (req, res, next) => {
    const newToilet = req.body;
    writeToilet(newToilet, (err, insertedToilet) => {
        if (err) console.log(err);
        else res.status(201).send({toilets:insertedToilet})
    });
};

exports.getToiletById = (req, res, next) => {
    const {toiletId} = req.params;
    res.status(200).send(`${toiletId}`)
}

