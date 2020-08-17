const { Router } = require('express');
const webpus = require('../webpush.js');

const router = Router();

let pushSubscription;

router.post('/subscription', (req, res) => {
   pushSubscription =  req.body;
   res.status(200).json();

   const payload = JSON.stringify({
       title: 'almacen notificacion',
       message: 'Hello, World'
   });

   try {
        webpus.sendNotification(pushSubscription, payload);
   } catch (error) {
       console.log(error);
   }
});

module.exports = router; 