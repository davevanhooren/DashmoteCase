<template>
  <div class="overview">
    <div>
    
    <!-- Add new project button -->
    <a-button class="add-button" type="primary" icon="plus-circle" @click="showDrawer">Add new Project</a-button>
    
    <!-- Search input field -->
    <a-input-search class="search-input" placeholder="search project" enter-button
      v-model="searchName" 
      icon="search" 
      @change="handleSearch"/>

    <!-- Add new project drawer -->
    <a-drawer class="addProjectDrawer"
      width=320px
      title="Add new project"
      placement="right"
      :closable="true"
      :maskClosable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose">
    
    <!-- Add new project drawer form -->
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
        placeholder="">
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

    <!-- Table definition -->
    <a-table v-if="!this.mobile" class="dashboardstable" :data-source="dataSource" :columns="columns">
    
    <!-- Item Delete customrender -->
      <template class="deletePart" slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;" style="color:red">Delete</a>
        </a-popconfirm>
      </template>

      <!-- Item Category level visual customrender -->
      <template slot="categoryoperation" slot-scope="text, record">
        <img v-if="record.category=='A'" alt="A" src="../assets/images/categoryicon/A.svg" height=60px>
        <img v-else-if="record.category=='B'" alt="B" src="../assets/images/categoryicon/B.svg" height=60px>
        <img v-else-if="record.category=='C'" alt="C" src="../assets/images/categoryicon/C.svg" height=60px>
        <img v-else-if="record.category=='D'" alt="D" src="../assets/images/categoryicon/D.svg" height=60px>
        <img v-else-if="record.category=='E'" alt="E" src="../assets/images/categoryicon/E.svg" height=60px>
        <img v-else-if="record.category=='F'" alt="F" src="../assets/images/categoryicon/F.svg" height=60px>
      </template>

      <!-- Amount of Dashboards customrender -->
      <template slot="dashboardoperation" slot-scope="text, record">
        <a-button disabled type="primary" v-text="record.dashboards" style="color:green"></a-button>
      </template>
    </a-table>

    <!-- Mobile Table definition -->
    <a-table v-if="this.mobile" class="dashboardstable" :data-source="dataSource" :columns="columnsMobile">

      <!-- Item Category level visual customrender -->
      <template slot="categoryoperation" slot-scope="text, record">
        <img v-if="record.category=='A'" alt="A" src="../assets/images/categoryicon/A.svg" height=60px>
        <img v-else-if="record.category=='B'" alt="B" src="../assets/images/categoryicon/B.svg" height=60px>
        <img v-else-if="record.category=='C'" alt="C" src="../assets/images/categoryicon/C.svg" height=60px>
        <img v-else-if="record.category=='D'" alt="D" src="../assets/images/categoryicon/D.svg" height=60px>
        <img v-else-if="record.category=='E'" alt="E" src="../assets/images/categoryicon/E.svg" height=60px>
        <img v-else-if="record.category=='F'" alt="F" src="../assets/images/categoryicon/F.svg" height=60px>
      </template>

    <a-table 
      slot="expandedRowRender"
      slot-scope="record"
      :columns="innerColumns" 
      :data-source="new Array(dataSource.find(o => o.key === record.key))"
      :pagination="false"
    >
      <!-- Amount of Dashboards customrender -->
      <template slot="dashboardoperation" slot-scope="text, record">
        <a-button disabled type="primary" v-text="record.dashboards" style="color:green"></a-button>
      </template>

      <!-- Item Delete customrender -->
      <template class="deletePart" slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)">
          <a href="javascript:;" style="color:red">Delete</a>
        </a-popconfirm>
      </template>
    
    </a-table></a-table>
  </div>
  </div>
</template>

<!-- Dashboard overview JS Script file -->
<script src=".././scripts/dashboardoverview.js"></script>

<!-- Dashboard overview CSS Style file -->
<style src=".././assets/styles/dashboardoverview.css" scoped></style>
