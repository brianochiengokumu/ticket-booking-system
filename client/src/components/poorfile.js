// import React from "react";
import Admin from "react-crud-admin";
import "react-crud-admin/css"; //optional css import
 
export default class Poorfile extends Admin {
  constructor() {
    super();
    this.name = "Events"; // name of the objects
    this.name_plural = "Couuuntacts"; // name of the objects in plural
    this.list_display_links = ["name"]; // which property of the object is clickable
    this.list_display = ["name", "number", "address.street"]; // a list of properties of the object to displayed on the list display page
  }
  get_queryset(page_number, list_per_page, queryset) {
    // the actual array containing objects to be displayed
    return [
      {
        id: 1,
        name: "Machalos",
      },
      {
        id: 2,
        name: "Nairobi",
      },
      {
        id: 3,
        name: "Mombasa"
      }
  
        
    ];
           
  }
}