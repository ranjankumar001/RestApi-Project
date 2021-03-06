const express=require('express')
router=express.Router()
const Post=require('../model/Post')


//get Back all the post
router.get('/', async(req, res) => {
    try{
        const posts=await Post.find();
        res.json(posts)
    }
    catch(err)
    {
        res.json({message:err})
    }
});

//Submit a post
router.post('/', async(req, res) => {
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    })

    try{
        const savedPost=await post.save()
        res.json(savedPost)
    }
    catch(err)
    {
        res.json({message:err})
    }
           
});

//find Specific Post
router.get('/:postId', async(req, res) => {
        try{
            const post=await Post.findById(req.params.postId)
            res.json(post)
        }
        catch(err)
        {
            res.json({message:err})
        }
        
});

//Delete a specific post
router.delete('/:postId', async(req, res) => {
    try{
    const removedPost=await Post.remove({_id:req.params.postId})
     res.json(removedPost)
    }
    catch(err)
    {
        res.json({message:err})
    }
});

//Update a Post
router.put('/update/:id', async(req, res) => {
    try
    {
        const updatedPost=await model.findByIdAndUpdate(req.params.id)
        updatedPost.title=req.body.title
        updatedPost.description=req.body.description
            
        const savedPost=await updatedPost.save()
         res.json(savedPost)
             
            
    }
    catch(err)
    {
         res.json({message:err});
    }
});


module.exports=router
