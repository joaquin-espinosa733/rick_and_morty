const axios = require('axios/dist/node/axios.cjs');
const { response } = require('express');


const URL = "https://rickandmortyapi.com/api/character/"




const getCharById = (res,req)=>{
    const {id} = req.params
    axios(`${URL}/${id}`)
    .then(response=>{ response.data })
    .then( data => {
        const{ id, status, name, species, origin, image, gender}= data
        if(data){
            return res.status(200).json({data})
        }
        return res.status(404).send("Not Fount")
}).catch(err => res.status(500).send(err.message))
}

module.exports={
getCharById
}