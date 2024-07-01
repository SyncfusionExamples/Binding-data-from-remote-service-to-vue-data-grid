<template>
	<ejs-grid :dataSource='data' :toolbar="toolbar" :editSettings="editSettings" :allowFiltering="true" allowSorting="true" allowPaging="true">
		<e-columns>
			<e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey="true"></e-column>
			<e-column field='CustomerID' headerText='Customer ID' width='160'></e-column>
			<e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
			<e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
		</e-columns>
	</ejs-grid>
</template>

<script>
	import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit, Sort, Page, Filter } from '@syncfusion/ej2-vue-grids';
	import { DataManager, WebMethodAdaptor } from '@syncfusion/ej2-data';
	export default {
		name: "App",
		components: {
			'ejs-grid': GridComponent,
			'e-columns': ColumnsDirective,
			'e-column': ColumnDirective
		},
		data() {
			return {
				data: new DataManager({
					url: 'https://localhost:7117/api/Grid',
					insertUrl: 'https://localhost:7117/api/Grid/Insert',
					updateUrl: 'https://localhost:7117/api/Grid/Update',
					removeUrl: 'https://localhost:7117/api/Grid/Remove',
					adaptor: new WebMethodAdaptor(),
				}),
				toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'Search'],
				editSettings: { allowAdding: true, allowDeleting: true, allowEditing: true },
				allowPaging: true,
				allowFiltering: true,
				allowSorting: true
			};
		},
		provide: {
			grid: [Toolbar, Edit, Sort, Page, Filter]
		}
	};
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
