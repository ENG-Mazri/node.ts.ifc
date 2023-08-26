import * as WebIFC from "web-ifc";
import * as fs from 'fs'
import * as path from "path";

const ifcApi = new WebIFC.IfcAPI(); 


fs.readFile( path.join( __dirname, '../assets/minimalWall.ifc'), async (err, data) => {
    if(err) throw err;
    let rawFileData = new Uint8Array(data);

    await ifcApi.Init();
    ifcApi.SetWasmPath( path.join( __dirname, "../assets/") ); 

    let modelID = ifcApi.OpenModel(rawFileData);
    console.log( modelID ); 
})