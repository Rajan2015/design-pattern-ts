class DocumentFactory {
    
    getDocumentFactory = (type: string, data: any) => {
        switch (type) {
            case 'pdf': {
                return new PDFFactory();
            }
            case 'word': {
                return new WordFactory();
            }
            default: return null;
        }
    }
}




