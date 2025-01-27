app.get('/', async (_, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

app.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = new Customer({
        name: req.body.name,
        isGold: req.body.isGold,
        phone: req.body.phone
    });
});