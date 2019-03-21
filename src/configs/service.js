import moment from 'moment';

const defaultPagination = {showSizeChanger:false, showQuickJumper: false, pageSizeOptions: ['10', '50', '100', '400']};

const service = {
    sumListValue : (list, key)  => {
        if(!list.length){
            return 0
        }
        return list.reduce((result, item) => {
            result += item[key]
            return result;
        }, 0)
    },

    makeList: (item) => {
        const pagination = {...defaultPagination};
        if(!(item && item.results && item.results.length > 0)) {
            pagination.total = 0;
            return {pagination, list:[], total: 0};
        }
        pagination.size = service.isMobile() ? 'small' : "";
        pagination.total = item.count;
        pagination.pageSize = item.pageSize;
        return { pagination,  total: item.count, list: item.results};
    },

    amount : (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),

    getPrefix : (sorted) => {
        switch (sorted) {
            case 'day':
                return { timeType : 'days', gap : 1, format : 'YYYY-MM-DD', translate : 'MM-DD'};
            case 'month':
                return { timeType : 'months', gap : 1, format : 'YYYY-MM', translate : 'MM'};
            default:
                return { timeType : 'minutes', gap : 5, format : 'YYYY-MM-DD HH:mm', translate : 'HH:mm'};
        }
    },

    mappingKey : (type, keyName = null) => {

        let key = keyName;
        const isArray = Array.isArray(key);

        if(!key){
            return ''
        }

        if(type !== 'date'){
            if(key === 'KEPCO_input'){
                key = 'KEPCO'
            }
            if(isArray && key.some(item => item === 'KEPCO_input')){
                key = key.map(item => {
                    if(item === 'KEPCO_input'){
                        return item = 'KEPCO'
                    }
                    return item;
                })
            }
        }

        switch (type) {
            case 'date':
                return isArray ? key.map(item => item) : key
            case 'day':
                return isArray ? key.map((item, idx) => `${item}_dailyTotal`) : `${key}_dailyTotal`;
            default:
                return isArray ? key.map((item, idx) => `${item}_monthlyTotal`) : `${key}_monthlyTotal`;
        }
    },

    makeLabels : (obj) => {
        const { startTime, endTime, sorted } = obj;
        const prefixs = service.getPrefix(sorted);
        const startT = prefixs.timeType === 'minutes' ? startTime.subtract((startTime.minutes() % prefixs.gap), prefixs.timeType).local()  : startTime.local();
        const endT = endTime.local();

        const matchEndTime = moment().isBefore(endT, prefixs.timeType) ? moment() : endT;
        const diffs = (matchEndTime.diff(startT, prefixs.timeType) / prefixs.gap).toFixed(0);
        const length = prefixs.timeType === 'minutes' ? Number(diffs) : Number(diffs) + 1;

        return new Array(length).fill('').map((item, idx) => {
            return moment(startT, prefixs.format).add(prefixs.gap * (idx), prefixs.timeType).format(prefixs.format)
        })
    },

    sortList : (list, labels, chartObj, set = null) => {
        const prefixs = service.getPrefix(chartObj.sorted);

        return labels.map((label) => {
            if(set){
                return list.filter(item => moment(moment(label).format(prefixs.format)).diff(moment(item.timestamp).format(prefixs.format)) === 0)
                    .reduce((result, item) => {
                        const setKey = service.mappingKey(chartObj.sorted, set.key)
                        result += item[setKey]
                        return result;
                    }, 0)
            }
            return {
                [moment(label, prefixs.format).format(prefixs.translate)] : list.filter(item => moment(moment(label).format(prefixs.format)).diff(moment(item.timestamp).format(prefixs.format)) === 0)
            }
        });
    },

    makeChart : (charData) => {
        const { dataList = [], chartObj, dataSets = []} = charData;
        const labels = service.makeLabels(chartObj);
        const prefixs = service.getPrefix(chartObj.sorted);

        return {
            labels : labels.map(item => moment(item, prefixs.format).format(prefixs.translate)),
            datasets : dataSets.map((set) => {
                const type = set.type || null;
                return {
                    ...set,
                    type,
                    data : service.sortList(dataList, labels, chartObj, set)
                }
            })
        }
    },
}

export default service
