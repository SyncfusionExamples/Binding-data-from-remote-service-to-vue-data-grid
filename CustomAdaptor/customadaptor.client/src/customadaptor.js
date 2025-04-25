import { ODataV4Adaptor } from '@syncfusion/ej2-data';
import { setValue } from '@syncfusion/ej2-base';
export default class CustomAdaptor extends ODataV4Adaptor {
    processQuery(dm, query) {
        query.addParams('Syncfusion in Vue Grid', 'true'); // Add the additional parameter
        return super.processQuery.apply(this, arguments);
    }
     beforeSend(dm, request, settings) {
       request.headers.set('Authorization', `true`);
       super.beforeSend(dm, request, settings);
     }
    processResponse() {
        let i = 0;
        const original = super.processResponse.apply(this, arguments);
        /* Adding serial number */
        if (original.result) {
            original.result.forEach((item) => setValue('SNo', ++i, item));
        }
        return original;
    }
}
