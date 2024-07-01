<template>
  <div id="app">
    <ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings" :allowFiltering="true"
      allowSorting="true" allowPaging="true">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Filter, Sort, Toolbar, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, GraphQLAdaptor } from "@syncfusion/ej2-data";

const data = new DataManager({
  url: "http://localhost:4200/",
  adaptor: new GraphQLAdaptor({
    response: {
      result: 'getOrders.result',
      count: 'getOrders.count',
      aggregates: 'getOrder.aggregates'
    },
    query: `query getOrders($datamanager: DataManager) {
        getOrders(datamanager: $datamanager) {
         count,
         result{
          OrderID, CustomerID, ShipCity, ShipCountry}
         }
        }`,
    // mutation for performing CRUD
    getMutation: function (action) {
      if (action === 'insert') {
        return `mutation CreateOrderMutation($value: OrderInput!){
           createOrder(value: $value){
            OrderID, CustomerID, ShipCity, ShipCountry
           }}`;
      }
      if (action === 'update') {
        return `mutation UpdateOrderMutation($key: Int!, $keyColumn: String,$value: OrderInput){
           updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
           }
         }`;
      } else {
        return `mutation RemoveOrderMutation($key: Int!, $keyColumn: String, $value: OrderInput){
           deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
           }
          }`;
      }
    }
  })
});
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search'];
const editSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };

provide('grid', [Page, Edit, Sort, Toolbar, Filter]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>