const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const addrcontroller = require('../controllers/addressBookController');
const router=express.Router();

//controller calling

//To create contact via html form
router.get('/create',(req,res)=>{
    res.sendFile(path.join(__dirname, '../public', 'create-contact.html'));
});

//api to create contact
router.post('/create-contact',addrcontroller.createContact)
//api to fetch all single contact phase,limit,pageno
router.get('/fetch/:name/:limit/:page',addrcontroller.getContactList)

//api to fetch single contact
router.get('/fetch-single/:cid',addrcontroller.getSingleContact);

//api to delete single contact
router.get('/delete-single/:did',addrcontroller.deleteSingleConatct)

//api to fetch all contacts
router.get('/fetchall',addrcontroller.getAllContactList);

module.exports=router;