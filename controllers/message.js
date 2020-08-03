const Message = require(`../models/message`);

// GET: /
module.exports.getHome = (`/`, (req, res) => {
  res.render(`home`, {
    message: Message.fetchAll()
  });
});

// GET: /sendMessage 
module.exports.getSendMessage = (req, res) => {
  res.render(`sendMessage`);
};

// POST: /sendMessage
module.exports.postSendMessage = (req, res) => {
  const message = new Message(req.body.message);
  message.save();
  res.redirect(`/`);
};