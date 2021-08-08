const mongoose=require('mongoose');
let addressBookModel=require('../models/AddressBook');
module.exports={
    createContact:(req,res)=>{
        let Model =new addressBookModel
        ({
            firstName:req.body.fname,
	        lastName:req.body.lname,
	        address:req.body.address,
	        city:req.body.city,
	        state:req.body.state,
	        mobile:parseInt(req.body.mobile),
	        email:req.body.email,
        });
        Model.save().then(()=>{
            res.json({'msg':'success!'})
            console.log('Single Contact created!')
        })
        .catch((err)=>console.log("Not Created!"+err));
    },
    getContactList:async(req,res)=>{
        //contact-list with phase matching and limit
        try{
        let phase=req.params.name;
        let page=parseInt(req.params.page);
        let limit=parseInt(req.params.limit);
        let result= await addressBookModel.find({$or:[{firstName:phase},{city:phase},{state:phase}]}).
        skip((page-1)*limit).limit(limit);
        res.json(result);
        console.log('Contact List Fetched!')
        }catch (err) {
            console.log("List Not Fetched!" + err);
        }
    },

    getSingleContact:async(req,res)=>{
        try{
        let _id=req.params.cid;
        const result= await addressBookModel.find({_id});
            res.json(result);
            console.log('Single Contact Fetched!')
        }
        catch(err){console.log("Not Fetched!"+err)}
    },
    deleteSingleConatct:async(req,res)=>{
        try{
        let _id=req.params.did;
        //console.log(_id);
        let result= await addressBookModel.findOneAndDelete({_id:_id});
            res.json(result);
            console.log('Contact Deleted!')
        }catch(err){console.log("Not Deleted!"+err)}
    },
    getAllContactList:async(req,res)=>{
        //fetchAll
        try{
        let result= await addressBookModel.find({});
        res.json(result);
        console.log('All List Fetched!')
        }catch (err) {
            console.log("List Not Fetched!" + err);
        }
    },

};