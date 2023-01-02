import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router=express.Router();



let users=[
    // {
    //     firstn:"md",
    //     lastn:"zihad",
    //     age:23
    // }
];

router.get("/",(req,res)=>{
    console.log(users);
    res.send(users);
});


router.post("/",(req,res)=>{

    const user=req.body;

    users.push({...user,id:uuidv4()});

    console.log(user);

    res.send(`user created with this name ${user.firstn}`);

});


router.get("/:id",(req,res)=>{

    const {id}=req.params;
   const foundUser=users.find((user)=>
    user.id==id
   );
    res.send(foundUser);
});


router.delete("/:id",(req,res)=>{

    const {id}=req.params;

    users=users.filter((user)=>user.id!=id)
    res.send(`user deleted with is id ${id}`);
});

router.patch("/:id",(req,res)=>{

    const {id}=req.params;
    const {firstn, lastn, age}=req.body;
    const user=users.find((user)=>user.id==id);

    if(firstn) user.firstn=firstn;
    if(lastn) user.lastn=lastn;
    if(age) user.age=age;
    res.send(`user updated with is id ${id}`);
});


export default router;

