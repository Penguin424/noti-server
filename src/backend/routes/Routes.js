const { Router } = require('express');
const webpus = require('../webpush.js');

const router = Router();

let pushSubscription;

router.post('/subscription', (req, res) => {
   pushSubscription =  req.body;
   res.status(200).json();

//    const payload = JSON.stringify({
//        title: 'almacen notificacion',
//        message: 'Hello, World'
//    });

//    try {
//         webpus.sendNotification(pushSubscription, payload);
//    } catch (error) {
//        console.log(error);
//    }
});

router.post('/newNoti', async(req, res) => {
    const payload = JSON.stringify({
        title: 'almacen notificacion',
        message: req.body.message
    });

    try {
        await webpus.sendNotification(pushSubscription, payload);
    } catch (error) {
       console.log(error);
    }
});

module.exports = router; 