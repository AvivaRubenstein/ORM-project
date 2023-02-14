const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({include: [{model: Product, through: ProductTag}]});
    res.status(200).json(tags);
  } catch(err){
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag}]
    });
  //if the person does a search for a tag using an id which doesn't exist, return an error message
    if(!tagData){
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }
  //otherwise, return the tagData for that id
    res.status(200).json(tagData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  //request body should look like:
  //{
  // "tag_name" : "nameOfTag" 
  //}
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
   // Calls the update method on Tag
   try {
   const updatedTag = await Tag.update(
    { // in this case, only the tag name will be updated
      tag_name: req.body.tag_name
    },
    {
      // Gets the tag based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  );
    if(!updatedTag) {
      res.status(404).json({message: "No tag found with this id!"});
      return;
    }
      // the .update functionality doesn't return the Tag object, so instead we are just returning a message which says that it went through successfully
      res.status(200).json({message: "Update complete!"});
   } catch(err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagData = await Tag.destroy(
      {
        where: { 
          id: req.params.id 
        }
      }); 
      //if there is no tagData associated with this id, return a message that we couldn't find it
      if(!tagData) {
        res.status(404).json({message: 'No tag found with this id!'});
        return;
      }
      res.status(200).json({message: "Tag deleted!"});

    } catch (err) {
    res.status(500).json(err);
    
  }
});

module.exports = router;
