const connectToMongo = require("../connection/conn.db")

module.exports = {
  validateUser: (req, res) => {
    const {email,password}=req.body;

    connectToMongo((err,db)=>{
      if(err) return res.send({error: true, message : "There is an error occured"})

      db.collection("users").findOne({email: email, password: password}).toArray().then(user=>{
          if(user.length>0){
            return res.send({status: true, exist: true, message: "login successful"})
          }
          return res.send({status: true, exist: false, message: "login unsuccessful"})
      }).catch(err=>{
        return res.send({error: true, message : "There is an error occured"})
      })
    })
   
  },
};
