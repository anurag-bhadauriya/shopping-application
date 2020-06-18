export class pDetails {
        "id":String;
        "pName":String;
        "pDescription":String;
        "pRating":String;
        "pCategory": String;
        "price": Number;
        "color": String;
        "image": String;
        "specification":String;
        "dateFirstAvailable":Date;
        "dateLastAvailable":Date;
        "pSeller": {
                "s_Id":String;
                "pDiscount":Number;
                "pQuantity":Number;
                "pShippingCharges":Number;
              }
        
}