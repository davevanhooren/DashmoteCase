export default {
    created() {
        addEventListener('resize', () => {
            this.mobile = innerWidth <= 700
            console.log(this.mobile);
          })
        console.log('Component has been created!');
        this.dataSourceFiltered = this.dataSource;
        this.count = 7;
      },
    name: 'DashboardOverview',
    props: {},
    components: {
    },
    data() {
      return {
        mobile:window.innerWidth <= 700,
        searchName: '',
        formLayout: 'vertical',
        form: this.$form.createForm(this, { name: 'coordinated' }),
        visible: false,
        dataSource: [
          {
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
        columnsMobile: [
            {
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

            innerColumns: [
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

        columns: [
        {
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
        console.log("Deleted "  + key)
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
      search (dataSource, argumentObj) {
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
    handleSearch () {
        console.log("hello");
        console.log(this.dataSource);
        console.log("ArrayTest");
        //console.log(this.dataSource.keys());
        console.log(new Array(this.dataSource.find(o => o.key === '1')));
        
        this.data1 = this.dataSourceFiltered;
        this.data1 = this.search(this.data1, {project: this.searchName});
        this.dataSource = this.data1;
    },

      // Drawer form methods
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            this.visible = false;
            console.log('Received values of form: ', values);
            const { dataSource } = this;
            console.log(this.count)
            const newData = {
                key: this.count,
                category: values["category"],
                project: values["project"],
                users: values["users"],
                dashboards: values["dashboards"],
        };
        this.dataSource = [...dataSource, newData];
        this.count = this.count+1;
        this.dataSourceFiltered = this.dataSource;
          }
        });
      },
    },
  };
  