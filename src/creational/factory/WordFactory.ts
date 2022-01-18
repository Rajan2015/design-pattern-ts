class WordFactory implements IDocumentFactory{
    createDocument =  (type: string, data: any) =>{
        console.log('Word document created');
    };

}