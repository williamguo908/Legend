

module.exports = (req, res) => {
  console.log(req.body);
  var myData = req.body.name;
  /*call function in services layer perform validation, logic etc*/
  console.log("item: " + myData);
  res.end("yes");
};

/* eg of routing layer logic
route.post('/',
  validators.userSignup, // this middleware take care of validation
  async (req, res, next) => {
    // The actual responsability of the route layer.
    const userDTO = req.body;

    // Call to service layer.
    // Abstraction on how to access the data layer and the business logic.
    const { user, company } = await UserService.Signup(userDTO);

    // Return a response to client.
    return res.json({ user, company });
  });
*/
