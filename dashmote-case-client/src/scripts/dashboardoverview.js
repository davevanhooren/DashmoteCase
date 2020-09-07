export default {
    created() {
        //Check if the client is using a mobile device or not, based on the screen width.
        addEventListener('resize', () => {
                this.mobile = innerWidth <= 700
            })
            //Copy of the dataSource to prevent deleting more than required when have a search filter.
        this.dataSourceFiltered = this.dataSource;
        this.count = 7;
    },
    name: 'DashboardOverview',
    props: {},
    components: {},
    data() {
        return {
            mobile: window.innerWidth <= 700,
            searchName: '',
            formLayout: 'vertical',
            form: this.$form.createForm(this, { name: 'coordinated' }),
            visible: false,
            dataSource: [{
                    key: '0',
                    project: 'Project A',
                    users: '4 users',
                    dashboards: '3 dashboards',
                    category: 'D',
                },
                {
                    key: '1',
                    project: 'Project B',
                    users: '2 users',
                    dashboards: '4 dashboards',
                    category: 'C',
                },
                {
                    key: '2',
                    project: 'Project C',
                    users: '1 user',
                    dashboards: '2 dashboards',
                    category: 'F',
                },
                {
                    key: '3',
                    project: 'Project D',
                    users: '3 users',
                    dashboards: '2 dashboards',
                    category: 'D',
                },
                // Extra rows with categories, not from the mini-json
                {
                    key: '4',
                    project: 'Coca-Cola',
                    users: '12 users',
                    dashboards: '6 dashboards',
                    category: 'A',
                },
                {
                    key: '5',
                    project: 'Heineken',
                    users: '23 users',
                    dashboards: '5 dashboards',
                    category: 'B',
                },
                {
                    key: '6',
                    project: 'Unilever',
                    users: '17 users',
                    dashboards: '8 dashboards',
                    category: 'E',
                },
            ],
            // The columns for the mobile interface
            columnsMobile: [{
                    title: 'Category',
                    dataIndex: 'category',
                    scopedSlots: { customRender: 'categoryoperation' },
                },
                {
                    title: 'Project',
                    dataIndex: 'project',
                    key: 'project',
                },
            ],
            // The inner columns for the mobile interface
            innerColumns: [{
                    title: 'Users',
                    dataIndex: 'users',
                },
                {
                    title: 'Dashboards',
                    dataIndex: 'dashboards',
                    scopedSlots: { customRender: 'dashboardoperation' },
                },
                {
                    title: 'Operation',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                },
            ],
            // The columns for the desktop interface
            columns: [{
                    title: 'Category',
                    dataIndex: 'category',
                    scopedSlots: { customRender: 'categoryoperation' },
                },
                {
                    title: 'Project',
                    dataIndex: 'project',
                    key: 'project',
                },
                {
                    title: 'Users',
                    dataIndex: 'users',
                },
                {
                    title: 'Dashboards',
                    dataIndex: 'dashboards',
                    scopedSlots: { customRender: 'dashboardoperation' },
                },
                {
                    title: 'Operation',
                    dataIndex: 'operation',
                    scopedSlots: { customRender: 'operation' },
                },
            ],
        };
    },

    methods: {

        // Item delete method
        onDelete(key) {
            const dataSource = [...this.dataSourceFiltered];
            this.dataSourceFiltered = dataSource.filter(item => item.key !== key);
            this.dataSource = this.dataSourceFiltered;
            this.handleSearch();
        },

        // Drawer show methods
        afterVisibleChange(val) {
            console.log('visible', val);
        },
        showDrawer() {
            this.visible = true;

        },
        onClose() {
            this.visible = false;
        },

        //search function
        search(dataSource, argumentObj) {
            let result = dataSource;
            let dataClone = dataSource;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    result = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = result;
                }
            }
            return result;
        },
        handleSearch() {
            this.searchData = this.dataSourceFiltered;
            this.searchData = this.search(this.searchData, { project: this.searchName });
            this.dataSource = this.searchData;
        },

        // Drawer form methods
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    this.visible = false;
                    const { dataSource } = this;
                    const newData = {
                        key: this.count,
                        category: values["category"],
                        project: values["project"],
                        users: values["users"],
                        dashboards: values["dashboards"],
                    };
                    this.dataSource = [...dataSource, newData];
                    this.count = this.count + 1;
                    this.dataSourceFiltered = this.dataSource;
                }
            });
        },
    },
};