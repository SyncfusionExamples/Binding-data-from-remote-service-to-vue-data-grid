# WebApiAdaptor in Syncfusion Vue Grid Component

The `WebApiAdaptor` is an extension of the `ODataAdaptor`, designed to interact with Web APIs created with OData endpoints. This adaptor ensures seamless communication between Syncfusion Grid and OData-endpoint based Web APIs, enabling efficient data retrieval and manipulation. For successful integration, the endpoint must be capable of understanding OData-formatted queries sent along with the request.

To enable the OData query option for a Web API, please refer to the corresponding [documentation](https://learn.microsoft.com/en-us/aspnet/web-api/overview/odata-support-in-aspnet-web-api/supporting-odata-query-options), which provides detailed instructions on configuring the endpoint to understand OData-formatted queries.

This section describes a step-by-step process for retrieving data service using `WebApiAdaptor`, then binding it to the Vue Grid component to facilitate data and CRUD operations.

## Getting Started

**1. Clone the Repository:**

Use `git clone` to fetch the repository from GitHub.

```bash
https://github.com/SyncfusionExamples/Binding-data-from-remote-service-to-vue-data-grid.git 
```

**2. Open and Build the Project:**

* Open the project in Visual Studio.
* Build the project to restore dependencies and compile it.
* Run the project

**3. Explore the Code:**

* Navigate to vue client folder(~src/app.vue)
* Debug and interact with the code as needed.

![Adaptors](../assets/images/adaptor-crud-operation.gif)

## Resources

You can also refer the below resources to know more details about Syncfusion Vue Grid components.

* [Demo](https://ej2.syncfusion.com/vue/demos/#/tailwind/grid/over-view)
* [Documentation](https://ej2.syncfusion.com/vue/documentation/grid/getting-started)
* [WebApiAdaptor in Syncfusion Grid](https://ej2.syncfusion.com/vue/documentation/grid/connecting-to-adaptors/web-api-adaptor)