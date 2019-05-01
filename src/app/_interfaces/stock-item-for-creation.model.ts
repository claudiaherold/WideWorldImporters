export interface StockItemForCreation {
    StockItemName: string ;
    supplierID: number | null;
    colorID: number | null;
    unitPackageID: number | null;
    outerPackageID: number | null;
    brand: string;
    size: string;
    leadTimeDays: number | null;
    quantityPerOuter: number | null;
    isChillerStock: boolean | null;
    barcode: string;
    taxRate: number | null;
    unitPrice: number | null;
    recommendedRetailPrice: number | null;
    typicalWeightPerUnit: number | null;
    marketingComments: string;
    internalComments: string;
    customFields: string;
    tags: string;
    searchDetails: string;
    lastEditedBy: number | null;
    dateOfCreation: any;
    validTo: any;
}

