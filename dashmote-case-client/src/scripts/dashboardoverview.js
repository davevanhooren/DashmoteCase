export default {
    name: 'DashboardOverview',
    props: {},
    components: {
    },
    data() {
      return {
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
        ],
        count: 4,
        columns: [
        {
            title: 'Category',
            dataIndex: 'category',
            
        },

          {
            title: 'Project',
            dataIndex: 'project',
            key: 'project',
            scopedSlots: {
            filterDropdown: 'filterDropdown',
            filterIcon: 'filterIcon',
          },
          onFilter: (value, record) =>
            record.project
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          },
          },
          {
            title: 'Users',
            dataIndex: 'users',
            
          },
          {
            title: 'Dashboards',
            dataIndex: 'dashboards',
            
          },
          {
            title: 'operation',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
            
          },
        ],
      };
    },
    
    methods: {
    // Item delete method
      onDelete(key) {
        const dataSource = [...this.dataSource];
        this.dataSource = dataSource.filter(item => item.key !== key);
      },
      handleAdd() {
        const { count, dataSource } = this;
        const newData = {
          key: count,
          category: `A`,
          project: `Project X${count}`,
          users: `1 user`,
          dashboards: `${count} dashboards`,
        };
        this.dataSource = [...dataSource, newData];
        this.count = count + 1;
      },

      // Table search methods
      handleSearch(selectedKeys, confirm, dataIndex) {
        confirm();
        this.searchText = selectedKeys[0];
        this.searchedColumn = dataIndex;
      },
  
      handleReset(clearFilters) {
        clearFilters();
        this.searchText = '';
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

      // Drawer form methods
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            const { count, dataSource } = this;
            const newData = {
                key: count,
                category: values["category"],
                project: values["project"],
                users: values["users"],
                dashboards: values["dashboards"],
        };
        this.dataSource = [...dataSource, newData];
        this.count = count + 1;
          }
        });
      },
    },
  };