const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/test');
}

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  info: String,
  paragraph_text: String
});

const contact = mongoose.model('contact', contactSchema);

const registerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});



const register = mongoose.model('register', registerSchema);

const homeSchema = new mongoose.Schema({
  email: String,
});

const home = mongoose.model('home', homeSchema);



app.post('/contact', (req, res) => {
  var myData = new contact(req.body);
  myData.save().then(() => {
    res.sendFile(path.join(__dirname, '/sallert.html'));
  }).catch(() => {
    res.sendFile(path.join(__dirname, '/usallert.html'));
  })
});

app.post('/login', async(req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const usermail = await register.findOne({email:email});

    if(usermail.password === password){
      res.sendFile(path.join(__dirname, '/aflog.html'));
    }else{
      res.sendFile(path.join(__dirname, '/inlog.html'));
    }
  } catch (error) {
    res.status(404).send(error);
  }
});


app.post('/', (req, res) => {
  var mData = new register(req.body);
  mData.save().then(() => {
    res.sendFile(path.join(__dirname, '/sallert.html'));
  }).catch(() => {
    res.sendFile(path.join(__dirname, '/usallert.html'));
  })
});

app.post('/home', (req, res) => {
  var mData = new home(req.body);
  mData.save().then(() => {
    res.sendFile(path.join(__dirname, '/sallert.html'));
  }).catch(() => {
    res.sendFile(path.join(__dirname, '/usallert.html'));
  })
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/apply', function (req, res) {
  res.sendFile(path.join(__dirname, '/apply.html'));
});

app.get('/football', function (req, res) {
  res.sendFile(path.join(__dirname, '/football.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, '/contact.html'));
});

app.get('/cricket', function (req, res) {
  res.sendFile(path.join(__dirname, '/cricket.html'));
});

app.get('/Top_3_Batsman', function (req, res) {
  res.sendFile(path.join(__dirname, '/cri_bat.html'));
});

app.get('/Top_3_Bowler', function (req, res) {
  res.sendFile(path.join(__dirname, '/cri_bow.html'));
});

app.get('/Top_3_Goalkeeper', function (req, res) {
  res.sendFile(path.join(__dirname, '/foo_goa.html'));
});

app.get('/Top_3_Defender', function (req, res) {
  res.sendFile(path.join(__dirname, '/foo_def.html'));
});

app.get('/About', function (req, res) {
  res.sendFile(path.join(__dirname, '/sp.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '/login.html'));
});

app.get('/afll', function (req, res) {
  res.sendFile(path.join(__dirname, '/afll.html'));
});





// after login


app.post('/aflcontact', (req, res) => {
  var myData = new contact(req.body);
  myData.save().then(() => {
    res.sendFile(path.join(__dirname, '/aflsa.html'));
  }).catch(() => {
    res.sendFile(path.join(__dirname, '/aflus.html'));
  })
});


app.post('/aflhome', (req, res) => {
  var mData = new home(req.body);
  mData.save().then(() => {
    res.sendFile(path.join(__dirname, '/aflsa.html'));
  }).catch(() => {
    res.sendFile(path.join(__dirname, '/afus.html'));
  })
});


app.get('/aflfootball', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflfoo.html'));
});

app.get('/aflog', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflog.html'));
});

app.get('/aflcontact', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflcon.html'));
});

app.get('/aflcricket', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflcri.html'));
});

app.get('/aflTop_3_Batsman', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflcri_b.html'));
});

app.get('/aflTop_3_Bowler', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflcri_bo.html'));
});

app.get('/aflTop_3_Goalkeeper', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflfoo_g.html'));
});

app.get('/aflTop_3_Defender', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflfoo_d.html'));
});

app.get('/aflAbout', function (req, res) {
  res.sendFile(path.join(__dirname, '/aflsp.html'));
});

app.get('/pmsf', function (req, res) {
  res.sendFile(path.join(__dirname, '/pmsf.html'));
});

app.get('/pm', function (req, res) {
  res.sendFile(path.join(__dirname, '/pm.html'));
});


app.listen(port, () => {
  console.log(`This app listening on port ${port}`)
});