class PDFFactory implements IDocumentFactory{
    createDocument =  (type: string, data: any) =>{
        console.log('PDF document created');
    };

}