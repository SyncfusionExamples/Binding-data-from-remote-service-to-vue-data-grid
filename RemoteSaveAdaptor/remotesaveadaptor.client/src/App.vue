<template>
	<div id="app">
		<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings" :allowFiltering="true" allowSorting="true" allowPaging="true">
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
	import { provide, onMounted, ref, computed } from "vue";
	import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Edit, Sort, Filter, Toolbar } from "@syncfusion/ej2-vue-grids";
	import { DataManager, RemoteSaveAdaptor } from "@syncfusion/ej2-data";

	var data = ref(null);

	const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
	const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Search'];

	const fetchData = () => {
		fetch("https://localhost:7205/api/orders") // Replace with your API endpoint
			.then(response => response.json())
			.then(value => {
				data.value = new DataManager({
					json: value,
					insertUrl: 'https://localhost:7205/api/Orders/Insert',
					updateUrl: 'https://localhost:7205/api/Orders/Update',
					removeUrl: 'https://localhost:7205/api/Orders/Remove',
					adaptor: new RemoteSaveAdaptor(),
				});
			})
			.catch(error => {
				console.error(error);
			});
	}

	onMounted(fetchData);

	provide('grid', [Sort, Edit, Filter, Page, Toolbar]);

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
