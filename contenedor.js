async getAll(){
    try{
        let data = await fs.promises.readFile(this.file_name, 'utf-8')  // Le indicamos que lo que entre en "data" sea async y que lo que lea en el archivo lo pase a un lenguaje que maneje la compu.
        return await JSON.parse (data)  // Aca tambien es async y espera a que sea compilada la "data" para parsearlo y poder leerlo.
    }
    catch(error){0
        console.log(error);  // Si hay errores son atrapados y consologeado aca.
    }
}

async save(newProduct){  // Le damos un "newProduct" para guardar.
    try{                                                                            
        let productos =  await this.getAll()  // Definimos "productos" y le decimos que sea async esperando el getAll.                                     
        if (productos.length==0){  // Si el largo del array "productos" es 0.
            newProduct.id = 0      // Le damos el id 0.
            Contenedor.id = 1      // Y lo pasamos a 1, osea de 0 pasa a 1 y se va para el final.
        }
        if (productos.length){                 // Si el largo del array productos. 
            let copia =productos.map(e=>e.id)  // No es 0 y ya hay dos elementos con el mismo id se crea una copia del producto con mismo id.
            Contenedor.id = copia.pop()        // Se saca del array el producto con mismo id.
            newProduct.id = ++Contenedor.id;   // Para luego sumarle +1 al original.
        }
        productos.push (newProduct)            // Y se vuelve a insertar el nuevo producto
        await fs.promises.writeFile(this.file_name, JSON.stringify(productos))  // Se espera a que este toda la data junto a productos. 
        console.log("Guardado con exito!!");  // Y se consologuea un cartel de exito.
        return obj.id
    }
    catch(error){
        console.log(error);                 // Si hay errores son atrapados aqui.
    }
}


async deleteAll(){  // Creamos deleteAll.
    try{
        await fs.promises.writeFile(this.file_name, JSON.stringify([]))  // Y para borrar todo simplemente esperamos a toda la data con los productos y cuando la vamos a guardar le decimos que nos guarde solo un array vacio: "[]".
    }
    catch(error){
        console.log(error);                 // Si hay errores son atrapados aqui.
    }
}