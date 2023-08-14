const express = require('express')
const bodyParser= require('body-parser')
const app = express()

const port = 3000
const axios = require('axios');
var cors = require('cors')
const BASE_URL ="https://a1ce-calendar.cmkl.ac.th/api"


app.use(cors())

app.get('/user', (req, res) => {
 let config = {
  method: 'get',
    url: BASE_URL + "/user",
  headers: { 
    'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hamVlYi5rQGNta2wuYWMudGgiLCJuYW1lIjoiTmFqZWViIFVsbGFoIEtoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZG90Z2haYTY4RHFMdEpJS1NZTVh3Nmt4NGVtMmVGR3pMVTBzaFVHdzdDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik5hamVlYiBVbGxhaCIsImZhbWlseV9uYW1lIjoiS2hhbiIsImxvY2FsZSI6ImVuIiwiZXhwIjoxNjkyMDQ5NTkzLCJqdGkiOiIxMTQ0OTc2NDMxMjY5NzQ5NDIwMjMifQ.0o5AaO6J9AkcV1S8Mp-aQ0j2TTfce2JCDYZx_D7VQkc'
  }
};
axios.request(config)
.then((response) => {
  console.log(response.data);
  res.send(response.data);
})
.catch((error) => {
  console.log(error);
});
 })
app.get('/calender/events/:startDate/:endDate', (req, res) => {

    const { startDate, endDate } = req.params;

 let config = {
  method: 'get',
    url: BASE_URL + "/calendar/events?start_date="+ startDate +"&end_date=" + endDate,
  headers: { 
    'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hamVlYi5rQGNta2wuYWMudGgiLCJuYW1lIjoiTmFqZWViIFVsbGFoIEtoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZG90Z2haYTY4RHFMdEpJS1NZTVh3Nmt4NGVtMmVGR3pMVTBzaFVHdzdDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik5hamVlYiBVbGxhaCIsImZhbWlseV9uYW1lIjoiS2hhbiIsImxvY2FsZSI6ImVuIiwiZXhwIjoxNjkyMDQ5NTkzLCJqdGkiOiIxMTQ0OTc2NDMxMjY5NzQ5NDIwMjMifQ.0o5AaO6J9AkcV1S8Mp-aQ0j2TTfce2JCDYZx_D7VQkc'
  }
};

axios.request(config)
.then((response) => {
  console.log(response.data);
  res.send(response.data);
})
.catch((error) => {
  console.log(error);
});
})
app.get('/eventTypes', (req, res) => {

    let config = {
  method: 'get',
    url: BASE_URL + "/calendar/event_types",
  headers: { 
    'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hamVlYi5rQGNta2wuYWMudGgiLCJuYW1lIjoiTmFqZWViIFVsbGFoIEtoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZG90Z2haYTY4RHFMdEpJS1NZTVh3Nmt4NGVtMmVGR3pMVTBzaFVHdzdDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik5hamVlYiBVbGxhaCIsImZhbWlseV9uYW1lIjoiS2hhbiIsImxvY2FsZSI6ImVuIiwiZXhwIjoxNjkyMDQ5NTkzLCJqdGkiOiIxMTQ0OTc2NDMxMjY5NzQ5NDIwMjMifQ.0o5AaO6J9AkcV1S8Mp-aQ0j2TTfce2JCDYZx_D7VQkc'
  }
};
axios.request(config)
.then((response) => {
  console.log(response.data);
  res.send(response.data);
})
.catch((error) => {
  console.log(error);
});
})
app.get('/getInstructorId/:instructorId', (req, res) => {

    const {instructorId} = req.params
    let config = {
  method: 'get',
    url: BASE_URL + "/instructor/identity?instructor_id=" + instructorId,
  headers: { 
    'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hamVlYi5rQGNta2wuYWMudGgiLCJuYW1lIjoiTmFqZWViIFVsbGFoIEtoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZG90Z2haYTY4RHFMdEpJS1NZTVh3Nmt4NGVtMmVGR3pMVTBzaFVHdzdDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik5hamVlYiBVbGxhaCIsImZhbWlseV9uYW1lIjoiS2hhbiIsImxvY2FsZSI6ImVuIiwiZXhwIjoxNjkyMDQ5NTkzLCJqdGkiOiIxMTQ0OTc2NDMxMjY5NzQ5NDIwMjMifQ.0o5AaO6J9AkcV1S8Mp-aQ0j2TTfce2JCDYZx_D7VQkc'
  }
};
axios.request(config)
.then((response) => {
  console.log(response.data);
  res.send(response.data);
})
.catch((error) => {
  console.log(error);
});
})
app.delete('/postDelete/:eventId', (req, res) => {

    const {eventId} = req.params
    let config = {
  method: 'delete',
    url: BASE_URL + "/calendar/delete?event_id=" + eventId,
  headers: { 
    'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hamVlYi5rQGNta2wuYWMudGgiLCJuYW1lIjoiTmFqZWViIFVsbGFoIEtoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZG90Z2haYTY4RHFMdEpJS1NZTVh3Nmt4NGVtMmVGR3pMVTBzaFVHdzdDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik5hamVlYiBVbGxhaCIsImZhbWlseV9uYW1lIjoiS2hhbiIsImxvY2FsZSI6ImVuIiwiZXhwIjoxNjkyMDQ5NTkzLCJqdGkiOiIxMTQ0OTc2NDMxMjY5NzQ5NDIwMjMifQ.0o5AaO6J9AkcV1S8Mp-aQ0j2TTfce2JCDYZx_D7VQkc'
  }
};
axios.request(config)
.then((response) => {
  console.log(response.data);
  res.send(response.data);
})
.catch((error) => {
  console.log(error);
});
})

app.post('/calender/post', bodyParser.json(), (req, res) => {
    
      
      let config = {
        method: 'post',
        
        url: BASE_URL + '/calendar/create',
        headers: { 
          'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hamVlYi5rQGNta2wuYWMudGgiLCJuYW1lIjoiTmFqZWViIFVsbGFoIEtoYW4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZG90Z2haYTY4RHFMdEpJS1NZTVh3Nmt4NGVtMmVGR3pMVTBzaFVHdzdDPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ik5hamVlYiBVbGxhaCIsImZhbWlseV9uYW1lIjoiS2hhbiIsImxvY2FsZSI6ImVuIiwiZXhwIjoxNjkyMDQ5NTkzLCJqdGkiOiIxMTQ0OTc2NDMxMjY5NzQ5NDIwMjMifQ.0o5AaO6J9AkcV1S8Mp-aQ0j2TTfce2JCDYZx_D7VQkc', 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(req.body),
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        res.send(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("unique", req.body)
   
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})