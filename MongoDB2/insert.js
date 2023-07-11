const dbConnect = require('./connection.js');

const insert = async() => {
    const db = await dbConnect();

    //inserting simple element 
    // const result = await db.insertOne({
    //     name: 'pixel5',
    //     price: 49000,
    //     ratings: 5
    // })

    const result = await db.insertMany([{
            name: 'iphone13pro',
            price: '125000',
            ratings: 4.9
        },
        {
            name: 'samsungNote5',
            price: '125000',
            ratings: 4.9
        },
        {
            name: 'nothingPhone2',
            price: '25000',
            ratings: 4.7
        }

    ])


    if (result.acknowledged) {
        console.log('data inserted ');
    }
}

insert();