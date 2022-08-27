const { Router }= require('express')
const fs =require('fs');
const { v4: uuid } = require('uuid');



const router=Router();

let ProdFile=fs.readFileSync('src/Productos.json')

let Productos=JSON.parse(ProdFile);


router.get('/',(req,res)=>{
    res.render('index',{data:Productos});
})

router.post('/',(req,res)=>{
    const { NameProudct, Precio, Imagen, Descripcion}=  req.body;
    
    
    if(NameProudct !="" || Precio !="" || Imagen !="" || Descripcion != ""){
        const Contenedor={
            id:uuid(),
            NameProudct:NameProudct,
            Precio:Precio,
            Imagen:Imagen,
            Descripcion:Descripcion
        }
        Productos.push(Contenedor);
    
        const Guardar=JSON.stringify(Productos);
    
        fs.writeFileSync("src/Productos.json",Guardar,'utf-8');
        
    }

    res.redirect('/');
    //res.send(Productos);
    //res.send("Estas en post");
    
})

router.get('/Add',(req, res)=>{
    res.render('add');
})

router.get('/edit/:id',(req, res)=>{
    res.render("edit");
})
router.post('/edit',()=>{
    
})

router.get('/Delete/:id',(req,res)=>{
    Productos= Productos.filter(Games=>Games.id !=req.params.id);
    const listProduct=JSON.stringify(Productos);
    fs.writeFileSync('src/Productos.json',listProduct,'utf-8');
    res.redirect("/");

});

module.exports=router;