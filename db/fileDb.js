const fs = require('fs')

const fileName = './db.json'


let data = [];

module.exports ={
    init() {

        try {
            const fileContent = fs.readFileSync(fileName)
            data = JSON.parse(fileContent)

        } catch (error) {
            data = [];
            
        }
    },
    
    getProducts() {
        return data;
    },
    addProduct(prod){
        data.push(prod)
        this.save()
    },
    getID (singleId){
        return result = data.filter(data => data.id === singleId)
    },

    save(){
        fs.writeFileSync(fileName, JSON.stringify(data))
    },


}