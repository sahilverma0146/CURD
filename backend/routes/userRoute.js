const express = require("express");
const app = express();

const router = express.Router();

const model = require("../model/userModel");
const user = model.user;

app.use(express.json());

//  create
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  const userAdded = await user({
    name: name,
    email: email,
    age: age,
  });
  res.send(userAdded);
  userAdded.save();
});


// read
router.get("/find/:id", async (req, res) => {
  const { id } = req.params;
  const product = await user.findById({ _id: id });
  res.json(product);
});

router.get("/find", async (req, res) => {
  const product = await user.find();
  res.json(product);
});


// update
router.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get body", req.body);
  console.log("get id", id);
  //const { name, email, age } = req.body;
  try {
    const updatedUser = await user.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  // const {id} = req.params;
  // console.log("get body", req.body);
  // console.log("get id", id);
  // // const { name, email, age } = req.body;

  // const updateUser = await user.findByIdAndUpdate(id , req.body );
  // res.json(updateUser);
});



router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log("get body", req.body);
  console.log("get id", id);
  //const { name, email, age } = req.body;
  try {
    const updatedUser = await userData.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//    delete
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const deleteUser = await user.findByIdAndDelete({ _id: id });
  res.send(deleteUser);
});

module.exports = router;
