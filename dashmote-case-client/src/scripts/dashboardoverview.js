export default {
    name: 'DashboardOverview',
    props: {},
    components: {
    },
    data() {
      return {
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
    },
  };