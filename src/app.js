const app=require('./index');

app.listen(app.get('PORT'),()=>{
    console.log("Se esta corriendo en el Puerto "+app.get('PORT'));
});