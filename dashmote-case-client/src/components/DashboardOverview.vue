<template>
  <div class="overview">
    <div>
    <!-- Add button -->  <!--
    <a-button class="add-button" @click="handleAdd">
      Add
    </a-button>  -->
    
    <a-button class="add-button" type="primary" icon="plus-circle" @click="showDrawer">Add new Project</a-button>
    

    <!-- Add new project part -->
    <a-drawer class="addProjectDrawer"
      width=320px
      title="Add new project"
      placement="right"
      :closable="true"
      :maskClosable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
    
    <a-form :form="form" :layout="formLayout" :label-col="{ span: 50 }" :wrapper-col="{ span: 120 }" @submit="handleSubmit">
    <a-form-item label="Project Name">
      <a-input
        v-decorator="['project', { rules: [{ required: true, message: 'Please input the project name!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Amount of Users">
      <a-input
        v-decorator="['users', { rules: [{ required: true, message: 'Please input the amount of users' }] }]"
      />
    </a-form-item>
    <a-form-item label="Amount of Dashboards">
      <a-input
        v-decorator="['dashboards', { rules: [{ required: true, message: 'Please input the amount of dashboards!' }] }]"
      />
    </a-form-item>
    <a-form-item label="Category">
      <a-select
        v-decorator="[
          'category',
          { rules: [{ required: true, message: 'Please select the project category!' }] },
        ]"
        placeholder=""
        
      >
        <a-select-option value="A">
          A
        </a-select-option>
        <a-select-option value="B">
          B
        </a-select-option>
        <a-select-option value="C">
          C
        </a-select-option>
        <a-select-option value="D">
          D
        </a-select-option>
        <a-select-option value="E">
          E
        </a-select-option>
        <a-select-option value="F">
          F
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
    </a-drawer>

    <a-table bordered :data-source="dataSource" :columns="columns">
      
      <!-- Dropdown filter part -->
      <div
      slot="filterDropdown"
      slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
      style="padding: 8px"
    >
      <a-input
        v-ant-ref="c => (searchInput = c)"
        :placeholder="`Search ${column.dataIndex}`"
        :value="selectedKeys[0]"
        style="width: 188px; margin-bottom: 8px; display: block;"
        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
      />
      <a-button
        type="primary"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
        @click="() => handleSearch(selectedKeys, confirm, column.dataIndex)"
      >
        Search
      </a-button>
      <a-button size="small" style="width: 90px" @click="() => handleReset(clearFilters)">
        Reset
      </a-button>
    </div>
    <a-icon
      slot="filterIcon"
      slot-scope="filtered"
      type="search"
      :style="{ color: filtered ? '#108ee9' : undefined }"
    />

    <!-- Item Delete part -->

      <template class="deletePart" slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;" style="color:red">Delete</a>
        </a-popconfirm>
      </template>

      <template slot="categoryoperation" slot-scope="text, record">
        <img v-if="record.category=='A'" alt="A" src="../assets/images/categoryicon/A.svg" height=40px>
        <img v-else-if="record.category=='B'" alt="B" src="../assets/images/categoryicon/B.svg" height=40px>
        <img v-else-if="record.category=='C'" alt="C" src="../assets/images/categoryicon/C.svg" height=40px>
        <img v-else-if="record.category=='D'" alt="D" src="../assets/images/categoryicon/D.svg" height=40px>
        <img v-else-if="record.category=='E'" alt="E" src="../assets/images/categoryicon/E.svg" height=40px>
        <img v-else-if="record.category=='F'" alt="F" src="../assets/images/categoryicon/F.svg" height=40px>
      </template>

    </a-table>
  </div>
  </div>
</template>

<script src=".././scripts/dashboardoverview.js"></script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src=".././assets/styles/dashboardoverview.css" scoped></style>
